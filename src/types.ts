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

export type SocialMediaType =
  | "linkedin"
  | "github"
  | "twitter"
  | "frontend-mentor";

export type SocialMediaComponentMapType = {
  [socialMediaTypeId in SocialMediaType]: ReactNode;
};

export interface ISocialMediaLinkData {
  link: string;
  altText: string;
  order?: number;
  id: SocialMediaType;
  show?: boolean;
}

export type ThemeType = "DARK" | "LIGHT";
