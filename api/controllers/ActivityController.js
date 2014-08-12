module.exports = {
  index: function (req, res) {
    var data = {name: "LooLoo"};
    return res.view(data);
  },
  hi: function (req, res) {
    return res.send("Hi there!");
  },
  bye: function (req, res) {
    return res.send("Good bye!");
  }
};

