import Link from "next/link";
import React from "react";
import { Navlinks } from "../../../utils/Navlink";
import { ContactData } from "../../../utils/ContactData";
import Contactform from "../ContactForm/Contactform";

const Footer = () => {
  return (
    <footer
      className="relative  py-8 lg:pt-12 xl:pt-20 px-4 sm:px-8 lg:px-12   text-sm  leading-6 pb-8 pt-12  text-medium bg-[#1E1243] bg-gradient-to-br "
      role="contentinfo"
      id="contact"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6   text-white/80">
        <div>
          <Link href="/" className="lg:text-3xl text-2xl">
            JM
          </Link>
        </div>
        <div>
          <p className=" text-base font-semibold">Quick Links</p>
          <ul>
            {Navlinks?.map((link) => (
              <li key={link?.name} className="my-1">
                <Link target="_self"  href={`${link?.link}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className=" text-base font-semibold">Socials</p>
          <ul>
            {ContactData?.map((contact) => (
              <li className="my-1" key={contact?.platform}>
                <Link target="_blank" href={`${contact?.link}`}>
                  {contact?.platform}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className=" text-base font-semibold">Contact</p>
          <Contactform />
        </div>
      </div>
      <p className="text-xs text-center mb-0 mt-4 text-white/80">
        Copyright ©&nbsp;2024&nbsp;John Murphy
      </p>
    </footer>
  );
};

export default Footer;
