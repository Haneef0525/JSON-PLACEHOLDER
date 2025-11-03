

let val
async function fetchalbum() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/users/1/albums`) 
    val= await response.json()
   console.log(val);



 let str=``
   val.map((val)=>{
    str+=`

    
    <div class="card">
    <h1>${val.id}</h1>
    <h1>${val.title}</h1>
    
    
 <card onclick="gotophoto()"><button class="btn">click here</button></card>
    </div>`

     })
document.getElementById("main").innerHTML=str
}
 
fetchalbum()
function gotophoto(){
  window.location.href=`./photo.html?id=${val.id}`
}

    


