$(document).ready(function(){
    $("#form").on("submit", function(e){
        //Captura el valor que ingresa el usuario
        let number = parseInt($("#idHero").val())
        e.preventDefault();
        
        //Llamado función para que se ejecute
        validar(number);
    });


    //FUNCIÓN PARA VALIDAR QUE EL DATO INGRESADO SEA UN NÚMERO
    function validar(num) {
        let exp = /^[0-9]+$/;
        if (exp.test(num)) {
            console.log("Numero ingresado por el usuario: ",num);
        }else{
            alert("INGRESA UN NÚMERO VÁLIDO");
        }


        //CONECTAR API
        const apiKey = "4905856019427443";
        const apiUrl = `https://superheroapi.com/api.php/${apiKey}/${num}`;
        $.ajax({
            datatype: "json",
            method: "GET",
            url: apiUrl,
            success: function(respuesta){
                //Muestra la data por consola
                console.log("Esta es la data ",respuesta);

                //let heroe = `<div>${respuesta.name}</div>`
                let heroe =`
                <h3>SuperHeroe encontrado</h3>
                <div class="card">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${respuesta.image.url}" class="card-img" alt=""></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">Nombre: ${respuesta.name}</h5>
                            <p class="card-text">Conexiones: ${respuesta.connections["group-affiliation"]}</p>
                            <ul class="list-group">
                            <li class="list-group-item">
                            <em>Publicado por: ${respuesta.biography.publisher}</em>
                            </li>
                            <li class="list-group-item">
                            <em>Ocupación: ${respuesta.work.occupation}</em>
                            </li>
                            <li class="list-group-item">
                            <em>Primera aparición: ${respuesta.biography["first-appearance"]}</em>
                            </li>
                            <li class="list-group-item">
                            <em>Altura: ${respuesta.appearance.height.join("-")}</em>
                            </li>
                            <li class="list-group-item">
                            <em>Peso: ${respuesta.appearance.weight.join("-")}</em>
                            </li>
                            <li class="list-group-item">
                            <em>Aliases: ${respuesta.biography.aliases}</em>
                            </li>
                            </div>
                        </div>
                    </div>
                </div>
                `

                $("#resultado").append(heroe)


            }
        })
    }








})