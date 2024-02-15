// fetch the data

async function getData(){
    let response= await fetch("https://fakestoreapi.com/products");
    let data =  await response.json();
    
    console.log(data);

   

const myList = document.getElementById("cartproducts");

    
    for (let i = 0; i < data.length; i++) {
        // Creating div element
        const listItem = document.createElement("li");
         listItem.setAttribute('id',i);

        
        listItem.innerHTML = `
         <h1 id="price">${data[i].title}</h1>        
        <img src="${data[i].image}" id="liimage" alt="img">

        
        <div class="bottom">
        <h1 id="price">$ ${data[i].price}</h1>
         <div class="incre-decre">
         <p id="minus" onclick="decre()">-</p>
         <p id="value"></p>
         <p id="plus" onclick="incre()">+</p>
         
         </div>

        </div>

        `;

        // Appending the li element to the ul element
        myList.appendChild(listItem);
    }
}


getData();

const imageUpload=document.getElementById("imageUpload");
const grabimage=document.getElementById("grabimage");


imageUpload.onchange=function(){
    grabimage.src=URL.createObjectURL(imageUpload.files[0]);
}














