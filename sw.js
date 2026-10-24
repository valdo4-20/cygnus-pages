
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792821602142-st-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-W0ImqcEB.css|assetsmaplibre-gl-worker-BrB25tGK.mjs";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-DMk6dw7p.js","./assets/APEv2Parser-eBaBF6IS.js","./assets/AbstractID3Parser-Ckro0UGR.js","./assets/AchievementMedalScene-DEhfEJsO.js","./assets/AchievementMedalViewer-BKUlF0ht.js","./assets/AiffParser-Cfd4GkNR.js","./assets/ArtistPage-COjos2HA.js","./assets/ArtistsPage-CmR9cNJq.js","./assets/AsfParser-B-JvGY2Q.js","./assets/BasicParser-D_ZDWiF9.js","./assets/CafParser-BU19X0Ya.js","./assets/DownloadsPage-nx_B84Vc.js","./assets/DsdiffParser-8Zetag6e.js","./assets/DsfParser--EYJX5YU.js","./assets/ExplorePage-B3TJxxf1.js","./assets/FitnessPage-BetrSV-c.js","./assets/FlacParser-Pr5mM3vW.js","./assets/HomePage-BrNDjebU.js","./assets/ID3v2Parser-Cfxni40E.js","./assets/ID3v2Token-B6jnFS3a.js","./assets/LibraryContext-xF2A8WiU.js","./assets/LibraryPage-JD_29ki8.js","./assets/MP4Parser-BUvJ89p-.js","./assets/MatroskaParser-BkWr7wQT.js","./assets/MpegParser-DpUvTln5.js","./assets/MusepackParser-ehsWro04.js","./assets/MusicCard-B587L3JX.js","./assets/OggParser-C8ymxBOh.js","./assets/ProfileFriends-D22JKXnH.js","./assets/ProfilePage-o13TU963.js","./assets/SectionHeading-7Dx8_wOc.js","./assets/SettingsPage-CBUzvqo5.js","./assets/Util-g9Pf54WH.js","./assets/WavPackParser-BpawxCjx.js","./assets/WaveParser-CbvSonNY.js","./assets/collection-BlMrkXdJ.js","./assets/copy-8y2YIV4Y.js","./assets/core-BTwKkApC.js","./assets/createLucideIcon-BVHtiYZr.js","./assets/external-link-BqTyywXk.js","./assets/firebaseClient-BhYg5GCh.js","./assets/jsx-runtime-D3jfb0Ew.js","./assets/localRecommendations-DtNfO7Of.js","./assets/maplibre-gl-Cq9a6oH3.js","./assets/missingAudioNotice-BvRc9uXb.js","./assets/preload-helper-DNNiGwyl.js","./assets/smartphone-DivW5V1o.js","./assets/trophy-i67eRgwG.js","./assets/type-hqr378jM.js","./assets/users-DRgpRfif.js","./assets/AchievementMedalViewer-Kp_W0v_n.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-3Q-s-gAr.css","./assets/ProfileFriends-CutTHCrq.css","./assets/SettingsPage-2SW1urCD.css","./assets/album-mountain-cgKxsruB.jpg","./assets/artist-Bw1mw-F0.jpg","./assets/auraFileAnalysis.worker-ES6-6TD8.js","./assets/index-W0ImqcEB.css","./assets/maplibre-gl-worker-BrB25tGK.mjs","./manifest.webmanifest","./aurivo-favicon.ico","./aurivo-app-icon-180.png","./aurivo-app-icon-192.png","./aurivo-app-icon-512.png","./aurivo-mascot.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
