//Globals
let userRegister = {};
let appointmentRegistrer = {};

function userRegistration(DNI){
    if(!userSearching(DNI)){
        let user = prompt("Por favor ingrese el nombre del usuario para realizar el registro.");
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

function appointmentRegistration(DNI){
    if(!userSearching(DNI)){// Se valida si el valor devuelto por la funcion es true
        userRegistration(DNI); // En caso de ser false, se realiza el registro del mismo
    }
    let appointmentDate = prompt("Ingrese la fecha deseada para la cita. Por favor, ingreselo de forma numerica.\nEjemplo: 16/08/2000");
    if (appointmentDate !== null){ // Se valida que el valor ingresado no sea null
        appointmentRegistrer[DNI] = appointmentDate; 
        alert("El turno ha sido agregado de forma exitosa.");
    }
}

function main(){
    alert("Bienvenido al sistema de registro de turnos. Por favor siga las siguientes instrucciones.");
    let DNI = prompt("Ingrese el DNI para realizar el registro de la cita."); 
    if(DNI !== null){ // Se valida que el valor ingresado no sea null
        appointmentRegistration(DNI); 
        alert("El usuario '" + userRegister[DNI] + "' posee un turno el dia: " + appointmentRegistrer[DNI]); 
    }
}

main();