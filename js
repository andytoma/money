var stage  = document.getElementById('stage');
var wallet = document.getElementById('wallet');
var walletCoin = 1;

function addCoin(){

var div = document.createElement('div');
var img = document.createElement('img');
    img.className = 'rotating';
    div.className = "coin falling";
    div.style.left = Math.round(Math.random() * 100) + '%';
    div.style.transform = 'scale(' + (Math.random() * 1.5 + 0.2 )+')';
    div.appendChild(img);
    stage.appendChild(div);
    img.src = "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/64/coin-us-dollar-icon.png";
    img.addEventListener('animationend', function(e){
        if (e.animationName == 'rot') {  // verificam ca animatie sa incheiat
            e.target.className = 'rotX';

        }
    });
    img.addEventListener("click", function(e) {
    		let elm = e.target;
        if (img.className == 'rotX') {
        elm.parentNode.removeChild(elm);
         walletCoin++;
        }
});

};

function addWallet(){
  var div2 = document.createElement('div');
  var img2 = document.createElement('img');
      div2.appendChild(img2);
      img2.src = "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/64/wallet-icon.png";
      img2.className = "wallet";
      wallet.appendChild(div2);

}
addWallet();

var div_s = document.getElementById('money');
div_s.innerHTML +="Coin:= " + walletCoin;
div_s.className = "coinColl";
