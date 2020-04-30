function insert(num){
    document.form.textview.value = document.form.textview.value+num;
}
function c(){
    document.form.textview.value = "";
}
function equal(){
    var result = document.form.textview.value;
    if(result){
        document.form.textview.value = eval(result);
    }
}