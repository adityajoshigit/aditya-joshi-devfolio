import { ReactNode } from "react";

export interface INavItemData {
  label: string;
  to: string;
  iconUrl?: string;
  element?: JSX.Element;
}

export interface ISocialMediaLinkData {
  link: string;
  icon?: ReactNode;
  altText: string;
  order?: number;
}

export type ThemeType = "DARK" | "LIGHT";
