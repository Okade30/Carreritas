
let inicio = document.getElementById('inicio')
let  jugador1= document.getElementById('jugador1')
let  jugador2= document.getElementById('jugador2')
let  jugador3= document.getElementById('jugador3')

function iniciar() {
    inicio.style.display = 'none';
    let intervalo = setInterval(carrera, 200);

    let posicion1= 0;
    let posicion2= 0;
    let posicion3= 0;

    function carrera() {
        posicion1 += Math.round(Math.random()*20);
        jugador1.style.left = `${posicion1}px`; //500px

        posicion2 += Math.round(Math.random()*20);
        jugador2.style.left = `${posicion2}px`; //500px

        posicion3 += Math.round(Math.random()*20);
        jugador3.style.left = `${posicion3}px`; //500px

        if (posicion1 >= 663) {
            alert('Gano el Rojo c:');
            clearInterval(intervalo);
        }else if (posicion2 >= 663){
            alert('Gano el Azul c:');
            clearInterval(intervalo);
        }else if (posicion3 >= 663){
        alert('Gano el Amarillo c:');
        clearInterval(intervalo);
    }
    }
}

inicio.addEventListener('click', iniciar);
