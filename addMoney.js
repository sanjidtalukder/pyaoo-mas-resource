document.getElementById("add-money").addEventListener("click", function(event) {
    event.preventDefault();

    const amount = document.getElementById("Amount").value;
    const convertedAmount = parseFloat(amount);
    const account = document.getElementById("Account-number").value;
   
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-blance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const selectedBank =document.getElementById("allBank").value;

if(amount<0){
    alert("Input Positive Value")
    return;
}

    if (account.length === 11) {
        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-blance").innerText = sum;

            const container = document.getElementById("transaction-container");
            const div  = document.createElement("div");
            div.classList.add("bg-green-400")
            div.innerHTML =`
            <h1 class="text-yellow-300">Added Money form ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>Account number: ${account}</p>
            `
            container.appendChild(div)

            // const p = document.createElement("p");
            // p.innerText = `
            //     added ${amount} from ${account} account
            // `;
            // container.appendChild(p);
        } else {
            alert("Enter valid PIN");
        }
    } else {
        alert("Valid Account");
    }
});