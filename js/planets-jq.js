

/* Initiate Magnify Function

  /*magnifier glass:*/

  var zoom = 4;

  var img, glass, w, h, bw;

  img = document.getElementById("universe");
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

/*customisable header - our solar system*/

const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const solaysystemname = document.querySelector('#solarsystemname');

form.addEventListener('submit', function(e) {e.preventDefault();});

submitBtn.addEventListener('click', function() {localStorage.setItem('name', nameInput.value);nameDisplayCheck();});

forgetBtn.addEventListener('click', function() {localStorage.removeItem('name');nameDisplayCheck();});

function nameDisplayCheck() {
  if(localStorage.getItem('name')) {
    let name = localStorage.getItem('name');
    solaysystemname .textContent = name;
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    solaysystemname .textContent = 'Our Solar System ';
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

document.body.onload = nameDisplayCheck;


//---------Drop down menu function to select planets --------

function myFunction(){
    var port_button = document.getElementById("port").value;
    if(port_button == 0){
    var newhref;
    var newhrefid;
    var blank = ["_blank"];
    var name = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    var links = ["space-facts.com/mercury/", "space-facts.com/venus/", "space-facts.com/earth/", "space-facts.com/mars/", "space-facts.com/jupiter/", "space-facts.com/saturn/", "space-facts.com/uranus/", "space-facts.com/neptune/"];
    var div=document.getElementById("myDropdown"); 

    //creates the loop to pull on the data for the drop down links

    for(var i = 0; i<8; i++){
      newhref= document.createElement("a");
      newhref.href="http://"+links[i];
      newhref.innerHTML= name[i]; 
      newhref.target=blank[0]; //added this in will make the link open in a new tab
      newhrefid = "idhr_"+i;
      newhref.setAttribute('id', newhrefid );
      div.appendChild(newhref);
    }
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("port").value = "2";
    }
    else if(port_button == 1){
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("port").value = "2";
    }
    else{
    document.getElementById("myDropdown").classList.toggle("hide");
    document.getElementById("port").value = "1";
    }
}

//filter field in the drop down menu

  function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
          if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
              a[i].style.display = "";
          } else {
              a[i].style.display = "none";
          }
      }
  }

 /*type writer effect for hyperzoom control on page load*/

var i = 0;
var txt = 'Hubble Hyperzoom Control';
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("zoomtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 /*drag drop function for alien treasure*/

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text")
  ev.target.appendChild(document.getElementById(data));
}

