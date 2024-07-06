import React, {useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import Logo from "../assets/images/draggyLogo.png";


export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="text-white overflow-clip py-5 bg-transparent mb-20" isBordered={false}>
      <NavbarContent>
        <NavbarBrand className="max-md:p-0 h-5">
          <img src={Logo} alt="draggy logo" className="logo px-0"/>
          <span className="text-[#ff6200] text-4xl font-extrabold p-0">Draggy</span>
        </NavbarBrand>
        <NavbarMenuToggle className="sm:hidden bg-transparent hover:text-red-500 hover:border-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      
      <NavbarContent className="sm:flex gap-4 max-sm:hidden" justify="center ">
        <NavbarItem>
          <Link className="link text-slate-50" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="link text-slate-50" href="#tokenomics">
            Tokenomics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="link text-slate-50" href="#socials">
            Socials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="link py-2 px-3 bg-red-600 rounded-l-full text-slate-50 hover:text-slate-100 hover:bg-slate-950" href="https://www.dextools.io/app/en/ether/pair-explorer/0x6e68fae720d991c6706cb8b618d0ee8941845896?t=1718724523236">
            Chart
          </Link>
          <Link className="link py-2 px-3 bg-white rounded-r-full text-gray-950 hover:text-slate-100 hover:bg-slate-950" href="https://app.uniswap.org/swap?outputCurrency=0xd12a99dbc40036cec6f1b776dccd2d36f5953b94&chain=ethereum">
            Buy Draggy
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        <NavbarMenuItem className="sm:hidden">
          <Link className="link text-slate-50" href="#about">
            About
          </Link>
          <Link className="link text-slate-50" href="#about">
            Tokenomics
          </Link>
          <Link className="link text-slate-50" href="#about">
            Socials
          </Link>
          <Link className="link text-slate-50" href="#about">
            Buy Draggy
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
