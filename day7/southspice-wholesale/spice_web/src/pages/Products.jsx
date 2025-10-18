
import ChickenImg from "../assets/NATI.webp";

import Chicken1Img from "../assets/giri raja.webp";
import Chicken2Img from "../assets/KADAKNATH.webp";
import Chicken3Img from "../assets/form chicken.webp";
import Chicken4Img from "../assets/duck.webp";
import Chicken5Img from "../assets/turkey.webp";


const spices = [
 { name: "NATI", img: ChickenImg },
 { name: "GIRI RAJA", img: Chicken1Img },
 { name: "KADAKNATH", img: Chicken2Img },
 { name: "form chicken", img: Chicken3Img },
 { name: "duck", img: Chicken4Img },
 { name: "turkey", img: Chicken5Img },
];




const Products = () => {
 return (
   <section className="products-section">
     <h2>Our Wholesale Products</h2>
     <div className="products-grid">
       {spices.map((spice) => (
         <div key={spice.name} className="product-card">
           <img src={spice.img} alt={spice.name} />
           <h3>{spice.name}</h3>
           <p>Pure and fresh & helthy.</p>
         </div>
       ))}
     </div>
   </section>
 );
};


export default Products;