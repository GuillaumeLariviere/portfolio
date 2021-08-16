let d = document;
let lettres = d.querySelectorAll('.rond');
let Spe =[" ", "'","-"] ;
let mots=words_list;
let image =1;
let motATrouve;

function startGame(){
     motATrouve=RandomMots();
    console.log(motATrouve);
    let nbLettre=motATrouve.length;

    d.querySelector('#MtAtrv').innerHTML="";
    for(i =0 ; i< nbLettre; i++){
        d.querySelector('#MtAtrv').innerHTML+='<span class="lettre">_</span>';
        if(Spe[0].includes(motATrouve[i])){
            d.querySelectorAll('.lettre')[i].innerText=Spe[0]
        }
        if(Spe[1].includes(motATrouve[i])){
            d.querySelectorAll('.lettre')[i].innerText=Spe[1]
        }
        if(Spe[2].includes(motATrouve[i])){
            d.querySelectorAll('.lettre')[i].innerText=Spe[2]
        }
        else{
        }
    }
    image =1;

    lettres.forEach(function(listeLettre){
         listeLettre.classList.add('rond');
        listeLettre.classList.remove('transparance');
        listeLettre.addEventListener('click',btn);
        listeLettre.removeAttribute('disabled')  ;
    });
}

function btn(event){
    event.target.classList.remove('rond');
    event.target.classList.add('transparance');
    let ltr= event.target.value;
    event.target.removeEventListener('click',btn);
    event.target.setAttribute('disabled', true);
    let bonneReponse=false;
    
    for(i=0 ;i<motATrouve.length; i++){
        if(ltr==motATrouve[i]){
            d.querySelectorAll('.lettre')[i].innerText=ltr;
         bonneReponse=true;
        }
    }
         if(bonneReponse==false){
            image++
            console.log(image)
        }
        if(image == 8){
            lettres.forEach(function(boutonEnd){
                boutonEnd.setAttribute('disabled',true)});
                alert("Game Over")
        }
        if(d.querySelector('#MtAtrv').innerText.indexOf('_')==-1){
            alert("victoire")
        }
}

function RandomMots(){
    let random = Math.floor(Math.random() * mots.length);
    let mot = mots[random];
    console.log(mot)
    mot = mot.replaceAll("â","a").replaceAll("à","a").replaceAll("ï","i").replaceAll("î","i").replaceAll("ô","o").replaceAll("ö","o").replaceAll("é","e").replaceAll("è","e").replaceAll("ê","e").replaceAll("ë","e").replaceAll("ç","c")/*.replaceAll(" ","").replaceAll("-","").replaceAll("'","")*/;
    mot = mot.toLowerCase();       
    return mot;
}

startGame()

let start=d.querySelector('#Start');
start.addEventListener('click',startGame);
let pb;