import Cover from "../Shared/Cover";
import orderImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import Cards from "../Shared/Cards";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const Order = () => {
    const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks' ]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
   const [menu] = useMenu();

   const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category ===  'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
   
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
   
    return (
        <div>
            <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover img={orderImg} heading="Order Now" subHeading="Want to Try A Dish? Order right away!"></Cover>
            <Tabs className="my-10" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Soup</Tab>
      <Tab>Pizza</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drink</Tab>

    </TabList>
    

    <TabPanel>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                salad.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
        </SwiperSlide>
        
      </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                soup.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
        </SwiperSlide>
        
      </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                pizza.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
        </SwiperSlide>
        
      </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                dessert.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
        </SwiperSlide>
        
      </Swiper>
    </TabPanel>
    <TabPanel>
    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                drinks.map(item => <Cards
                key={item._id}
                item={item}></Cards>)
            }
           </div>
        </SwiperSlide>
        
      </Swiper>
    </TabPanel>
   
  </Tabs>
        </div>
    );
};

export default Order;