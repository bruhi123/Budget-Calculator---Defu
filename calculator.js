const needsHousing = document.getElementById('housing-amount');
const needsUtilities = document.getElementById('utilities-amount');
const needsFood = document.getElementById('food-amount');
const healthcare = document.getElementById('healthcare-amount');
const loans = document.getElementById('loans-amount');

const wantsHousing = document.getElementById('wants-housing-amount');
const wantsUtilities = document.getElementById('wants-utilities-amount');
const wantsFood = document.getElementById('wants-food-amount');

const retirementAmount = document.getElementById('retirement-amount');
const collegeAmount = document.getElementById('college-amount');
const emergencyAmount = document.getElementById('emergency-amount');


const incomeAmount = document.getElementById('income-amount');
const finalBudget = document.getElementById('final-budget');





let grossIncome = 0;

function calculateFederalTax(taxableIncome) { 
    let tax = 0;

    if (taxableIncome <= 12400) {
        tax = taxableIncome * 0.10;
    } 
    else if (taxableIncome <= 50400) {
        tax = (12400 * 0.10) +
              ((taxableIncome - 12400) * 0.12);
    } 
    else {
        tax = (12400 * 0.10) +
              ((50400 - 12400) * 0.12) +
              ((taxableIncome - 50400) * 0.22);
    }

    return tax;
}

function calculateBudget() {
    let total = incomeAmount.value - needsHousing.value - needsUtilities.value - needsFood.value - healthcare.value - loans.value - retirementAmount.value - collegeAmount.value - emergencyAmount.value - wantsHousing.value - wantsUtilities.value - wantsFood.value
    finalBudget.textContent(total); 
}


