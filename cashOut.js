document.getElementById("cashout-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const cashOutpin =document.getElementById("cashOutPin").value;
        const convertedPin = parseInt(cashOutpin)
        const ammount=document.getElementById("cashOutAmount").value;
        const convertedCashAmmount = parseFloat(ammount);
        const mainBlance = document.getElementById("main-blance").innerText;
const convertedMainBlances = parseFloat(mainBlance);
if(convertedPin ===1234){
    const sub = convertedMainBlances - convertedCashAmmount;
    document.getElementById("main-blance").innerText = sub;
}else{
    alert("Enter valid PIN")
}

})
 