# ChoyJS
Sodda va moslashuvchan JavaScript freymvork.

## O'rnatish
Freymvorkni HTML hujjatingizga ulaysiz:
```html
<script src="choy.js" charset="utf-8"></script>
```
Yangi javascript fayl yaratib uni ichiga:
```javascript
choyApp = new Choy();
```
Undan keyingiz qatorda esa, loyihaning nomi va REST Api(backend) manzili yozing
```javascript
choyApp.setAppConf("Scheduler", "http://localhost:1337");
choyApp.init();
```
Shunda freymvork ishlatish uchun tayyor bo'ladi.

Agar requestlarni natijalarini ko'rmoqchi bo'lsagiz setDebug() orqali sozlanadi.
```javascript
choyApp.setDebug(true);
```
