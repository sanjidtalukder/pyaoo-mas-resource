document.getElementById("cashout-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const cashOutpin =document.getElementById("cashOutPin").value;
        const convertedPin = parseInt(cashOutpin)
        const amount=document.getElementById("cashOutAmount").value;
        const convertedCashAmmount = parseFloat(amount);
        const account = document.getElementById("Account-number").value;

        const mainBlance = document.getElementById("main-blance").innerText;
const convertedMainBlances = parseFloat(mainBlance);

if(amount>mainBlance){
    alert("Dont enought value")
    return;
}

if (account.length === 11) {
    if (convertedPin === 1234) {
        const sub =  convertedMainBlances- convertedCashAmmount;
        document.getElementById("main-blance").innerText = sub;

        const container = document.getElementById("transaction-container");

        const div  = document.createElement("div");
            div.classList.add("bg-red-400")
            div.innerHTML =`
            <h1 class="text-yellow-300">Cashout form your A/C</h1>
            <h3>${amount}</h3>
            <p>Account number: ${account}</p>
            `
            container.appendChild(div)
        // const p = document.createElement("p");
        // p.innerText = `
        //     cashout ${ammount} from ${account} account
        // `;
        // container.appendChild(p);
    } else {
        alert("Enter valid PIN");
    }
} else {
    alert("Valid Account");
}

})
 