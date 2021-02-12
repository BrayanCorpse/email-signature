let clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
	let copy = document.getElementById('copy');
  copy.innerHTML = "Copied!";
  copy.classList.toggle("btn-primary");
});

clipboard.on('error', function(e) {
	console.log(e);
});


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
  `<div class="panel">
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
        <button class="btn btn-link btn-action btn-lg tooltip tooltip-left" data-tooltip="Phone" style="color: ${color};"><i class="fa fa-phone" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="tile tile-centered">
      <div class="tile-content">
        <div class="tile-title text-bold">Location</div>
        <div class="tile-subtitle">${location}</div>
      </div>
      <div class="tile-action">
        <button class="btn btn-link btn-action btn-lg tooltip tooltip-left"  data-tooltip="Location" style="color: ${color};"><i class="icon icon-location"></i></button>
      </div>
    </div>
    <div class="tile tile-centered">
      <div class="tile-content">
        <div class="tile-title text-bold">Web site</div>
        <div class="tile-subtitle">
         <a href="${web}" rel="noopener noreferrer" target="_blank">${web}</a> 
        </div>
      </div>
      <div class="tile-action">
        <button class="btn btn-link btn-action btn-lg tooltip tooltip-left"  data-tooltip="Web-site" style="color: ${color};"><i class="icon icon-link"></i></button>
      </div>
    </div>
    <div class="tile tile-centered mb-1">
      <div class="tile-content">
        <div class="tile-title text-bold">Linkedin</div>
        <div class="tile-subtitle">${linkedin}</div>
      </div>
      <div class="tile-action">
        <button class="btn btn-link btn-action btn-lg tooltip tooltip-left"  data-tooltip="Linkedin" style="color: ${color};"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
  <div class="panel-footer">
    <div style="border-bottom: .2rem solid ${color}; color: ${color};"></div>
  </div>
</div>
<br>
<button class="btn btn-default btn-block" data-clipboard-target="#generate" id="copy">Copy</button>`;

}


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

function capitalletters(e){

  e.value = e.value.toUpperCase();

}

// function socialSites(){
//     let link = document.getElementById('link').innerHTML = '<div class="has-icon-left"><input class="form-input" type="text" id="linkedin" placeholder="Linkedin"><i class="fa fa-linkedin form-icon" aria-hidden="true" id="linkedin"></i></div>';
// }






