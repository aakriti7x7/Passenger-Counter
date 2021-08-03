
let element = document.getElementById("count")
let previous = document.getElementById("saveit")
let next = document.getElementById("saveit")
let entered = previous.innerText
let count =0

function increment(){
    count = count + 1
    element.innerText = count

}

function decrement(){
    if(count>0){
        count = count - 1
        element.innerText = count
    }
    
}

function save(){
  previous.innerText += " " + count + " , "
    
}

function reset(){
    count = 0;
    element.innerHTML = count
      
}

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);