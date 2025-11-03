const urlparams=new URLSearchParams(window.location.search)
const id=urlparams.get("id")

async function fetchalbum() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`) 
   const data= await response.json()
   console.log(data);

   let str=``
   data.map((val)=>{
    str+=`
    <div class=card>
<h1>albumId:${val.albumId}</h1>
<h1>id:${val.id}</h1>
<h1>title:${val.title}</h1>
<a href=<h1>${val.url}</h1></a>




    </div>
`
     })


 document.getElementById("main").innerHTML=str
}
 

    

fetchalbum()
