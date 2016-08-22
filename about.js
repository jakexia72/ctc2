$(document).ready(function () {
    var sendMail = function (body) {
        window.location.href = "mailto:info@changethroughcode.com?body=" + body;
    };

    var indexOfMax = function (arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var b = 1; b < arr.length; b++) {
            //console.log("count" + b)
            //console.log(arr[b]);
            //console.log(max);
            if (arr[b] > max) {
                max = arr[b];
                maxIndex = b;
                //console.log("hi  " + b);
            }
            //console.log("m" + max)
            //console.log("i" + maxIndex)
        }
        return maxIndex;
    };
    var provideAns = function (ans) {
        $("#incorrectAnswer").fadeOut(400);
        $("#questionAnswer").fadeOut(400, function () {
            $("#questionAnswer").html(ans);
            $("#questionAnswer").fadeIn(800, function () {
                $("#incorrectAnswer").animate({
                    marginTop: 40
                }, {
                    queue: false,
                    duration: 800
                });
                $("#incorrectAnswer").html("Didn't really answer your question? Send us an email here.");
                $("#incorrectAnswer").fadeIn(1000);
            });
        });
    };
    //Change Through Code was formed in June 2016 as a response to engage programmers into communal problems."

    var answersArray = ["Like many regions, Ontario is burdenned and taxed with problems that affects those who calls it home (if you can even get home from the traffic). And an inspiration came after we realized that people who virtually marries their computer all day, has the potential to look at the community in a broader scalle and make a lasting difference.", "Change through Code was formed in July 2016", "Change through Code was CoFounded by Curtis Chong and Jake Xia."];
    //0 = why change through code was formed
    //1 = when was it formed
    //2 = who formed it


    document.getElementById('questionIn').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {

            var answerArray = [0, 0, 0];

            var question = $("#questionIn").val().toLowerCase();
            if (question.indexOf("why") != -1) {
                answerArray[0]++;
            }
            if (question.indexOf("form") != -1) {
                answerArray[0]++;
                answerArray[1]++;
                answerArray[2]++;
            }
            if (question.indexOf("when") != -1) {
                answerArray[1]++;
            }
            if (question.indexOf("who") != -1) {
                answerArray[2]++;
            }
            $("#aboutMoreInfo").animate({
                marginTop: 70
            }, {
                queue: false,
                duration: 500
            });
            console.log(answerArray);
            if ((answerArray[0] == 0) && (answerArray[1] == 0) && (answerArray[0] == 0)) {

                $("#incorrectAnswer").fadeOut(400);
                $("#questionAnswer").fadeOut(400, function () {
                    $("#questionAnswer").html("It seems like we can't find an answer to your question.");
                    $("#questionAnswer").fadeIn(800, function () {
                        $("#incorrectAnswer").animate({
                            marginTop: 40
                        }, {
                            queue: false,
                            duration: 800
                        });
                        $("#incorrectAnswer").html("But send us an email here if you want to know more.");
                        $("#incorrectAnswer").fadeIn(1000);
                    });
                });
            } else {
                console.log(answerArray);
                console.log(indexOfMax(answerArray));
                provideAns(answersArray[indexOfMax(answerArray)]);
            }
        }
    }




    $("#incorrectAnswer").on("click", function () {
        sendMail($("#questionIn").val());
    });
    /*if (document.body.clientWidth < 500) {
        $("#theTeam").css("height", $("#curtisCard").height() * 2 + 380);
    } else if (document.body.clientWidth < 800) {
        $("#theTeam").css("height", $("#curtisCard").height() * 2 + 270);
    } else {
        $("#theTeam").css("height", $("#curtisCard").height() + 100);
    }*/



    var emailLoc = $("#questionIn").offset().top;
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            var emailWidth = 180;
            if ($("#inquiry").width() / 2 > 180) {
                emailWidth = $("#inquiry").width() / 2;
            }
            if ($(this).scrollTop() > emailLoc - screen.height + 180) {
                $("#questionIn").animate({
                    width: emailWidth,
                    queue: false
                }, 1200);
            }

        });
    });
    $("#aboutIntroP").fadeIn(700);
    setInterval(function () {
        $("#jakeCard").fadeTo(700,1);
        $("#jakeCard").animate({
            marginTop: 0
        }, {
            queue: false,
            duration: 800
        });
    }, 900);
    setInterval(function () {
        $("#curtisCard").fadeTo(700,1);
        $("#curtisCard").animate({
            marginTop: 0
        }, {
            queue: false,
            duration: 800
        });
    }, 1300);

});
