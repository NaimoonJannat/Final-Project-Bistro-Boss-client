import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({items, coverTitle, coverImg}) => {
    return (
        <div className="my-10">
            { coverTitle && <Cover img={coverImg} heading={coverTitle} subHeading="Want to try a dish?">
            </Cover>}
            <div className="mt-10 grid md:grid-cols-2 gap-4">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <div className="text-center"> <button className="btn btn-outline border-0 border-b-4 mt-4">Order Your Favorite Food</button>
            </div>
        </div>
            
    );
};

export default MenuCategory;