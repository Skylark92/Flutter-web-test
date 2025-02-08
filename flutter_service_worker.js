'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "403a790c0b8c18e4369334470b476568",
"version.json": "b0bf71c882af82b57fdfafd795c19770",
"index.html": "b99ac41991af9d9904a787d7ab100247",
"/": "b99ac41991af9d9904a787d7ab100247",
"main.dart.js": "b6666b91da89982f67a734a5c960365f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "631fe0c4881b9a66915d3cce684d7aa8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "70ee209417a6381a4b9e5085f315ed6c",
"main.dart.wasm": "e49182cc68efe79cdffb87ae0fbb4092",
"assets/AssetManifest.json": "83683d29b0a44486a19d7624ad7d0592",
"assets/NOTICES": "46e97a4b2980e0b91188c9d197f538fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "492d035bade32652473541d46d5db767",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "51fd6d538c6bec38d8cdd3f13419e119",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/card_clover_11.png": "9ea80db1b733ebcb03e950ee149614ff",
"assets/assets/images/card_clover_1.png": "ae414eece8ee2d7b6de4cd02e795f2a0",
"assets/assets/images/card_diamond_6.png": "b7aebe7476a918c9a31ab0a3d23e9dec",
"assets/assets/images/card_diamond_7.png": "389aa5afdd1ac6f47b058d993790d08b",
"assets/assets/images/card_clover_10.png": "1913c5eb3c4e1278741867c245e13ab7",
"assets/assets/images/bg_table_hand_cards.png": "0cb46d19048e0f326317719dfc20be8c",
"assets/assets/images/card_clover_12.png": "aeba070207fdde19e083b83456b24474",
"assets/assets/images/card_clover_2.png": "e5fe7ff3b826cb8e7ac32911125ad140",
"assets/assets/images/card_diamond_5.png": "38326ec3ab5f08b33e0ed8b831203b5d",
"assets/assets/images/card_diamond_4.png": "002201a9b0d0b7328ae622392ade3af2",
"assets/assets/images/card_clover_3.png": "a31b082e340805cfbf0105fe9f331f28",
"assets/assets/images/card_clover_13.png": "3a31824501ae972197ac88c49db2c503",
"assets/assets/images/card_clover_7.png": "1693667701e4e359e3fabddc08e00da6",
"assets/assets/images/card_diamond_1.png": "c5afb1f4e19a4b3a46b7e62d0992d694",
"assets/assets/images/card_clover_6.png": "a06c04064104ce71f870172ee77dc4e3",
"assets/assets/images/bg_table_community_card.png": "136a755e646d28de6a888897a31e1eae",
"assets/assets/images/title_texas_holdem.png": "008cf69fd8c447fd5db19a4256532866",
"assets/assets/images/card_clover_4.png": "bcbd47a96234fdff5942e060f87a5cdd",
"assets/assets/images/card_diamond_3.png": "67d0c6ef8be3313ed2355467a743653c",
"assets/assets/images/btn_deal.png": "76abb582650eb61955b7d77acd7421a7",
"assets/assets/images/card_diamond_2.png": "6f79f85d63742ecd07ddc4a6ab54f684",
"assets/assets/images/card_clover_5.png": "6d2444cbe54ffb1ba253a0252852c6b7",
"assets/assets/images/card_spade_11.png": "6292be3be58ec12b52bd59bb85ec66d9",
"assets/assets/images/bg_table_edge.png": "aa9ad8dccef8f7c4edd5ce7387876f35",
"assets/assets/images/bg_table.png": "d5c86ec90cdee29adce4187e1003d4b6",
"assets/assets/images/card_spade_10.png": "aed22c80b93e040cab4862b7bb06a46c",
"assets/assets/images/card_spade_12.png": "6e87d9d4d8647ce44b0327ce8de6644c",
"assets/assets/images/bg_table_win_multiplier.png": "0d664e79b3b75b0716891327fd0b969c",
"assets/assets/images/card_spade_13.png": "6fe355137a8eeeed5d94ab3ef2c1fe12",
"assets/assets/images/bg_info_text.png": "66cc72f52f3ebaa748aee257af9ee0bd",
"assets/assets/images/card_spade_8.png": "3ac8015001cd5b8f93dc65683a434ce0",
"assets/assets/images/card_spade_9.png": "0e8c24f589a210b0759221984b4f062e",
"assets/assets/images/bg_jackpot_02.png": "e22616e54381eb4977ae8b04edec436e",
"assets/assets/images/card_heart_9.png": "c1d48016d5ba83843359f5ab7f37b1bd",
"assets/assets/images/card_heart_8.png": "fbac182a0802f61296a8a41faed9ee2c",
"assets/assets/images/btn_bet_plus.png": "c752520e3e3442ee39d6ec46fabcc377",
"assets/assets/images/bg_jackpot_01.png": "4f2da4233a5bf2ec88b13eeb58c8644c",
"assets/assets/images/card_spade_7.png": "059759fb1ef7e21e1db8d3811ad8bf1c",
"assets/assets/images/card_heart_5.png": "d25c29e4155bf38dc0bbd82f371ca3c3",
"assets/assets/images/card_heart_4.png": "b791c705c6571bbae02a922efa763b30",
"assets/assets/images/card_spade_6.png": "4426619b8b64d7939e6c1901b47720da",
"assets/assets/images/card_spade_4.png": "f348b0215efde21e7e8a2a5039e60dda",
"assets/assets/images/card_heart_6.png": "97112817c5d33f219f6632fdc3bacd2c",
"assets/assets/images/card_heart_7.png": "e3b9a3089e083d7ea67924d112b5aec6",
"assets/assets/images/icon_chip.png": "a04665baa86c271bde6b2dd19992c962",
"assets/assets/images/card_spade_5.png": "d838e8df964b50eb57d44c12c4e92375",
"assets/assets/images/bg_balance.png": "f5a6bfe6f4b8e038ced95dfffd3ace12",
"assets/assets/images/card_spade_1.png": "81502af48121efbff79a0d45ebb12ccb",
"assets/assets/images/title_who_win.png": "557dd19079f014b43fbcda119363eb9a",
"assets/assets/images/card_heart_3.png": "2b5741749cbc6b8be31104f8e587dc87",
"assets/assets/images/bg_table_line.png": "911e803207a032b0aa59a7ba9ae9fbd9",
"assets/assets/images/card_heart_2.png": "71e32e78c8754e3c43d0e4296c0e6cec",
"assets/assets/images/card_spade_2.png": "22518c67c69eb2ffa92d23e65d84ae06",
"assets/assets/images/card_heart_1.png": "89b830629e3d338444fe1d0376df7990",
"assets/assets/images/card_spade_3.png": "9449fba688c890f773f8ade3097dac6d",
"assets/assets/images/bg_table_win_rate.png": "d5e200d1469f4eb56f17c1ed980a15f2",
"assets/assets/images/card_clover_8.png": "7aead7d35c610b45f562b97cad82fc77",
"assets/assets/images/card_heart_13.png": "0e9b26addb333db5003801e185c251ef",
"assets/assets/images/bg_bet.png": "7e23c6c4b04ef7e149baaec460c04460",
"assets/assets/images/card_heart_12.png": "c5d11a5c4222b42cbd75268e776915a2",
"assets/assets/images/card_clover_9.png": "05a7fb47f806f0e5787af1e922fe3151",
"assets/assets/images/card_heart_10.png": "2d30675e62c277fd6d1fb49fa39bf24c",
"assets/assets/images/bg_jackpot.png": "f6b2033a371abded6fd01390511bb939",
"assets/assets/images/card_heart_11.png": "d42e61354b134d7b1a7539b6497dd2df",
"assets/assets/images/btn_bet_minus.png": "d0cb0af23b9da0c4a89dbf828edb914f",
"assets/assets/images/card_diamond_10.png": "a2116123366bfaad6fa452c1f39df5b4",
"assets/assets/images/card_diamond_9.png": "d57a492df8d3c9f5146ed204d167aa91",
"assets/assets/images/card_diamond_8.png": "eec59a03adf594f60e9c859703c24e46",
"assets/assets/images/card_diamond_11.png": "615c9933d3eca6d6ffb4f695e5f50e6a",
"assets/assets/images/card_back.png": "96cb1e230d356b5b43e42c5430376b52",
"assets/assets/images/card_diamond_13.png": "aa7f42b61aa9017bbae5ac0c1b116bc1",
"assets/assets/images/card_diamond_12.png": "f9eaa8ac9314dcd348c977401cbc2659",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
