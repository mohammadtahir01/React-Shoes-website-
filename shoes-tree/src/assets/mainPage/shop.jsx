import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';

const Shop=()=>{
    const ShopData = useSelector(state=>state.Card.Task);
    console.log(ShopData);

    const ans = ShopData.map((item,idx)=>{
        return(
            <tr>
                <td>{idx+1}</td>
                <td><img src={item.Image} alt="" style={{height:"100px"}}/></td>
                <td>{item.Name}</td>
                <td>{item.Price} {item.OldPrice}</td>
                <td>{item.qnty}</td>
                <td><button>Remove</button></td>
            </tr>
        )
    })
    return(
        <>
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quentity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Shop;