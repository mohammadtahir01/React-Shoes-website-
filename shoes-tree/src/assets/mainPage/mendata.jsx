import axios from "axios";
import { useEffect, useState } from "react";
//react bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//toolkit
import { useDispatch } from "react-redux";
import { AddtoCard } from "../../cardSlice";

const Men = () => {
    const [menData, setMenData] = useState([]);
    const despach = useDispatch();

    const onload = async () => {
        let api = "http://localhost:3000/men"
        let res = await axios.get(api);
        console.log(res.data)
        setMenData(res.data)
    }
    useEffect(() => {
        onload();
    }, [])

    let ans = menData.map((item) => {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.Image} />
                <Card.Body>
                    <Card.Title>{item.Name}</Card.Title>
                    <Card.Text>
                       {item.Title} <br />
                       Price: {item.Price} &nbsp;&nbsp;
                       <span style={{color:"gray",textDecoration:"line-through"}}>{item.OldPrice}</span>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>despach(AddtoCard({id:item.id,Name:item.Name,Image:item.Image
                              ,Title:item.Title,OldPrice:item.OldPrice,Price:item.Price,qnty:1}))}>Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    })
    return (
        <>
          <div style={{display:"flex",flexWrap:"wrap",gap:"2rem",justifyContent:"center"}}>
            {ans}
          </div>
        </>
    )
}
export default Men;