let boxes=document.getElementsByClassName("box");

let reset_btn=document.getElementById("reset");

let newgame_btn=document.getElementById("new-game");
let winnername=document.querySelector(".res");
let result_div=document.querySelector("#declare");

let turn0=true;

let count=0;

let winningpositon = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkwinner =()=>{

    for(let i=0;i<winningpositon.length;i++){
        let val1=boxes[winningpositon[i][0]].innerText;
        let val2=boxes[winningpositon[i][1]].innerText;
        let val3=boxes[winningpositon[i][2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                 winnername.innerHTML= `Winner : ${val1}`;
                 result_div.classList.remove("hide");
            }
        }
    }
    
}

const checkdraw = ()=>{
    if(count===9){
        winnername.innerHTML='Draw!! Play it Again.';
        result_div.classList.remove("hide");
    }
}

const EnableButtons = ()=>{

    turn0=true;
    count=0;

    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML="";
        boxes[i].disabled=false;
    }
    
}

const EnableButtonsx = ()=>{

    turn0=true;
    count=0;

    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML="";
        boxes[i].disabled=false;
    }

    result_div.classList.add("hide");

}


reset_btn.addEventListener("click",EnableButtons);
newgame_btn.addEventListener("click",EnableButtonsx);

for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",()=>{
        if(turn0){
            boxes[i].innerHTML="0";
            turn0=false;
        }else{
            boxes[i].innerHTML="X";
            turn0=true;
        }
        count++;
        boxes[i].disabled=true;

        checkwinner();
        checkdraw();
    })
}


















