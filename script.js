const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function insertParenthesis() {
  const value = display.value;
  const openCount = (value.match(/\(/g) || []).length;
  const closeCount = (value.match(/\)/g) || []).length;
  if (openCount <= closeCount) {
    display.value += '(';
  } else {
    display.value += ')';
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = math.evaluate(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/().%';
  if (allowedKeys.includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});