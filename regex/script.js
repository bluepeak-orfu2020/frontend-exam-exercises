/*
  Skriv kod som med hjälp av regex läser ut information om personer i
  texten. Personinformation har formatet ([Namn], [Ålder], [Stad]).
  Skriv ut informationen med console.log().

  Ex: (Adam Adamsson, 18, Örebro)

  Ålder är valfritt så personinformation kan också anges som till
  exempel: (Eva Evertsson, Askersund)

  Personinformationen ska presenteras på formatet:
  Person:
  Namn: [personens namn]
  Ålder: [personens ålder eller "N/A" om ingen ålder är angiven]
  Stad: [personens stad]

  För full poäng ska du använda namngivna capture groups. Tänkt också
  på att peroninformationen kan vara uppdelad över flera rader (se
  t.ex. Tora). En lösning som inte hanterar detta kommer få poäng men
  för full poäng måste även personinformation över flera rader kunna
  hanteras.
*/

const input = `
Halvah cupcake oat cake (Pelle Svensson, 23, Arboga) jelly beans
sugarplum cookie. Icing lemondrops chocolate gingerbread. Chocolate
cake chocolate bar caramels lollipop lemon drops jelly-o croissant.
Bear claw (Fredrik Adamsson, 55, Karlskoga) pastry liquorice pudding.
Cheesecake tootsie roll pastry. Powder sugar plum wafer.

Cake lemon drops jelly. Chocolate caramels cake (Tora Olofson,
Kumla) chocolate oat cake bear claw fruitcake. Chocolate cake
topping tart sugar plum. Marzipan bear claw chocolate sesame snaps
marzipan candy donut muffin. Biscuit caramels sesame snaps ice
cream dessert marzipan chocolate bonbon. Pastry sweet roll
chocolate bar muffin. Tiramisu cotton candy wafer halvah marzipan
caramels.
`;

const regex = /\((?<person>.*?)(?:,\s(?<age>\d+))?,\s(?<city>.*)\)/g;
const matches = input.matchAll(regex);
const arr = [...matches];
console.log('arr', arr);
for (const match of arr) {
  console.log(`
Person:
Namm: ${match.groups.person}
Ålder: ${match.groups.age || 'N/A'}
Stad: ${match.groups.city}
  `);
}
