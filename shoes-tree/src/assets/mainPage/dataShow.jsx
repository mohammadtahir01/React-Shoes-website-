import axios from "axios";
import { useEffect, useState } from "react";
//react cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DataShow=()=>{
    const [data1,setData] = useState([]);

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
            {item.Title}
        {item.Price} &nbsp; &nbsp; {item.OldPrice}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )
    })
    return(
        <>
        {ans}
        </>
    )
}
export default DataShow;