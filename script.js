let bagItems=[];
displayItemonHomePage();
displayBagIcon();

function addToBag(itemId){
bagItems.push(itemId);
displayBagIcon();
}
function displayBagIcon(){
let bagItemsCountElement=document.querySelector(".bag-item-count")
if(!bagItemsCountElement) return;
if(bagItems.length>0){
    bagItemsCountElement.style.visibility="visible";
      bagItemsCountElement.innerText=bagItems.length;
}else{
     bagItemsCountElement.style.visibility="hidden"
}


}

function displayItemonHomePage(){
    let itemContainerElement = document.querySelector(".items-container")
    if(!itemContainerElement){
      return
    }
    let innerHTML=" "
 items.forEach(item =>{
innerHTML += `<div class="item-container">
    <img src="${item.image}" alt="img">
    <div class="rating">${item.rating.start} ⭐ ${item.rating.end}</div>
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">RS ${item.current_price}</span>
        <span class="original-price">RS ${item.original_price}</span>
        <span class="discount">(${item.discount}% OFF)</span>
    </div>
    <button class="btn-add-bag" Onclick="addToBag('${item.id}')">Add to Bag</button>
</div>`;
 });
itemContainerElement.innerHTML = innerHTML;
// myntra-clone
}
