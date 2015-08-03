(function ($) {
    $( document ).ready(function() {
        $(document).on('click', '.exit-app', function(e) {
            e.preventDefault();
            navigator.app.exitApp();
        });
    });

}(jQuery));

