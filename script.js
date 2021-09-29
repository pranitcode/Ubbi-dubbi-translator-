const btntranslate = document.querySelector('#btntranslate');
const bananawords = document.querySelector('#bananawords');
const outputbox = document.querySelector('#outputbox');
var url = "https://api.funtranslations.com/translate/ubbi-dubbi.json?"




function getUrl(text) {
  return url +"text=" + text
}

btntranslate.addEventListener("click", async () => {

 let text = bananawords.value;
await fetch(getUrl(text))
      .then(res => res.json())
  .then(json => {
    var trantext = json.contents.translated
    outputbox.innerHTML = trantext;
      } )
      .catch(error => console.log(error))

});
