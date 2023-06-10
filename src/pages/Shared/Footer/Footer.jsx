import logo from "../../../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-base-200 mt-4">
      <footer className="footer px-8 pt-8 pb-6 text-base-content">
        <div>
          <img src={logo} alt="logo" className="w-12" />
          <p>
            SPORTIQUE academy
            <br />
            Teaching various sports since 2022
          </p>
          <div className="flex gap-1">
            <FaFacebook className="w-4 h-4" />
            <FaTwitter className="w-4 h-4" />
            <FaInstagram className="w-4 h-4" />
            <FaLinkedin className="w-4 h-4" />
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">Coaching</a>
          <a className="link link-hover">Train Up</a>
          <a className="link link-hover">Fitness</a>
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
      </footer>
      <p className="text-center font-bold text-black pb-2">© 2023 Sportique. All rights reserved.</p>
    </div>
  );
};

export default Footer;
