let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtn=document.querySelector("#new-button");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;  //eithr player 1 or 2

const winpetterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("boxclicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.disabled = true;
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.disabled = true;
        }

        checkwinner();
    });
});

const disable_boxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enable_boxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const show_winnwer =(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_boxes();
}

const checkwinner = () => {
    for (let pattern of winpetterns) {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("Winner",pos1val);
                show_winnwer(pos1val);
            }
        }
    }
}

const resetgame = () =>{
    turnO=true;
    enable_boxes();
    msgContainer.classList.add("hide");
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);