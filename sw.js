
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792836334970-st-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-Bhq6NPT6.css|assetsmaplibre-gl-worker-BrB25tGK.mjs";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-DMvCb19U.js","./assets/APEv2Parser-Flf-33K-.js","./assets/AbstractID3Parser-D-BqSOtM.js","./assets/AchievementMedalScene-Dl-8PXJH.js","./assets/AchievementMedalViewer-T1HrMLCJ.js","./assets/AiffParser-BXgxsdU_.js","./assets/ArtistPage-MEP2EwfK.js","./assets/ArtistsPage-DA7xU8of.js","./assets/AsfParser-84yek3Ty.js","./assets/BasicParser-B5Pfkj4x.js","./assets/CafParser-DPkr6c98.js","./assets/DownloadsPage-Dk_Pozsz.js","./assets/DsdiffParser-DLYLhmCf.js","./assets/DsfParser-C2v-plz9.js","./assets/ExplorePage-BRnqk7sM.js","./assets/FitnessPage-B7yQKyP6.js","./assets/FlacParser-CXOoVTsX.js","./assets/HomePage-CHpFw80c.js","./assets/ID3v2Parser-DNmG1JcF.js","./assets/ID3v2Token-DMgtv07p.js","./assets/LibraryContext-BjE3xKjD.js","./assets/LibraryPage-CkFPBEiX.js","./assets/MP4Parser-DIKfgnbi.js","./assets/MatroskaParser-C-4XIGJx.js","./assets/MpegParser-DjIgUSNY.js","./assets/MusepackParser-CKG8LQpm.js","./assets/MusicCard-oELsfDpo.js","./assets/OggParser-DnkXGkTL.js","./assets/ProfileFriends-CuJzSlYS.js","./assets/ProfilePage-C3OAY_Zq.js","./assets/SectionHeading-BZXOrawu.js","./assets/SettingsPage-C8G4GJQq.js","./assets/Util-yF4t1wi-.js","./assets/WavPackParser-XcjXiy6y.js","./assets/WaveParser-D8w3l7zz.js","./assets/clock-3-62dnvppO.js","./assets/collection-BlMrkXdJ.js","./assets/copy-vKbocFc6.js","./assets/core-C_MxkHqE.js","./assets/defineProperty-BbfpZ9Tg.js","./assets/external-link-kXpWyijY.js","./assets/jsx-runtime-BNakU3Ej.js","./assets/loader-circle-B6AkiKpV.js","./assets/localRecommendations-DtNfO7Of.js","./assets/maplibre-gl-Cq9a6oH3.js","./assets/missingAudioNotice-BvRc9uXb.js","./assets/preload-helper-DNNiGwyl.js","./assets/rolldown-runtime-hePW80VL.js","./assets/smartphone-DA31BY_4.js","./assets/type-hqr378jM.js","./assets/users-D6HHgIcs.js","./assets/AchievementMedalViewer-Kp_W0v_n.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-3Q-s-gAr.css","./assets/ProfileFriends-Crp59sEE.css","./assets/SettingsPage-2SW1urCD.css","./assets/album-mountain-cgKxsruB.jpg","./assets/artist-Bw1mw-F0.jpg","./assets/auraFileAnalysis.worker-ES6-6TD8.js","./assets/index-Bhq6NPT6.css","./assets/maplibre-gl-worker-BrB25tGK.mjs","./manifest.webmanifest","./aurivo-favicon.ico","./aurivo-app-icon-180.png","./aurivo-app-icon-192.png","./aurivo-app-icon-512.png","./aurivo-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./profile-avatars/01-lavanda-gato-preto.png","./profile-avatars/02-rosa-gato-branco-sonolento.png","./profile-avatars/03-carmesim-gato-dormindo.png","./profile-avatars/04a-laranja-gato-preto.png","./profile-avatars/04b-azul-gato-branco.png","./profile-avatars/05-silhueta-grande.png","./profile-avatars/06-aura-gato-branco.png","./profile-avatars/07-menta-gato-preto.png","./profile-avatars/08-amarelo-gato-preto.png","./profile-avatars/09-turquesa-gato-branco.png","./profile-avatars/10-coral-gato-branco.png","./profile-avatars/11-indigo-gato-branco.png","./profile-avatars/12-lima-gato-preto.png","./profile-avatars/13-prata-gato-preto.png","./profile-avatars/14-dourado-gato-preto.png","./profile-avatars/15-magenta-gato-branco.png","./profile-avatars/18-vinho-gato-branco.png","./profile-avatars/21-rosa-chiclete-gato-preto-olhando.png","./profile-avatars/24-pessego-gato-branco-olhando-para-cima.png","./profile-avatars/25-grafite-gato-branco.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
