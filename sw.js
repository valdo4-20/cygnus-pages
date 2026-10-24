
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792819880059-st-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-CrRegpe-.js|assetsindex-CbeBuW9V.css|assetsmaplibre-gl-worker-BrB25tGK.mjs";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-kkq65zGg.js","./assets/APEv2Parser-DjpKUWiW.js","./assets/AbstractID3Parser-DXQKzhkR.js","./assets/AchievementMedalScene-XRjApsI8.js","./assets/AchievementMedalViewer-BGpdZTFw.js","./assets/AiffParser-DptROG0w.js","./assets/ArtistPage-DszHvRPF.js","./assets/ArtistsPage-Bong2rj6.js","./assets/AsfParser-CwkxyJUS.js","./assets/BasicParser-CV-7NmDa.js","./assets/CafParser-DbM8AOKt.js","./assets/DownloadsPage-CRyahvNw.js","./assets/DsdiffParser-DoskHFMH.js","./assets/DsfParser-D8LHqDPf.js","./assets/ExplorePage-JdSoiElb.js","./assets/FitnessPage-BYj08HA5.js","./assets/FlacParser-dtOfHAxO.js","./assets/HomePage-aJcRE_CB.js","./assets/ID3v2Parser-CuFeia_w.js","./assets/ID3v2Token-ik0Oa7Il.js","./assets/LibraryContext-CHXQ4fWo.js","./assets/LibraryPage-BxtG8r0P.js","./assets/MP4Parser-DlIa-jdK.js","./assets/MatroskaParser-D7kdPfmQ.js","./assets/MpegParser-DV_Z0vKO.js","./assets/MusepackParser-B9COH4VF.js","./assets/MusicCard-Dk9Zi4ac.js","./assets/OggParser-CsTUKFhZ.js","./assets/ProfileFriends-CkPRceru.js","./assets/ProfilePage-Dg7VPNSf.js","./assets/SectionHeading-BZXOrawu.js","./assets/SettingsPage-DGdf6AAf.js","./assets/Util-SmnTC8sa.js","./assets/WavPackParser-BMYTwfOd.js","./assets/WaveParser-StH9YX35.js","./assets/collection-BlMrkXdJ.js","./assets/copy-sWc59LfL.js","./assets/core-BW84yPCX.js","./assets/createLucideIcon-DhX7lKvy.js","./assets/external-link-F6nUcVBQ.js","./assets/firebaseClient-DRIbtgaY.js","./assets/jsx-runtime-BNakU3Ej.js","./assets/localRecommendations-DtNfO7Of.js","./assets/maplibre-gl-Cq9a6oH3.js","./assets/missingAudioNotice-BvRc9uXb.js","./assets/preload-helper-DNNiGwyl.js","./assets/rolldown-runtime-hePW80VL.js","./assets/smartphone-BVU7k--V.js","./assets/trophy-DcQehK1i.js","./assets/type-hqr378jM.js","./assets/users-BPVtxyhm.js","./assets/AchievementMedalViewer-BLQGVpg8.css","./assets/ExplorePage-JS2KS5YP.css","./assets/FitnessPage-ChWYQtzv.css","./assets/ProfileFriends-Dm55aqty.css","./assets/SettingsPage-CXr8avkS.css","./assets/album-mountain-cgKxsruB.jpg","./assets/artist-Bw1mw-F0.jpg","./assets/auraFileAnalysis.worker-CrRegpe-.js","./assets/index-CbeBuW9V.css","./assets/maplibre-gl-worker-BrB25tGK.mjs","./manifest.webmanifest","./aurivo-favicon.ico","./aurivo-app-icon-180.png","./aurivo-app-icon-192.png","./aurivo-app-icon-512.png","./aurivo-mascot.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
