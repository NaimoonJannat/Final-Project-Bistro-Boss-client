import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"

import useMenu from "../../hooks/useMenu";
import Title from "../Shared/Title";
import MenuCategory from "../Shared/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category ===  'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            <Cover img={menuImg} heading="Our Menu" subHeading="Want to try a dish?">
            </Cover>
            {/* Main cover  */}
                <Title title="Today's offer" subtitle="Don't miss"></Title>

                {/* offered menu item  */}
                <MenuCategory items={offered}></MenuCategory>

                {/* salad items  */}
                <MenuCategory
                items={salad}
                coverImg={saladImg}
                coverTitle="Salad"
                ></MenuCategory>

                {/* soup items  */}
                <MenuCategory
                items={soup}
                coverImg={soupImg}
                coverTitle="Soup"
                ></MenuCategory>

                {/* pizza items  */}
                <MenuCategory
                items={pizza}
                coverImg={pizzaImg}
                coverTitle="Pizza"
                ></MenuCategory>

                {/* dessert items  */}
                <MenuCategory
                items={dessert}
                coverImg={dessertImg}
                coverTitle="Dessert"
                ></MenuCategory>
        </div>
    );
};

export default Menu;