const urlparams=new URLSearchParams(window.location.search)
const id=urlparams.get("id")

console.log(id);

async function fetchdata() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
   const data= await response.json()
   console.log(data);

document.getElementById("main").innerHTML=`
<h1>title:${data.title}</h1>
<h2>body:${data.body}</h2>
</div>`   
}


fetchdata()

async function fetchcomment() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`) 
   const data= await response.json()
   console.log(data);

   let str=``
   data.map((val)=>{
    str+=`
    <div class="card">
    <a href="user.html?id=${val.id}">
    <h1>${val.name}</h1>
    <h1>${val.email}</h1>
    <p>${val.body}</p>
    </div>
    `
   })

 document.getElementById("comment").innerHTML=str
}


fetchcomment()
