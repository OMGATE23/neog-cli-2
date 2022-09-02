import readlineSync from 'readline-sync'

var name = readlineSync.question("What is your name ? ")
console.log(`Welcome to the Marvel Quiz ${name}!`)

let qna = [
  {
    question: "Who is called as the first avenger?",
    options: "A. Captain America \nB. Iron Man \nC. Black Widow \nD. The Hulk",
    answer: "A"
  },
  {
    question: "How many possibilities did Dr. Strange see?",
    options: "A. 14,605,000 \nB. 14,000,605 \nC. 13,500,322 \nD. 15",
    answer: "B"
  },
  {
    question: "What is the symbolic line of Captain America?",
    options: "A. I can do this all day \nB. With great powers comes great responsibilites \nC. Its Captin' time \nD. Glory to America",
    answer: "A"
  },
  {
    question: "Who did Thanos sacrifice for the Soul stone",
    options: "A. Star-Lord \nB. Nebula \nC. Gamora \nD. Rocket Racccoon",
    answer: "C"
  },
  {
    question: "What did the Avengers have after fighting the chitouri army and loki",
    options: "A. Pizza \nB. Shawarma \nC. Steak \nD. Burger",
    answer: "B"
  }


]



let score = 0

function playQuiz(index) {
  console.log("-----------------------------------")
  console.log("Question no: ", index + 1)
  console.log(qna[index].question)
  console.log(qna[index].options)
  var answerGiven = readlineSync.question("Enter answer: ")
  console.log("answer: ", qna[index].answer)
  if (answerGiven.toUpperCase() == qna[index].answer) {
    console.log("Correct Answer")
    score++
  } else {
    console.log("Wrong Answer")
  }
  console.log("-----------------------------------")
}
for (let i = 0; i < qna.length; i++) {
  playQuiz(i)

}

console.log("Your final score is = ", score)

switch (score) {
  case 5:
    console.log("You are a hardcore fan buddy");
    break;

  case 4:
    console.log("You sure know the marvel movies");
    break;

  case 3:
    console.log("Well tried")
    break;

  case 2:
    console.log("Maybe watching the movies will help?")
    break;

  case 1:
    console.log("You seem like a person who thinks Superman is a Marvel superhero")
    break;

  case 0:
    console.log("Did you even try bro?")
    break;
}