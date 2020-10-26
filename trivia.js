//selects which api version to use
var difficulty;
var type; 
let Trivia = new XMLHttpRequest();
//variables to randomize the answer  order
//may not be used
var question;
var q1;
var q2;
var q3;
var q4;
var q5;
var q6;
var q7;
var q8;
var q9;
var q10;

//may not actually use the var iables below
//var 

/*
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;
*/
//do{
  //randomNumber2=Math.round(Math.random()*3)+1;
//console.log(randomNumber1);
//console.log(randomNumber2);
//console.log(randomNumber3);
//console.log(randomNumber4);
//}
//while(randomNumber1==randomNumber2)
//if(randomNumber1!=randomNumber2){
  //console.log(randomNumber1);
  //console.log(randomNumber2);
//}

function userInput(){
  difficulty=document.getElementById('Difficulty').value;
  //console.log(difficulty);
  //type=document.getElementById('category').value;
  console.log(type);

  question();

}

function question(){

Trivia.onreadystatechange =e =>{
    
    if(Trivia.readyState ===4 && Trivia.status===200){
  const data = JSON.parse(Trivia.response);
  console.log(data);
  //writes the questions into the document
  document.getElementById('question-1').innerHTML=data.results[0].question;
  document.getElementById('question-2').innerHTML=data.results[1].question;
  document.getElementById('question-3').innerHTML=data.results[2].question;
  document.getElementById('question-4').innerHTML=data.results[3].question;
  document.getElementById('question-5').innerHTML=data.results[4].question;
  document.getElementById('question-6').innerHTML=data.results[5].question;
  document.getElementById('question-7').innerHTML=data.results[6].question;
  document.getElementById('question-8').innerHTML=data.results[7].question;
  document.getElementById('question-9').innerHTML=data.results[8].question;
  document.getElementById('question-10').innerHTML=data.results[9].question;
  sett1()
  //writes in the possible answers into the html

}
//a chain of functions that will set each other off to randomly fill in



}

Trivia.open('GET','https://opentdb.com/api.php?amount=10&category='+type+'&difficulty='+difficulty+'&type=multiple')
Trivia.send()
//console.log('https://opentdb.com/api.php?amount=10&category='+type+'&difficulty='+difficulty+'&type=multiple')
sett1();

}

function sett1(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
console.log('thing')
  do{
    randomNumber1=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)
}
