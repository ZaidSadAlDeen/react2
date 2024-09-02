import { useEffect,useState } from "react"
export default function Product(){
const [Product,setProduct]=useState([]);
async function getProduct(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    setProduct(data.recipes);
}
useEffect(
    ()=>{
        getProduct();
    },[]
)

    return(
        <div className="container">
            <div className="row">
                {
                    Product.map(product =>
                        <div className="col-lg-3 text-center">
                            <div className="product">
                                <h2>{product.title}</h2>
                                <img src={product.image_url} className="img-fluid"/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
     
    )
    
 }
    