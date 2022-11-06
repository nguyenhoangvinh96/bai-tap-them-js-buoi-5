document.getElementById("btnTax").onclick = function () {
    var name = document.getElementById("inputName2").value;
    var salary = document.getElementById("inputSalary").value - 4e6 - 16e5  
  * document.getElementById("inputUser").value;
var total = 0;
if (salary > 0 && salary <= 6e7) {
    total = 0.5 * salary;
}
else if (salary > 6e7 && salary <= 12e7) {
    total = 0.1 * salary;
}
else if (salary > 12e7 && salary <= 21e7) {
    total = 0.15 * salary;
}
else if ( salary > 21e7 && salary <= 384e6) {
    total = 0.2 * salary;
}
else if ( salary > 384e6 && salary <= 624e6) {
    total = 0.25 * salary;
}
else if (salary > 624e6 && salary <= 96e7) {
    total = 0.3 * salary;
}
else if (salary > 96e7) {
    total = 0.35 * salary;
}
else {
    alert("Số tiền thu nhập không hợp lệ");
}
(total = new Intl.NumberFormat("vn-VN").format(total));
var total = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + total + " VND"
document.getElementById("txtTax").innerHTML = total;
}




