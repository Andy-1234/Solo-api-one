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
  type=document.getElementById('category').value;
  ;

  question();
  //setTimeout(set1,10000)
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
  set1()

  //writes in the possible answers into the html

}
//a chain of functions that will set each other off to randomly fill in



}

Trivia.open('GET','https://opentdb.com/api.php?amount=10&category='+type+'&difficulty='+difficulty+'&type=multiple')
Trivia.send()
//console.log('https://opentdb.com/api.php?amount=10&category='+type+'&difficulty='+difficulty+'&type=multiple')
//sett1();

}

function set1(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)


if(randomNumber1==1){
document.getElementById("choice-1-1").innerHTML=JSON.parse(Trivia.response).results[0].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-1-2").innerHTML=JSON.parse(Trivia.response).results[0].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-1-3").innerHTML=JSON.parse(Trivia.response).results[0].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-1-4").innerHTML=JSON.parse(Trivia.response).results[0].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-1-1").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-1-2").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-1-3").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-1-4").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-1-1").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-1-2").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-1-3").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-1-4").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-1-1").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-1-2").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-1-3").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-1-4").innerHTML=JSON.parse(Trivia.response).results[0].incorrect_answers[2];
    
    }

set2();
}



function set2(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)



if(randomNumber1==1){
document.getElementById("choice-2-1").innerHTML=JSON.parse(Trivia.response).results[1].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-2-2").innerHTML=JSON.parse(Trivia.response).results[1].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-2-3").innerHTML=JSON.parse(Trivia.response).results[1].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-2-4").innerHTML=JSON.parse(Trivia.response).results[1].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-2-1").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-2-2").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-2-3").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-2-4").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-2-1").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-2-2").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-2-3").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-2-4").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-2-1").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-2-2").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-2-3").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-2-4").innerHTML=JSON.parse(Trivia.response).results[1].incorrect_answers[2];
    
    }

    set3();
}




function set3(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)



if(randomNumber1==1){
document.getElementById("choice-3-1").innerHTML=JSON.parse(Trivia.response).results[2].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-3-2").innerHTML=JSON.parse(Trivia.response).results[2].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-3-3").innerHTML=JSON.parse(Trivia.response).results[2].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-3-4").innerHTML=JSON.parse(Trivia.response).results[2].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-3-1").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-3-2").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-3-3").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-3-4").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-3-1").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-3-2").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-3-3").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-3-4").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-3-1").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-3-2").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-3-3").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-3-4").innerHTML=JSON.parse(Trivia.response).results[2].incorrect_answers[2];
    
    }

set4();
}





function set4(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)



if(randomNumber1==1){
document.getElementById("choice-4-1").innerHTML=JSON.parse(Trivia.response).results[3].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-4-2").innerHTML=JSON.parse(Trivia.response).results[3].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-4-3").innerHTML=JSON.parse(Trivia.response).results[3].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-4-4").innerHTML=JSON.parse(Trivia.response).results[3].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-4-1").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-4-2").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-4-3").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-4-4").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-4-1").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-4-2").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-4-3").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-4-4").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-4-1").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-4-2").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-4-3").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-4-4").innerHTML=JSON.parse(Trivia.response).results[3].incorrect_answers[2];
    
    }

set5();
}




function set5(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)



if(randomNumber1==1){
document.getElementById("choice-5-1").innerHTML=JSON.parse(Trivia.response).results[4].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-5-2").innerHTML=JSON.parse(Trivia.response).results[4].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-5-3").innerHTML=JSON.parse(Trivia.response).results[4].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-5-4").innerHTML=JSON.parse(Trivia.response).results[4].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-5-1").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-5-2").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-5-3").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-5-4").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-5-1").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-5-2").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-5-3").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-5-4").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-5-1").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-5-2").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-5-3").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-5-4").innerHTML=JSON.parse(Trivia.response).results[4].incorrect_answers[2];
    
    }

set6();
}




function set6(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)



if(randomNumber1==1){
document.getElementById("choice-6-1").innerHTML=JSON.parse(Trivia.response).results[5].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-6-2").innerHTML=JSON.parse(Trivia.response).results[5].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-6-3").innerHTML=JSON.parse(Trivia.response).results[5].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-6-4").innerHTML=JSON.parse(Trivia.response).results[5].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-6-1").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-6-2").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-6-3").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-6-4").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-6-1").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-6-2").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-6-3").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-6-4").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-6-1").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-6-2").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-6-3").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-6-4").innerHTML=JSON.parse(Trivia.response).results[5].incorrect_answers[2];
    
    }

set7();
}






function set7(){
var randomNumber1=Math.round(Math.random()*3)+1;
var randomNumber2=Math.round(Math.random()*3)+1;
var randomNumber3=Math.round(Math.random()*3)+1;
var randomNumber4=Math.round(Math.random()*3)+1;


  do{
    randomNumber2=Math.round(Math.random()*3)+1;
  }
  while(randomNumber1==randomNumber2)


do{
  randomNumber3=Math.round(Math.random()*3)+1;
}
while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)

