
document.getElementById("transaction-box").addEventListener("click",function(event){
    event.preventDefault();
    handleToggle("addMoney","none")
    handleToggle("cashout","none")
    handleToggle("Transection-history","block")

})