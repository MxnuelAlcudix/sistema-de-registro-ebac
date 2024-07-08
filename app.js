//Imprimir un mensaje de bienvenida a la consola
console.log("Sistema EBAC de Registro de Alumnos");

//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [
    
    //Se muestra lista de alumnos por medio de objetos
    { nombre: "Manuel Alcudia", zonaResidencia: "CDMX", Edad: 22, nombrePrograma: "Dessarollo Front End De Cero a Pro", email: "mxnuelitoalcudix@icloud.com", numeroTelefonico: 5528985056, seguroMedico: true, cualSeguroMedico: "Sunshine Seguros", otrosLenguajes: true, cualesLenguajes: "Ingles" },  
    { nombre: "Sandra Yadira", zonaResidencia: "Toronto", Edad: 38, nombrePrograma: "Desarrollo Back End Con Python", email: "sayacastro@hotmail.com", numeroTelefonico: 6475323548, seguroMedico: true, cualSeguroMedico: "Goodlife Seguros", otrosLenguajes: true, cualesLenguajes: "Frances" }, 
    { nombre: "Juan Manuel", zonaResidencia: "Toronto", Edad: 37, nombrePrograma: "Desarrollo Front End Con HTML", email: "jumaalcudia@hotmail.com", numeroTelefonico: 6478917330, seguroMedico: true, cualSeguroMedico: "Everlife Seguros" , otrosLenguajes: true, cualesLenguajes:  "Italiano" },
    { nombre: "Kitzia Castro", zonaResidencia: "Toronto", Edad: 22, nombrePrograma: "Desarrollo Con C+ y C++", email: "kitzia.castro@hotmail.com", numeroTelefonico: 4168311406, seguroMedico: false, cualSeguroMedico: "Vidasegura Seguros", otrosLenguajes: true, cualesLenguajes: "Japones" }, 
    { nombre: "Maria De Los Angeles", zonaResidencia: "Veracruz", Edad: 65, nombrePrograma: "Arquitectura Computacional", email: "maria.angeles.fernandez@hotmail.com", numeroTelefonico: 2711278950, seguroMedico: false, cualSeguroMedico: "SiempreVita Seguros", otrosLenguajes: true, cualesLenguajes: "Aleman" },
]

//Compone la tablas en una tabla de registro
console.table(registro);

//Función que permite agregar un nuevo alumno al arreglo de registro.
function agregarAlumno(){
  
    //Se le solicita información al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresar nombre del alumno");
    var zonaResidencia = prompt("Ingresar zona residencial del nuevo alumno")                                    
    var Edad  = prompt("Agregar edad del alumno");
    var nombrePrograma = prompt("Agregar programa a estudiar");
    var email = prompt("Agregar correo electronico");
    var numeroTelefonico = prompt("Numero telefonico del alumno");

    // Muestra una opción variable para el registro
    var seguroMedico = prompt("El alumno tiene seguro medico (Si/No)");
    var seguroMedico_ValorProcesado = false; 

    if(seguroMedico == "si"){
     seguroMedico_ValorProcesado = true;
    }else if(seguroMedico =="no"){
     seguroMedico_ValorProcesado = false;
    } else{
    alert("opcion incorrecta");
    }
    
    var cualSeguroMedico = prompt("Compañia de seguro medico");

    var otrosLenguajes = prompt("Alumno tiene conocimiento de algun otro Lenguaje (Si/No)");
    var otrosLenguajes_ValorProcesado = false 

    if(otrosLenguajes == "si"){
     otrosLenguajes_ValorProcesado = true;
    }else if(otrosLenguajes == "no"){
     otrosLenguajes_ValorProcesado = false;    
    }else {
        alert("opcion incorrecta");
    } 

    var cualesLenguajes = prompt("Cual es el idioma/s de cual tiene conocimiento")

    //crea un objeto que se llama nuevo alumno con los datos ingresados. 
    var nuevoAlumno = {nombre: nombre, zonaResidencia: zonaResidencia, Edad: Edad, nombrePrograma: nombrePrograma, email: email, numeroTelefonico: numeroTelefonico, seguroMedico: seguroMedico_ValorProcesado, cualSeguroMedico: cualSeguroMedico, otrosLenguajes: otrosLenguajes_ValorProcesado, cualesLenguajes: cualesLenguajes};

    //Agrega la información nuevoAlumno al arreglo
    registro.push(nuevoAlumno);
}



//Función para consultar los registros de los alumnos
function consultarRegistros(){

    //Este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length;i ++){

        //Esta lista de console.log permite ver al usuario el registro en la consola
        console.log("Nombre: " + registro[i].nombre); 
        console.log("Zona De Residencia Del Alumno: " + registro[i].zonaResidencia);
        console.log("Edad: " + registro[i].Edad);
        console.log("Nombre Del Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
        console.log("Numero Telefonico: " + registro[i].numeroTelefonico);
        console.log("seguro Medico: " + registro[i].seguroMedico);
        console.log("Compañia de seguro medico: " + registro[i].cualSeguroMedico)
        console.log("Alumno tiene conocimiento de algun otro lenguaje: " + registro[i].otrosLenguajes);
        console.log("Cual es el idioma/s de cual tiene conocimiento: " + registro[i].cualesLenguajes);
        console.log("____________________________________________________________");
    };    
};

//Esta función permite generar un nuevo arreglo que no contenga la infomación del alumno desiado(Eliminar)
function eliminarAlumno (){

  //Solicita al usuario el nombre del alumno a eliminar   
  var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

  //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
  registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}

//Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición 
do{


//Variable que toma la elección del usuario para ejecutar la función indicada
var opcion = prompt("seleccione una opcion numerica: \n1. Agregar registro  \n2. Consultar registro de alumno \n3. Eliminar alumno  \n4. Editar datos de alumno  \n5. Buscar alumno en systema  \n6. Salir  ");


//Se declara este if para dar a elegir al usuario la opción que quiera

    if (opcion === "1"){
         agregarAlumno();
    }else if(opcion === "2"){
         consultarRegistros();
    }else if(opcion === "3"){
        eliminarAlumno();
    }else if(opcion === "4"){
        alert("Editar datos del alumno");
    }else if(opcion === "5"){
        alert("Buscar alumno");  
    } else break; ("Salida")


    //Esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo

    var continuar = prompt("¿Deseas hacer otra accion? (S/N)");



    //While que se encarga de cerrar el ciclo 
}   while(continuar === "s");
