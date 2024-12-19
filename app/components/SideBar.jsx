import React from "react";
import DesktopSidebar from "./DesktopSideBar";
import MobiSideBar from "./MobileSideBar";

export default function SideBar({isOpen,onclose}){
  return (
    <div>
      <div className="hidden md:flex"><DesktopSidebar /></div>
      <div className="md:hidden"><MobiSideBar /></div>
    </div>
  )
}