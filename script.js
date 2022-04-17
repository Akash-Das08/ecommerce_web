fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data)
    return data.json();
}).then((completedata)=>{
    // console.log(completedata)
    let data1="";
    completedata.map((values)=>{
    //     data1+=`<div class="card" style="width: 18rem;">
    //     <img  src=${values.image} class="images card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${values.title}</h5>
    //       <p class="card-text">${values.description}</p>
    //       <p class="card-text price">${values.price}</p>
          
    //     </div>
    //   </div>`
    //     data1+=`<div class="card">
    //     <h1 class="title">${values.title}</h1>
    //     <img class="images" src=${values.image} alt="img">
    //     <p>${values.description}</p>
    //     <p class="category">${values.category}</p>
    //     <p class="price">${values.price}</p>
    // </div>`
           data1+=`<div class="card" style="width: 18rem;">
           <div class="image-container">
        <img  src=${values.image} class="images card-img-top" alt="...">
               
           </div>
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="card-text">${values.description}</p>
          <p class="card-text price">${values.price}</p>
          
        </div>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((error)=>{
    console.log(error);
})



//  <div class="card" style="width: 18rem;">
//      <div class="image-container">
//   <img  src=${values.image} class="images card-img-top" alt="...">
         
//      </div>
//   <div class="card-body">
//     <h5 class="card-title">${values.title}</h5>
//     <p class="card-text">${values.description}</p>
//     <p class="card-text price">${values.price}</p>
    
//   </div>
// </div>