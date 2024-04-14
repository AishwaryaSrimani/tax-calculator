$(document).ready(function () {
  // Function to show error icon for invalid input
  function showErrorIcon(inputField, errorMessage) {
    var errorIcon = inputField.next('.error-icon');
    errorIcon.attr('title', errorMessage);
    errorIcon.addClass('active');
  }

  // Function to hide error icon
  function hideErrorIcon(inputField) {
    var errorIcon = inputField.next('.error-icon');
    errorIcon.removeClass('active');
  }
  // Function to calculate tax
  $('#calculateButton').click(function () {
    // Clear previous errors
    $('.error-icon').removeClass('active');

    // Fetch user inputs
    var age = $('#age').val();
    var income = $('#income').val();
    var extraIncome = $('#extraIncome').val();
    var deductions = $('#deductions').val();

    // Validate inputs
    var isValid = true;
    if (age === '') {
      showErrorIcon($('#age'), 'Age is mandatory');
      isValid = false;
    }
    if (income === '' || isNaN(income)) {
      showErrorIcon($('#income'), 'Please enter numbers only');
      isValid = false;
    }
    if (extraIncome === '' || isNaN(extraIncome)) {
      showErrorIcon($('#extraIncome'), 'Please enter a numbers only');
      isValid = false;
    }
    if (deductions === '' || isNaN(deductions)) {
      showErrorIcon($('#deductions'), 'Please enter numbers only');
      isValid = false;
    } else {
      hideErrorIcon($(this));
    }

    if (isValid) {
      // Perform tax calculation
      var total_income = parseFloat(income) + parseFloat(extraIncome)
      var taxableIncome = (parseFloat(income) + parseFloat(extraIncome)) - parseFloat(deductions);
      var tax = 0;

      if (taxableIncome > 800000) {
        switch (age) {
          case '<40':
            tax = 0.3 * (taxableIncome - 800000);
            break;
          case '≥40 & <60':
            tax = 0.4 * (taxableIncome - 800000);
            break;
          case '≥60':
            tax = 0.1 * (taxableIncome - 800000);
            break;
        }
      }
      var yourIncome = (total_income - tax)

      // Display result
      window.alert('Your overall income will be\n' + yourIncome.toFixed(2) + '\nafter tax deduction');
    }
  });
  
  
});