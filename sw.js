
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792489254315-album-mountain-cgKxsruB.jpg|assetsartist-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-CFSZ389p.js|assetsindex-ui2lOcMR.css";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-CPLv3xRt.js","./assets/APEv2Parser-DjpKUWiW.js","./assets/AbstractID3Parser-iYoMpTgg.js","./assets/AiffParser-PCtyopzp.js","./assets/ArtistPage-DccaaSPN.js","./assets/ArtistsPage-DJfKj5we.js","./assets/AsfParser-CwkxyJUS.js","./assets/BasicParser-CV-7NmDa.js","./assets/CafParser-DbM8AOKt.js","./assets/DownloadsPage--Gi-qtgx.js","./assets/DsdiffParser--3QX1e71.js","./assets/DsfParser-C1SXJoD2.js","./assets/ExplorePage-BNivtyhA.js","./assets/FlacParser-Dj8ujLU8.js","./assets/HomePage-5XSYeTnf.js","./assets/ID3v2Parser-DiE1a7w0.js","./assets/ID3v2Token-ik0Oa7Il.js","./assets/LibraryContext-ChkcSJVk.js","./assets/LibraryPage-BKWWSWe0.js","./assets/MP4Parser-BWFEL7fg.js","./assets/MatroskaParser-D7kdPfmQ.js","./assets/MpegParser-BuTo3Oqa.js","./assets/MusepackParser-D7e7D-5u.js","./assets/MusicCard-Ne2PxMm5.js","./assets/OggParser-BJCoswk4.js","./assets/PlaybackContext-Cnp7brad.js","./assets/ProfilePage-DEKkpBAQ.js","./assets/SectionHeading-DwpmZydF.js","./assets/SettingsPage-D87I-hU1.js","./assets/Util-SmnTC8sa.js","./assets/WavPackParser-BMYTwfOd.js","./assets/WaveParser-Bz4ShsuO.js","./assets/collection-BlMrkXdJ.js","./assets/copy-Djikwgcs.js","./assets/core-C9HMcbYZ.js","./assets/localRecommendations-DtNfO7Of.js","./assets/missingAudioNotice-BvRc9uXb.js","./assets/pencil-CtBtirYC.js","./assets/preload-helper-CRzLMJPS.js","./assets/rolldown-runtime-hePW80VL.js","./assets/type-hqr378jM.js","./assets/ExplorePage-JS2KS5YP.css","./assets/album-mountain-cgKxsruB.jpg","./assets/artist-Bw1mw-F0.jpg","./assets/auraFileAnalysis.worker-CFSZ389p.js","./assets/index-ui2lOcMR.css","./manifest.webmanifest","./aurivo-favicon.ico","./aurivo-app-icon-180.png","./aurivo-app-icon-192.png","./aurivo-app-icon-512.png","./aurivo-mascot.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => {
    const versions = keys.filter((key) => key.startsWith(CACHE_PREFIX)).sort((a, b) => Number(b.slice(CACHE_PREFIX.length).split('-')[0]) - Number(a.slice(CACHE_PREFIX.length).split('-')[0]));
    return Promise.all(versions.slice(3).map((key) => caches.delete(key)));
  }).then(() => self.clients.claim()));
});
self.addEventListener('message', (event) => {
  if (['AURIVO_ACTIVATE_UPDATE', 'CYGNUS_ACTIVATE_UPDATE'].includes(event.data)) self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(SCOPE_URL)) return;
  if (request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => (await cache.match(request, { ignoreSearch: true })) || (await cache.match(new URL('./', SCOPE_URL))) || cache.match(new URL('./index.html', SCOPE_URL))).then((cached) => cached || fetch(request)));
    return;
  }
  if (!['script', 'style', 'font', 'image'].includes(request.destination)) return;
  event.respondWith((async () => {
    const cacheNames = await caches.keys();
    const versions = [CACHE_NAME, ...cacheNames.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)];
    for (const name of versions) {
      const cached = await (await caches.open(name)).match(request, { ignoreSearch: true });
      if (cached) return cached;
    }
    const response = await fetch(request);
    if (response.ok) void caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
    return response;
  })());
});
