class Game{
    constructor(){
        //构造函数 自动运行 
        this.screen=""
        this.life=""
        this.jf=""
        this.flag=""
        this.letterBox=[]
        this.sudu=0.1;
        this.death=""
    }
 

    createLetter(num=1){
        for(let i=0;i<num;i++){
            let obj={}
            let letter=""
            do{
                letter=String.fromCharCode(Math.floor(Math.random()*26+65));
            }while(this.isHas(letter) )
            obj.name=letter;
            let div=document.createElement("div");
            div.className="letter";            
            div.style.backgroundImage=`url(img/A_Z/${letter}.png`; 
            
            let left=""
            do{
                left=Math.random()*5.7+0.6;
            }while(this.ishad(left))
            div.style.left=left+"rem"
            obj.left=left
            obj.top=0.9
            obj.node=div
            this.screen.appendChild(div);
            this.letterBox.push(obj);
        }
    }

    init(){
        this.bgmusic.className="Astart";
        this.life.innerText="10"
        this.jf.innerText="0"
        this.screen.innerText="";
        this.letterBox=[];
        this.sudu=0.1;
    }

isHas(letter){
    for(let item of this.letterBox){
        if(letter==item.name){
            return true
        }
    }
    return false
}

ishad(left){
    for(let item of this.letterBox){
        if(Math.abs(left-item.left)<0.53)
            return true
    }
    return false
}


run(){
    this.t=setInterval(()=>{
        this.letterBox.forEach((item,index)=>{
            item.top+=this.sudu;
            if(item.top>=7){
                this.addlife();
                this.screen.removeChild(item.node)
                this.letterBox.splice(index,1)
                this.createLetter()
            }
            item.node.style.top=item.top+"rem";
        })
    },500)
}

delKey(name){
    this.letterBox.forEach((item,index)=>{
        if(item.name==name){
            this.addif();
            this.screen.removeChild(item.node)
            this.letterBox.splice(index,1)
            this.createLetter()
        }
    })
}
addlife(){
    this.life.innerText--;
    if(this.life.innerText<=0){
        this.death.style.display="block"
        clearInterval(this.t);
        this.death.childNodes[1].childNodes[1].innerText=this.jf.innerText;
    }
}

addif(){
    this.jf.innerText++;
    this.sudu =this.jf.innerText/100+0.1;
}
replay(){
    this.death.style.display="none"
    this.init()
    this.createLetter(5)
}




}