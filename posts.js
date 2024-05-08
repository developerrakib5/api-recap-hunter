function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => displayPosts(data))
}
function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
 for (const post of posts){
    // console.log(post);
    const div = document.createElement('div');
    div.innerHTML = ` 
    <h4>USer</h4>
    `;
    postContainer.appendChild(div)
 }
}
loadPosts();


// 33-8 Debug API, Network Tab,Status Code, Headers, Bad API
function deletePosts (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patcApost (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); 
}