import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className=" footer p-10 bg-base-200 text-base-content">
        <div>
          <h1 className="text-2xl font-bold">
            Toy <span className="text-red-500">World</span>
          </h1>
          <p>
            Toyworld Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Social link</span>
          <div className="flex space-x-3">
            <a className="link link-hover text-2xl">
              <FaFacebook />
            </a>
            <a className="link link-hover text-2xl">
              <FaWhatsapp />
            </a>
            <a className="link link-hover text-2xl">
              <FaInstagram />
            </a>
            <a className="link link-hover text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>Copyright © 2023 - All right reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
