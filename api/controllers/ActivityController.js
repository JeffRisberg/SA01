module.exports = {
  index: function (req, res) {
    var activities = ["Dance", "Joke", "Sleep", "Sing", "Play Games"];
    var data = {name: "LooLoo", activities: activities};
    return res.view(data);
  },
  hi: function (req, res) {
    return res.send("Hi there!");
  },
  bye: function (req, res) {
    return res.send("Good bye!");
  }
};

