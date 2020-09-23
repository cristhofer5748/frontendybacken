
let nombre = document.getElementById('nombre');
let puesto = document.getElementById('puesto');
let lugaringre = document.getElementById('lugar');
let fechaingre = document.getElementById('fecha');
let telefono = document.getElementById('telefono');
let boton = document.getElementById('guardar')
let tablebody = document.getElementById('bodytable')
let id = document.getElementById('id')
let btnactualizar = document.getElementById('actualizar')
let id2;

 function traer() {
     

    fetch("http://34.71.72.252/formulariodos/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.empleadostem)
        for(let i = 0; i<data.empleadostem.length;i++){
            let id = data.empleadostem[i]._id;
            tablebody.innerHTML+=`
            <tr>
            <td>
            <button onclick="enviaractua('${id}')" type="submit" class="btn btn-info ">Actualizar</button>
           
            <button onclick="borrar('${id}')" type="submit" class="btn btn-danger ">Borrar</button>
            </td>
            <td>${data.empleadostem[i].nombre}</td>
            <td>${data.empleadostem[i].puesto}</td>
            <td>${data.empleadostem[i].lugar}</td>
            <td>${data.empleadostem[i].fecha}</td>
            <td>${data.empleadostem[i].telefono}</td>
                       
            </tr>`
        }
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  document.addEventListener("DOMContentLoaded", traer, false);

  function guardar (){

   fetch("http://34.71.72.252/formulariodos/crear",{
        method: "POST",
        body: JSON.stringify({
            "nombre": nombre.value,
            "puesto": puesto.value,
            "lugar": lugaringre.value,
            "fecha": fechaingre.value,
            "telefono": telefono.value,
            
        }),
        headers: {
            "Content-type": "application/json"
        }
        })
    .then(res => res.text())
    .then(data => {
        alert('Empleado Guardado Correctamente')
        console.log(data)
    })
    .catch((error)=>{
        alert(`Error en la creacion el error es ${error}`)
        console.log(error)
        
    })
}

boton.addEventListener('click',guardar,false)

async function borrar(empleadosid){
  
  
    await  fetch(`http://34.71.72.252/formulariodos/${empleadosid}/borrar`,{
       
     method: 'DELETE'
     })
 
 tablebody.innerHTML="";
     traer();
 }
 
 
 
 async function enviaractua(empleadosid){
   await  fetch(`http://34.71.72.252/formulariodos/${empleadosid}`)
     .then((res) => res.json())
     .then((data) =>{
 console.log(data)
 id2= data._id;
 id.value = data._id;
 nombre.value = data.nombre;
 puesto.value= data.puesto;
 lugaringre.value= data.lugar;
 fechaingre.value = data.fecha;
 telefono.value= data.telefono;

 
 
     })
    
   
 }
 id2=id.value
 async function actualizar(){
 
    await fetch(`http://34.71.72.252/formulariodos/${id2}/actualizar`,{
          method: "PUT",
          body: JSON.stringify({
             "_id": id.value,
             "nombre": nombre.value,
             "puesto": puesto.value,
             "lugar": lugaringre.value,
             "fecha": fechaingre.value,
             "telefono": telefono.value,
          }),
          headers: {
              "Content-type": "application/json"
          }
          })
      .then(res => res.text())
      .then(data => {
          alert('Empleado Actualizado Correctamente')
          console.log(data)
      })
      .catch((error)=>{
          console.log(error)
          alert(`Error en la actualizacion el error es ${error}`)
      })
      location.reload();
      
  }
 
 btnactualizar.addEventListener('click',actualizar,false);
   
 