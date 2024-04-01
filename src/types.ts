import { ReactNode } from "react";

export interface INavItemData {
  label: string;
  to: string;
  iconUrl?: string;
  element?: React.ForwardRefExoticComponent<
    {
      sectionId?: string;
    } & React.RefAttributes<HTMLElement>
  >;
}

export interface ISocialMediaLinkData {
  link: string;
  icon?: ReactNode;
  altText: string;
  order?: number;
}

export type ThemeType = "DARK" | "LIGHT";
