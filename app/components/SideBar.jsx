import React from "react";
import DesktopSidebar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";

export default function SideBar({isOpen,onClose}){
  return (
    <div className="w-fit h-fit ">
      
      <div className="hidden lg:flex !w-fit !h-fit "><DesktopSidebar /></div>
      <div className="lg:hidden !w-fit !h-fit "><MobileSideBar isOpen={isOpen}  onClose={onClose} /></div>
    </div>
  )
}