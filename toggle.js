
document.getElementById("cashout").style.display="none";
document.getElementById("Transection-history").style.display="none"

document.getElementById("add-money-box").addEventListener("click",
    function(){
  document.getElementById("cashout").style.display="none";
  document.getElementById("addMoney").style.display="block";
  handleToggle("Transection-history","none")
})

document.getElementById("cashout-box").addEventListener("click",
    function(){
  document.getElementById("cashout").style.display="block";
  document.getElementById("addMoney").style.display="none";
  handleToggle("Transection-history","none")
})

