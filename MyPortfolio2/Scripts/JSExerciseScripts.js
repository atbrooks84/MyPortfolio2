$(function () {






    //Factorial script
    $("#btn4").click(function () {

        var number = +$("#fact").val();

        if (number > 170) {

            alert("170 or less only there, champ.")
            $("#fact").val("")
            return;
        }

        for (var loop = number - 1; loop > 1; loop--) {
            number *= loop;

        }
        $("#factoutresult").text("THE FACT(orial) IS");
        $("#factOut").text(number);
    })

    $("#factCode").hide();
    $("#btn5").click(function () {
        $("#factCode").toggle();

    })


    $("#btn6").click(function () {
        $("#fact").val("");
        $("#factOut").text("");
    })


    //Math script
    $("#btn1").click(function () {

        var num1 = +$("#mathnum1").val();
        var num2 = +$("#mathnum2").val();
        var num3 = +$("#mathnum3").val();
        var num4 = +$("#mathnum4").val();
        var num5 = +$("#mathnum5").val();

        var sum = num1 + num2 + num3 + num4 + num5
        var product = num1 * num2 * num3 * num4 * num5
        var lowest = Math.min(num1, num2, num3, num4, num5)
        var highest = Math.max(num1, num2, num3, num4, num5)
        var average = sum / 5

        $("#boom").text("BOOM!")
        $("#sum").text("The sum is: " + sum + ". Yippee!")
        $("#product").text("The product is: " + product + ". Horray!")
        $("#lowest").text("The lowest is: " + lowest + ". Yahoo!")
        $("#highest").text("The highest is: " + highest + ". Fantastic!")
        $("#average").text("The average is: " + average + ". Supurb!")

    })

    $("#mathCode").hide();
    $("#btn2").click(function () {
        $("#mathCode").toggle();
    })


    $("#btn3").click(function () {
            $(".output").text("");
            $("#mathnum1, #mathnum2, #mathnum3, #mathnum4, #mathnum5").val("")
    })
    

    //FizzBuzz Script

    $("#btn10").click(function () {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();
        var num4 = $("#num4").val();

        for (var counter = num3, array = [], fizz = 0, buzz = 0; counter <= num4; counter++) {

            fizz = counter % num1;
            buzz = counter % num2;

            if (!fizz && !buzz)
                array.push("<span class='fizzbuzz'>FizzBuzz</span>")
            else if (!fizz)
                array.push("<span class='fizz'>Fizz</span>")
            else if (!buzz)
                array.push("<span class='buzz'>Buzz</span>")
            else
                array.push("<span class='counter'>" + counter + "</span>")

        }
        var output = array.join(', ');
        $("#fbOut").html(output);


    })
    $("#codeFB").hide();
    $("#btn11").click(function () {
        $("#codeFB").toggle();
    })
    $("#btn12").click(function () {
        $("#fbOut").text("");
        $("#num1, #num2, #num3, #num4").val("")
    })

    //palindrome script


    $("#btn7").click(function () {
        var word = $("#palIn").val();
        var word2 = $("#palIn").val();
        var word3 = $("#palIn").val();
        word = word.toLowerCase().replace(/\s/g, '');

        var revword = word.split('').reverse().join('');

        if (word == revword) {

            message = word3 + " reversed is " + word3 + " so its a palindrome!";
        }
        else {
            word2 = word2.split('').reverse().join('');

            message = word3 + " reversed is not " + word2 + " so it isn't a palindrome!"
        }

        $("#palOut").text(message)

    })


    $("#palCode").hide();
    $("#btn8").click(function () {
        $("#palCode").toggle();
    })



    $("#btn9").click(function () {
        $("#palIn").val("");
        $('#palOut').text("");
    })

    //sum of all fear script
    $("#btn13").click(function () {

        var myArray = new Array();

        myArray.push(+$("#soafnum1").val());
        myArray.push(+$("#soafnum2").val());
        myArray.push(+$("#soafnum3").val());
        myArray.push(+$("#soafnum4").val());
        myArray.push(+$("#soafnum5").val());
        myArray.push(+$("#soafnum6").val());

        var kValue = +$("#soafnum7").val();
        for (index = 0, found = false; index < myArray.length - 1; index++) {
            var position = myArray.indexOf(kValue - myArray[index], index + 1);
            if (position > 0) {
                found = true;
                break;
            }
        }

        if (found) {
            $("#sfOut").html("<b>" + kValue + "</b> was found by adding array members " + "<span class='target'>" + myArray[index] + "</span> and <span class='target'>" + myArray[position] + "</span>");
            return;
        }
        else {

            $("#sfOut").text("K was not found!");
        }


    })

    $("#sumCode").hide();
    $("#btn14").click(function () {
        $("#sumCode").toggle();
    })

    $("#btn15").click(function () {
        $("#sfOut").text("");
        $("#num1, #num2,#num3,#num4,#num5,#num6,#num7").val("");


    })




})