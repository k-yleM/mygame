
var text;
var moneyText;
var stockText;
var aclipText;
var wireText;
var sellpriceText;



var paperClips = 0;
var aClips = 0;
var money = 0;
var inventory = 0;
var chance = 3;
var price = 1.0

var wire = 10
window.addEventListener('load' , startGame);

var autoTimer = 0;

/**
 * Getting HTMl elements from the webpage and begins upadate of game
 */
function startGame(){

    text=document.getElementById('paperclips');
    moneyText = document.getElementById('money');
    stockText = document.getElementById('stock');
    aclipText = document.getElementById('aclip');
    wireText = document.getElementById('wire')
    sellpriceText = document.getElementById('sellprice')

    window.setInterval(function(){ update();}, 1000/10); //10th of  a second
}
/**
 * Increases Price paperclips are sold at.
 */
function increasePrice(){
    price+=0.01
  
}
/**
 * Decreases price paperclips are sold at
 */
function decreasePrice(){
    price-=0.01
   
}
/**
 * Makes the paperclip. Adds 1 to inventory. Adds one to total paperlcips made. Takes 1 wire away
 */
function makeClip(){
    if (wire>0){
        inventory+=1;
        paperClips+=1;
        wire-=1;
    }
}
/**
 * Can buy AutoClip. Decreases money and increases autoclip by 1
 */
function autoClip(){
    if(money>10){
        money-=10;
        aClips+=1;
    }
}
/**
 * This function allows you to buy wire
 */
function buyWire(){
    if(money>=5){
       wire+=10 
       money-=5;
    }
    
}
/**
 * The sell Function sells the paper clips once made
 * @param (number)
 * @return if chnace of selling not met otherwise will sell one product
 */
function sell(){
    var num = Math.floor(Math.random()* 10) +1;

    if(num>chance){return;}

    if(inventory>=1){
        inventory-=1;
        money+=1;
    }
    
}

function autoClipperUpdate(){

    ///need one for every auto clipper
    for(var i=0;i<aClips;i++){
          makeClip();

    }
  
}



/**
 * The update function updates all the text on screen and hides or shows the button.
 */
function update(){


    autoTimer+=1;
    if(autoTimer>=10){
        autoTimer=0;
       autoClipperUpdate();
 
    }
   
    text.innerHTML = 'Paper Clips made: ' + Math.floor(paperClips);
    moneyText.innerHTML = 'Money: £' + Math.floor(money);
    stockText.innerHTML = 'Stock: ' + Math.floor(inventory);
    aclipText.innerHTML = 'AutoClips: ' + Math.floor(aClips);
    wireText.innerHTML = 'Wire Available: ' + wire
    sellpriceText.innerHTML = 'Sell Price: ' + price.toFixed(2);

    var x = document.getElementById('auto').style;
        if(money<10){
            x.display = '';
        }else{
            x.display = 'block';
        }

        sell()


}

/** */