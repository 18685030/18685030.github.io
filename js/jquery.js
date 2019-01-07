$( document ).ready(function()
{console.log( "I am ready!" );

	$(".bestobs #DRACO").click(function(){
        $(".astro-pop_up1").delay(100).fadeIn(100,function(){
			console.log('animation complete')
			}
			);
    });
    $(".closeBtn").click(function(){
        $(".astro-pop_up1").fadeOut(100 );
	});


	$(".bestobs #EUDODUS").click(function(){
        $(".astro-pop_up2").delay(100).fadeIn(100,function(){
			console.log('animation complete')
			}
			);
    });
    $(".closeBtn").click(function(){
        $(".astro-pop_up2").fadeOut(100 );
	});


	$(".bestobs #ELEPHANTS").click(function(){
        $(".astro-pop_up3").delay(100).fadeIn(100,function(){
			console.log('animation complete')
			}
			);
    });
    $(".closeBtn").click(function(){
        $(".astro-pop_up3").fadeOut(100 );
	});


	$(".bestobs #MESSIER").click(function(){
        $(".astro-pop_up4").delay(100).fadeIn(100,function(){
			console.log('animation complete')
			}
			);
    });
    $(".closeBtn").click(function(){
        $(".astro-pop_up4").fadeOut(100 );
	});

});













