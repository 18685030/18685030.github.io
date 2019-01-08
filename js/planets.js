
//--------start of program details ------

$( "a" ).click(function( event ) {
 event.preventDefault(); // stops default action i.e href link for a items
 // show overlay
});

//Code for image pop ups when clicking on planets

//sun 

$(".orbit .gravity-sun #sun").click(function(){
console.log( "Fired" );
$(".sun-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('sun animation open')
  //alert("The Sun");
  }
  );
});
$(".sun-pop-up .closeBtn").click(function(){
    $(".sun-pop-up").slideToggle().fadeOut(100 );
    console.log('sun animation closed');
});

//murcury

$(".orbit .gravity-murcury #murcury").click(function(){
console.log( "Fired" );
$(".murcury-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('murcury animation open')
  //alert("Planet Earth");
  }
  );
});
$(".murcury-pop-up .closeBtn").click(function(){
    $(".murcury-pop-up").slideToggle().fadeOut(100 );
    console.log('murcury animation closed');
});

//venus

$(".orbit .gravity-venus #venus").click(function(){
console.log( "Fired" );
$(".venus-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('venus animation open')
  //alert("Planet Earth");
  }
  );
});
$(".venus-pop-up .closeBtn").click(function(){
    $(".venus-pop-up").slideToggle().fadeOut(100 );
    console.log('venus animation closed');
});

//earth

$(".orbit .gravity-earth #earth").click(function(){
console.log( "Fired" );
$(".earth-pop-up").slideToggle().delay(10).fadeIn(100,function(){
	console.log('earth animation open')
	//alert("Planet Earth");
	}
	);
});
$(".earth-pop-up .closeBtn").click(function(){
    $(".earth-pop-up").slideToggle().fadeOut(100 );
    console.log('earth animation closed');
});


//tesla

$(".orbit .gravity-tesla #tesla").click(function(){
console.log( "Fired" );
$(".tesla-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('tesla animation open')
  //alert("Spaceman !");
  }
  );
});
$(".tesla-pop-up .closeBtn").click(function(){
    $(".tesla-pop-up").slideToggle().fadeOut(100 );
    console.log('tesla animation closed');
});


//mars 

$(".orbit .gravity-mars #mars").click(function(){
console.log( "Fired" );
$(".mars-pop-up").slideToggle().delay(10).fadeIn(100,function(){
	console.log('mars animation open')
	//alert("Mars");
	}
	);
});
$(".mars-pop-up .closeBtn").click(function(){
    $(".mars-pop-up").slideToggle().fadeOut(100 );
    console.log('mars animation closed');
});

//jupiter

$(".orbit .gravity-jupiter #jupiter").click(function(){
console.log( "Fired" );
$(".jupiter-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('jupiter animation open')
  //alert("Planet Earth");
  }
  );
});
$(".jupiter-pop-up .closeBtn").click(function(){
    $(".jupiter-pop-up").slideToggle().fadeOut(100 );
    console.log('jupiter animation closed');
});

//saturn

$(".orbit .gravity-saturn #saturn").click(function(){
console.log( "Fired" );
$(".saturn-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('saturn animation open')
  //alert("Planet Earth");
  }
  );
});
$(".saturn-pop-up .closeBtn").click(function(){
    $(".saturn-pop-up").slideToggle().fadeOut(100 );
    console.log('saturn animation closed');
});

//uranus

$(".orbit .gravity-uranus #uranus").click(function(){
console.log( "Fired" );
$(".uranus-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('uranus animation open')
  //alert("Planet Earth");
  }
  );
});
$(".uranus-pop-up .closeBtn").click(function(){
    $(".uranus-pop-up").slideToggle().fadeOut(100 );
    console.log('uranus animation closed');
});

//neptune

$(".orbit .gravity-neptune #neptune").click(function(){
console.log( "Fired" );
$(".neptune-pop-up").slideToggle().delay(10).fadeIn(100,function(){
  console.log('neptune animation open')
  //alert("Planet Earth");
  }
  );
});
$(".neptune-pop-up .closeBtn").click(function(){
    $(".neptune-pop-up").slideToggle().fadeOut(100);
    console.log('neptune animation closed');
});

