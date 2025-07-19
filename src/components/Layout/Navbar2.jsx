"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ace/NavbarC";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg';

export function Navbar2() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Reviews",
      link: "/review",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            
            <NavbarButton variant="primary" onClick={() => navigate("/contact")}>Contact Us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (item.link.startsWith("#")) {
                    const section = document.querySelector(item.link);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    navigate(item.link);
                  }
                }}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
              <NavbarButton
                onClick={() => {
                  navigate("/contact");
                }}
                variant="primary"
                className="w-full">
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

