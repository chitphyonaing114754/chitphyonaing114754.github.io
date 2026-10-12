let products ;
const address = "https://fakestoreapi.com/products";
fetch(address)
.then((Response)=>{
   const dataSave = Response.json();
  return dataSave;
}).then((Item)=>{
products=Item;
})
.catch((err)=>{
console.log("Catch in error::",err)
});
const containerTag = document.querySelector(".container");
const inputTag = document.querySelector(".form-control");
const resultContainerTag=document.querySelector(".resultContainer");
let showDiv;
let arrayFilter;
inputTag.addEventListener("keyup",(event)=>{
  
  resultContainerTag.innerHTML="";

  const inputValue = event.target.value.toLowerCase();

       if(inputValue==0){
    return;
  }
 arrayFilter = products.filter((items)=>{
   return items.title.toLowerCase().includes(inputValue);

});
const chackTag = arrayFilter.length>0;
if(chackTag == true){

for(i=0;i<arrayFilter.length;i++){
 showDiv = document.createElement("div");
      showDiv.id = arrayFilter[i].id;
    showDiv.classList.add("showDiv");

    const titleTag = document.createElement("div");
    titleTag.classList.add("titleTag")
    titleTag.append(arrayFilter[i].title)
  
    

    const imgShowTag = document.createElement("img");
    imgShowTag.classList.add("imgShowTag");
    imgShowTag.src = arrayFilter[i].image;
   

    showDiv.append(titleTag,imgShowTag)
    resultContainerTag.append(showDiv)

    

}
}
});
  let t= -1;
inputTag.addEventListener("keyup",(event)=>{
if(event.key === "ArrowDown"){

  t += 1;
  if(t===arrayFilter.length){
    t = -1;
    return;
  }
 const changeTag = arrayFilter[t].id;
 const returnId = document.getElementById(changeTag);
 returnId.classList.add("returnId")
} else if(event.key === "ArrowUp"){
t-=1;
if(t<0){
 
  t = -1;
  return;
}
const arrowupTag = arrayFilter[t].id;
const backid = document.getElementById(arrowupTag);
backid.classList.add("returnId")
} else if(event.key === "Enter"){
  if(t = -1){
    t += 1;
  }
 resultContainerTag.innerHTML ="";
  const linkTag = document.createElement("img");
  linkTag.src = arrayFilter[t].image;
  linkTag.classList.add("link")
  const priceTag = document.createElement("p");
  priceTag.classList.add("priceTag");
  priceTag.append(arrayFilter[t].price + "$");

 const enterDiv = document.createElement("button");
 enterDiv.classList.add("enterDiv")
 enterDiv.textContent = "Click Me"
 const buyTag = document.createElement("button");
 buyTag.textContent ="Buy"
 buyTag.classList.add("buy");


  containerTag.replaceChildren(inputTag,buyTag,resultContainerTag,linkTag,enterDiv,priceTag);
  enterDiv.addEventListener("click",()=>{
    const ankerTag = document.createElement("a");
    ankerTag.href = "hhh.html";
    ankerTag.click();

  })


  
}

})


