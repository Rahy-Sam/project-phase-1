//
// function getMenu (){
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',{
//     headers:{
//         'Content-type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'IdCategory'
//     })
// }).then(res => {
//     return res.json()
// })
// .then(data => console.log(data))
// }

document.addEventListener("DOMContentLoaded", getMenu)
let menu = []

function getMenu (){
    fetch(" http://localhost:3000/menu")
    .then(res=>res.json())
    .then(data=>{
        menu=[...data]
        displayMenu (menu)
        console.log(menu)
    })
}
function displayMenu (menuData){
    const menuList=document.getElementById("menu-list")
    menuData.forEach((menu) => {
        const menuItem = document.createElement("li")
        menuItem.textContent=menu.item
    
        menuItem.addEventListener("click",()=>{
            displaymenuList(menu)
        })
        menuList.appendChild(menuItem)
    });

}

function displaymenuList(menu){
    const menuDetails = document.querySelector("#menu-details")
    menuDetails.innerHTML=`
    
    <div class="card" style="width: 18rem;">
    <img src="${menu.image}"class="card-img-top">
    <h2> Menu-Title:${menu.item}</h2>
    <p> Price:${menu.price}</p>
    <p> quantity available:${menu.qnty}</p>
    <p> description:${menu.description}</p>
    <button id="btn-buy">BUY</button>
  </div>`


    const button = document.querySelector("#btn-buy")
    button.addEventListener("click",(event)=>{
        event.preventDefault()
        const item = {...menu}
        console.log(item)
        //item.qnty = item.qnty - 1
        
        fetch(`http://localhost:3000/menu/${item.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                qnty: item.qnty - 1
            })
        })
       
        // for(menuData of menu){
        //     if(menuData.qnty>0){
        //     menuData.qnty--;
        
        //     }  
        // }
            
 });

    }