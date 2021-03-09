let face;

let insta;

let twitt;

let you;

let git;

const darkMode = () => {

  let element = document.body;
  let bg1 = document.getElementById('hero');
  let bg2 = document.getElementById('empty');
  let mode = document.getElementById('mode');
  element.classList.toggle("dark-card");
  bg1.classList.toggle("dark-mode");
  bg2.classList.toggle("dark-mode");

  if(document.body.classList.contains('dark-card')){
     mode.src = "img/eclipse.svg";
  }
  else{
    mode.src = "img/sun.svg"
  }

}

function Capitalletters(e){

  e.value = e.value.toUpperCase();

}

const lowerCase = (e) => {
  e.value = e.value.toLowerCase();
}

const facebook = () => {
  document.getElementById('face').innerHTML = 
  `<br>
  <div class="input-group">
    <span class="input-group-addon">
      <i class="fa fa-facebook fa-lg form-icon" aria-hidden="true"></i>
      facebook.com/
    </span> 
    <input class="form-input social" type="text" id="facebook" placeholder="bryan.manzanocortes" onkeyup="Getfacebook(this)">
    <button class="btn btn-primary input-group-btn" onclick="rmfacebook()">
      <i class="form-icon icon icon-cross"></i>
    </button>
  </div>`;
}

const rmfacebook = () => {
  document.getElementById('face').innerHTML = "";
}

const Getfacebook = (e) => {
  face = 'https://www.facebook.com/'+e.value;
  }


const instagram = () => {
document.getElementById('insta').innerHTML = 
`<br>
<div class="input-group">
  <span class="input-group-addon">
    <i class="fa fa-instagram fa-lg form-icon" aria-hidden="true"></i>
    instagram.com/
  </span> 
  <input class="form-input social" type="text" id="instagram" placeholder="bryan.devcode">
  <button class="btn btn-primary input-group-btn" onclick="rminstagram()">
    <i class="form-icon icon icon-cross"></i>
  </button>
</div>`;
}

const rminstagram = () => {
document.getElementById('insta').innerHTML = "";
}


const twitter = () => {
document.getElementById('twi').innerHTML = 
`<br>
<div class="input-group">
  <span class="input-group-addon">
    <i class="fa fa-twitter fa-lg form-icon" aria-hidden="true"></i>
    twitter.com/
  </span> 
  <input class="form-input social" type="text" id="twitter" placeholder="BrayanCorpsee">
  <button class="btn btn-primary input-group-btn" onclick="rmtwitter()">
    <i class="form-icon icon icon-cross"></i>
  </button>
</div>`;
}

const rmtwitter = () => {
document.getElementById('twi').innerHTML = "";
}

const youtube = () => {
document.getElementById('you').innerHTML = 
`<br>
<div class="input-group">
  <span class="input-group-addon">
    <i class="fa fa-youtube-play fa-lg form-icon" aria-hidden="true"></i>
    youtube.com/
  </span> 
  <input class="form-input social" type="text" id="youtube" placeholder="channel">
  <button class="btn btn-primary input-group-btn" onclick="rmyoutube()">
    <i class="form-icon icon icon-cross"></i>
  </button>
</div>`;
}

const rmyoutube = () => {
document.getElementById('you').innerHTML = "";
}

const github = () => {
document.getElementById('git').innerHTML += 
`<br>
<div class="input-group">
  <span class="input-group-addon">
    <i class="fa fa-github fa-lg form-icon" aria-hidden="true"></i>
    github.com/
  </span> 
  <input class="form-input social" type="text" id="github" placeholder="BrayanCorpse" name="github">
  <button class="btn btn-primary input-group-btn">
    <i class="form-icon icon icon-cross" onclick="rmgithub()"></i>
  </button>
</div>`;
}

const rmgithub = () => {
document.getElementById('git').innerHTML = "";
}

function fileGenerator(){

  let profile = document.querySelector('input[name="profile"]:checked').value;
  let name = document.getElementById('name').value;
  let nickname = name.substring(0,2);
  let desc = document.getElementById('desc').value;
  let phone = document.getElementById('phone').value;
  let location = document.getElementById('location').value;
  let web = document.getElementById('web').value;
  let linkedin = document.getElementById('linkedin').value;
  let color = document.querySelector('input[name="color"]:checked').value;

  document.getElementById('signature').innerHTML = 
  `<div class="panel" style="border: .1rem solid ${color};">
  <div class="panel-header text-center">
    <figure class="avatar avatar-lg" style="background-color: ${color};">
      <h6 class="b-avatar">${nickname}</h6>
    </figure>
    <div class="panel-title h5 mt-10">${name}</div>
    <div class="panel-subtitle">${desc}</div>
  </div>
  <nav class="panel-nav">
    <ul class="tab tab-block">
      <li class="tab-item active">
        <a href="#panels" style="border-bottom: .1rem solid ${color}; color: ${color};">${profile}</a>
      </li>
    </ul>
  </nav>
  <div class="panel-body">
    <div class="tile tile-centered mt-2">
      <div class="tile-content">
        <div class="tile-title text-bold">Phone</div>
        <div class="tile-subtitle">${phone}</div>
      </div>
      <div class="tile-action">
        <img src="img/phone.png" alt="" width="30" height="30" style="background: ${color};">
      </div>
    </div>
    <div class="tile tile-centered">
      <div class="tile-content">
        <div class="tile-title text-bold">Location</div>
        <div class="tile-subtitle">${location}</div>
      </div>
      <div class="tile-action">
        <img src="img/location.png" alt="" width="30" height="30" style="background: ${color};">
      </div>
    </div>
    <div class="tile tile-centered">
      <div class="tile-content">
        <div class="tile-title text-bold">Web site</div>
        <div class="tile-subtitle">
         <a href="${web}"  target="_blank" style="color: ${color};">${web}</a> 
        </div>
      </div>
      <div class="tile-action">
        <img src="img/web.png" alt="" width="30" height="30" style="background: ${color};">
      </div>
    </div>
    <div class="tile tile-centered">
      <div class="tile-content">
        <div class="tile-title text-bold">Linkedin</div>
        <div class="tile-subtitle">${linkedin}</div>
      </div>
      <div class="tile-action">
      <img src="img/linkedin.png" alt="" width="30" height="30" style="background: ${color};">
    </div>
    </div>
    <div class="tile tile-centered mb-1">
      <div class="tile-content">
        <div class="tile-title text-bold">social media</div>
      </div>
    </div>
    <div class="tile-action text-center" id="social-links">
     aqui van los iconos de redes sociales
    </div>
  </div>
  <div class="panel-footer">
    <div style="border-bottom: .2rem solid ${color}; color: ${color};"></div>
  </div>
</div>
<br>
<button class="btn btn-default btn-block" data-clipboard-target="#generate" id="copy">Copiar</button>`;

document.getElementById('social-links').innerHTML =
`${face 
  ? `<a href="${face}" rel="noopener noreferrer" target="_blank">
      <img src="img/face.png" alt="" width="25" height="25" style="background: ${color};">
    </a>`
  : ''}`;

}

let clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
	let copy = document.getElementById('copy');
  copy.innerHTML = "Copiado!";
  copy.classList.toggle("btn-primary");
});

clipboard.on('error', function(e) {
	console.log(e);
});





// const Capturar = () => {
//     let arraySave = [];   
//     let Social = document.getElementsByClassName("social");     
//     for (var i = 0; i < Social.length; i++) {    
//         arraySave[i] = Social[i].value;
//         console.log (arraySave[i]); 
//         document.getElementById('social').innerHTML += arraySave[i] + '<br>';     
//         }       
//     }








