const itemList = {
    mask: 999,
    sanitizer: 500,
    paracetamol:900

}
const itemPrice = {
    mask: 20,
    sanitizer: 100,
    paracetamol: 50

}
const maskNumber = 3;
const maskPrice = itemPrice.mask * maskNumber;

console.log(maskPrice);


const total = maskPrice + itemList.paracetamol + itemList.sanitizer;
console.log(total);