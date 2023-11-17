import { useEffect, useState } from 'react'
import Grid from '../components/Grid';
import ToolBar from '../components/Toolbar';
import { useLocation } from 'react-router-dom';

export default function Fruits(){
    const [fruits, setFruits] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/fruits')
        .then(response=> response.json())
        .then(fruits => setFruits(fruits));
    }, []);

    try {
        const location = useLocation();
        const { checkout }  = location.state;



        
        return ( 
            <div>
                <ToolBar/>
                <Grid fruits={fruits} checkout={checkout}/>
            </div>
        );
    } catch(error){
        return ( 
            <div>
                <ToolBar/>
                <Grid fruits={fruits} checkout={[]}/>
            </div>
        );
    }

}