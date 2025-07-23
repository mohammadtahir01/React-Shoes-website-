import axios from "axios";
import { useEffect, useState } from "react";
//react bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Men = () => {
    const [menData, setMenData] = useState([]);

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
                    <Button variant="primary">Go somewhere</Button>
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