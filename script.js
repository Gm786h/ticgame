let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let trun0 = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];
//reset button
const resetGame=()=>{
 trun0=true;
 enableBoxes();
 msgContainer.classList.add("hide");
}
// Convert the NodeList to an array
let boxesArray = Array.from(boxes);

boxesArray.forEach((box) => {
    box.addEventListener("click", () => {
        if (trun0) {
            box.innerText = "O";
            trun0 = false;
        } else {
            box.innerText = "X";
            trun0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of  boxesArray){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of  boxesArray){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (const pattern of winPattern) {
        let posVal1 = boxesArray[pattern[0]].innerText;
        let posVal2 = boxesArray[pattern[1]].innerText;
        let posVal3 = boxesArray[pattern[2]].innerText;

        if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);