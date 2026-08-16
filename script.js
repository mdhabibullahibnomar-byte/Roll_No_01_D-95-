console.log("I am Connected")
const h1 = document.getElementsByTagName("h1")
console.log(h1)
for (let i = 0; i<h1.length; i++){
    h1[i].style.color = "red";
    h1[i].style.
    backgroundColor = "yellow";
}
const para = document.getElementById("para")
console.log(para)
para.style.color = "green"
console.log(para.innerText);
const div = document.getElementById("div")
console.log(div.innerText)
console.log(div.innerHTML)
const obj = [
    {
        name : "John",
        city : "Dallas"
    },
    {
        name : "Jany",
        city : "Dhaka"
    }
];
const userHTML = document.getElementById("user");
obj.forEach((user) => {
    userHTML.innerHTML += `
    <h3> ${user.name} </h3>
    <address> ${user.city} </address>`
})
for(let i=0;i<99;i++){
fetch("https://jsonplaceholder.typicode.com/users")
.then((res => res.json()))
.then(data => {
    data.forEach((user) =>{
        userHTML.innerHTML+=`
        <h1>${user.name}</h1>
        <email>${user.email} </email>
        <address>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</address>`
    })
});
}