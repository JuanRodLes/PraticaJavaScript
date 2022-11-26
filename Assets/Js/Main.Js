function validacion1 () {
    let email = document.getElementById("Correo").value

    if (email !=""){
        console.log("Ingrese su correo")
        let thx = document.getElementById("IngreseCorreo")
        thx.innerHTML = `Gracias`
    }
else{
    alert("Por favor ingrese un correo electrónico")
}

    let name = document.getElementById("Nombre").value

if (name !=""){
    console.log("Hola ${name}!")
    let hi = document.getElementById("Saludo")
    hi.innerHTML = `Hola ${name}`
}
else{
    alert("Por favor escriba su nombre de usuario")
} 

    let pass = document.getElementById("Contraseña").value

    if (pass !=""){
        console.log("no comparta su contraseña")
        let warn = document.getElementById("Recomienda")
        warn.innerHTML = `no comparta su contraseña`
    }
    else{
        alert("Por favor escriba una contraseña")
    }

    let file = document.getElementById("Archivo").value

    if (file !=""){
        console.log("Gracias")
        let succes = document.getElementById("Exito")
        warn.innerHTML = `Su archivo se ha subido con éxito`
    }
    else{
        alert("Por favor cargue un archivo")
    }




    // let checkbox = document.getElementById("Sexo").on
    
    // if(checkbox ==""){
    //     alert("Seleccione un sexo")
    // }
}

