const bills = document.getElementById('Bill');
const tipsSelector = document.querySelectorAll('.percent');
const numberOfPeople = document.getElementById('people');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const resetButton = document.getElementById('reset');
const cudtom = document.getElementById('custom');

let answer1;

function calculations(input){
    tipAmount.innerHTML = bills.value + input;
}

for(let i = 0; i < tipsSelector.length; i++){
    tipsSelector[i].addEventListener('click', function(){
        bills.value = bills.value.trim();
        if(isNaN(bills.value)){
            alert('Please enter a valid bill amount');
        } else if(bills.value === ''){
            alert(`Bill's amount must be entered first`);
        } else {
            let percentages = this.innerHTML;
            switch (percentages) {
                case '5%':
                case '10%':
                case '15%':
                case '25%':
                case '50%':
                  percentages = parseFloat(percentages);
                  bills.value = parseFloat(bills.value);
                  answer1 = bills.value * (percentages / 100);
                  tipAmount.innerText = parseFloat(bills.value) + parseFloat(answer1);
                    break;
                case 'Custom':
                 percentages = parseFloat(prompt('Enter Percentage'));
                 bills.value = parseFloat(bills.value);
                 answer1 = bills.value * (percentages / 100);
                 tipAmount.innerText = bills.value + answer1;
                //  alert(answer1);
                 break;
                default:
                    break;
            }
        }

    })
}