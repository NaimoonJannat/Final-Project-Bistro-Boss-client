import { NavLink, Outlet } from "react-router-dom";
import { FaBookBookmark, FaCartShopping } from "react-icons/fa6";
import { FaCalendar, FaHome, FaJediOrder, FaPaypal, FaSearch, FaStar } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 p-10 min-h-screen bg-[#D1A054]">
            <a className="btn btn-ghost text-xl italic">Bistro Boss</a>
                <ul className="space-y-4 mt-8 text-lg font-semibold">
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/dashboard">
                            <FaHome />
                        User Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/dashboard/cart">
                            <FaCartShopping />
                        My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/dashboard/reservation">
                            <FaCalendar />
                        Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/dashboard/review">
                            <FaStar />
                        Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/dashboard/payment">
                            <FaPaypal />
                        Payment</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/dashboard/bookings">
                            <FaBookBookmark />
                        My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>

                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/">
                            <FaHome />
                        Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/menu">
                            <FaSearch/>
                        Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className="flex justify-center items-center gap-2" to="/order">
                            <FaJediOrder />
                        Order</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;