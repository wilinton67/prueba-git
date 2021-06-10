'use strict'

window.addEventListener('load',()=>{
    var divUsuarios=document.querySelector('#usuarios');
var usuarios=[]

    fetch('https://breakingbadapi.com/api/characters')
    .then(data=>data.json())
    .then(users => {
        usuarios = users;   
        return getWalter();
    })
    .then(data=>data.json())
    .then(user=>{
        showUser(user)
    })

    function getWalter(){
        fetch('https://breakingbadapi.com/api/characters/1')
    }

    function showUser(user){
        
            let nombre=document.createElement('h2');
            nombre.innerHTML=user.name +" - "+ user.nickname;
            divUsuarios.appendChild(nombre);
    }

    function getUsers(){
        usuarios.map((user, i)=>{
            let nombre=document.createElement('h2');
            nombre.innerHTML= i +"."+ user.name +" - "+ user.nickname;
            divUsuarios.appendChild(nombre);
        });
    }

})