//Creation Elements:-
const container=document.createElement("div");
container.classList.add("container");
document.body.append(container);

//Append method:-
const row = document.createElement("div")
row.classList.add("row");
container.append(row);

fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((ele1)=>{
   for(let i=0;i<ele1.length;i++){
      let col = document.createElement("div");
   col.classList.add("col-lg-4", "col-sm-12");
   row.append(col);

const card=document.createElement("div");
card.classList.add("card1");

card.innerHTML += `
<div class="card h-auto w-75 mt-4 mx-2 bg-secondary">
<div class= "country"></div>
<div class = "bg-secondary-subtle h-75 m-2 rounded-3">
<h1 id="title" class="text-center fw-bolder fs-4 pt-2">${ele1[i].name.common}</h1>
</div>
<img src="${ele1[i].flags.png}" class="card-img-top h-100 w-75 mt-3 mx-5 rounded-4" alt="country-flag">
<div class="card-body">
<div class="card text-center m-3"><b>Capital:<i class="text"> ${ele1[i].capital}</i></b></div>
<div class="card text-center m-3"><b>Region:<i class="text"> ${ele1[i].region}</i></b></div>
<div class="card text-center m-3"><b>Country Weather:<i class="text"> ${ele1[i].latlng}</i></b></div>
<div class="card text-center m-3"><b>Population:<i class="text"> ${ele1[i].population}</i></b></div>
<div class="country"></div>
</div>
</div>

`;
col.append(card);

   }
   });