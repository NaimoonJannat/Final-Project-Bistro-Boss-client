import { Parallax } from 'react-parallax';
const Cover = ({img, heading, subHeading}) => {
    return (

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero h-[600px]" style={{backgroundImage: `url("${img}")`}}>
  <div className="hero-overlay w-11/12 md:w-3/4 h-1/2 bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold uppercase text-white">{heading}</h1>
      <p className="mb-5 text-white">{subHeading}</p>
    </div>
  </div>
</div>
    </Parallax>
        
    );
};

export default Cover;