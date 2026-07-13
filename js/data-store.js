/* =============================================================
   BIO MXL — DATA STORE (backend-backed, replaces localStorage)
   ---------------------------------------------------------------
   Keeps the exact same LS.get / LS.set / LS.s / LS.ss API that
   admin.html and script.js already use everywhere, so NOTHING
   else in those files needs to change.

   How it works:
   1. On page load, ALL content is fetched once from
      GET /api/data and kept in an in-memory cache.
   2. LS.get()/LS.s() read from that cache (still feels
      instant/synchronous to the rest of the code).
   3. LS.set()/LS.ss() update the cache immediately AND fire an
      async POST /api/save to persist the change to the real
      JSON files on the server (with automatic backups).
   4. window.LS_READY is a Promise that resolves once the first
      load has completed — script.js / admin.html await this
      before doing their first render.
   ================================================================ */
(function (global) {
  const API_BASE = '';
  let cache = {};
  let ready = false;
  const pendingWrites = new Set();

  function setStatusIndicator(state, message) {
    // Optional tiny visual cue; safe no-op if the element isn't present.
    const el = document.getElementById('cmsSyncStatus');
    if (!el) return;
    el.textContent = message || '';
    el.dataset.state = state || '';
  }

  async function loadAll() {
    try {
      const res = await fetch(`${API_BASE}/api/data`, { cache: 'no-store' });
      const json = await res.json();
      if (json && json.success) {
        cache = json.data || {};
      } else {
        console.warn('CMS: failed to load data, starting with empty cache.', json);
        cache = {};
      }
    } catch (err) {
      console.error('CMS: could not reach backend, site will use built-in defaults.', err);
      cache = {};
    }
    ready = true;
  }

  const readyPromise = loadAll();

  async function persist(key, value) {
    pendingWrites.add(key);
    setStatusIndicator('saving', 'Saving…');
    try {
      const res = await fetch(`${API_BASE}/api/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value })
      });
      const json = await res.json();
      if (!json.success) {
        throw new Error(json.error || 'Save failed');
      }
      setStatusIndicator('saved', 'Saved');
    } catch (err) {
      console.error('CMS save error for key', key, err);
      setStatusIndicator('error', 'Save failed — check connection');
      if (typeof global.SA === 'function') {
        // Reuse the admin panel's existing alert function if present
        global.SA('Could not save "' + key + '" to the server. ' + err.message, false);
      }
    } finally {
      pendingWrites.delete(key);
    }
  }

  const LS = {
    // reads
    get: (k, d) => (k in cache ? cache[k] : d),
    s:   (k, d = '') => (k in cache && cache[k] != null ? cache[k] : d),

    // writes
    set: (k, v) => { cache[k] = v; persist(k, v); },
    ss:  (k, v) => { cache[k] = v; persist(k, v); },

    // remove (used by Reset All)
    remove: (k) => {
      delete cache[k];
      fetch(`${API_BASE}/api/delete-key`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: k })
      }).catch(err => console.error('CMS delete error', err));
    },

    // batch write (used by import / reset for efficiency)
    setBulk: async (entries) => {
      entries.forEach(({ key, value }) => { cache[key] = value; });
      setStatusIndicator('saving', 'Saving…');
      try {
        const res = await fetch(`${API_BASE}/api/save-bulk`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ entries })
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.error || 'Bulk save failed');
        setStatusIndicator('saved', 'Saved');
        return true;
      } catch (err) {
        console.error('CMS bulk save error', err);
        setStatusIndicator('error', 'Save failed — check connection');
        return false;
      }
    },

    isReady: () => ready,
    hasPendingWrites: () => pendingWrites.size > 0
  };

  // Image upload helper shared by every upload handler in admin.html
  async function uploadImageFile(file) {
    const form = new FormData();
    form.append('image', file);
    const res = await fetch(`${API_BASE}/api/upload-image`, { method: 'POST', body: form });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Upload failed');
    return json.url; // e.g. /assets/images/logo.png
  }

  async function deleteImageFile(url) {
    if (!url) return;
    try {
      await fetch(`${API_BASE}/api/delete-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
    } catch (err) {
      console.error('CMS delete-image error', err);
    }
  }

  async function publishSite() {
    const res = await fetch(`${API_BASE}/api/publish`, { method: 'POST' });
    return res.json();
  }

  function exportSiteUrl() {
    return `${API_BASE}/api/export`;
  }

  global.LS = LS;
  global.LS_READY = readyPromise;
  global.uploadImageFile = uploadImageFile;
  global.deleteImageFile = deleteImageFile;
  global.publishSite = publishSite;
  global.exportSiteUrl = exportSiteUrl;
})(window);
