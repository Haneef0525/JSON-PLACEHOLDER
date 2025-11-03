const urlparams=new URLSearchParams(window.location.search)
const id=urlparams.get("id")
let val

async function fetchuser() {
    const responsce= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
    val= await responsce.json()
   console.log(val);



 document.getElementById("one").innerHTML=`
 <div class="card">
   
    <h1>address:${val.address.street}</h1>
    <h1>city:${val.address.city}</h1>
    <h1>geo:${val.address.geo.lat}</h1>
    <h1>street:${val.address.street}</h1>
    <h1>suite:${val.address.suite}</h1>
    <h1>zipcode:${val.address.zipcode}</h1>
    <h1>company:${val.company.name}</h1>
    <h1>bs:${val.company.bs}</h1>
    <h1>catchPhrase:${val.company.catchPhrase}</h1>
    <h1>email:${val.email}</h1>
     <h1>id:${val.id}</h1>
     <h1>name:${val.name}</h1>
     <h1>phone:${val.phone}</h1>
     <h1>username:${val.username}</h1>
     <h1>website:${val.website}</h1>
     <button onclick="gotoalbum()">album</button>
    </div>`
}

fetchuser()


function gotoalbum(){
  window.location.href=`./albhums.html?id=${val.id}`
}



async function fetchdata() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) 
   const data= await response.json()
  //  console.log(data);

    let str=``
   data.map((val)=>{
    str+=`
    <div class="card">
    <img src="user-logo-icon_1076610-15925.jpg" class="img"><span>${val.userId}</span>
    <a href="details.html?id=${val.id}">
    <h1>${val.title}</h1>
    <p>${val.body}</p>
    </a>
    </div>`
   })

   document.getElementById("main").innerHTML=str
}

fetchdata()




