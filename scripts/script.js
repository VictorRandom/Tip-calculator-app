
let tip = document.querySelectorAll("#buttons button")

for(const i of tip){
    i.addEventListener("click", selectTip)
}

function selectTip(event) {
    var tipToPay = event.target.id
    var tipToChange = event.target

    if(tipToPay == 1){
        console.log("5%")
        tipToChange.classList.toggle("btn-selected")
    }
    if(tipToPay == 2){
        console.log("10%")
        tipToChange.classList.toggle("btn-selected")
    }
    if(tipToPay == 3){
        console.log("15%")
        tipToChange.classList.toggle("btn-selected")
    }
    if(tipToPay == 4){
        console.log("25%")
        tipToChange.classList.toggle("btn-selected")
    }
    if(tipToPay == 5){
        console.log("50%")
        tipToChange.classList.toggle("btn-selected")
    }

}