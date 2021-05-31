
var plus=Array.from(document.getElementsByClassName("plus-btn"))
var minus=Array.from(document.getElementsByClassName("minus-btn"))
var deleteBtns=Array.from(document.getElementsByClassName("fa-trash-alt"))
var hearts=Array.from(document.getElementsByClassName("fa-heart"))

// Total price
function total(){
    var totalPrice=document.querySelector(".total-price")
var unitPrices=Array.from(document.getElementsByClassName('unit-price'))
var quantities=Array.from(document.getElementsByClassName("qute"))
    let sum=0
    for(let i=0;i<quantities.length;i++){
        sum=sum+quantities[i].innerHTML*unitPrices[i].innerHTML
        // sum+=quantities[i].innerHTML*unitPrices[i].innerHTML
    }
    totalPrice.innerHTML=sum
}

// add buttons
for(let i in plus){
    plus[i].addEventListener("click",function(){
        plus[i].nextElementSibling.innerHTML++
        // quantities[i].innerHTML++;
        total()
    })
    minus[i].addEventListener("click",function(){
        if(minus[i].previousElementSibling.innerHTML>0) minus[i].previousElementSibling.innerHTML--;
        total()
    })

}

// Remove card
for(let deleteBtn of deleteBtns){
deleteBtn.addEventListener("click",function(){
deleteBtn.parentElement.parentElement.parentElement.remove()
total()
})
}
 // Favorites

 for(let heart of hearts){
     heart.addEventListener('click',function(){
         if(heart.style.color!=="red") heart.style.color="red"
         else heart.style.color="#212529"
     })
 }