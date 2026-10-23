// إعدادات التطبيق — هذا الملف الوحيد اللي يتغير
self.APP_CONFIG = {
  // رابط Apps Script (ينتهي بـ /exec)
  exec: 'https://script.google.com/macros/s/AKfycbzeEVNDkV7xtdbjGi5vu_2fk65vrZnBQ1gKOTnl0pRtM5gu351YIUwkYxgzGyFpabLyMw/exec',
  // من Firebase ← إعدادات المشروع ← تطبيقاتك ← firebaseConfig
  firebase: {
    apiKey: 'AIzaSyCGCCGcVFzU_odaC2MKgUI9Olu_87lp5t0',
    authDomain: 'lawyer-fajer.firebaseapp.com',
    projectId: 'lawyer-fajer',
    storageBucket: 'lawyer-fajer.firebasestorage.app',
    messagingSenderId: '4022240106',
    appId: '1:4022240106:web:62f71064c9d3ada20d5b13'
  },
  // من Firebase ← Cloud Messaging ← Web Push certificates ← Key pair
  vapidKey: 'BLK2EHBDwZOO3Jx5LGCEF4d8y8MzMCZbVlFxlIE-NyA84er6Yob2f2Iy5gcvOQODWiU-l2rLCg5b5atAs_wB300'
};
