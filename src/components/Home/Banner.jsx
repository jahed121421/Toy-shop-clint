import Gallary from "../Gallary/Gallary";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactUs from "../Contact Us/ContactUs";
import TeamMembers from "../TeamMembers/TeamMembers";
import useTitle from "../Custom Title/CustomTitle";
import ToysInTab from "../ToysInTab/ToysInTab";

const Banner = () => {
  useTitle("Home");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="relative">
        <div>
          <img
            className="w-full h-[550px] rounded-lg"
            src="https://img.freepik.com/free-photo/plastic-dinosaur-floor_23-2147663839.jpg?w=740&t=st=1684338431~exp=1684339031~hmac=3238951a541a70d3d414a30bcbf2089273101a6820fdff37cfea0e6b4cefef73"
            alt=""
          />
        </div>
        <div className="md:w-full rounded-lg h-full p-10 md:pt-48 absolute top-0 text-white bg-gradient-to-r from-[#000000f1] to-[#00000023] ">
          <div data-aos="fade-right" className="space-y-5 w-1/2">
            <h2 className="text-5xl font-bold">
              Find your best toys <br /> for your child!!
            </h2>
            <p>
              Capture your Childs best Moments. Our toy website offers a diverse
              range of quality toys, from teddy bears to dinosaurs, that inspire
              creativity and delight children of all ages.
            </p>
            <button className="btn glass text-white">Blog!</button>
          </div>
        </div>
      </div>
      <Gallary />
      <ToysInTab />
      <ContactUs />
      <TeamMembers />
    </>
  );
};

export default Banner;
