import { links } from "~/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type VerticalElementType = {
  title: string;
  description: string;
  date: string;
  icon: React.FunctionComponentElement<any>;
};
