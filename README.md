# Choy.js
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
Undan keyingi qatorda esa, loyihaning nomi va REST Api(backend) manzili yozing
```javascript
choyApp.setAppConf("Choyxona Application", "http://localhost:1337/api/v1");
choyApp.init();
choyApp.setDebug(true); // barcha loglarni ko'rsatish
```
Shunda freymvork ishlatish uchun tayyor bo'ladi.

## Request jo'natish
```javascript
choyApp.HTTP.get("/articles", function(err, response) {
  // Agar backend hech qanday javob qaytarmasa
  if(err) return console.error(err);
  
  // Agar backendan javob olinsa uni consolega chiqaramiz
  console.log(response);
});
```
Shunda `http://localhost:1337/api/v1/articles`ga GET request jo'natiladi. `choy.HTTP` orqali quyidagicha so'rovlarni jo'natishingiz mumkin:
* get
* post
* put
* delete
