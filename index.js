const boton=document.getElementById('boton')
const temperatura=document.getElementById('temperatura')
const reiniciarb=document.getElementById('reiniciar')

function convertir(){
    let gradosf=document.getElementById('farenheit').value
    let gradosc=(gradosf-32)*5/9
    let result= gradosc.toFixed(1)
    document.getElementById('celcius').value=result
    if(gradosc>0){
        temperatura.innerHTML=""+gradosc.toFixed(1)
        temperatura.style.height=gradosc+'%'
    }
    else{
        temperatura.style.height=0+'%'
    }
}
function reiniciar(){
    document.getElementById('farenheit').value=''
    document.getElementById('celcius').value=''
    temperatura.style.height=0
}
reiniciarb.addEventListener('click',reiniciar)
boton.addEventListener('click',convertir)





