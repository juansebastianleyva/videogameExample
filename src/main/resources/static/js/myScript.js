$('document').ready(function (){
    getGames();
});

function getGames(){
    $.ajax({
        url: 'api/games/all',
        type:'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            // Aquí procesamos los datos obtenidos
            console.log(data);
            paintGames(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Aquí manejamos cualquier error que pueda haber ocurrido
            console.log(textStatus + ': ' + errorThrown);
        }
    });

}
function saveGame(){

    let game={
        name:$("#gameName").val(),
        price:$("#gamePrice").val(),
        launchYear:$("#gameLaunchYear").val(),
        linkImage:$("#gameImage").val()
    }
    let dataToSend=JSON.stringify(game);
    $.ajax({
        url: 'api/games/save',
        type:'POST',
        data: dataToSend,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            // Aquí procesamos los datos obtenidos
            console.log(data);
           getGames();

            $("#gameName").val("");
            $("#gamePrice").val("");
            $("#gameLaunchYear").val("");
            $("#gameImage").val("");


        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Aquí manejamos cualquier error que pueda haber ocurrido
            console.log(textStatus + ': ' + errorThrown);
        }
    });

}


function paintGames(r){
    let d="";

    for(i=0;i<r.length;i++){
        d+=`
                    <div class="ui card">
              <div class="image">
                <img src="${r[i].linkImage}">
              </div>
              <div class="content">
                <a class="header">${r[i].name}</a>
                <div class="meta">
                  <span class="date">Lanzado en ${r[i].launchYear}</span>
                </div>
                
              </div>
              <div class="extra content">
                <a>
                  <i class="user icon"></i>
                  $ ${r[i].price}
                </a>
              </div>
            </div>
         
        `;
    }
    $("#parrilla").html(d);
}