//animation
var animating = false;
var animated = false;


function updatePage(data) {
    //Player Panels
    var players_ct = data.getCT();
    var players_t = data.getT();
    for (i = 0; i < 5; i++) { 
        var ctplayers = players_ct.players;
        var tplayers = players_t.players;
        $("#team_1_" + i).html(ctplayers[i].name);
        $("#team_2_" + i).html(tplayers[i].name);
    }

    //Round
    var round = data.round();
    var win_team = round.win_team;
    if(round.phase == "over" && animating == false){
        animating = true;
        if(animating == true && win_team == "CT"){
            $("#ct_win").css("opacity", "1");
            $("#ct_win").animate({
                opacity:0
            }, 5000, function(){
                animated = true;
            })
            
        } else if (animating == true && win_team == "T") {
            $("#t_win").css("opacity", "1");
            $("#t_win").animate({
                opacity:0
            }, 5000, function(){
                animated = true;
            })
        }
    } else if (round.phase == "live" && animated == true){
        animating == false;
    }
}