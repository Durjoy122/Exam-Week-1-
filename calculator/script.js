function calculate() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operation = document.getElementById('operation').value;
    let resultElement = document.getElementById('result');

    if(isNaN(number1) || isNaN(number2)) {
      resultElement.innerHTML = '<div class ="alert alert-danger" role="alert">Please enter valid numbers.</div>';
      return;
    }

    let result;
    switch (operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if(number2 === 0) {
           resultElement.innerHTML = '<div class ="alert alert-danger" role="alert">Cannot divide by zero.</div>';
           return;
        }
        result = number1 / number2;
        break;
      default:
        resultElement.innerHTML = '<div class ="alert alert-danger" role="alert">Invalid operation selected.</div>';
        return;
    }     
     resultElement.innerHTML = '<div class ="alert alert-success" role="alert">Result: ' + result + '</div>';
  }