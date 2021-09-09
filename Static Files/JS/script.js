
// function to idenfity the chosed theme, by clicking
function switchTheme(theme) {
  switch (theme) {
    case "dark":
      toggleTheme("dark-theme");
      break;
    case "light":
      toggleTheme("light-theme");
      break;
    case "purple":
      toggleTheme("purple-theme");
      break;
    default:
      toggleTheme("dark-theme");
      break;
  }
}

// called by the first function, only applies a theme class
// with the correct color variables in the main container
function toggleTheme(theme) {
  let main = document.getElementById("main-container");
  main.className = theme;
}

// called when the body loads, this function set a listener
// that will check what key was pressed sending his value
// to the third function
function verifyKeypad() {
  document
    .getElementById("keypad-area")
    .addEventListener("click", function (event) {
      showResult(event.target.value);
    });
}

// this function will show the expression on the result area
// and the result of the expression, made by the eval function
function showResult(value) {
  let calc = document.getElementById("calc-result");
  let lastValue = calc.innerText[calc.innerText.length - 1];

  setResultFont(calc);

  switch (value) {
    case "DEL":
      calc.innerText = calc.innerText.replace(lastValue, "");
      break;

    case "RESET":
      calc.innerText = "";
      break;

    case "=":
      let result = eval(calc.innerText);
      if (result === undefined) {
        result = "";
      }
      calc.innerText = result;
      break;

    case undefined:
      break;

    default:
      // check if the value is a operator, if its is
      // will check if the last expression caracter is a number
      // if not, stop the function
      if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "."
      ) {
        if (isNaN(lastValue)) {
          return;
        }
      }
      calc.innerText = calc.innerText + value;
      break;
  }
}


// change the result area font by the lenght of the expression
function setResultFont(calc) {
  let resultFontSize = "1.9em";

  if (calc.innerText.length >= 12) {
    resultFontSize = "1em";
  }

  if (calc.innerText.length >= 22) {
    resultFontSize = ".8em";
  }

  // modifies the css variable that controls the font size
  document.documentElement.style.setProperty(
    "--result-font-size",
    resultFontSize
  );
}
