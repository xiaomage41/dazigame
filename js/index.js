  window.onload=function(){
    let key_con=document.querySelector(".key_con")
    let bgmusic=document.querySelector("#bgmusic")
    let flag=document.querySelector("#flag")
    let audio=document.querySelector("#audio")
    let jf=document.querySelector(".jf")
    let key =document.querySelector(".key")
    let death=document.querySelector(".death")
    let life=document.querySelector(".life")
    let screen=document.querySelector(".screen")
    let replay=document.querySelector(".replay")
    let flg=false;
    // console.log(replay)
    
    let game=new Game();
    key_con.ontouchstart=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(0.8)"
            game.delKey(e.target.innerText)
        }
    }
    key_con.ontouchend=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(1)"
        }
    }
    flag.ontouchstart=function(){
        if(flag.className=="play"){
            flag.className="flag"
            game.run();
            key.style.opacity=0.2
            flg=true;
        }else{
            flag.className="play"
            clearInterval(game.t)
            key.style.opacity=1
            flg=false;
        }
    }

    bgmusic.ontouchstart=function(){
        if(bgmusic.className=="Astart"){
            bgmusic.className="Aend"
            audio.pause()
        }else{
            bgmusic.className="Astart"
            audio.play()
        }
    }
    replay.ontouchstart=function(){
        game.replay()
        flg=false;
        key.style.opacity=0.2
    }
    let num1=0;
    
    game.bgmusic=bgmusic;
    game.jf=jf
    game.life=life
    game.flag=flag
    game.screen=document.querySelector(".screen");
    game.init();
    game.createLetter(5);
    game.run();
    game.death=death;
}