//moon gif

// $(function(){
//     var image = new Image();
//     image.src ='assets/moon.gif';
//     $('#sun').click(function(){
//        $(this).attr('src',image.src);
//     });
// });


//hubble - on click of hubble image several elements fade away tp clear the screen for the hyperzoom idea

$("#hubble").click(function(){
console.log( "Fired" );
$('#hubble').css('transform', 'scale(2)');
$('#forgetname').fadeOut(1000);
$('.alientoggle').fadeOut(1000);
$('#entername').fadeOut(1000);
$('#submitname').fadeOut(1000);
$('#zoomtext').fadeIn(1000);
$('#quotes').fadeOut(1000);
$('#toggletext').fadeOut(500);
$('.flex-container').fadeOut(1000);
// $('.zoommagnifycontainer').css('visibility', 'visible');
// $('#magnifyrangevalue').css('visibility', 'visible');
$('.zoomcontainer').css('opacity', '0');
$('#rangevalue').css('opacity', '0');
$('#dropbox1').fadeOut(1000);
$('#dropbox2').fadeOut(1000);
$('.img-magnifier-glass').css('visibility', 'visible');
$('.orbit .hubbleclose').css('opacity', '1');
$('.orbit .gravity-sun').fadeOut(1000);
$('.orbit .gravity-murcury').fadeOut(1000);
$('.orbit .gravity-venus').fadeOut(1000);
$('.orbit .gravity-earth').fadeOut(1000);
$('.orbit .gravity-tesla').fadeOut(1000);
$('.orbit .gravity-mars').fadeOut(1000);
$('.orbit .gravity-jupiter').fadeOut(1000);
$('.orbit .gravity-saturn').fadeOut(1000);
$('.orbit .gravity-uranus').fadeOut(1000);
$('.orbit .gravity-neptune').fadeOut(1000)
});

$(".hubbleclose").click(function(){
console.log( "Fired" );
$('#hubble').css('transform', '');
$('#forgetname').fadeIn(1000);
$('#entername').fadeIn(1000);
$('.alientoggle').fadeIn(1000);
$('#submitname').fadeIn(1000);
$('#zoomtext').fadeOut(500);
$('#quotes').fadeIn(1000);
$('#toggletext').fadeIn(500);
$('.flex-container').fadeIn(1000);
// $('.zoommagnifycontainer').css('visibility', 'hidden');
// $('#magnifyrangevalue').css('visibility', 'hidden');
$('.zoomcontainer').css('opacity', '1');
$('#rangevalue').css('opacity', '1');
$('#dropbox1').fadeIn(1000);
$('#dropbox2').fadeIn(1000);
$('.img-magnifier-glass').css('visibility', 'hidden');
$('.orbit .hubbleclose').css('opacity', '0');
$('.orbit .gravity-sun').fadeIn(1000);
$('.orbit .gravity-murcury').fadeIn(1000);
$('.orbit .gravity-venus').fadeIn(1000);
$('.orbit .gravity-earth').fadeIn(1000);
$('.orbit .gravity-tesla').fadeIn(1000);
$('.orbit .gravity-mars').fadeIn(1000);
$('.orbit .gravity-jupiter').fadeIn(1000);
$('.orbit .gravity-saturn').fadeIn(1000);
$('.orbit .gravity-uranus').fadeIn(1000);
$('.orbit .gravity-neptune').fadeIn(1000)
});


//toggle switches

//give me aliens - when alien toggle siwthc initiated this will show the elements that are current hidden

