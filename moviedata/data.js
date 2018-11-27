let movieHTML = "<ul><li>1. Iron Man</li><li>2. Thor</li><li>3. Captain America</li><li>4. Black Panther</li><li>5. The Avengers</li><li>6. Deadpool</li><li>7. Captain Marvel</li><li>8. Ant-Man</li><li>9. Guardians of the Galaxy</li><li>10. Super Thanos Kills Everyone in The Universe Ultimate Edition w/ Wrath of the Lamb DLC and Horse Armor Preorder Bonus & Knuckles Featuring Dante from the Devil May Cry Series</li></ul>";

let movieJSON = ["The Incredibles 2", "The Revenant", "IT", "Minions", "The Room", "Wreck It Ralph", "Pixels", "The Hunger Games", "Cabin in the Woods", "Harry Potter and the Absurdly Long Title of Little Importance"]

//We're basically running these functions upon call.
module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieHTML;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return movieJSON;
  }
};
