
// Stable internal prefix keeps installed app cache rotation compatible.
const CACHE_PREFIX = 'cygnus-shell-';
const CACHE_NAME = CACHE_PREFIX + "1792822290368-st-Bw1mw-F0.jpg|assetsauraFileAnalysis.worker-ES6-6TD8.js|assetsindex-DhdOgO9s.css|assetsmaplibre-gl-worker-BrB25tGK.mjs";
const SCOPE_URL = self.registration.scope;
const PRECACHE = ["./","./index.html","./assets/index-D_fYx038.js","./assets/APEv2Parser-u5Hde4YR.js","./assets/AbstractID3Parser-C9Wg_95X.js","./assets/AchievementMedalScene-DIrW_Hli.js","./assets/AchievementMedalViewer-CdrtlN-1.js","./assets/AiffParser-B6aR-7EP.js","./assets/ArtistPage-BkzGirqo.js","./assets/ArtistsPage-DZ0C-qbO.js","./assets/AsfParser-20G_r0rD.js","./assets/BasicParser-B5M-XN0B.js","./assets/CafParser-Bl5Iqg7R.js","./assets/DownloadsPage-DLdpMuFX.js","./assets/DsdiffParser-Dqxly64Y.js","./assets/DsfParser-CartezVW.js","./assets/ExplorePage-CiODySCQ.js","./assets/FitnessPage-BI9LZqwf.js","./assets/FlacParser-CClZ1M1h.js","./assets/HomePage-CLaqwWCt.js","./assets/ID3v2Parser-CLklXN6m.js","./assets/ID3v2Token-B49qssDD.js","./assets/LibraryContext-DcptlVaD.js","./assets/LibraryPage-CFSv_-3t.js","./assets/MP4Parser-nGuO8ic_.js","./assets/MatroskaParser-Cmwqg0Xe.js","./assets/MpegParser-Bydo4CWJ.js","./assets/MusepackParser-DQd1zTz6.js","./assets/MusicCard-CbD21v_F.js","./assets/OggParser-gy8nMN12.js","./assets/ProfileFriends-T-HUQs1P.js","./assets/ProfilePage-C8Ftjqt0.js","./assets/SectionHeading-7Dx8_wOc.js","./assets/SettingsPage-1ofN6wuu.js","./assets/Util-BN0y-3fj.js","./assets/WavPackParser-B9imm-xR.js","./assets/WaveParser-wnj-6xZ5.js","./assets/collection-BlMrkXdJ.js","./assets/copy-8y2YIV4Y.js","./assets/core-EK4lGXJK.js","./assets/createLucideIcon-BVHtiYZr.js","./assets/external-link-BqTyywXk.js","./assets/firebaseClient-DRlAp3wH.js","./assets/jsx-runtime-D3jfb0Ew.js","./assets/localRecommendations-DtNfO7Of.js","./assets/maplibre-gl-Cq9a6oH3.js","./assets/missingAudioNotice-BvRc9uXb.js","./assets/preload-helper-DNNiGwyl.js","./assets/smartphone-DivW5V1o.js","./assets/trophy-i67eRgwG.js","./assets/type-hqr378jM.js","./assets/users-DRgpRfif.js","./assets/AchievementMedalViewer-Kp_W0v_n.css","./assets/ExplorePage-BdotWGqg.css","./assets/FitnessPage-3Q-s-gAr.css","./assets/ProfileFriends-CutTHCrq.css","./assets/SettingsPage-2SW1urCD.css","./assets/album-mountain-cgKxsruB.jpg","./assets/artist-Bw1mw-F0.jpg","./assets/auraFileAnalysis.worker-ES6-6TD8.js","./assets/index-DhdOgO9s.css","./assets/maplibre-gl-worker-BrB25tGK.mjs","./manifest.webmanifest","./aurivo-favicon.ico","./aurivo-app-icon-180.png","./aurivo-app-icon-192.png","./aurivo-app-icon-512.png","./aurivo-mascot.png","./desktop-app-icon.png","./tv-app-icon.png","./profile-avatars/01-lavanda-gato-preto.png","./profile-avatars/02-rosa-gato-branco-sonolento.png","./profile-avatars/03-carmesim-gato-dormindo.png","./profile-avatars/04a-laranja-gato-preto.png","./profile-avatars/04b-azul-gato-branco.png","./profile-avatars/05-silhueta-grande.png","./profile-avatars/06-aura-gato-branco.png","./profile-avatars/07-menta-gato-preto.png","./profile-avatars/08-amarelo-gato-preto.png","./profile-avatars/09-turquesa-gato-branco.png","./profile-avatars/10-coral-gato-branco.png","./profile-avatars/11-indigo-gato-branco.png","./profile-avatars/12-lima-gato-preto.png","./profile-avatars/13-prata-gato-preto.png","./profile-avatars/14-dourado-gato-preto.png","./profile-avatars/15-magenta-gato-branco.png","./profile-avatars/18-vinho-gato-branco.png","./profile-avatars/21-rosa-chiclete-gato-preto-olhando.png","./profile-avatars/24-pessego-gato-branco-olhando-para-cima.png","./profile-avatars/25-grafite-gato-branco.png","./fonts/BotanicGrotesque-Regular.otf"].map((path) => new URL(path, SCOPE_URL).href);
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
