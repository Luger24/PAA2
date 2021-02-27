function nuevoPerfil(){
  
    const url = 'https://randomuser.me/api/';

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        let elemento = document.getElementById('contenedor');
        elemento.innerHTML = `<p>${data.results[0].gender}</p>
                               <p>${data.results[0].email}</p>
                               <p>${data.results[0].phone}</p>
                               <p>${data.results[0].name.first}</p>
                               <p>${data.results[0].name.last}</p>
                               <img src = '${data.results[0].picture.medium}'> `;
        console.log(data);

        let arrayPersonas = new Array();
        arrayPersonas.push(data.results[0].name.first);
        showPeople(arrayPersonas);
    })
    .catch(err => console.log(err))
}

function showPeople(arrayPersonas){
    let show = document.getElementById('mostrarDatos');

    arrayPersonas.forEach(function (arrayPersonas) {
        show.innerHTML += '<div> <ul>' + '<li>' + arrayPersonas + '</li> </ul> </div>';
    });
}