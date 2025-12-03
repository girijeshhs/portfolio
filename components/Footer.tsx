import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { personalInfo, social_links } from "@/data/portfolio";

const Footer = () => {
  return (
    <div className="relative">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black z-10"/>
    <footer className="relative bg-gradient-to-b from-black/90 to-black text-white py-5">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>
      <div className="relative z-10">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
              { name: "Resume", href: personalInfo.resume_url },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Contact Me</h3>
            <ul className="space-y-2 text-sm">
            <li> 
              <strong>Location:</strong> <br /> 
              <span className="hover:text-yellow-500 transition-colors"> {personalInfo.location} </span>
              </li>
              <li>
                <strong>Email:</strong> <br />
                <a href={social_links.email} className="hover:underline hover:text-yellow-500">
                {personalInfo.email}
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          <div>
  <h3 className="text-lg font-semibold mb-4 text-[#a655f8]">Connect With Me</h3>
  <ul className="space-y-2">
    {[
      { icon: "linkedin-in", label: "LinkedIn", url: social_links.linkedin },
      { icon: "github", label: "Github", url: social_links.github },
      { icon: "envelope", label: "Email", url: social_links.email }
    ].map(({ icon, label, url }) => (
      <li key={label}>
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
          <i className={`fab fa-${icon} text-[#a655f8]`}></i> {label}
        </a>
      </li>
    ))}
  </ul>
</div>

        </section>

        <div className="border-t border-gray-700/50 mt-10 pt-4">
          <p className="text-center text-sm text-[#a655f8]">
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;