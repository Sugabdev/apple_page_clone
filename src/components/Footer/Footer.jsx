import { useState } from "react"
import { legacyData, navs, copyrightNavs } from "../../data/footerData.js"
import ArrowIcon from "../../assets/icons/mobileFooterNavsArrow.jsx"

export function Footer() {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const handleToggle = (index) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
  
      if (next.has(index)) {
        // cerrar este
        document
          .getElementById(`collapse-${index}`)
          ?.beginElement();
        next.delete(index);
      } else {
        // abrir este
        document
          .getElementById(`expand-${index}`)
          ?.beginElement();
        next.add(index);
      }
  
      return next;
    });
  };
  

  return (
    <footer className="bg-[#1D1D1F] w-full flex flex-col p-4 gap-y-4 2xl:px-[48rem]">
      {/* Legal */}
      <div className="w-full py-2 flex flex-col gap-y-2 md:leading-4 2xl:leading-5">
        {legacyData.map((paragraph, index) => (
          <p key={index} className="text-[.8rem] text-[#8e8e8f]">
            {paragraph.text.map((textContent, index) => (
              <span key={index} className={`${textContent.twStyles}`}>{textContent.content}</span>
            ))}
          </p>
        ))}
      </div>

      <hr className="text-gray-500"/>

      {/* Navs */}
      <div className="md:max-h-[600px] md:columns-[150px] md:gap-6">
        {navs.map((nav, index) => (
          <nav
            key={index}
            onClick={() => handleToggle(index)}
            className="w-full border-b border-b-gray-500 py-2 flex flex-col text-[.8rem] hover:cursor-pointer md:border-0 md:w-auto md:break-inside-avoid"
          >
            {/* Mobile Menu */}
            <div className="w-full flex justify-between items-center text-[#B3B3B3] font-semibold md:hidden">
              <span>
                {nav.navName}
              </span>
              <ArrowIcon id={index}/>
            </div>
            <ul className={`${openIndexes.has(index) ? "max-h-[35rem] py-4" : "max-h-0"} transition-all duration-200 linear overflow-hidden flex flex-col gap-y-2 px-4 text-[#8e8e8f] text-[.8rem] font-semibold md:hidden`}>
              {nav.links.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>

            {/* Desktop */}
            <div className="hidden md:flex md:flex-col md:items-start md:gap-y-2 md:text-[#B3B3B3] md:font-semibold">
              <span>
                {nav.navName}
              </span>
              <ul className="md:text-[#8e8e8f] md:text-[.8rem] md:font-semibold md:flex md:flex-col md:gap-y-2">
                {nav.links.map((link, index) => (
                  <li key={index}><a href="#" className="md:hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>
          </nav>
            ))}
      </div>

      {/* Shop Contact */}
      <span className="text-xs text-[#79797A]">More ways to shop: <a href="#" className="text-blue-500 underline hover:cursor-pointer visited:text-purple-500">Find an Apple Store</a> or <a href="#" className="text-blue-500 underline hover:pointer visited:text-purple-500">other retailer</a> near you. Or call <a href="#" className="text-blue-500 underline hover:cursor-pointer visited:text-purple-500">1-800-MY-APPLE</a> (1-800-692-7753).</span>
      <hr className="hidden text-gray-500 md:inline"/>
      
      {/* Copyrights */}
      <div className="text-xs font-semibold flex flex-col gap-y-2 md:flex-row md:w-full md:items-center md:justify-between">
        <span className="text-[#B3B3B3] mb-3 md:order-2 md:mb-0">United States</span>
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-y-0 md:gap-x-8">
          <span className="text-[#79797A]">
            Copyright © 2025 Apple Inc. All rights reserved.
          </span>
          <ul className="flex flex-wrap gap-x-2">
            {copyrightNavs.map((item, index) => (
              <li key={index} className="text-[#B3B3B3] pr-2 border-r border-r-gray-300 last:border-r-0 last:pr-0"><a href="#">{item.nav}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
