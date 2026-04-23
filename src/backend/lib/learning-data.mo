import Types "../types/learning-data";

module {
  public func getAlphabet() : [Types.AlphabetEntry] {
    [
      { letter = "A"; word = "Apple";     emoji = "🍎" },
      { letter = "B"; word = "Ball";      emoji = "⚽" },
      { letter = "C"; word = "Cat";       emoji = "🐱" },
      { letter = "D"; word = "Dog";       emoji = "🐶" },
      { letter = "E"; word = "Elephant";  emoji = "🐘" },
      { letter = "F"; word = "Fish";      emoji = "🐟" },
      { letter = "G"; word = "Grapes";    emoji = "🍇" },
      { letter = "H"; word = "Hat";       emoji = "🎩" },
      { letter = "I"; word = "Ice Cream"; emoji = "🍦" },
      { letter = "J"; word = "Jellyfish"; emoji = "🪼" },
      { letter = "K"; word = "Kite";      emoji = "🪁" },
      { letter = "L"; word = "Lion";      emoji = "🦁" },
      { letter = "M"; word = "Moon";      emoji = "🌙" },
      { letter = "N"; word = "Nest";      emoji = "🪺" },
      { letter = "O"; word = "Orange";    emoji = "🍊" },
      { letter = "P"; word = "Penguin";   emoji = "🐧" },
      { letter = "Q"; word = "Queen";     emoji = "👑" },
      { letter = "R"; word = "Rainbow";   emoji = "🌈" },
      { letter = "S"; word = "Sun";       emoji = "☀️" },
      { letter = "T"; word = "Tiger";     emoji = "🐯" },
      { letter = "U"; word = "Umbrella";  emoji = "☂️" },
      { letter = "V"; word = "Violin";    emoji = "🎻" },
      { letter = "W"; word = "Whale";     emoji = "🐋" },
      { letter = "X"; word = "Xylophone"; emoji = "🎵" },
      { letter = "Y"; word = "Yacht";     emoji = "⛵" },
      { letter = "Z"; word = "Zebra";     emoji = "🦓" },
    ]
  };

  public func getNumbers() : [Types.NumberEntry] {
    [
      { value = 1;  wordLabel = "One";   emoji = "⭐" },
      { value = 2;  wordLabel = "Two";   emoji = "⭐⭐" },
      { value = 3;  wordLabel = "Three"; emoji = "⭐⭐⭐" },
      { value = 4;  wordLabel = "Four";  emoji = "⭐⭐⭐⭐" },
      { value = 5;  wordLabel = "Five";  emoji = "⭐⭐⭐⭐⭐" },
      { value = 6;  wordLabel = "Six";   emoji = "🎲" },
      { value = 7;  wordLabel = "Seven"; emoji = "🌈" },
      { value = 8;  wordLabel = "Eight"; emoji = "🎱" },
      { value = 9;  wordLabel = "Nine";  emoji = "🌟" },
      { value = 10; wordLabel = "Ten";   emoji = "🔟" },
    ]
  };

  public func getAnimals() : [Types.AnimalEntry] {
    [
      { name = "Dog";      emoji = "🐶"; sound = "Woof" },
      { name = "Cat";      emoji = "🐱"; sound = "Meow" },
      { name = "Cow";      emoji = "🐮"; sound = "Moo" },
      { name = "Lion";     emoji = "🦁"; sound = "Roar" },
      { name = "Duck";     emoji = "🦆"; sound = "Quack" },
      { name = "Frog";     emoji = "🐸"; sound = "Ribbit" },
      { name = "Elephant"; emoji = "🐘"; sound = "Trumpet" },
      { name = "Sheep";    emoji = "🐑"; sound = "Baa" },
      { name = "Horse";    emoji = "🐴"; sound = "Neigh" },
      { name = "Pig";      emoji = "🐷"; sound = "Oink" },
      { name = "Chicken";  emoji = "🐔"; sound = "Cluck" },
      { name = "Snake";    emoji = "🐍"; sound = "Hiss" },
    ]
  };

  public func getQuizQuestions() : [Types.QuizQuestion] {
    [
      // Alphabet questions
      {
        questionText = "Which letter does 🍎 Apple start with?";
        options = ["A", "B", "C", "D"];
        correctIndex = 0;
        category = "alphabet";
      },
      {
        questionText = "Which letter does 🐶 Dog start with?";
        options = ["C", "B", "D", "E"];
        correctIndex = 2;
        category = "alphabet";
      },
      {
        questionText = "Which letter does 🐟 Fish start with?";
        options = ["E", "G", "H", "F"];
        correctIndex = 3;
        category = "alphabet";
      },
      {
        questionText = "Which letter does 🦁 Lion start with?";
        options = ["K", "L", "M", "N"];
        correctIndex = 1;
        category = "alphabet";
      },
      {
        questionText = "Which letter does 🌈 Rainbow start with?";
        options = ["P", "Q", "R", "S"];
        correctIndex = 2;
        category = "alphabet";
      },
      {
        questionText = "Which letter does ☀️ Sun start with?";
        options = ["R", "S", "T", "U"];
        correctIndex = 1;
        category = "alphabet";
      },
      {
        questionText = "Which letter does 🐯 Tiger start with?";
        options = ["S", "U", "V", "T"];
        correctIndex = 3;
        category = "alphabet";
      },
      {
        questionText = "Which letter does 🦓 Zebra start with?";
        options = ["X", "Y", "Z", "W"];
        correctIndex = 2;
        category = "alphabet";
      },
      // Number questions
      {
        questionText = "How many ⭐ stars are there: ⭐⭐⭐?";
        options = ["1", "2", "3", "4"];
        correctIndex = 2;
        category = "numbers";
      },
      {
        questionText = "What number comes after 4?";
        options = ["3", "6", "5", "7"];
        correctIndex = 2;
        category = "numbers";
      },
      {
        questionText = "What number comes before 8?";
        options = ["6", "9", "7", "10"];
        correctIndex = 2;
        category = "numbers";
      },
      {
        questionText = "How many fingers on one hand?";
        options = ["4", "5", "6", "3"];
        correctIndex = 1;
        category = "numbers";
      },
      {
        questionText = "Which number is the biggest?";
        options = ["3", "7", "10", "5"];
        correctIndex = 2;
        category = "numbers";
      },
      {
        questionText = "How many wheels does a car have?";
        options = ["2", "3", "4", "6"];
        correctIndex = 2;
        category = "numbers";
      },
      // Animal questions
      {
        questionText = "Which animal says Meow?";
        options = ["Dog", "Cat", "Cow", "Duck"];
        correctIndex = 1;
        category = "animals";
      },
      {
        questionText = "Which animal says Woof?";
        options = ["Cat", "Sheep", "Dog", "Pig"];
        correctIndex = 2;
        category = "animals";
      },
      {
        questionText = "Which animal says Moo?";
        options = ["Horse", "Cow", "Frog", "Duck"];
        correctIndex = 1;
        category = "animals";
      },
      {
        questionText = "Which animal says Quack?";
        options = ["Chicken", "Snake", "Duck", "Cat"];
        correctIndex = 2;
        category = "animals";
      },
      {
        questionText = "Which animal says Roar?";
        options = ["Sheep", "Pig", "Elephant", "Lion"];
        correctIndex = 3;
        category = "animals";
      },
      {
        questionText = "Which animal says Oink?";
        options = ["Pig", "Horse", "Cow", "Frog"];
        correctIndex = 0;
        category = "animals";
      },
    ]
  };
};
