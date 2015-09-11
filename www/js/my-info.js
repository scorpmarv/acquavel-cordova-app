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
        var today = new Date();
        var rev_year = userData.rev_medica.split('-')[0];
        var rev_month = userData.rev_medica.split('-')[1];
        var rev_day = userData.rev_medica.split('-')[2];
        var dateRev = new Date(rev_year,rev_month-1,rev_day);
        var diffDateRev = (dateRev-today)/1000/60/60/24;
        if (diffDateRev < 0) {
            $('#bubbles').append('<p class="speach-left red-bubble">Recuerde que su revisación médica ha vencido el día: '+rev_day+'/'+rev_month+'/'+rev_year+'</p><div class="clear"></div>');
        }
        else {
            $('#bubbles').append('<p class="speach-left">Recuerde renovar su revisación médica antes del día: '+rev_day+'/'+rev_month+'/'+rev_year+'</p><div class="clear"></div>');
        }
        $.each(userData.planes, function (key,value){
            var year = value.final.split('-')[0];
            var month = value.final.split('-')[1];
            var day = value.final.split('-')[2];
            var theDate = new Date(year,month-1,day);
            var diffDates = (theDate-today)/1000/60/60/24;
            $('#bubbles').append('<p class="speach-left blue-bubble">Te quedan '+value.clases_restantes+' clases en el plan '+value.plan.descripcion+'</p><div class="clear"></div>');
            if (diffDates <= 15) {
                $('#bubbles').append('<p class="speach-left green-bubble">Recuerde que su plan vence el dia '+day+'/'+month+'/'+year+'</p><div class="clear"></div>');
            }
        });
    }
}(jQuery));
