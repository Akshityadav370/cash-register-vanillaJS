const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-given");
const message = document.querySelector("#message");
const checkBtn = document.querySelector("#check");
const notesToReturn = document.querySelectorAll(".notes-to-return");
const notes = [2000, 500, 100, 20, 10, 5, 1];


checkBtn.addEventListener("click", function() {
    message.style.display = "none";
    // console.log("bill amount", billAmount.value);
    // console.log("cash amount", cashAmount.value);
    var cash = parseInt(cashAmount.value);
    var bill = parseInt(billAmount.value);
    // console.log("bill", bill);
    // console.log("cash>bill",cash >= bill);
    // console.log(cashAmount.value >= billAmount.value);
    // if (bill === NaN){
    //     showMessage("Enter positive integer in Cash and Bill");
    //     return 0;
    // }
    if (bill>0) {
        if (cash >= bill) {
            var amountToReturn = cash - bill;
            calculateChange(amountToReturn);
        }else {
            showMessage("Cash Amount should be greater than or equal to Bill Amount");
        }

    } else {
        if (bill === NaN){
            showMessage("Enter positive integer in Cash and Bill");
            return 0;
        } else 
        showMessage("Bill Amount should be greater than 0!");
    }
})

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToReturn) {
    for (let i=0; i<notes.length; i++) {
        const noOfNotes = Math.trunc(amountToReturn/notes[i]);
        amountToReturn %= notes[i];
        notesToReturn[i].innerText = noOfNotes;
    }
}