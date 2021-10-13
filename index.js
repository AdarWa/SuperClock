var countryCode = "";
$(function(){
    $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
        var ip = data.ip;
        $.getJSON('http://ip-api.com/json/'+ip,function(data) {
            if(data.status == "success") {
                countryCode = data.countryCode.toLowerCase();
                console.log("You've detected at " + countryCode.toUpperCase());
            }
        });
    });

   updateClock();
   setInterval(updateClock,1);
});



function updateClock() {
    var DateTime = luxon.DateTime;
    var now = DateTime.now();
    var nowTime = now.toFormat('HH:mm:ss',{ locale: countryCode });
    var nowMs = now.toFormat('SSS', { locale: countryCode });
    setClockValue(nowTime);
    setMsValue(nowMs);
}

function setClockValue(value){
    $("#clock").html(value);
}
function setMsValue(value){
    $("#ms").html(value);
}



