//Globals
let userRegister = {};
let appointmentRegister = {};

function userRegistration(DNI){
    if(!userSearching(DNI)){
        let user = prompt("Por favor ingrese el nombre y apellido del usuario para realizar el registro.");
        userRegister[DNI] = user;
    }
}

function userSearching(DNI){
    for(let key in userRegister){
        if (parseInt(key) === DNI){
            return true; // El usuario existe dentro del registro
        }
    }
    return false; // El usuario no existe dentro del registro
}

function appointmentRegistration(DNI) {
    let flag = false;
    if (!userSearching(DNI)) { // Se valida si el valor devuelto por la función es true
        userRegistration(DNI); // En caso de ser false, se realiza el registro del mismo
    }
    while (!flag) {
        let appointmentDate = prompt("Ingrese la fecha deseada para la cita. Por favor, ingrésela de la misma forma del siguiente ejemplo.\nEjemplo: 16/08/2000");
        if (appointmentDate !== null) {
            // Verificar si la fecha tiene el formato correcto
            let datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
            if (datePattern.test(appointmentDate)) {
                if (!appointmentRegister.hasOwnProperty(DNI)) { // Se consulta si el objeto posee algun tipo de dato con ese valor.
                    appointmentRegister[DNI] = []; // Si no hay citas registradas para este usuario, creamos un array vacío para almacenarlas
                }
                if (!appointmentRegister[DNI].includes(appointmentDate)) {// Consultamos si dentro de la clave DNI, en el array creado previamente, existe el valor. Me devuelve un booleano.
                    appointmentRegister[DNI].push(appointmentDate); // En caso de que sea false, lo agregamos al final del array.
                    alert("El turno ha sido agregado de forma exitosa.");
                } else {
                    alert("La fecha de cita ya está registrada para este usuario. Por favor, ingrese una fecha diferente.");
                }
                let respuesta = prompt("¿Desea agendar otra cita? \n1- Si \n2- No");
                if (respuesta == 2) {
                    flag = true;
                }
            } else {
                alert("El formato de la fecha es incorrecto. Por favor, ingrésela en el formato correcto (DD/MM/AAAA).");
            }
        } else {
            let respuesta = prompt("Ha ingresado una respuesta vacía. \n¿Desea salir del programa? \n1- Si\n 2-No ");
            if (respuesta == 2) {
                flag = true;
            } else {
                alert("Por favor, siga las indicaciones dadas.");
            }
        }
    }
}

function main(){
    alert("Bienvenido al sistema de registro de turnos. Por favor siga las siguientes instrucciones.");
    let DNI = prompt("Ingrese el DNI para realizar el registro de la cita."); 
    if(DNI !== null){ // Se valida que el valor ingresado no sea null
        appointmentRegistration(DNI); 
        alert("El usuario '" + userRegister[DNI] + "' posee el o los siguientes turnos: " + appointmentRegister[DNI].join(" - "));
        alert("Gracias por utilizar nuestros servicios. \n¡Hasta luego!") 
    }
}

main();