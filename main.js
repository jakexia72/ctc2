$(document).ready(function () {
    $("#mainImage").css("height", screen.height - 101);

    if (document.body.clientWidth < 500) {
        //handle ctc title animation
        $(".tspan").css("font-size", "21px");

    }
    //$("#introImg").css("height","500");
    var fadeInCTC = function () {
        $("#t1").fadeTo(1900, 1);
        $("#t2").fadeTo(660, 1);
        $("#t3").fadeTo(500, 1);
        $("#t4").fadeTo(800, 1);
        $("#t5").fadeTo(1700, 1);
        $("#t6").fadeTo(600, 1);
        $("#t7").fadeTo(800, 1);
        $("#t8").fadeTo(1300, 1);
        $("#t9").fadeTo(800, 1);
        $("#t10").fadeTo(2000, 1);
        $("#t11").fadeTo(950, 1);
        $("#t12").fadeTo(700, 1);
        $("#t13").fadeTo(2900, 1);
        $("#t14").fadeTo(900, 1);
        $("#t15").animate({
            top: 500,
            queue: false
        }, 200);
        $("#t15").fadeTo(1300, 1);
        $("#t16").fadeTo(1200, 1);
        $("#t17").fadeTo(800, 1);
    };

    $("#introTextP").css("top", window.innerHeight + 130);

    $("#homepageFront").css("height", window.innerHeight);
    $("#logoIcon").fadeIn(1600);
    $("#logoIcon").css("top", (window.innerHeight / 2) - 100);
    $("#logoIcon").css("left", (window.innerWidth / 2) - 50);
    $("#logoText").css("top", ((window.innerHeight / 2) - 55));
    //$("#logoText").css("top", ((window.innerHeight/2)-50));

    var nameWidth = $("#nameWidth").width();

    setTimeout(function () {
        if (document.body.clientWidth > 500) {
            $("#logoIcon").animate({
                left: window.innerWidth / 2 - nameWidth / 2 - 75
            }, {
                queue: false
            });

            $("#logoText").animate({
                right: 0,
                queue: false
            }, {
                queue: false
            });
            fadeInCTC();

            setTimeout(function () {
                $("#logoIcon").fadeOut(2500);
            }, 1200);
        } else {
            setTimeout(function () {
                $("#logoIcon").fadeOut(2500);
            }, 600);
            $("#logoText").css("top", window.innerHeight / 2 - 50);
            $("#logoText").css("right", 0);
            fadeInCTC();
        }

    }, 2000);

    //makes navbar responsive
    setInterval(function () {


        if ($("#bs-example-navbar-collapse-1").attr("aria-expanded") == true) {
            alert("true");
        }
    }, 300);
    var sendMail = function (body) {
        window.location.href = "mailto:info@changethroughcode.com?body=" + body;
    };



    // hide .navbar first
    $(".navbar").hide();


    var emailLoc = $("#emailform").offset().top;
    console.log(emailLoc);
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > screen.height - 120) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
            
            
            if ($(this).scrollTop() > screen.height - 600) {

                $('#introTextP').animate({ top: window.innerHeight+210,opacity: 1}, 'slow');
                
            }
            var emailWidth = 240;
            if ($("#emailCon").width() / 2 > 240) {
                emailWidth = $("#emailCon").width() / 2;
            }
            if ($(this).scrollTop() > emailLoc - screen.height + 180) {
                $("#emailform").animate({
                    width: emailWidth,
                    queue: false
                }, 1200);
            }


        });
    });

    document.getElementById('emailform').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            sendMail($('#emailform').val());
        }
    }
});
