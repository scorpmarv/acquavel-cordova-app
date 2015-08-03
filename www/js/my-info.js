(function ($) {
    var userData;
    $( document ).ready(function() {
        var thisTime = new Date().getTime();
        if ((thisTime - localStorage.getItem('setLocalStorageTime')) >= 86400000){
            localStorage.clear();
        }

        userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            loadData();
        } else {
            window.location="login.html";
        }
    });


    function loadData(){
        console.log(userData);
        $.each(userData.planes, function (key,value){
            var today = new Date();
            var year = value.final.split('-')[0];
            var month = value.final.split('-')[1];
            var day = value.final.split('-')[2];
            var theDate = new Date(year,month-1,day);
            var diffDates = (theDate-today)/1000/60/60/24;
            console.log(diffDates<15);
            $('#bubbles').append('<p class="speach-left blue-bubble">Te quedan '+value.clases_restantes+' clases</p><div class="clear"></div>');
            if (diffDates <= 15) {
                $('#bubbles').append('<p class="speach-left green-bubble">Recuerde que su plan vence el dia '+day+'/'+month+'/'+year+'</p><div class="clear"></div>');
            }
        });
    }
}(jQuery));
