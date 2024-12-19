export interface Repository {
    name: string
    language: string
    size: string
    visibility: 'Public' | 'Private'
    updatedAt: string
  }
  
  export interface SidebarLink {
    icon: React.ComponentType
    label: string
    href: string
  }
  