$('.alientoggle').change(function(){
    if(this.checked) {
      $('.zoomcontainer').css('visibility', 'visible');
      $('#rangevalue').css('visibility', 'visible');
      $('.alien').css('opacity', '1');
      $('#dropbox1').css('visibility', 'visible');
      $('#dropbox2').css('visibility', 'visible');
      console.log('alien on');
    }
    else {
      $('.zoomcontainer').css('visibility', 'hidden');
      $('#rangevalue').css('visibility', 'hidden');
      $('.alien').css('opacity', '0');
      $('#dropbox1').css('visibility', 'hidden');
      $('#dropbox2').css('visibility', 'hidden');
      console.log('aliens off');
    }
});

//sun

$('#sunHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-sun').css('display', 'none');
  console.log('sun hide on');
    }
    else {
    $('.orbit .gravity-sun').css('display', '');
    console.log('sun hide off');
    }
});

$('#sunSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-sun').css('animation', 'spin-right 2s linear infinite');
  console.log('sun switch on');
    }
    else {
    $('.orbit .gravity-sun').css('animation', 'spin-right 20s linear infinite');
    console.log('sun switch off');
    }
});

//murcury

$('#murcuryHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-murcury').css('display', 'none');
  console.log('murcury hide on');
    }
    else {
    $('.orbit .gravity-murcury').css('display', '');
    console.log('murcury hide off');
    }
});

$('#murcurySpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-murcury').css('animation', 'spin-right 2s linear infinite');
  console.log('murcury switch on');
    }
    else {
    $('.orbit .gravity-murcury').css('animation', 'spin-right 8s linear infinite');
    console.log('murcury switch off');
    }
});

//venus

$('#venusHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-venus').css('display', 'none');
  console.log('venus hide on');
    }
    else {
    $('.orbit .gravity-venus').css('display', '');
    console.log('venus hide off');
    }
});

$('#venusSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-venus').css('animation', 'spin-right 2s linear infinite');
  console.log('venus switch on');
    }
    else {
    $('.orbit .gravity-venus').css('animation', 'spin-right 12s linear infinite');
    console.log('venus switch off');
    }
});

//earth

$('#earthHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-earth').css('display', 'none');
  console.log('earth hide on');
    }
    else {
    $('.orbit .gravity-earth').css('display', '');
    console.log('earth hide off');
    }
});

$('#earthSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-earth').css('animation', 'spin-right 2s linear infinite');
  console.log('earth switch on');
    }
    else {
		$('.orbit .gravity-earth').css('animation', 'spin-right 20s linear infinite');
		console.log('earth switch off');
    }
});

//tesla

$('#teslaHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-tesla').css('display', 'none');
  console.log('tesla hide on');
    }
    else {
    $('.orbit .gravity-tesla').css('display', '');
    console.log('tesla hide off');
    }
});

$('#teslaSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-tesla').css('animation', 'spin-right 2s linear infinite');
  console.log('tesla switch on');
    }
    else {
    $('.orbit .gravity-tesla').css('animation', 'spin-right 16s linear infinite');
    console.log('tesla switch off');
    }
});

//mars

$('#marsHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-mars').css('display', 'none');
  console.log('mars hide on');
    }
    else {
    $('.orbit .gravity-mars').css('display', '');
    console.log('mars hide off');
    }
});

$('#marsSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-mars').css('animation', 'spin-right 2s linear infinite');
  console.log('mars switch on');
    }
    else {
    $('.orbit .gravity-mars').css('animation', 'spin-right 28s linear infinite');
    console.log('mars switch off');
    }
});

//jupiter

$('#jupiterHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-jupiter').css('display', 'none');
  console.log('jupiter hide on');
    }
    else {
    $('.orbit .gravity-jupiter').css('display', '');
    console.log('jupiter hide off');
    }
});

$('#jupiterSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-jupiter').css('animation', 'spin-right 2s linear infinite');
  console.log('jupiter switch on');
    }
    else {
    $('.orbit .gravity-jupiter').css('animation', 'spin-right 48s linear infinite');
    console.log('jupiter switch off');
    }
});

//saturn

$('#saturnHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-saturn').css('display', 'none');
  console.log('saturn hide on');
    }
    else {
    $('.orbit .gravity-saturn').css('display', '');
    console.log('saturn hide off');
    }
});

