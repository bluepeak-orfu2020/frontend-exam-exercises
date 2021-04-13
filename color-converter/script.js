
const convertFromHex = (hexValue) => {
  /*
    Skriv kod som konvertera färger från hex-format till rgb-format.

    Ex: #FF0000 -> rgb(255, 0, 0)

    För att göra uppgiften lite enklare har vi tagit fram 5 testfall
    som använder convertFromHex(). Testfallen konverterar varsin
    fördefinierad färg. Du kan använda dessa exempel för att se om din
    lösning fungerar. Tänk på att din funktion ska fungera för alla
    värden och inte bara de i testfallen.

    För full poäng ska du lösa uppgiften med ett regex som parse:ar
    hexvärdet.

    Tips: Konvertera ett hex-värde till decimalform kan du göra med
          parseInt([hex-värde], 16).
          Ex: parseInt("F", 16) -> 15
  */
};


/* ----------------------------- */
/*
  Koden nedan genererar testfallen som visas i index.html.
  Du behöver inte ändra något i denna kod för att klara uppgiften.
*/

const testCases = document.querySelectorAll('.test');

testCases.forEach((test) => {
  const input = test.querySelector('.input');
  const output = test.querySelector('.output');
  const hexValue = input.dataset.input;
  const rgbValue = convertFromHex(hexValue);

  input.style.backgroundColor = `${hexValue}`;
  output.style.backgroundColor = rgbValue;
  output.textContent = rgbValue;
});