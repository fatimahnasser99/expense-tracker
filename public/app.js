
var income = 0;
var expense = 0;
var balance = 0;
var description = [];
var amount = [];

function updateWallet(){
    let size = amount.length;
    for(let index = 0; index< size; index ++)
    {
        if(amount[index]>0)
            income+= amount[index];
        if(amount[index]<0)
            expense+= amount[index];
    }
    balance = income + expense;

}

document.addEventListener("DOMContentLoaded", function(e) {

    var addTrans= document.getElementById('add');
    addTrans.addEventListener('click',()=>{
        //let x = document.getElementById('description').value; 
        //let y = document.getElementById('money').value;
        //console.log(x);
        //console.log(y);
        description.push(document.getElementById('description').value);
        amount.push(document.getElementById('money').value);
        console.log(description[0]);
        console.log(amount[0]);


        updateWallet();

    })

})