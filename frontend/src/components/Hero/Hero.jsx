import { chickenBurgerAds } from "@/assets/images";

const Hero = () => {
  return (
    <div className="max-container relative overflow-hidden rounded-4xl lg:rounded-[5rem] px-8 mx-10">    
      <img 
        src={chickenBurgerAds} 
        alt="ads banner"
        className="w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-15 ">
        <h2 className="text-white font-bold w-[50%]">
          The professional/common approach is to put a dark transparent overlay over the image, then place the text above it. This makes the text readable without actually reducing the image's opacity.
        </h2>
      </div>
    </div>
  )
}

export default Hero