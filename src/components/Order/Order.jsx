import Cover from "../Shared/Cover";
import orderImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import Cards from "../Shared/Cards";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
   const [menu] = useMenu();
   const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category ===  'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    
   
    return (
        <div>
            <Cover img={orderImg} heading="Order Now" subHeading="Want to Try A Dish? Order right away!"></Cover>
            <Tabs className=" my-10 mx-auto w-11/12 md:w-4/5" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Soup</Tab>
      <Tab>Pizza</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drink</Tab>

    </TabList>

    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                salad.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                soup.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                pizza.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                dessert.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                drinks.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Order;