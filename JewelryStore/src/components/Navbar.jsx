import "../styles/navbar.css";
import logo from "../assets/j-store-logo.jpeg";
import insta from "../assets/instagram2.png";
import fb from "../assets/facebook2.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDesignerDropdownActive, setIsDesignerDropdownActive] =
    useState(false);
  const [isServiceDropdownActive, setIsServiceDropdownActive] = useState(false);
  const [isOurCompanyDropdownActive, setIsOurCompanyDropdownActive] =
    useState(false);
  const [designerDropdownPosition, setDesignerDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const [serviceDropdownPosition, setServiceDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const [ourCompanyDropdownPosition, setOurCompanyDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const [dropdownOption, setDropdownOption] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleDropdownClick = (link, index) => {
    setDropdownOption(link);
    // DESIGNERS:
    if (link === "Designers") {
      setIsDesignerDropdownActive(true);
      setIsServiceDropdownActive(false);
      setIsOurCompanyDropdownActive(false);
      const dropdownTop = 162;
      const dropdownLeft = index * 18.6;
      setDesignerDropdownPosition({ top: dropdownTop, left: dropdownLeft });
      // SERVICES:
    } else if (link === "Services") {
      setIsServiceDropdownActive(true);
      setIsDesignerDropdownActive(false);
      setIsOurCompanyDropdownActive(false);
      const dropdownTop = 162;
      const dropdownLeft = index * 17;
      setServiceDropdownPosition({ top: dropdownTop, left: dropdownLeft });
      // OUR COMPANY:
    } else if (link === "Our Company") {
      setIsOurCompanyDropdownActive(true);
      setIsDesignerDropdownActive(false);
      setIsServiceDropdownActive(false);
      const dropdownTop = 162;
      const dropdownLeft = index * 17;
      setOurCompanyDropdownPosition({ top: dropdownTop, left: dropdownLeft });
      // ENGAGEMENT:
    } else if (link === "Engagement Rings") {
      setIsDesignerDropdownActive(false);
      setIsServiceDropdownActive(false);
      navigate("/engagement");
      //WEDDING:
    } else if (link === "Wedding Rings") {
      setIsDesignerDropdownActive(false);
      setIsServiceDropdownActive(false);
      navigate("/wedding");
      //JEWELRY:
    } else if (link === "Jewelry") {
      setIsDesignerDropdownActive(false);
      setIsServiceDropdownActive(false);
      navigate("/jewelry");
    }
  };

  const links = [
    { linkName: "Engagement Rings", link: "/engagement" },
    { linkName: "Wedding Rings", link: "/wedding" },
    { linkName: "Jewelry", link: "/jewelry" },
    { linkName: "Designers", link: "/designers" },
    { linkName: "Services", link: "/services" },
    { linkName: "Our Company", link: "/company" },
  ];

  const designersDropdownOptions = [
    { linkName: "Designers", link: "/designers" },
    { linkName: "Sophia Sterling", link: "/sterling" },
    { linkName: "Oliver Opulence", link: "/opulence" },
    { linkName: "Isabella Gems", link: "/gems" },
  ];

  const servicesDropdownOptions = [
    { linkName: "Services", link: "/services" },
    { linkName: "Appraisals", link: "/appraisals" },
    { linkName: "Custom Jewelry", link: "/custom" },
    { linkName: "Jewelry Repair", link: "/repair" },
  ];

  const ourCompanyDropdownOptions = [
    { linkName: "Our Company", link: "/company" },
    { linkName: "Blog", link: "/blog" },
    { linkName: "Reviews", link: "/reviews" },
    { linkName: "Contact Us", link: "/contact" },
  ];

  useEffect(() => {
    if (hoverIndex !== null) {
      gsap.from(".active1", 0.8, {
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "power4.out",
      });
    }
  }, [hoverIndex]);

  useEffect(() => {
    if (isDesignerDropdownActive || isServiceDropdownActive) {
      gsap.from(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }
  }, [isDesignerDropdownActive, isServiceDropdownActive]);

  const renderDropdownOptions = (options) => {
    return (
      <ul className="navbar-list-dropdown-option-container">
        {options.map((link) => (
          <li key={link.linkName} className="navbar-list-dropdown-option">
            <a className="navbar-link hover" href={link.link}>
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderDropdown = (options, position) => {
    return (
      <div
        ref={dropdownRef}
        className="navbar-list-dropdown-container"
        style={{
          top: `${position.top}px`,
          left: `${position.left}%`,
        }}
      >
        {renderDropdownOptions(options)}
      </div>
    );
  };

  return (
    <>
      <nav className="navbar-main-container">
        <div className="navbar-info-container">
          <div className="navbar-info-locations">
            <p className="font1 f-8">Santa Rosa</p>
            <p className="font1 f-8">|</p>
            <p className="font1 f-8">Santa Clara</p>
          </div>
          <div
            className="navbar-info-logo pointer"
            onClick={() => {
              navigate("/");
              setIsDesignerDropdownActive(false);
              setIsServiceDropdownActive(false);
            }}
          >
            <img src={logo} />
            <p className="f1-5">Timothy Patrick Jewelers</p>
            <p>Est. 2009</p>
          </div>
          <div className="navbar-info-socials">
            <img src={insta} />
            <img src={fb} />
          </div>
        </div>
        <div className="navbar-links-container">
          <ul>
            {links.map((link, index) => {
              return (
                <li
                  className="navbar-link"
                  key={link.linkName}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleDropdownClick(link.linkName, index)}
                >
                  {link.linkName}

                  {hoverIndex === index && <div className="active1"></div>}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {isDesignerDropdownActive &&
        dropdownOption === "Designers" &&
        renderDropdown(designersDropdownOptions, designerDropdownPosition)}
      {isServiceDropdownActive &&
        dropdownOption === "Services" &&
        renderDropdown(servicesDropdownOptions, serviceDropdownPosition)}
      {isOurCompanyDropdownActive &&
        dropdownOption === "Our Company" &&
        renderDropdown(servicesDropdownOptions, serviceDropdownPosition)}
    </>
  );
}