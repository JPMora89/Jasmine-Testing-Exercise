window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 10;
  document.getElementById("loan-rate").value = 3;

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate / 1200
  let compounding = 1 - ((1 + monthlyRate) ** (-1 * (values.years * 12)));
  return ((Math.round(((values.amount * monthlyRate) / compounding) * 100)) / 100).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) { 
  let updatedMonthlyPayment = document.getElementById("monthly-payment");
  updatedMonthlyPayment.innerText = monthly;
}
