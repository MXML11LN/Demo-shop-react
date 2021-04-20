
const products = [ 
{
    id:1,
    name:"iPhone 8",
    /*description:"This is iPhone 8",*/
    type:"phone",
    capacity:128,
    price:500,
    image:"images/ipad.png"
},
{
    id:2,
    name:"iPhone 12",
    description:"This is iPhone 12", 
    type:"phone",
    capacity:256,
    price:1500,
    image:"images/ipad.png" 
},
{
    id:3,
    name:"iPhone X",
    description:"This is iPhone X",
    type:"phone",
    capacity:64,
    price:800,
    image:"images/iphone.png" 
},
{   
    id:4,
    name:"iPhone XS",
    description:"This is iPhone XS",
    type:"phone",
    capacity:756,
    price:1200,
    image:"images/ipad.png" 
},
{
    id:5,
    name:"iPhone 8 plus",
    description:"This is 8 plus",
    type:"phone",
    capacity:512,
    price:1400,
    /*image:"images/iphone.png" */
},
]

export const getProductsObject = (array) => array.reduce((obj, product)=>({
    ...obj,
    [product.id]:product
}),{})


export default products