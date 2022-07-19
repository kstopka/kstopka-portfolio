import { DescriptionProps } from "../../../components/HomePage/Contact/components/Description/types";
import { PrimaryTitleProps } from "../../../components/HomePage/Contact/components/PrimaryTitle/types";
import { SecondaryTitleProps } from "../../../components/HomePage/Contact/components/SecondaryTitle/types";
import { TitleSectionProps } from "../../../components/HomePage/Contact/components/TitleSection/types";

const SecondaryTitle: SecondaryTitleProps = {
  title: "",
};

const PrimaryTitle: PrimaryTitleProps = {
  title: "Napisz do mnie",
};

const Descriptions: DescriptionProps = {
  text: "możesz też wysłać wiadomość na moją skrzynkę mailową ",
  email: "kontakt@kstopka.com",
};

export const TitlesSection: TitleSectionProps = {
  primaryTitle: PrimaryTitle,
  secondaryTitle: SecondaryTitle,
  descriptions: Descriptions,
};
