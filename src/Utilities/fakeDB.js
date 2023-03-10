const addToDB=(id)=>{
   let shoppingCart={};
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    
    const quantity =shoppingCart[id];

    if(quantity){
        const newQuantity= quantity+1;
        shoppingCart[id]=newQuantity;
        
    }
    else{
        shoppingCart[id]=1;
    }
//    localStorage.setItem("shopping-cart",JSON.stringify(cart)); 
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

}
const removeFormDB= id =>{
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }

}
const removeCart=()=>{
    localStorage.removeItem('shopping-cart');
}

const getTotal =(product)=>{
      const reducer = (previous,current)=>{
        return previous+current.price;
      }
     const itemTotal = product.reduce(reducer,0);
     return itemTotal;

}
export {addToDB,removeFormDB,removeCart,getTotal}