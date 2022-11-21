const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

(function() {
    setInterval(function() {
        let data = new Date();
        let hr = data.getHours();
        let min =  data.getMinutes();
        let seg = data.getSeconds();

        let d = data.getDate();
        let m = data.getMonth() + 1;
        let a = data.getFullYear();

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = seg;

        dia.innerText = d;
        mes.innerText = m;
        ano.innerText = a;
    })
})()