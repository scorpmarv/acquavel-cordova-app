(function ($) {
    var actividades;
    $( document ).ready(function() {
        var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
        console.log(retrievedObject);

        $.ajax({
            url: "http://10.0.2.15:8000/api/actividades/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                var actividadesJSON = JSON.stringify(result);
                localStorage.setItem('actividades', actividadesJSON);
                console.log(result);
                actividades = result;
                loadCalendar();
            },
            error: function (xhr, ajaxOptions, thrownError) { console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
            }
        });

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
