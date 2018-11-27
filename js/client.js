$(document).ready(function() {
    
    //Retrieve the HTML list from the server.
    $('#g').click(function(e) { 
    
        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning HTML list...");
        
        $.ajax({ 
        url: "/ajax-GET-list",
        dataType: "html",
        type: "GET",
        data: {format: "list-html"}, //Used in the app itself to determine what sort of list it is.
        
        //Do this if all is well.
        success: function(data) {
            console.log("Success!:", data);
            $("#heresy").html(data);
        },
        
        //Do this if all is whatever the opposite of "well" is.
        error: function(jqXHR, textStatus, errorThrown) {
            $("#heresy").text(jqXHR.statusText); //Apparently, jqXHR handles callback requests. Neat!
            console.log("Error!: ", jqXHR, textStatus, errorThrown);
        }
        
        });
    
    });
    
    //Retrieve the JSON list from the server. Pretty similar to what's above, but just a bit different.
    $('#pg').click(function(e) { 
    
        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning JSON list...");
        
        $.ajax({ 
        url: "/ajax-GET-list",
        dataType: "json",
        type: "GET",
        data: {format: "list-json"}, //Used in the app itself to determine what sort of list it is.
        
        //Do this if all is well.
        success: function(data) {
            console.log("Success!:", data);
            
            //Use a for loop to create a list out of the JSON.
            var target = $("#heresy");
            let newList = "<ul>";
            for (let i = 0; i < data.length; i++) {
                newList += "<li>" + data[i] + "</li>";
            }
            newList += "</ul>"; //Cap off the list.
            target.html(htmlStr);
        },
        
        //Do this if all is whatever the opposite of "well" is.
        error: function(jqXHR, textStatus, errorThrown) {
            $("#heresy").text(jqXHR.statusText); //Apparently, jqXHR handles callback requests. Neat!
            console.log("Error!: ", jqXHR, textStatus, errorThrown);
        }
        
        });
    
    });
});