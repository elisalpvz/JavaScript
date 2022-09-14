var num1 = 0; 
var num2 = 0; 
var result = 0; 
var isFirst = true; 
var opcode = 0; 
var isDot = false;
var isSigned = false;

function btnClear() {
  resetCalc();
  document.getElementById("ans").innerHTML = result;
  return;
} 


function resetCalc() {
  num1 = 0;
  num2 = 0;
  result = 0;
  isFirst = true;
  opcode = 0;
  isDot = false;
  isSigned = false;
  return;
}


function setOp(btn) {
  if (btn == "+" || btn == "-") {
    
    opcode = btn;
    isFirst = false;
    num2 = 0;
    document.getElementById("ans").innerHTML = num1;
    isDot = false;
    return;
  }
} 

function calculate() {
  if (opcode == "+") {
    result = num1 + num2;
  }
  if (opcode == "-") {
    
  }

  document.getElementById("ans").innerHTML = result;
  resetCalc();
  return;
} 
function setNum(btn) {
  if (btn < 10) {
    if (isFirst == true) {
      
      document.getElementById("ans").innerHTML = num1;
    } else {
      document.getElementById("ans").innerHTML = num2;
    } 
  } 
  return;
} 



var num1 = 0; 
var num2 = 0; 
var result = 0; 
var isFirst = true; 
var opcode = 0; 
var isDot = false;
var isSigned = false;


function btnClear() {
  resetCalc();
  document.getElementById("ans").innerHTML = result;
  return;
} 


function resetCalc() {
  num1 = 0;
  num2 = 0;
  result = 0;
  isFirst = true;
  opcode = 0;
  isDot = false;
  isSigned = false;
  return;
}

function dot() {
  isDot = true;
}


function plusMinus() {
  isSigned = true;
}


function percent() {
  var percentValue = 0;
  if (isFirst == true) {
    num1 = num1 * 0.01;
    percentValue = num1;
  } else {
    num2 = num2 * 0.01;
    percentValue = num2;
  }
  document.getElementById("ans").innerHTML = percentValue;
  return;
} 


function setOp(btn) {
  if (btn == "+" || btn == "-" || btn == "/" || btn == "x") {
    // if 
    opcode = btn;
    isFirst = false;
    num2 = 0;
   
    document.getElementById("ans").innerHTML = num1;
    
    isDot = false;
    return;
  }
} 

function calculate() {
  if (opcode == "+") {
    result = num1 + num2;
  }
  if (opcode == "-") {
    result = num1 - num2;
  }
  if (opcode == "x") {
    result = num1 * num2;
  }

  if (opcode == "/") {
    if (num2 == 0) {
      result = "NAN";
    } else {
      result = num1 / num2;
    }
  }

  document.getElementById("ans").innerHTML = result;
  resetCalc();
  return;
} 


function setNum(btn) {
  if (btn < 10) {
    if (isFirst == true) {
      
      if (isDot == true) {
        num1 = num1 + btn / 10; 
      } else {
        num1 = num1 * 10 + btn; 
      }
      if (isSigned == true) {
        num1 = num1 * -1;
      }
      document.getElementById("ans").innerHTML = num1;
    } else {
      if (isDot == true) {
        num2 = num2 + btn / 10; 
      } else {
        num2 = num2 * 10 + btn; 
      }
      if (isSigned == true) {
        num2 = num2 * -1;
      }
      document.getElementById("ans").innerHTML = num2;
    } 
  } 
  return;
} 

