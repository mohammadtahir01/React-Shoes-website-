import axios from "axios";
import { useEffect, useState } from "react";
//react cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//toolkit 
import { useDispatch } from 'react-redux';
import { AddtoCard } from "../../cardSlice";

const DataShow=()=>{
    const [data1,setData] = useState([]);
    // const inpData = useSelector(state=>state.Card.Task)
    const dispach = useDispatch()
    const onload=async()=>{
        let api = "http://localhost:3000/shoes"
        let res = await axios.get(api);
        console.log(res.data)
        setData(res.data)
    }
    useEffect(()=>{
        onload();
    },[])

    let ans = data1.map((item)=>{
        return(
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.Image}  />
      <Card.Body>
        <Card.Title>
            {item.Name}</Card.Title>
        <Card.Text>
            {item.Title} <br />
        Price:&nbsp;{item.Price} &nbsp; &nbsp; <span style={{color:"gray",textDecoration:"line-through"}}>{item.OldPrice}</span>
        </Card.Text>
        <Button variant="primary" onClick={()=>despach(AddtoCard({id:item.id,Name:item.Name,Image:item.Image
        ,Title:item.Title,OldPrice:item.OldPrice,Price:item.Price,qnty:1}))}>Go somewhere</Button>
      </Card.Body>
    </Card>
        )
    })
    return(
        <>
        <div style={{display:"flex",
    justifyContent:"center",
    padding:"10px",
    fontSize:"2rem",
    alignItems:"center"}}>
            <p>DROP ZONE</p>
        </div>
       <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem"}}>
         {ans}
       </div>
        </>
    )
}
export default DataShow;