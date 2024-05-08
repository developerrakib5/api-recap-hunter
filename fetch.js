// 33-3 JSON Placeholder, GET Data, Display Data On UI
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))