var button = $(".saveButn");

$(document).ready(function(){
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);

    function currentTime(){
        var current = moment().hours();
        var time = $(".time-block");
        time.each(function() {
            var hour = parseInt($(this).attr("id"));
            if (hour === current){
                $(this).children(".col-sm-10").attr("class", "present col-sm-10 description");
            } else if (current > hour){
                $(this).children(".col-sm-10").attr("class", "past col-sm-10 description"); 
            } else {
                $(this).children(".col-sm-10").attr("class", "future col-sm-10 description");
            }
        })
    };
    currentTime();

    button.on("click", function(event) {
        event.preventDefault();
        var text = $(this).siblings(".col-sm-10").val().replace(parent);
        var parent = $(this).parent().attr("id");

        localStorage.setItem(parent, JSON.stringify(text));
    });

$("#9 textarea").val(JSON.parse(localStorage.getItem("9")));
$("#10 textarea").val(localStorage.getItem("10").replace(/[""]+/g, ""));
$("#11 textarea").val(localStorage.getItem("11").replace(/[""]+/g, ""));
$("#12 textarea").val(localStorage.getItem("12").replace(/[""]+/g, ""));
$("#13 textarea").val(localStorage.getItem("13").replace(/[""]+/g, ""));
$("#14 textarea").val(localStorage.getItem("14").replace(/[""]+/g, ""));
$("#15 textarea").val(localStorage.getItem("15").replace(/[""]+/g, ""));
$("#16 textarea").val(localStorage.getItem("16").replace(/[""]+/g, ""));
$("#17 textarea").val(localStorage.getItem("17").replace(/[""]+/g, ""));
});
