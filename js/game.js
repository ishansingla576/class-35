class Game
{
constructor(){

}

getState()
{
    var gameStateref = Database.ref('GameState');
    gameStateref.on("value",function (data) {

        GameState = data.val();
        
    })
}
updateState(state)
{
    Database.ref('/').update({
        GameState: state
    })
}

start()
{
if(GameState === 0)
{
player = new Player();
player.getPlayerCount();
form = new Form();
form.display();
}
}
}