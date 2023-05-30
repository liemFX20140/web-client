// import banner from '../images/banner.jpg';
import CaroselBanner from './Carosel';

export function HomePage() {
  return (
    <div>
      <h1 className='font-display text-7xl text-green-600 text-center py-8'>
        Đà Lạt Farm
      </h1>
      <CaroselBanner></CaroselBanner>
      {/* <div className='my-8 flex' id='banner'>
        <div
          className={`max-h-400px overflow-hidden bg-[url('./images/banner.jpg')] bg-bottom w-full bg-cover text-center lg:text-left`}
        >
          <h1 className='font-display font-bold text-5xl text-yellow-50 px-8 pt-8 pb-4'>
            Đà Lạt Farm
          </h1>
          <p className='font-display w-96  mb-8 p-8 text-xl text-yellow-50 mx-auto lg:mx-0 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
            illum. Eum velit alias consequatur eligendi tenetur quidem porro
            dicta veniam. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nulla, accusamus.
          </p>
        </div>
      </div> */}
      <div
        className='flex bg-primary my-8 rounded-xl relative lg:h-96 md:h-48'
        id='hero'
      >
        <img
          src='./src/images/vuon_dau.jpg'
          className='rounded-md w-1/2 inline-block my-4 mx-4 absolute inset-y-neg  left-8 '
        ></img>
        <div className='text-black w-2/5 ml-auto px-2 py-4 my-auto'>
          <h3 className='text-lg'>Lorem ipsum dolor sit.</h3>
          <p>
            expedita accusantium dolores atque, neque veniam minus repellendus
            am, suscipit reiciendis nemo? Itaque, magni assumenda!
          </p>
        </div>
      </div>
    </div>
  );
}
