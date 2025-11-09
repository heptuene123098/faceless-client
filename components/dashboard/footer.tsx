"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialLinks = [
    { icon: faLinkedinIn, href: "#" },
    { icon: faYoutube, href: "#" },
    { icon: faFacebookF, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faInstagram, href: "#" },
  ];

  return (
    <footer className="w-full bg-[#662D91] text-white px-6 py-20">
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Vector.png"
              alt="FacelessCon Logo"
              width={40}
              height={35}
            />
            <span className="text-2xl md:text-3xl font-semibold">FacelessCon</span>
          </div>
          <p className="text-sm leading-relaxed">
            A secure platform for experts to share knowledge and for curious minds to
            discover, learn, and engage anonymously.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Expo</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Browse Webinars</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Expo Page</a></li>
            <li><a href="#">Become a Speaker</a></li>
            <li><a href="#">Register as Attendee</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#F3E2FF33] flex flex-col md:flex-row items-center justify-between mt-20 rounded-full px-10 py-4">
        <span className="text-sm">© 2025 FacelessCon. All rights reserved.</span>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F3E2FF] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={link.icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
