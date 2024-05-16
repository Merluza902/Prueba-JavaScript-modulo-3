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
            }
        })
    }








})