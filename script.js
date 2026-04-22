function calculateVAT(){

let sales =
parseFloat(
document.getElementById("sales").value
) || 0;

let expenses =
parseFloat(
document.getElementById("expenses").value
) || 0;

let outputVAT=sales*0.15;

let inputVAT=expenses*0.15;

let payable=outputVAT-inputVAT;

document.getElementById(
"results"
).innerHTML=`

Output VAT: R${outputVAT.toFixed(2)} <br>
Input VAT: R${inputVAT.toFixed(2)} <br>
VAT Payable/Refund:
R${payable.toFixed(2)}

`;
}