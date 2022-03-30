document.getElementById('answer').readOnly = true;
let screen = document.getElementById('answer');
buttons = document.querySelectorAll('button');
let screenValue = '';

function insert(num){
    screen.value = screen.value + num;
    console.log(screen.value);
}

function equal(){
    //let result = cal.field.value 
    screen.value = eval(screen.value);
    // https://www.w3schools.com/jsref/jsref_eval.asp
}

function clean(){ // untuk remove
    screen.value = "";
}

function back(){ // untuk del
    screen.value = screen.value.substring(0, screen.value.length -1);
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_substring6
    // index ke 0 hingga ${length} -1, contoh 0 ke 9
}