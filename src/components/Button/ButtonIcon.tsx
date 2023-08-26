import { LucideIcon } from "lucide-react";

interface ButtonIconProps {
  Icon: LucideIcon,
  IconSize: number
}

export function ButtonIcon({ Icon, IconSize }: ButtonIconProps) {
  return <Icon size={IconSize} color="#fff"/>
}