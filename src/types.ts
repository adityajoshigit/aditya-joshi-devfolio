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
  | "twitter";

export type SocialMediaComponentMapType = {
  [socialMediaTypeId in SocialMediaType]: ReactNode;
};

export interface ISocialMediaLinkData {
  link: string;
  altText: string;
  order?: number;
  id: SocialMediaType;
}

export type ThemeType = "DARK" | "LIGHT";
