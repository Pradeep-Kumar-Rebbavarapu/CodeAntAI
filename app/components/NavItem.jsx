import React from "react"

export default function NavItem({ icon:Icon, label , onClick}) {
    return (
      <button onClick={onClick} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </button>
    )
  }