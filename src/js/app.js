
var income = 0;
var expense = 0;
var balance = 0;
var description = [];
var amount = [];

var balanceDiv = document.createElement("div");
var incomeDiv = document.createElement("div");
var expenseDiv = document.createElement("div");

function setHtmlValues(){
    //assign values
    balanceDiv.innerHTML = balance ;
    incomeDiv.innerHTML = income;
    expenseDiv.innerHTML = expense;

    //add classes    
    incomeDiv.classList.add("text-green-600", "text-lg");
    expenseDiv.classList.add("text-red-600", "text-lg");
    incomeDiv.classList.add("text-lg");
    expenseDiv.classList.add("text-lg");
    balanceDiv.className = 'text-4xl';

    //insert to html file
    document.getElementById("balance").appendChild(balanceDiv);
    document.getElementById("income").appendChild(incomeDiv);
    document.getElementById("expense").appendChild(expenseDiv);

}

function updateHistory(){
    var pos = amount.length -1;
    var container = document.createElement("div");
    container.classList.add("flex", "justify-between", "bg-white", "m-2", "p-4", "font-normal", "details");
    document.getElementById("history").appendChild(container);
    var containerpos = document.getElementsByClassName("details");
    var dv1 = document.createElement("div");
    var dv2 = document.createElement("div");
    dv1.innerHTML = description[pos];
    containerpos[pos].append(dv1);
    dv2.innerHTML = amount[pos];
    if(amount[pos]>0)
        dv2.classList.add("border-r-2","border-green-600", "px-2");
    if(amount[pos]<0)
        dv2.classList.add("border-r-2","border-red-600", "px-2");

    containerpos[pos].append(dv2);
    
}

function updateWallet(){
    let size = amount.length;
    if(amount[size -1]>0)
        income+= amount[size -1];
    if(amount[size - 1]<0)
        expense+= amount[size -1];

    balance = income + expense;
}

setHtmlValues();

document.addEventListener("DOMContentLoaded", function(e) {

    var addTrans= document.getElementById('add');
    addTrans.addEventListener('click',()=>{
        var x = document.getElementById('description').value;
        var y = document.getElementById('money').valueAsNumber;
        if(x && y)
        {
            description.push(x);
            amount.push(y);
            updateHistory();
            updateWallet();
            setHtmlValues();
        }

        document.getElementById('description').value = "";
        document.getElementById('money').value ="";
   
    })

})