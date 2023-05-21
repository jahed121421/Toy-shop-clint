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
                src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-left"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                data-aos="fade-down"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
          <div className="flex md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                data-aos="fade-up"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.pexels.com/photos/3661243/pexels-photo-3661243.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-down"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.pexels.com/photos/12311906/pexels-photo-12311906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="md:w-1/2 p-1 md:p-2">
              <img
                data-aos="fade-left"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.pexels.com/photos/1333318/pexels-photo-1333318.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
