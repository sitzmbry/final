function firstoption(){

"<img id='Dragon' src='dragon2.jpg'>"
document.getElementById("option").innerHTML = "<p> After a long day of hunting in the woods you decide on heading home with some meat on your back. While walking you hear a terrifying roar.</p><br>" +

"<p>What do you do?</p><br> <input type='radio' name='choiceone' id='choiceone' onclick= 'secondoption()'> Go home<br> <input type='radio' name='choicetwo' id='choicetwo' onclick= 'thirdoption()'> Investegate<br>";
}

function secondoption(){
    
document.getElementById("option").innerHTML ="<p> After hearing the most terrifying thing you have ever heard, you start running as fast as you can back home.When you finally reach the village, you notice that evryone is outside and seem scared. As you get closer your neighbor runs over to you and ask if you heard a loud roar.</p>" +

"<p> What do you say?</p><br> <input type='radio' name='choicethree' id='choicethree' onclick= 'fifthoption()'> I just heard the noise";
}

function thirdoption(){

document.getElementById("option").innerHTML ="<p> As the roar subsided, you start to wonder what just happened and start to investegate. As you get closer to what made the noise, you realize that the thing that made the sound was a dragon! After seeing the terrifying beast, you book it home. When you finally reach the village, you notice that evryone is outside and seem scared. As you get closer your neighbor runs over to you and ask if you heard a loud roar.</p>" +

"<p>What do you say?</p><br> <input type='radio' name='choicefour' id='choicefour' onclick= 'fifthoption()'> (Lie)I just heard the noise<br> <input type='radio' name='choicefive' id='choicefive' onclick= 'fourthoption()'> I heard the noise and found what was making it. It was a dragon!";
}

function fourthoption(){

document.getElementById("option").innerHTML ="<p> When you said dragon, everyone who was near you heard the worst word anyone could of said. Everyone fell silent and after a mintue of this the cheif was the first to speak up. The chief announced that if it was a dragon then it needs to die. So he ordered all men to get their weapons so they could kill it.</p>" +

"<p>What do you do?</p> <input type= 'radio' name='choicesix' id='choicesix' onclick= 'sixthoption()'> Help fight the dragon<br> <input type= 'radio' name='choiceseven' id='choiceseven' onclick= 'seventhoption()'> Stay in the village<br>";
}

function fifthoption(){

document.getElementById("option").innerHTML ="<p> As you respond the chief loudly asks everyone to remain silent. He proceeds to say that he wants men to get their weapons together to search the woods for what made the noise.</p>" +

"<p>What do you do?</p> <input type= 'radio' name='choicefive' id='choicefive' onclick= 'sixthoption()'> Help fight the dragon<br> <input type= 'radio' name='choicesix' id='choicesix' onclick= 'seventhoption()'> Stay in the village<br>";
}

function sixthoption(){

document.getElementById("option").innerHTML ="<p> As every man in the village got their weapons you go home and grab your favorite sword. When everyone was ready, you lead everyone to the area where you heard the roar. Within an hour you found were the dragon's nest is, but there is one wierd thing. There's no dragon... Then you hear a mighty roar back in the direction of your village. When you hear this you run as fast as you can back home only to find your entire village burned to the ground...<p>" +

"<p>Thanks for playing</p>"

}

function seventhoption(){

  document.getElementById("option").innerHTML ="<p> As every man got there sword you go home to rest. You lay done for a nap and sleep soundly until you hear a roar! You bult up run outside only to be met with a burning village and a dragon looking directly at you...<p>" +

  "<p>You deid</p>"
}
