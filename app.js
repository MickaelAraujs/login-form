var getBtn = document.getElementById("btn");
console.log(getBtn);

getBtn.addEventListener('click',enableUser);

var admin = {
    user : 'admin',
    password : 'admin'
};

function getUser(form) {
    return form.querySelector('#usuario').value;
};

function getPassword(form) {
    let password = form.querySelector('#password').value;
    password = btoa(password);

    return password;
};

function enableUser() {
    let getForm = getBtn.closest('.login');
    let user = getUser(getForm);
    let password = getPassword(getForm);
    password = atob(password);
    if(user === admin.user && password === admin.password) {
        alert('usuário logado com sucesso!');
    } else {
        alert('usuario ou senha inválidos');
    }
    
};