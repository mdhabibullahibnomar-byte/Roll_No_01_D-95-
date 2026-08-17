const p = document.getElementById("p");
const commcentsHTML = document.getElementById("c");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res => res.json()))
    .then(data => {
        data.forEach((posts) => {
            p.innerHTML += `
        <h3>User's ID: ${posts.userId}</h3>
        <p>Posts ID: ${posts.id}</p>
        <h5>Title: ${posts.title}</h5>
        <p>${posts.body}</p> `
        })
    });
fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res => res.json()))
    .then(data => {
        data.forEach((comments) => {
            c.innerHTML += `
        <h3>Post's ID: ${comments.postId}</h3>
        <p>Comments ID: ${comments.id}</p>
        <p>email: ${comments.email}</p>
        <p>${comments.body}</p> `
        })
    });