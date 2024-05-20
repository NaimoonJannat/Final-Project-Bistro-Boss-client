import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;