do{
  randomNumber4=Math.round(Math.random()*3)+1;
}
while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)



if(randomNumber1==1){
document.getElementById("choice-7-1").innerHTML=JSON.parse(Trivia.response).results[6].correct_answer;
}
else if(randomNumber1==2){
  document.getElementById("choice-7-2").innerHTML=JSON.parse(Trivia.response).results[6].correct_answer;
}
else if(randomNumber1==3){
  document.getElementById("choice-7-3").innerHTML=JSON.parse(Trivia.response).results[6].correct_answer;
}
else if(randomNumber1==4){
  document.getElementById("choice-7-4").innerHTML=JSON.parse(Trivia.response).results[6].correct_answer;

}


if(randomNumber2==1){
document.getElementById("choice-7-1").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[0];
}
else if(randomNumber2==2){
  document.getElementById("choice-7-2").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[0];
}
else if(randomNumber2==3){
  document.getElementById("choice-7-3").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[0];
}
else if(randomNumber2==4){
  document.getElementById("choice-7-4").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[0];

}

if(randomNumber3==1){
  document.getElementById("choice-7-1").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[1];
  }
  else if(randomNumber3==2){
    document.getElementById("choice-7-2").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[1];
  }
  else if(randomNumber3==3){
    document.getElementById("choice-7-3").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[1];
  }
  else if(randomNumber3==4){
    document.getElementById("choice-7-4").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[1];
  
  }
  
  if(randomNumber4==1){
    document.getElementById("choice-7-1").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[2];
    }
    else if(randomNumber4==2){
      document.getElementById("choice-7-2").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[2];
    }
    else if(randomNumber4==3){
      document.getElementById("choice-7-3").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[2];
    }
    else if(randomNumber4==4){
      document.getElementById("choice-7-4").innerHTML=JSON.parse(Trivia.response).results[6].incorrect_answers[2];
    
    }

set8();
}



function set8(){
  var randomNumber1=Math.round(Math.random()*3)+1;
  var randomNumber2=Math.round(Math.random()*3)+1;
  var randomNumber3=Math.round(Math.random()*3)+1;
  var randomNumber4=Math.round(Math.random()*3)+1;
  
  
    do{
      randomNumber2=Math.round(Math.random()*3)+1;
    }
    while(randomNumber1==randomNumber2)
  
  
  do{
    randomNumber3=Math.round(Math.random()*3)+1;
  }
  while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)
  
  do{
    randomNumber4=Math.round(Math.random()*3)+1;
  }
  while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)
  
  
  
  if(randomNumber1==1){
  document.getElementById("choice-8-1").innerHTML=JSON.parse(Trivia.response).results[7].correct_answer;
  }
  else if(randomNumber1==2){
    document.getElementById("choice-8-2").innerHTML=JSON.parse(Trivia.response).results[7].correct_answer;
  }
  else if(randomNumber1==3){
    document.getElementById("choice-8-3").innerHTML=JSON.parse(Trivia.response).results[7].correct_answer;
  }
  else if(randomNumber1==4){
    document.getElementById("choice-8-4").innerHTML=JSON.parse(Trivia.response).results[7].correct_answer;
  
  }
  
  
  if(randomNumber2==1){
  document.getElementById("choice-8-1").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[0];
  }
  else if(randomNumber2==2){
    document.getElementById("choice-8-2").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[0];
  }
  else if(randomNumber2==3){
    document.getElementById("choice-8-3").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[0];
  }
  else if(randomNumber2==4){
    document.getElementById("choice-8-4").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[0];
  
  }
  
  if(randomNumber3==1){
    document.getElementById("choice-8-1").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[1];
    }
    else if(randomNumber3==2){
      document.getElementById("choice-8-2").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[1];
    }
    else if(randomNumber3==3){
      document.getElementById("choice-8-3").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[1];
    }
    else if(randomNumber3==4){
      document.getElementById("choice-8-4").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[1];
    
    }
    
    if(randomNumber4==1){
      document.getElementById("choice-8-1").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[2];
      }
      else if(randomNumber4==2){
        document.getElementById("choice-8-2").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[2];
      }
      else if(randomNumber4==3){
        document.getElementById("choice-8-3").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[2];
      }
      else if(randomNumber4==4){
        document.getElementById("choice-8-4").innerHTML=JSON.parse(Trivia.response).results[7].incorrect_answers[2];
      
      }
  
  set9();
  }

