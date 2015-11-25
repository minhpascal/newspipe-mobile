// Define application object and common functions.
var app = (function()
{
    // Application object.
    var app = {};

    app.v2_API = "https://jarr.herokuapp.com/api/v2.0/";
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

    app.date_to_day = function(date) {
        dateObj = new Date(date.replace(' ', 'T'));
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        return year + "/" + month + "/" + day;
    }

    // Converts HTML to text using JavaScript
    app.html2text = function(html) {
        var tag = document.createElement('div');
        tag.innerHTML = html;
        return tag.innerText;
    }

    app.load = function(service, load_objects, list_id) {
        $.ajax({
            type: 'GET',
            url: app.v2_API + service,
            contentType: "application/json",
            dataType: "json",
            timeout: 15000,
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
                $("#"+list_id).empty();
                if (objects.length != 0) {
                    load_objects(objects, list_id);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $("#"+list_id).empty();
                if (errorThrown == "UNAUTHORIZED") {
                    $("#"+list_id).append('<li>' +
                                '<div class="collapsible-header">' +
                                    '<a href="signin.html" class="modal-trigger">Log in.</a>' +
                                '</div>' +
                            '</li>');
                }
                else if (errorThrown == "timeout") {
                    $("#"+list_id).append('<li>' +
                                '<div class="collapsible-header">' +
                                    'Problem when retrieving information.' +
                                '</div>' +
                            '</li>');
                }
                else {
                    $("#"+list_id).append('<li>' +
                                '<div class="collapsible-header">' +
                                    'Problem when retrieving information.' +
                                '</div>' +
                            '</li>');
                }
            }
        });
    }

    app.update_article = function(article_id, data) {
        $.ajax({
            type: 'PUT',
            url: app.v2_API + "article/" + article_id,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " +
                        btoa(window.localStorage.getItem("nickname")
                            + ":" +
                            window.localStorage.getItem("password")));
            },
            success: function (result) {
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
            }
        })
    }

    // ------------- Initialisation ------------- //

    document.addEventListener('deviceready', onDeviceReady, false);

    // ------------- Return application object ------------- //

    return app;
})();
