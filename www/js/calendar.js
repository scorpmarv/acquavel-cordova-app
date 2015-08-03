(function ($) {
    var actividades;
    $( document ).ready(function() {
        var thisTime = new Date().getTime();
        if ((thisTime - localStorage.getItem('setLocalStorageTime')) >= 86400000){
            localStorage.clear();
        }

        actividades = JSON.parse(localStorage.getItem('actividades'));

        if (actividades && (actividades.length != 0)) {
            loadCalendar();
            console.log('if');
            $("#debug").append('<div>IF</div>');
        } else {
            console.log('else');
            $("#debug").append('<div>ELSE</div>');
            $.ajax({
                url: "http://acquavel.herokuapp.com/api/actividades/?format=json",
                dataType: "json",
                async: true,
                success: function (result) {
                    $("#debug").append('<div>SUCCESS</div>');
                    var actividadesJSON = JSON.stringify(result);
                    localStorage.setItem('actividades', actividadesJSON);
                    console.log(result);
                    actividades = result;
                    loadCalendar();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
                    $("#debug").append('<div>ERROR</div>');
                }
            });
        }



        $('.calendar-titles').on('click', 'a', function (e){
            if (!$(this).hasClass('selected-day')) {
                $(this).parent().children('a').removeClass('selected-day');
                $('.calendar-hours').addClass('hidden');
                $(this).addClass('selected-day');
                $('.extended-calendar').find('.'+$(this).attr('dia')+'-calendar').removeClass('hidden');
            }
        });

    });


    function loadCalendar(){
        $.each(actividades, function (key,value){
            var description = value.descripcion;
            console.log('Descripcion: ' + description);
            $.each(value.horarios, function (key, value){
                var day = value.dia.toLowerCase();
                var startHour = parseInt(value.desdehora);
                var endHour = parseInt(value.hastahora);
                console.log('Dia: ' + day + '  Hora 1: ' + startHour + '  Hora 2: ' + endHour);
                $('.' + day + '-calendar').find('.hour-' + startHour).append('<em>' + description + '</em>');
            });
        });
    }
}(jQuery));
