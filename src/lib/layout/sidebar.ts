export interface SidebarProps {
  isOpen: boolean;
}

export interface NavItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
  arrowIcon?: React.ReactNode;
}

export interface NavSubItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
}
