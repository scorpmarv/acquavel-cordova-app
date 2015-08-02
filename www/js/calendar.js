(function ($) {
    var actividades;
    $( document ).ready(function() {
        actividades = JSON.parse(localStorage.getItem('actividades'));

        if (actividades) {
            loadCalendar();
            console.log('if');
        } else {
            console.log('else');
            $.ajax({
                url: "http://acquavel.herokuapp.com/api/actividades/?format=json",
                dataType: "json",
                async: true,
                success: function (result) {
                    var actividadesJSON = JSON.stringify(result);
                    localStorage.setItem('actividades', actividadesJSON);
                    console.log(result);
                    actividades = result;
                    loadCalendar();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
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
