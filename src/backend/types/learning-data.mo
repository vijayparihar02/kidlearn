module {
  public type AlphabetEntry = {
    letter : Text;
    word : Text;
    emoji : Text;
  };

  public type NumberEntry = {
    value : Nat;
    wordLabel : Text;
    emoji : Text;
  };

  public type AnimalEntry = {
    name : Text;
    emoji : Text;
    sound : Text;
  };

  public type QuizQuestion = {
    questionText : Text;
    options : [Text];
    correctIndex : Nat;
    category : Text;
  };
};
