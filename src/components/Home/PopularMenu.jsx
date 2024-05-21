import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import MenuItem from "../Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems= data.filter(item=>item.category ==='popular');
            setMenu(popularItems);
        })
    })
    return (
        <div className="my-10">
            <Title title="From Our Menu"
            subtitle="Popular Items"></Title>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;