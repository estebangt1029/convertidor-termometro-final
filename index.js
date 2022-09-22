const boton=document.getElementById('boton')
const celcius=document.getElementById('celcius') 
const temperatura=document.getElementById('temperatura')


function convertir(){
    let gradosf=document.getElementById('farenheit').value
    let gradosc=(gradosf-32)*5/9
    celcius.innerHTML=""+gradosc.toFixed(1)
    if(gradosc>0){
        temperatura.innerHTML=""+gradosc.toFixed(1)
        temperatura.style.height=gradosc+'%'
    }
    else{
        temperatura.style.height=0+'%'
    }
}
boton.addEventListener('click',convertir)

