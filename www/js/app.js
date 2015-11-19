// Define application object and common functions.
var app = (function()
{
    // Application object.
    var app = {};

    app.v2_API = "https://pyaggr3g470r.herokuapp.com/api/v2.0/";
    //app.v2_API = "http://127.0.0.1:5000/api/v2.0/";

    // ------------- Private helper function ------------- //

    function onDeviceReady()
    {
        // TODO: Add functionality if needed.
        //hyper.log('onDeviceReady')
    }

    // ------------- Application functions ------------- //
    app.date_to_hour = function(date) {
        return new Date(date.replace(' ', 'T')).toLocaleString('en-US', { hour12: false });
    }

    app.load = function(service, load_objects, list_objects, data) {
        $.ajax({
            type: 'GET',
            url: app.v2_API + service,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " +
                        btoa(window.localStorage.getItem("nickname")
                            + ":" +
                            window.localStorage.getItem("password")));
            },
            success: function (objects) {
                if (objects == undefined || objects == null) {
                    objects = [];
                }
                $("#"+list_objects).empty();
                if (objects.length != 0) {
                    load_objects(objects);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });
    }


    // ------------- Initialisation ------------- //

    document.addEventListener('deviceready', onDeviceReady, false);

    // ------------- Return application object ------------- //

    return app;

})();
