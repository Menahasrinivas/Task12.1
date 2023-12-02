const image = document.getElementById("image");
//random cat image API
const catsApi = "https://api.thecatapi.com/v1/images/search";
const response = fetch(catsApi);
 response.then((data) => data.json()).then((data1) =>{
    image.src = data1[0].url
 }).catch((error)=> error.alert("No image Please reload the browser again"))
