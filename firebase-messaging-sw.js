importScripts('config.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp(self.APP_CONFIG.firebase);
firebase.messaging();

// الضغط على الإشعار يفتح التطبيق على الوظيفة
self.addEventListener('notificationclick', event => {
  const data = (event.notification && event.notification.data) || {};
  const link = (data.FCM_MSG && data.FCM_MSG.notification && data.FCM_MSG.notification.click_action)
    || (data.FCM_MSG && data.FCM_MSG.fcmOptions && data.FCM_MSG.fcmOptions.link)
    || self.registration.scope;
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) {
      if (c.url.indexOf(self.registration.scope) === 0 && 'navigate' in c) { c.focus(); return c.navigate(link); }
    }
    return clients.openWindow(link);
  }));
});