$('#saturnSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-saturn').css('animation', 'spin-right 2s linear infinite');
  console.log('saturn switch on');
    }
    else {
    $('.orbit .gravity-saturn').css('animation', 'spin-right 60s linear infinite');
    console.log('saturn switch off');
    }
});

//uranus

$('#uranusHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-uranus').css('display', 'none');
  console.log('uranus hide on');
    }
    else {
    $('.orbit .gravity-uranus').css('display', '');
    console.log('uranus hide off');
    }
});

$('#uranusSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-uranus').css('animation', 'spin-right 2s linear infinite');
  console.log('uranus switch on');
    }
    else {
    $('.orbit .gravity-uranus').css('animation', 'spin-right 70s linear infinite');
    console.log('uranus switch off');
    }
});

//neptune

$('#neptuneHide').change(function(){
    if(this.checked) {
          $('.orbit .gravity-neptune').css('display', 'none');
  console.log('neptune hide on');
    }
    else {
    $('.orbit .gravity-neptune').css('display', '');
    console.log('neptune hide off');
    }
});

$('#neptuneSpeed').change(function(){
    if(this.checked) {
          $('.orbit .gravity-neptune').css('animation', 'spin-right 2s linear infinite');
  console.log('neptune switch on');
    }
    else {
    $('.orbit .gravity-neptune').css('animation', 'spin-right 90s linear infinite');
    console.log('neptune switch off');
    }
});

//Remove fadeout for page load fade

$(function() {
    $('body').removeClass('fade-out');
});


  /*---------magnify slider for hubble telescope */ 

// var magnify = 4;

//   var magnifyrangeInput = document.getElementById("magnifyrangeinput");
//   magnifyrangeInput.addEventListener('change', function() { console.log(magnifyrangeinput.value)});

//       rangeInput.addEventListener('change', function() {

//         magnify = this.value;

//         $('.img-magnifier-glass').css('width', magnify);
//         $('.img-magnifier-glass').css('height', magnify);

//   });


 /*zoom slider for aliens speed and qty */

var alienspeed = 1; //sets current alien speed at 1


  var rangeInput = document.getElementById("rangeinput"); 
  rangeInput.addEventListener('change', function() { console.log(rangeinput.value)});

      rangeInput.addEventListener('change', function() { //listen for changes in rangeInput whic is ranngeinput above

        alienspeed = this.value; //assign alien speed var new speed fomr range slider

      if (this.value > 20) { //if te new speed is higher than 20 (slider goes to 25) then issue an allert
          alert("Hyperspeeeeeeeeed !");
      } 
      //else{
      //     alert("put other speed text here");
      // }

  });


//--------alien spaceship movements ----------


var intense = 3; //2nd speed element for alien when near his treasure

    var l = $(window).height() - 50; //assign new hights for drag and drop boxes
    var b = $(window).width() - 50;

    var zz = $(window).height() - 700;
    var yy = $(window).width() - 700;

    var zz = $('#dropbox1').height();
    var yy = $('#dropbox1').width();


    $('#dropbox1').hover(function (){ //on hover of drag and drop box increase alien intensity so it speeds up relative to current speed
    console.log(intense);
    l = zz;
    b = yy;
    aliens = 20;


    }, function(){ //when not in treasure area change the intensity back to lower level
    l = $(window).height() - 50;
    b = $(window).width() - 50;
    intense = 2; 
    });

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)

    var nh = Math.floor(Math.random() * l); //move alien at random height around the page
    var nw = Math.floor(Math.random() * b); //move alien at random width across the page
    
    return [nh,nw];    
    
}

function animateDiv(){ //animate the movement sof the alien and take into account the above windown heights for operation
    var newq = makeNewPosition();
    var oldq = $('.alien').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.alien').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

  /*input speed changer for alien*/

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.4 * alienspeed*intense; //change this with a slider to make it go faster

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

animateDiv();

$( document ).ready(function() //I know this shoul wrap the whole code. My background was a large image and should have put a onload screen :/
{console.log( "I am ready!" );
});