function set9(){
  var randomNumber1=Math.round(Math.random()*3)+1;
  var randomNumber2=Math.round(Math.random()*3)+1;
  var randomNumber3=Math.round(Math.random()*3)+1;
  var randomNumber4=Math.round(Math.random()*3)+1;
  
  
    do{
      randomNumber2=Math.round(Math.random()*3)+1;
    }
    while(randomNumber1==randomNumber2)
  
  
  do{
    randomNumber3=Math.round(Math.random()*3)+1;
  }
  while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)
  
  do{
    randomNumber4=Math.round(Math.random()*3)+1;
  }
  while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)
  
  
  
  if(randomNumber1==1){
  document.getElementById("choice-9-1").innerHTML=JSON.parse(Trivia.response).results[8].correct_answer;
  }
  else if(randomNumber1==2){
    document.getElementById("choice-9-2").innerHTML=JSON.parse(Trivia.response).results[8].correct_answer;
  }
  else if(randomNumber1==3){
    document.getElementById("choice-9-3").innerHTML=JSON.parse(Trivia.response).results[8].correct_answer;
  }
  else if(randomNumber1==4){
    document.getElementById("choice-9-4").innerHTML=JSON.parse(Trivia.response).results[8].correct_answer;
  
  }
  
  
  if(randomNumber2==1){
  document.getElementById("choice-9-1").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[0];
  }
  else if(randomNumber2==2){
    document.getElementById("choice-9-2").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[0];
  }
  else if(randomNumber2==3){
    document.getElementById("choice-9-3").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[0];
  }
  else if(randomNumber2==4){
    document.getElementById("choice-9-4").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[0];
  
  }
  
  if(randomNumber3==1){
    document.getElementById("choice-9-1").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[1];
    }
    else if(randomNumber3==2){
      document.getElementById("choice-9-2").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[1];
    }
    else if(randomNumber3==3){
      document.getElementById("choice-9-3").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[1];
    }
    else if(randomNumber3==4){
      document.getElementById("choice-9-4").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[1];
    
    }
    
    if(randomNumber4==1){
      document.getElementById("choice-9-1").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[2];
      }
      else if(randomNumber4==2){
        document.getElementById("choice-9-2").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[2];
      }
      else if(randomNumber4==3){
        document.getElementById("choice-9-3").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[2];
      }
      else if(randomNumber4==4){
        document.getElementById("choice-9-4").innerHTML=JSON.parse(Trivia.response).results[8].incorrect_answers[2];
      
      }
  
  set10();
  }




function set10(){
  var randomNumber1=Math.round(Math.random()*3)+1;
  var randomNumber2=Math.round(Math.random()*3)+1;
  var randomNumber3=Math.round(Math.random()*3)+1;
  var randomNumber4=Math.round(Math.random()*3)+1;
  
  
    do{
      randomNumber2=Math.round(Math.random()*3)+1;
    }
    while(randomNumber1==randomNumber2)
  
  
  do{
    randomNumber3=Math.round(Math.random()*3)+1;
  }
  while(randomNumber3==randomNumber1||randomNumber3==randomNumber2)
  
  do{
    randomNumber4=Math.round(Math.random()*3)+1;
  }
  while(randomNumber4==randomNumber3||randomNumber4==randomNumber2||randomNumber4==randomNumber1)
  
  
  
  if(randomNumber1==1){
  document.getElementById("choice-10-1").innerHTML=JSON.parse(Trivia.response).results[9].correct_answer;
  }
  else if(randomNumber1==2){
    document.getElementById("choice-10-2").innerHTML=JSON.parse(Trivia.response).results[9].correct_answer;
  }
  else if(randomNumber1==3){
    document.getElementById("choice-10-3").innerHTML=JSON.parse(Trivia.response).results[9].correct_answer;
  }
  else if(randomNumber1==4){
    document.getElementById("choice-10-4").innerHTML=JSON.parse(Trivia.response).results[9].correct_answer;
  
  }
  
  
  if(randomNumber2==1){
  document.getElementById("choice-10-1").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[0];
  }
  else if(randomNumber2==2){
    document.getElementById("choice-10-2").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[0];
  }
  else if(randomNumber2==3){
    document.getElementById("choice-10-3").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[0];
  }
  else if(randomNumber2==4){
    document.getElementById("choice-10-4").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[0];
  
  }
  
  if(randomNumber3==1){
    document.getElementById("choice-10-1").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[1];
    }
    else if(randomNumber3==2){
      document.getElementById("choice-10-2").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[1];
    }
    else if(randomNumber3==3){
      document.getElementById("choice-10-3").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[1];
    }
    else if(randomNumber3==4){
      document.getElementById("choice-10-4").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[1];
    
    }
    
    if(randomNumber4==1){
      document.getElementById("choice-10-1").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[2];
      }
      else if(randomNumber4==2){
        document.getElementById("choice-10-2").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[2];
      }
      else if(randomNumber4==3){
        document.getElementById("choice-10-3").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[2];
      }
      else if(randomNumber4==4){
        document.getElementById("choice-10-4").innerHTML=JSON.parse(Trivia.response).results[9].incorrect_answers[2];
      
      }
  
  
  }







