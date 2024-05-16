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
    }
})