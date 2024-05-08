// 33-5 Dynamically Display Loaded Data On Your Website
// console.log('Inside Index js');
function loaduser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => displayUsers2 (data))
}

function displayUsers2 (data){
    const ul = document.getElementById('users-list');
    for (const users of data){
        console.log(users.name);
        const li = document.createElement('li');
        li.innerText = users.name;
        ul.appendChild(li);
    }
}