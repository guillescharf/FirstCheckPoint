const URL_USERS = "https://jsonplaceholder.typicode.com/users";

function showUsersData(data){
    const parentTable = document.getElementById('usersDataTable');
    let itemClass ='';

    for(let i = 0; i<data.length; i++){
        itemClass = (i%2==0)?'even':'';
        let user = document.createElement('tr');
        user.className = itemClass;
        user.innerHTML = `<td>${data[i].name} </td>
                          <td>${data[i].email} </td>
                          <td>${data[i].phone}</td>
                          <td>${data[i].address.city}</td>
                          <td>${data[i].company.name}</td>`;
        parentTable.appendChild(user);
    }
}

fetch(URL_USERS) // Infiere en que el pedido es un GET
    .then((response) => response.json())
    .then((data) => showUsersData(data)); 
let URL = "https://jsonplaceholder.typicode.com/users"

const mostrarDatos = async () => {
  let personas = await axios (URL);
  console.log(personas.data); //aca trae los datos
  
  const tabla = document.querySelector("table");
  for (let i = 0; i < personas.data.length; i++) { //esto se repite por cada persona
    console.log(personas.data[i]);

    const fila = document.createElement("tr");
    tabla.appendChild(fila) //aca meto cada fila creada a la tabla

    fila.innerHTML = `
      <td>${personas.data[i].name}</td>
      <td>${personas.data[i].id}</td>
      <td>${personas.data[i].email}</td>
      <td>${personas.data[i].phone}</td>
      <td>${personas.data[i].address.city}</td>
      <td>${personas.data[i].company.name}</td>
    `
  }
}
mostrarDatos();




