import React,{useState} from "react";//Import React and useState hook


function OrderStatus()
{
//useState hook to initialize order object with 4 properties    
const [order, setOrder] = useState({
    id: 'ORD123',
    status: 'Processing',
    customer: 'John Doe',
    items: 3
    });

//Function to handle Order Status Change
function handleStatusChange()
{
var sts = document.getElementById("ordersts");
var val = sts.value;
setOrder({...order,status:val});
}

return (
<div>
    <h1>{order.id}</h1>
    <h1>{order.status}</h1>
    <h1>{order.customer}</h1>
    <h1>{order.items}</h1>
    <br></br>
    {/* Drop down to change the Order status */}
    <select name="Order Status" id="ordersts">
    <option value="Processing" selected>Processing</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    </select>
    <br></br>
    <button onClick={handleStatusChange}>Update Status</button>
</div>


)    

}

export default OrderStatus;