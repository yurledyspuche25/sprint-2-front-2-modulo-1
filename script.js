
const miInput = document.querySelectorAll('input');
//Quitar una validacion mientras escribo

miInput.forEach(miInput => {
    miInput.addEventListener('input', ()=>
{
    miInput.setCustomValidity('');
    // Comprobar si se debe validar
    miInput.checkValidity();
})
})

// Mostrar mensaje validacion

miInput.forEach(miInput => {
   miInput.addEventListener('invalid', ()=>
{
    miInput.setCustomValidity('Por favor rellenar los campos vacios')
})})


/*
let btn = document.getElementById('btnSubmit');
function mostrar(){
    document.getElementsByClassName('errorMensaje').style.display = 'block';
        document.getElementsByClassName('icon').style.display = 'block';
} ;
    function ocultar(){
    
        document.getElementsByClassName('errorMensaje').style.display = 'none';
        document.getElementsByClassName('icon').style.display = 'none';
    }; 
    const formulario = document.querySelector("#form");

let validar = (data, mostrar) => {
  if (data.value) {
    mostrar.classList.add("mostrar");
    data.classList.remove("red");
    return true;
  } else {
    mostrar.classList.remove("red");
    data.classList.add("ocultar");
    return false;
  }
};
 */
  



// MOSTRAR FORM EN PANTALLA
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnSubmit = document.getElementById('btnSubmit');
const form = document.getElementById('form');
const tableBody = document.getElementById('tableUsersBody');

const buttonsDelete = document.getElementsByClassName('delete');

const users = [];

const handleDelete = (index) => {
    users.splice(index, 1);
    showList();
};

const processForm = (e) => {
    e.preventDefault();
    const newUser = {
        name: nameInput.value,
        lastname: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    //almacenar local storage 
    users.push(newUser)
    localStorage.setItem('users',JSON.stringify(users));
    showList();
    nameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    Array.from(buttonsDelete).forEach((element, index) => {
        element.addEventListener('click', () => {handleDelete(index)});
    })
};

const showList = () => {
    tableBody.innerHTML = '';
    users.forEach(element => {
        tableBody.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.lastname}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
            <td class="delete">X</td>
        </tr>
    `
    });
};

form.addEventListener('submit', (e) => {processForm(e)});


