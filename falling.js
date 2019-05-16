var stage = document.getElementById('stage');

function addCoin(){

var div = document.createElement('div');
var img = document.createElement('img')
    img.className = 'rotating';
    div.className = "coin falling";
    div.style.left = Math.round(Math.random() * 100) + '%';
    div.style.transform = 'scale(' + (Math.random() * 1.5 + 0.2 )+')';
    div.appendChild(img);
    stage.appendChild(div);
    img.src = "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/64/coin-us-dollar-icon.png"
    img.addEventListener('animationend', function(e){
        if (e.animationName == 'rot') {  // verificam ce animatie sa incheiat
            e.target.className = 'rotX';
        }
    });



  //   stage.innerHTML += `<div class="coin">
  //   <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/64/coin-us-dollar-icon.png">
  // </div>`;
}

function removeCoin(){

}
