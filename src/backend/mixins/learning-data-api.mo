import Types "../types/learning-data";
import LearningDataLib "../lib/learning-data";

mixin () {
  public query func getAlphabet() : async [Types.AlphabetEntry] {
    LearningDataLib.getAlphabet()
  };

  public query func getNumbers() : async [Types.NumberEntry] {
    LearningDataLib.getNumbers()
  };

  public query func getAnimals() : async [Types.AnimalEntry] {
    LearningDataLib.getAnimals()
  };

  public query func getQuizQuestions() : async [Types.QuizQuestion] {
    LearningDataLib.getQuizQuestions()
  };
};
