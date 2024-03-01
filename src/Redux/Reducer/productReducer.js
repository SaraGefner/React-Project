

 export const products = [
    {
        id: 89,
        name:"fbfg",
        qty:67,
        img: './',
        price: 78.9,
        description:"gfgf"
            },
    {
        id: 89,
        name:"fbfg",
        qty:67,
        img: './',
        price: 78.9,
        description:"gfgf"
      }
    
]






const ProductReducer = ( state = products , action ) => 
{
 
    switch(action.type){
        case'DECREASE_QTY':
        {
         const newState = [...state];
         newState[action.id.id].qty-=1;
        }
        case'ADD_QTY':
        {
            
        }
    }
}
export default ProductReducer;
