class Form
{
constructor()
{

}

display()
{
var title = createElement('h2');
title.html("Car Race");
title.position(130,0);

var Input = createInput("Name");
var button = createButton('Start');
Input.position(130,160);
button.position(250,300);
button.mousePressed(function(){
Input.hide();
button.hide();
var Name = Input.value();
playerCount ++;

player.updateName(Name);
player.updatePlayerCount(playerCount);
var greeting = createElement('h3');
greeting.html("Hello " + Name);
greeting.position(130,160);
})
}

}