// Code your solutions in this file
function writeCards(names, event) {
    let array = []
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown() {
  for (let i = 0; i >= 0; i--) {
    console.log(10);
    console.log(9)
    console.log(8)
    console.log(7)
    console.log(6)
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log(0)
  }
}
