import React, { useState } from "react";


import useSplash from "../hooks/useSplash";
import FloatingNav from "./FloatingNav";
import NavModal from "./NavModel";

const NavbarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { startSplash } = useSplash();

  return (
    <>
      <StandingNavbar startSplash={startSplash} />

      <FloatingNav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />

      <NavModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        startSplash={startSplash}
      />
    </>
  );
};

export default NavbarWrapper;