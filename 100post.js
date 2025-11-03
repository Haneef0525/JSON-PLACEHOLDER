

let alldata=[]



async function fetchdata() {
   const response= await fetch("https://jsonplaceholder.typicode.com/posts") 
   const data= await response.json()
   alldata=data
   display(alldata)
 }



 function display(data) {
   
 let str=``
 data.map((val)=>{
  str+=`
   
    
     <div class="card">
     <a href="user.html?id=${val.userId}">
     <img src="user-logo-icon_1076610-15925.jpg" class="img"><span>${val.userId}</span></a>
     <a href="details.html?id=${val.id}">
     <h1>${val.title}"<h1>
     <p>${val.body}</p>
     </a>
     </div>
     `

 } ) 
  document.getElementById("main").innerHTML=str 
 }



 function searchdata(){
  const input = document.getElementById("search-bar").value;

  let filterdata = alldata.filter((val) =>
   ( val.title.toLowerCase().includes(input.toLowerCase()))
);
display(filterdata);
}
 fetchdata()

