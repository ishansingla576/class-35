class Player
{
constructor()
{

}

getPlayerCount() 
{
    var playerCountref = Database.ref('playerCount');
    playerCountref.on("value",function (data){
        
        playerCount = data.val();

    })

}

updatePlayerCount(count)
{
Database.ref('/').update({
    PlayerCount: count
})
}
updateName(name){
    var PlayerName = "Player" + playerCount;
    Database.ref('PlayerName').set({
        Name: name
    })
}
}