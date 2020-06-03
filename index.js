

$(".column1").mouseenter(function(){$("#logovideo").fadeIn();
                                    $("#logovideo").get(0).play();});
$(".column1").mouseout(function(){$("#logovideo").fadeOut();});


$(".column2").mouseenter(function(){$("#img-container").fadeIn();});
$(".column2").mouseout(function(){$("#img-container").fadeOut();});


$(".column3").mouseenter(function(){$("#drone1").fadeIn();
                                    $("#drone1").prop('muted', true);
                                      $("#drone1").get(0).play();});
$(".column3").mouseout(function(){$("#drone1").fadeOut();});


$(".column4").mouseenter(function(){$("#objvideo").fadeIn();
                                      $("#objvideo").get(0).play();});
$(".column4").mouseout(function(){$("#objvideo").fadeOut();});

$("document").ready (function(){$("#flairvideo")[0].play();});
