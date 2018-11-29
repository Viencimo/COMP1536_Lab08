$(document).ready(function() {

    //Retrieve the HTML list from the server.
    $('#g').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning HTML list...");
        showG();
    });

    $('#menuG').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning HTML list...");
        showG();
    });

    $('#pg13').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning HTML list...");
        showPG13();
    });

    $('#menuPG13').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning HTML list...");
        showPG13();
    });



    function showG() {
      $.ajax({
      url: "/ajax-GET-list",
      dataType: "html",
      type: "GET",
      data: {format: "html-list", listNum: "1"}, //Used in the app itself to determine what sort of list it is.

      //Do this if all is well.
      success: function(data) {
          console.log("Success!:", data);
          $("#mainContent").fadeOut(500);
          setTimeout(function(){
            $("#mainContent").html(data);
          }, 500);
          $("#mainContent").fadeIn(500);
      },

      //Do this if all is whatever the opposite of "well" is.
      error: function(jqXHR, textStatus, errorThrown) {
          $("#mainContent").text(jqXHR.statusText); //Apparently, jqXHR handles callback requests. Neat!
          console.log("Error!: ", jqXHR, textStatus, errorThrown);
      }

      });
    }

    function showPG13() {
      $.ajax({
      url: "/ajax-GET-list",
      dataType: "html",
      type: "GET",
      data: {format: "html-list", listNum: "2"}, //Used in the app itself to determine what sort of list it is.

      //Do this if all is well.
      success: function(data) {
          console.log("Success!:", data);
          $("#mainContent").fadeOut(500);
          setTimeout(function(){
            $("#mainContent").html(data);
          }, 500);
          $("#mainContent").fadeIn(500);
      },

      //Do this if all is whatever the opposite of "well" is.
      error: function(jqXHR, textStatus, errorThrown) {
          $("#mainContent").text(jqXHR.statusText); //Apparently, jqXHR handles callback requests. Neat!
          console.log("Error!: ", jqXHR, textStatus, errorThrown);
      }

      });
    }


    //Retrieve the JSON list from the server. Pretty similar to what's above, but just a bit different.
    $('#pg').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning JSON list...");
        showPG();
    });

    $('#menuPG').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning JSON list...");
        showPG();
    });

    $('#r').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning JSON list...");
        showR();
    });

    $('#menuR').click(function(e) {

        //Prevent the anchor from ruining its own day
        e.preventDefault();
        console.log("Spawning JSON list...");
        showR();
    });

    function showPG() {
      $.ajax({
      url: "/ajax-GET-list",
      dataType: "json",
      type: "GET",
      data: {format: "json-list", listNum2: "1"}, //Used in the app itself to determine what sort of list it is.

      //Do this if all is well.
      success: function(data) {
          console.log("Success!:", data);

          //Use a for loop to create a list out of the JSON.
          var target = $("#mainContent");
          let newList = "<h1 id='listTitle' class='header'>PG-rated Movie Showings</h1>"
          newList += "<div id='line'></div>"
          newList += "<ul id='list' class='content'>";
          for (let i = 0; i < data.length; i++) {
              newList += "<p>" + data[i] + "</p>";
          }
          newList += "</ul>"; //Cap off the list.
          $("#mainContent").fadeOut(500);
          setTimeout(function(){
            target.html(newList);
          }, 500);
          $("#mainContent").fadeIn(500);
      },

      //Do this if all is whatever the opposite of "well" is.
      error: function(jqXHR, textStatus, errorThrown) {
          $("#mainContent").text(jqXHR.statusText); //Apparently, jqXHR handles callback requests. Neat!
          console.log("Error!: ", jqXHR, textStatus, errorThrown);
      }

      });
    }

    function showR() {
      $.ajax({
      url: "/ajax-GET-list",
      dataType: "json",
      type: "GET",
      data: {format: "json-list", listNum2: "2"}, //Used in the app itself to determine what sort of list it is.

      //Do this if all is well.
      success: function(data) {
          console.log("Success!:", data);

          //Use a for loop to create a list out of the JSON.
          var target = $("#mainContent");
          let newList = "<h1 id='listTitle' class='header'>R-rated Movie Showings</h1>"
          newList += "<div id='line'></div>"
          newList += "<ul id='list' class='content'>";
          for (let i = 0; i < data.length; i++) {
              newList += "<p>" + data[i] + "</p>";
          }
          newList += "</ul>"; //Cap off the list.
          $("#mainContent").fadeOut(500);
          setTimeout(function(){
            target.html(newList);
          }, 500);
          $("#mainContent").fadeIn(500);
      },

      //Do this if all is whatever the opposite of "well" is.
      error: function(jqXHR, textStatus, errorThrown) {
          $("#mainContent").text(jqXHR.statusText); //Apparently, jqXHR handles callback requests. Neat!
          console.log("Error!: ", jqXHR, textStatus, errorThrown);
      }

      });
    }
});
