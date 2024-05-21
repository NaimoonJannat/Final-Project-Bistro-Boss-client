import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import ReccomendCards from "./ReccomendCards";


const Recommendation = () => {
    const [menu, setMenu] = useState([]);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems= data.filter(item=>item.category ==='offered');
            setMenu(popularItems);
        })
    })
    return (
        <div>
            <Title title="Chef Recommends" subtitle="Should Try"></Title>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                menu.slice(0,3).map(item => <ReccomendCards
                key={item._id}
                item={item}></ReccomendCards>)
            }
           </div>
</div>
            
       
    );
};

export default Recommendation;