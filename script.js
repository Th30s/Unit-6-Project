$(".theFuture").click(function(){
    var userInput1 = parseInt($(".sleep").val());
    var userInput2 = $(".car").val();
    var userInput3 = $(".dead").val();
    var userInputMath = (2050-2019)*365*userInput1;
    $(".results").text("By the year 2050, you wil have slept "+ userInputMath+" hours since 2019. You will have forgotten about your dreams of getting an "+userInput2+" as the burdens of life have eaten at your dreams of success. You will have most likely reach your goal of being "+userInput3+" but a small mistake will have cost you dreams. But you will be happy with your life and have no regrets as to the choices you made over the years. You will be happy."); 
    });