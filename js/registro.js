const formRegister = document.getElementById("formRegister");
console.log(formRegister)
formRegister.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name= document.querySelector('#name').value
    const email= document.querySelector('#email').value
    const password= document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const listUsersRegister = users.find(user => user.email === email)
     
    if (listUsersRegister ) {
        return alert('El usuario ya esta registrado')
        
    }

    users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registro Exitoso')

    /*redigirirme al login*/
    window.location.href= 'login.html'
    
})

