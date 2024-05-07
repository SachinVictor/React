import {useState} from "react";
import styles from './MobileList.module.css'; //Import css styles from MobileList.module.css

const MobileList = () => {
//useState hook to initialize the array products
let [products,setProducts] = useState([
    {
name : "Nokia",
description : "Phone",
price : 10000,
rating : 4,
instock : "Yes" 
},
{
    name : "Samsung",
    description : "Phone",
    price : 12000,
    rating : 3,
    instock : "No" 
},
{
    name : "IPhone",
    description : "Phone",
    price : 15000,
    rating : 4,
    instock : "Yes" 
}
]
)

return(
<div>
<table className={styles.tab}>
    <thead>
        <tr className={styles.tabrow}>
            <th className={styles.tabhead}>Name</th>
            <th className={styles.tabhead}>Price</th>
            <th className={styles.tabhead}> Description</th>
            <th className={styles.tabhead}>Rating</th>
            <th className={styles.tabhead}>InStock</th>
        </tr>
</thead>
<tbody className={styles.tabbody}>
{
    products.map(product => (
        <tr key={product.name} className={styles.tabrow}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.rating}</td>
            <td>{product.instock}</td>
        </tr>
    ))

}

</tbody>
    </table>

</div>

)

}

export default MobileList;