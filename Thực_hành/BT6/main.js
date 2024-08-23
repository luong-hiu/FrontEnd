/*
BT5
Input: Nhập vào số có 2 chữ số

B1: Lấy sô hàng chục = Math.floor(number/10)
B2: Lấy số đơn vị = number%10
B3: Tổng = số hàng chục + số đơn vị

Output: Tỏng
*/

var number = Number(prompt("Nhập số có 2 chữ số:"))
var tens = Math.floor(number/10)
var units = number%10
var total = tens + units

console.log("Số có 2 chữ số:", number)
console.log("Số hàng chục:", tens, "Số hàng đơn vị:", units)
console.log("Tổng:", total)

