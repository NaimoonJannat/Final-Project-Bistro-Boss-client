
const Title = ({title, subtitle}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">--- {subtitle} ---</p>
            <h2 className="uppercase text-4xl border-y-2">{title}</h2>
            
        </div>
    );
};

export default Title;