const valueGetter=()=>{
    var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;
// var res = document.querySelector('#result')
return {num1:Number(num1),num2:Number(num2)}
}

function plus() { 
    let value = valueGetter();
    var res = document.querySelector('#result')
    res.value = value.num1 + value.num2
    console.log(res.value)
}

function minus() {
    
    let value = valueGetter();
    var res = document.querySelector('#result')
    res.value = value.num1 - value.num2
}

function mul() {
    let value = valueGetter();
    var res = document.querySelector('#result')
    res.value = value.num1 * value.num2
}

function division() {
    let value = valueGetter();
    var res = document.querySelector('#result')
    res.value = value.num1 / value.num2
}

function square() {
    document.querySelector('#num2').disabled = true
    let value = valueGetter();
    var res = document.querySelector('#result')
    res.value = value.num1 * value.num1
}
function cube() {
    document.querySelector('#num2').disabled = true
    let value = valueGetter();
    var res = document.querySelector('#result')
    res.value = value.num1 * value.num1 * value.num1
}

function sin() {
    let value = valueGetter();
    document.querySelector('#num2').disabled = true
    var res = document.querySelector('#result')
    res.value = Math.sin(value.num1)
}
function cos() {
    let value = valueGetter();
    document.querySelector('#num2').disabled = true
    var res = document.querySelector('#result')
    res.value = Math.cos(value.num1)
}
function tan() {
    let value = valueGetter();
    document.querySelector('#num2').disabled = true
    var res = document.querySelector('#result')
    res.value = Math.tan(value.num1)
}
function sqrt() {
    let value = valueGetter();
    document.querySelector('#num2').disabled = true
    var res = document.querySelector('#result')
    res.value = Math.sqrt(value.num1)
}
function log() {
    let value = valueGetter();
    document.querySelector('#num2').disabled = true
    var res = document.querySelector('#result')
    res.value = Math.log(value.num1)
}
function equal() {
    var res = document.querySelector('#result')
    if ( document.getElementById('num1').value == document.getElementById('num2').value ){
        res.value = true
    }else {
            res.value = false
    }
}
function clears() {
    document.getElementById('num1').value='';
    document.getElementById('num2').value=''; 
    document.getElementById('result').value='';  
}