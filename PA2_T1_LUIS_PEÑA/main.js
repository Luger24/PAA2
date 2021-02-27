function nuevoChiste(){
  
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        let elemento = document.getElementById('contenedor');
        elemento.innerHTML = `<p>${data.value}</p>`;
        console.log(data);

        let arrayChistes = new Array();
        arrayChistes.push(data.value);
        showChistes(arrayChistes);
    })
    .catch(err => console.log(err))
}

function showChistes(arrayChistes){
    let show = document.getElementById('mostrarDatos');

    arrayChistes.forEach(function (arrayChistes) {
        show.innerHTML += '<div> <ul>' + '<li>' + arrayChistes + '</li> </ul> </div>';
    });
}