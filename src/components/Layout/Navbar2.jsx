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
            {/* Mobile Navigation Links (no loop, explicit links, using divs) */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/");
              }}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsMobileMenuOpen(false);
                  navigate("/");
                }
              }}
              className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer focus:outline-none"
            >
              <span className="block">Home</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/about");
              }}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsMobileMenuOpen(false);
                  navigate("/about");
                }
              }}
              className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer focus:outline-none"
            >
              <span className="block">About</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/services");
              }}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsMobileMenuOpen(false);
                  navigate("/services");
                }
              }}
              className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer focus:outline-none"
            >
              <span className="block">Services</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact");
              }}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsMobileMenuOpen(false);
                  navigate("/contact");
                }
              }}
              className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer focus:outline-none"
            >
              <span className="block">Contact</span>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}




