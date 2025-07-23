import { useSelector } from "react-redux";

const Shop=()=>{
    const ShopData = useSelector(state=>state.Card.Task);
    console.log(ShopData);

    const ans = ShopData.map((item)=>{
        return(
            <tr>
                <td>{item.Image}</td>
                <td>{item.Name}</td>
                <td>{item.Price} {item.OldPrice}</td>
                <td>{item.qnty}</td>
            </tr>
        )
    })
    return(
        <>
        
        </>
    )
}
export default Shop;