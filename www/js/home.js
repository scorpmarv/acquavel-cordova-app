(function ($) {
    $( document ).ready(function() {
        var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
        console.log(retrievedObject);

        $.ajax({
            url: "http://10.0.2.15:8000/api/actividades/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                var actividadesJSON = JSON.stringify(result);
                localStorage.setItem('actividades', JSON.stringify(actividadesJSON));
                console.log(result);
                loadCalendar();
            },
            error: function (xhr, ajaxOptions, thrownError) { console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
            }
        });
    });


    function loadCalendar(){
        /*$('#calendar').fullCalendar({
            header: {
                left:   '',
                center: 'title',
                right:  ''
            },
            defaultView: 'agendaWeek',

        });*/

        var start = new Date();
        var end = new Date();
        start.setFullYear(1960);
        end.setFullYear(2999);
        var events = [];

        function testFunc() {
            // When requested, dynamically generate a
            // repeatable event for every monday.
            
            var monday = 1;
            var one_day = (24 * 60 * 60 * 1000);
            var start = new Date();
            var end = new Date();
            start.setMonth(start.getMonth() - 1);
            end.setFullYear(start.getFullYear() + 1);

            for (loop = start.getTime();
                 loop <= end.getTime();
                 loop = loop + one_day) {

                var column_date = new Date(loop);

                if (column_date.getDay() == monday) {
                    // we're in Moday, create the event
                    events.push({
                        title: 'Morning Meeting',
                        start: new Date(column_date.setHours(10, 00)),
                        end: new Date(column_date.setHours(10, 40)),
                        allDay: false
                    });
                }
            } // for loop

            // return events generated
            //console.log(JSON.stringify(events));
        }

        testFunc();


        $('#calendar').fullCalendar({
            header: {
                left:   '',
                center: 'title',
                right:  ''
            },
            defaultView: 'agendaWeek',    
            events: [
                {
                    title: 'Test',
                    start: '2015-07-17T10:26:09+00:00',
                    end: '2015-07-17T10:30:09+00:00',
                    allDay: false,
                },
            ],
        });
    }
}(jQuery));

