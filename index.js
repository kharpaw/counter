const incresebtn = document.getElementById("incresebtn")
const resetbtn = document.getElementById("resetbtn")
const decresebtn = document.getElementById("decresebtn")
const countLabel = document.getElementById("countLabel")

let count = 0;

incresebtn.onclick = function (){
    count++;
    countLabel.textContent = count;

}
decresebtn.onclick = function () {
    count--;
    countLabel.textContent= count;
}

resetbtn.onclick = function () {
    count = 0;
    countLabel.textContent= count;  
}

