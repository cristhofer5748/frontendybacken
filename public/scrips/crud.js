
let dpi = document.getElementById('dpi');
let nip = document.getElementById('nip');
let primernom = document.getElementById('primernom');
let segundonom = document.getElementById('segundonom');
let primerap = document.getElementById('primerap');
let segunap = document.getElementById('segunap');
let fechana = document.getElementById('fechana');
let apellidocasa = document.getElementById('apellidocasa');
let puestonom = document.getElementById('puestonom');
let puestofun = document.getElementById('puestofun');
let departamento= document.getElementById('departamento');
let emailins = document.getElementById('emailins');
let emailper = document.getElementById('emailper');
let telcasa = document.getElementById('telcasa');
let telcelular = document.getElementById('telcelular');
let btnactualizar = document.getElementById('actualizar')
let boton = document.getElementById('guardar')
let tablebody = document.getElementById('bodytable')
let id = document.getElementById('id')
let id2;



 function traer() {
     

    fetch("http://34.71.72.252/formulariouno/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.empleadosper)
        for(let i = 0; i<data.empleadosper.length;i++){
           let id = data.empleadosper[i]._id;
            tablebody.innerHTML+=`
            <tr>
            <td>
           <button onclick="enviaractua('${id}')" type="submit" class="btn btn-info ">Actualizar</button>
           
                <button onclick="borrar('${id}')" type="submit" class="btn btn-danger ">Borrar</button>
            </td>
            <td>${data.empleadosper[i].dpi}</td>
            <td>${data.empleadosper[i].nip}</td>
            <td>${data.empleadosper[i].pnombre}</td>
            <td>${data.empleadosper[i].snombre}</td>
            <td>${data.empleadosper[i].papellido}</td>
            <td>${data.empleadosper[i].sapellido}</td>
            <td>${data.empleadosper[i].fnacimiento}</td>
            <td>${data.empleadosper[i].apecasada}</td>
            <td>${data.empleadosper[i].pnominal}</td>
            <td>${data.empleadosper[i].pfuncional}</td>
            <td>${data.empleadosper[i].einstitucional}</td>
            <td>${data.empleadosper[i].epersonal}</td>
            <td>${data.empleadosper[i].ntelcasa}</td>
            <td>${data.empleadosper[i].ntelcelular}</td>
            
            </tr>`
        }
       
      })
      .catch((error)=>{
          console.log(error)
      })
      
  }

  document.addEventListener("DOMContentLoaded", traer, false);

 async function guardar (){

  await fetch("http://34.71.72.252/formulariouno/crear",{
        method: "POST",
        body: JSON.stringify({
            "dpi": dpi.value,
            "nip": nip.value,
            "pnombre": primernom.value,
            "snombre": segundonom.value,
            "papellido": primerap.value,
            "sapellido": segunap.value,
            "fnacimiento": fechana.value,
            "apecasada": apellidocasa.value,
            "pnominal": puestonom.value,
            "pfuncional": puestofun.value,
            "dep": departamento.value,
            "einstitucional": emailins.value,
            "epersonal": emailper.value,
            "ntelcasa": telcasa.value,
            "ntelcelular": telcelular.value,
        }),
        headers: {
            "Content-type": "application/json"
        }
        })
    .then(res => res.text())
    .then(data => {
        alert('Usuario Guardado Correctamente')
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
        alert(`Error en la actualizacion el error es ${error}`)
    })
    location.reload();
}

boton.addEventListener('click',guardar,false)


 async function borrar(empleadosid){
  
  
   await  fetch(`http://34.71.72.252/formulariouno/${empleadosid}/borrar`,{
      
    method: 'DELETE'
    })

tablebody.innerHTML="";
    traer();
}



async function enviaractua(empleadosid){
  await  fetch(`http://34.71.72.252/formulariouno/${empleadosid}`)
    .then((res) => res.json())
    .then((data) =>{
console.log(data)
id2= data._id;
id.value = data._id;
dpi.value = data.dpi;
nip.value= data.nip;
primernom.value= data.pnombre;
segundonom.value = data.snombre;
primerap.value= data.papellido;
segunap.value= data.sapellido;
fechana.value= data.fnacimiento;
apellidocasa.value = data.apecasada;
puestonom.value = data.pnominal;
puestofun.value = data.pfuncional;
departamento.value =data.dep;
emailins.value= data.einstitucional;
emailper.value=data.epersonal;
telcasa.value=data.ntelcasa;
telcelular.value=data.ntelcelular;



    })
   
  
}
id2=id.value
async function actualizar(){

   await fetch(`http://34.71.72.252/formulariouno/${id2}/actualizar`,{
         method: "PUT",
         body: JSON.stringify({
            "_id": id.value,
             "dpi": dpi.value,
             "nip": nip.value,
             "pnombre": primernom.value,
             "snombre": segundonom.value,
             "papellido": primerap.value,
             "sapellido": segunap.value,
             "fnacimiento": fechana.value,
             "apecasada": apellidocasa.value,
             "pnominal": puestonom.value,
             "pfuncional": puestofun.value,
             "dep": departamento.value,
             "einstitucional": emailins.value,
             "epersonal": emailper.value,
             "ntelcasa": telcasa.value,
             "ntelcelular": telcelular.value,
         }),
         headers: {
             "Content-type": "application/json"
         }
         })
     .then(res => res.text())
     .then(data => {
         alert('Usuario Actualizado Correctamente')
         console.log(data)
     })
     .catch((error)=>{
         console.log(error)
         alert(`Error en la actualizacion el error es ${error}`)
     })
     location.reload();
     
 }

btnactualizar.addEventListener('click',actualizar,false);
  
