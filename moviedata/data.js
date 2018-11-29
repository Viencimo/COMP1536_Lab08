let movieHTML = "<h1 id='listTitle' class='header'>G-rated Movie Showings</h1><div id='line'></div><ul id='list' class='content'><p>Finding Nemo</p><p>Cars</p><p>Wall-E</p><p>Alladin</p><p>Toy Story</p>";

let movieHTML2 = "<h1 id='listTitle' class='header'>PG13-rated Movie Showings</h1><div id='line'></div><ul id='list' class='content'><p>Iron Man</p><p>Thor</p><p>Captain America</p><p>Black Panther</p><p>The Avengers</p>";

let movieJSON = ["The Incredibles 2", "Shrek", "Wreck-It Ralph", "Minions", "Frozen"]

let movieJSON2 = ["Logan", "Deadpool", "IT", "Saw", "Friday the 13th"]

//We're basically running these functions upon call.
module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieHTML;
  },
  getHTML2: function () {
      console.log("called: getHTML2");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieHTML2;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieJSON;
  },
  getJSON2: function () {
      console.log("called: getJSON2");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieJSON2;
  }
};
