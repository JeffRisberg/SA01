module.exports = {
  index: function (req, res) {
    var questions = ["What is your name?", 
                     "What is your quest?",
                     "What is your favorite color?"];
    var answers = ["King Arthur", "I seek the grail", "blue"];

    var data = {questions: questions, answers: answers};
    
    return res.view(data);
  }
};

