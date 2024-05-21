import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recommendation from "./Recommendation";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Recommendation></Recommendation>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;