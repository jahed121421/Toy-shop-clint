import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallary = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="mt-10 text-5xl text-center">
        <h1>Gallery</h1>
      </div>
      <div className="container mx-auto pb-5 py-2  lg:pt-12">
        <div className="-m-1 lg:flex flex-wrap md:-m-2">
          <div className="flex md:w-1/2 flex-wrap">
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-right"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-left"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                data-aos="fade-down"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                data-aos="fade-up"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-down"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-left"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
