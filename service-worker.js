/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6f8cde916ad1aff01bda6dc502da116c"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1f5d4d9b.css",
    "revision": "8d0b65074266aaac4c1bd22be3fe238e"
  },
  {
    "url": "assets/img/anno_model.16452301.png",
    "revision": "16452301f77b0bed3281a1d5598f4e0f"
  },
  {
    "url": "assets/img/photo1.97ca2a16.png",
    "revision": "97ca2a16af8fc7fc604fb7547ece8c52"
  },
  {
    "url": "assets/img/photo2.45f1bab0.png",
    "revision": "45f1bab097b4c8c084ac9fedfa9e4497"
  },
  {
    "url": "assets/img/photo3.ee9f48f5.png",
    "revision": "ee9f48f5b0e872eda60abc5df2d43a33"
  },
  {
    "url": "assets/img/photo4.30034282.png",
    "revision": "300342821a37350b1f8d06e789972f4c"
  },
  {
    "url": "assets/img/photo5.bf4d4e11.png",
    "revision": "bf4d4e11bbbe51abd8870ccfec3fd556"
  },
  {
    "url": "assets/img/photo6.f71f5012.png",
    "revision": "f71f5012ed215d1a89f6d7002198bc9e"
  },
  {
    "url": "assets/img/photo7.ab0ec9df.png",
    "revision": "ab0ec9df52f82c3e457607080d678307"
  },
  {
    "url": "assets/img/photo8.70cbea49.png",
    "revision": "70cbea4916e1fbdc689f8f104911f4e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.43ba3855.js",
    "revision": "2a661ff18e7e4c6ec6e7a049738c618a"
  },
  {
    "url": "assets/js/11.a0617aa2.js",
    "revision": "18b2203edb8479fbc568a48642274f19"
  },
  {
    "url": "assets/js/12.00eab8cf.js",
    "revision": "7b455cd90a109cdab342841d3f4c412d"
  },
  {
    "url": "assets/js/13.9688cafd.js",
    "revision": "3fd904719a6b6742f35cce874e7c05c3"
  },
  {
    "url": "assets/js/14.8011a016.js",
    "revision": "b12cd5952cd9bb0dd556c441131ed524"
  },
  {
    "url": "assets/js/15.da767f70.js",
    "revision": "76967d1804630746db20807ae134542e"
  },
  {
    "url": "assets/js/16.f7431d99.js",
    "revision": "212d9b4bc797a5cd8b18d0d27266f4b9"
  },
  {
    "url": "assets/js/17.90e3049b.js",
    "revision": "64b69353227a3812d26086edeb49f7b0"
  },
  {
    "url": "assets/js/18.8672c05e.js",
    "revision": "9acd35d5499532c218165c137e9baf22"
  },
  {
    "url": "assets/js/19.abf28423.js",
    "revision": "008f5060945497517f8bb34d4676fd17"
  },
  {
    "url": "assets/js/2.c4597ded.js",
    "revision": "1003456c07c40be6bc77337976162cde"
  },
  {
    "url": "assets/js/20.dc97a26d.js",
    "revision": "8c63205f76fd0d62df15cbf0bccc5942"
  },
  {
    "url": "assets/js/21.1f61d789.js",
    "revision": "847e84f16b95fea15787d29f072a6d5e"
  },
  {
    "url": "assets/js/22.935ab114.js",
    "revision": "688ab72861043268b72fe26cc18af5b4"
  },
  {
    "url": "assets/js/23.f2dee969.js",
    "revision": "883f5a0ec37d34db1ab3b4fa63be20d4"
  },
  {
    "url": "assets/js/24.122c79f9.js",
    "revision": "2443bee4120344c697e415a487aefb57"
  },
  {
    "url": "assets/js/26.f8ca1b3b.js",
    "revision": "01a2e3734cc0988ca4494406b0a6a14d"
  },
  {
    "url": "assets/js/3.3924fc14.js",
    "revision": "9082dca01f16f15d28a6703977251a38"
  },
  {
    "url": "assets/js/4.44a11fb3.js",
    "revision": "0154d2a9028ac34c6d0d40496d8be30e"
  },
  {
    "url": "assets/js/5.4318446a.js",
    "revision": "8512555482dddd0114f1a117f6298d97"
  },
  {
    "url": "assets/js/6.a00b5742.js",
    "revision": "25c021a33e15026575a4992f466203b1"
  },
  {
    "url": "assets/js/7.26aae69e.js",
    "revision": "ef55f87b587e31ff09677acf4018e8bb"
  },
  {
    "url": "assets/js/8.c914c83d.js",
    "revision": "4d9c60f1951c1fe4d6adc0e06796c5d8"
  },
  {
    "url": "assets/js/9.0fed8d72.js",
    "revision": "3e59d9e9befc0ff67a64266d29fe1a41"
  },
  {
    "url": "assets/js/app.7468e231.js",
    "revision": "33b70be20cf4518458bb79919616e51b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "de5aa5c27abfeb7cb6a5d0267717a3f7"
  },
  {
    "url": "design/index.html",
    "revision": "e9314129b1fe76c1791dbba19e49061b"
  },
  {
    "url": "index.html",
    "revision": "beaffadedc4d19b89604f7b7332aa0bd"
  },
  {
    "url": "intro/index.html",
    "revision": "96f6606e0f63b8b7735f343ecf012537"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d6631f048991df08db2d4ec6579f9d24"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "65cb6398e388481d79f7a2fba45397cd"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "50ffb599f9bed92c6b6aef2979436d2c"
  },
  {
    "url": "software/index.html",
    "revision": "9ea27498218d2cdeb46315d294835efc"
  },
  {
    "url": "test/index.html",
    "revision": "d6b9455d635eff70170f603f09a5e2e3"
  },
  {
    "url": "use cases/index.html",
    "revision": "8cd1cfb1fc00c037f099474352971d19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
