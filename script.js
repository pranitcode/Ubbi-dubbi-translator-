const btntranslate = document.querySelector('#btntranslate');
const bananawords = document.querySelector('#bananawords');
const outputbox = document.querySelector('#outputbox');



var URL = '	https://api.funtranslations.com/translate/yoda.json'

function getURL(text){
  return URL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured!" + error )
    outputbox.innerHTML = "Plz try after some time!😯😤🥺"
}

function clickHandler(){

    var inputText = bananawords.value;
    fetch(getURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputbox.innerText = translatedText;
        })
    
        .catch(errorHandler) 
}

btntranslate.addEventListener("click", clickHandler);