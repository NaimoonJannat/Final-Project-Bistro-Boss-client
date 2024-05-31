import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);
    const navOptions = <>
      <li className="text-[#D1A054] font-semibold"><Link to="/">Home</Link></li>
      <li className="text-[#D1A054] font-semibold"><Link to="/menu">Our Menu</Link></li>
      <li className="text-[#D1A054] font-semibold"><Link to="/order/salad">Order</Link></li>
      <li className="text-[#D1A054] font-semibold"><Link to="/login">Login</Link></li>
      <li className="text-[#D1A054] font-semibold"><Link to="/register">Register</Link></li>
        
    </>
    const handleSignOut = () => {
      logOut()
        .then((result) => {
          console.log(result);
          toast.success("Logged Out Successfully!");
        })
        .catch((error) => {
          console.error("Logout Error:", error);
          toast.error("Error logging out. Please try again later.");
        });
      };

    return (
        <div className="navbar bg-black fixed z-10 opacity-60 text-white w-4/5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
      {
        user ? 
       <div className="flex justify-center items-center gap-2">
         <div className="avatar btn btn-circle border-1 border-[#D1A054] btn-ghost">
        <div className="w-14 rounded-full">
          <img src={user.photoURL} />
        </div>
        <p className="text-black">{user.displayName
}</p>
      </div>
      <div>
      <button onClick={handleSignOut} className="btn-xs btn font-bold bg-[#D1A054] text-black">Log Out</button>
      </div>
       </div>:
       <div></div>
      }
  </div>
</div>
    );
};

export default Header;