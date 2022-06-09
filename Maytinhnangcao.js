
let hienthi = document.getElementById("hienthi")
function duLieu(value){
    hienthi.value += value;
}
function xoa(){
    hienthi.value="";
}
function ketqua(){
let result = eval(hienthi.value)
    hienthi.value = result;
}