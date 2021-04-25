
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
        description.push(document.getElementById('description').value);
        amount.push(document.getElementById('money').valueAsNumber);
        document.getElementById('description').value = '';
        document.getElementById('money').value ='';

        updateWallet();



    })

})