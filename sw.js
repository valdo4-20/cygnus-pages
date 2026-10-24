
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792838454847-st-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-BLYzt247.css|assetsmaplibre-gl-worker-BrB25tGK.mjs";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-CEV6a17m.js","./assets/APEv2Parser-Flf-33K-.js","./assets/AbstractID3Parser-D-BqSOtM.js","./assets/AchievementMedalScene-DBJaN2VQ.js","./assets/AchievementMedalViewer-CyAwFLtQ.js","./assets/AiffParser-BXgxsdU_.js","./assets/ArtistPage-BbAuT03a.js","./assets/ArtistsPage-BOVIWZ8y.js","./assets/AsfParser-84yek3Ty.js","./assets/BasicParser-B5Pfkj4x.js","./assets/CafParser-DPkr6c98.js","./assets/DownloadsPage-DyJT4UCm.js","./assets/DsdiffParser-DLYLhmCf.js","./assets/DsfParser-C2v-plz9.js","./assets/ExplorePage-DswqBCjy.js","./assets/FitnessPage-C5gLm1VR.js","./assets/FlacParser-CXOoVTsX.js","./assets/HomePage-B89lihX8.js","./assets/ID3v2Parser-DNmG1JcF.js","./assets/ID3v2Token-DMgtv07p.js","./assets/LibraryContext-DHJod9g_.js","./assets/LibraryPage-DySS4S3C.js","./assets/MP4Parser-DIKfgnbi.js","./assets/MatroskaParser-C-4XIGJx.js","./assets/MpegParser-DjIgUSNY.js","./assets/MusepackParser-CKG8LQpm.js","./assets/MusicCard-DCXXanxy.js","./assets/OggParser-DnkXGkTL.js","./assets/ProfileFriends-Cx1trSM1.js","./assets/ProfilePage-CK0OimBQ.js","./assets/SectionHeading-BZXOrawu.js","./assets/SettingsPage-BoJhgtKJ.js","./assets/Util-yF4t1wi-.js","./assets/WavPackParser-XcjXiy6y.js","./assets/WaveParser-D8w3l7zz.js","./assets/clock-3-D9Q79fvV.js","./assets/collection-BlMrkXdJ.js","./assets/copy-B5wg7kkb.js","./assets/core-C_MxkHqE.js","./assets/defineProperty-BbfpZ9Tg.js","./assets/external-link-Dl1Bhhcc.js","./assets/fitnessDiagnostics-DYh30lZw.js","./assets/jsx-runtime-BNakU3Ej.js","./assets/loader-circle-CmKwuvWx.js","./assets/localRecommendations-DtNfO7Of.js","./assets/maplibre-gl-Cq9a6oH3.js","./assets/missingAudioNotice-BvRc9uXb.js","./assets/preload-helper-DNNiGwyl.js","./assets/rolldown-runtime-hePW80VL.js","./assets/smartphone-hGN87hZ4.js","./assets/type-hqr378jM.js","./assets/users-D7cDSghG.js","./assets/AchievementMedalViewer-DpO3Htvn.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-CyAQjQds.css","./assets/ProfileFriends-B5vzjN8a.css","./assets/SettingsPage-2SW1urCD.css","./assets/album-mountain-cgKxsruB.jpg","./assets/artist-Bw1mw-F0.jpg","./assets/auraFileAnalysis.worker-ES6-6TD8.js","./assets/index-BLYzt247.css","./assets/maplibre-gl-worker-BrB25tGK.mjs","./manifest.webmanifest","./aurivo-favicon.ico","./aurivo-app-icon-180.png","./aurivo-app-icon-192.png","./aurivo-app-icon-512.png","./aurivo-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./profile-avatars/01-lavanda-gato-preto.png","./profile-avatars/02-rosa-gato-branco-sonolento.png","./profile-avatars/03-carmesim-gato-dormindo.png","./profile-avatars/04a-laranja-gato-preto.png","./profile-avatars/04b-azul-gato-branco.png","./profile-avatars/05-silhueta-grande.png","./profile-avatars/06-aura-gato-branco.png","./profile-avatars/07-menta-gato-preto.png","./profile-avatars/08-amarelo-gato-preto.png","./profile-avatars/09-turquesa-gato-branco.png","./profile-avatars/10-coral-gato-branco.png","./profile-avatars/11-indigo-gato-branco.png","./profile-avatars/12-lima-gato-preto.png","./profile-avatars/13-prata-gato-preto.png","./profile-avatars/14-dourado-gato-preto.png","./profile-avatars/15-magenta-gato-branco.png","./profile-avatars/18-vinho-gato-branco.png","./profile-avatars/21-rosa-chiclete-gato-preto-olhando.png","./profile-avatars/24-pessego-gato-branco-olhando-para-cima.png","./profile-avatars/25-grafite-gato-branco.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
