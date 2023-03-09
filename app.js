let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let d = document.querySelector('.d');
let e = document.querySelector('.e');
let f = document.querySelector('.f');
let g = document.querySelector('.g');
let h = document.querySelector('.h');
let i = document.querySelector('.i');
let j = document.querySelector('.j');
let k = document.querySelector('.k');
let l = document.querySelector('.l');
let m = document.querySelector('.m');
let n = document.querySelector('.n');
let o = document.querySelector('.o');
let p = document.querySelector('.p');
let q = document.querySelector('.q');
let r = document.querySelector('.r');
let s = document.querySelector('.s');
let t = document.querySelector('.t');
let u = document.querySelector('.u');

let aCount = 0;
let aPrice = 3.2;

let bCount = 0;
let bPrice = 7.2;


carrot = function()  {
    aCount++
    a.textContent = `${aCount} kg marchewki kosztuje ${aCount * aPrice} zł`
}

tomato = function() {
    bCount++
    b.textContent = `${bCount} kg pomidorów kosztuje ${bCount * bPrice} zł`
}

a.addEventListener("click", carrot)
b.addEventListener("click", tomato)