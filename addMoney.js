document.getElementById("add-money").addEventListener("click",function(event){
event.preventDefault();

const ammount = document.getElementById("Amount").value;
const convertedAmmount = parseFloat(ammount)
const pin = document.getElementById("pin").value;
const convertedPin = parseInt(pin)
const mainBlance = document.getElementById("main-blance").innerText;
const convertedMainBlances = parseFloat(mainBlance)
if(convertedPin ===1234){
    const sum = convertedMainBlances + convertedAmmount;
    document.getElementById("main-blance").innerText = sum;
}else{
    alert("Enter valid PIN")
}

})