
const ReccomendCards = ({item}) => {
    const {name, recipe, price, image} = item; 
    return (
        <div className="max-w-xs rounded-md shadow-md bg-[#F3F3F3] text-black">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p>{recipe}</p>
            <p className="font-bold text-yellow-600">$ {price}</p>
		</div>
        <button className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
	</div>
    </div>
    );
};

export default ReccomendCards;