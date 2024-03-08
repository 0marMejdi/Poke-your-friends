// This code is written with l♥ve by Omar MEjdi

 /**  
 * @param {HTMLDivElement} node 
 * @param {string} userName 
 */
function getCardForUser(node,userName){
    if (node.innerHTML.includes(userName+"</a>") && node.innerHTML.includes("Poke Back")){
        //console.log(`node has ${userName} and Poke Back button... decending to first Child node...`);
        //console.log(node)
        node=node.firstElementChild;
        
        return getCardForUser(node,userName);
    }
    if (node.innerHTML.includes(userName+"</a>") && !node.innerHTML.includes("Poke Back")){
        //console.log(`node has ${userName} only,  returning parent element...`);
        if (node.parentElement.innerHTML.includes("Poke Back")){
            //console.log(node)    
            return node.parentElement;
        }
        //console.log(node)
        return null;
    }
    //console.log("Element does not have anything, checking sibling...");
    //console.log(node)
    node = node.nextElementSibling;
    
    return getCardForUser(node,userName)
}

function getPokeButtonForCard(card){
    //console.log(card)
    if (card.innerHTML.includes("Poke Back</span>") || card.innerHTML==="Poke Back"){
        if (!card.firstElementChild)
            {   
                //console.log("returning the Card itself")
                return card;
            }
        //console.log("decending to first Child node...")
        return getPokeButtonForCard(card.firstElementChild);
    }
    //console.log("Element does not have anything, checking sibling...");
    return getPokeButtonForCard(card.nextElementSibling);

}
/**
 * 
 * @param {string} friendFullName 
 * @returns Interval
 */
function pokeFriend(friendFullName){
    
    return setInterval(()=>{
      let card = getCardForUser(document.body,friendFullName);
      let pokeButton = getPokeButtonForCard(card);
      pokeButton.click();
        pokeButton.click();
    },1000);
    
    
    
    
    
    
}
pokeFriend("Omar Mejdi");

setInterval(()=>{location.reload()},120000)



