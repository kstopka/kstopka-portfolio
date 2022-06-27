import { DescriptionProps } from "../../../components/HomePage/Contact/components/Description/types";
import { PrimaryTitleProps } from "../../../components/HomePage/Contact/components/PrimaryTitle/types";
import { SecondaryTitleProps } from "../../../components/HomePage/Contact/components/SecondaryTitle/types";
import { TitleSectionProps } from "../../../components/HomePage/Contact/components/TitleSection/types";

const SecondaryTitle: SecondaryTitleProps = {
    title: "contact us",
};

const PrimaryTitle: PrimaryTitleProps = {
    title: "Our Team Is Here to Help",
};

const Descriptions: DescriptionProps = {
    text: "Message us via the form below or send an email to ",
    email: "support@muslincomfort.com",
};

export const TitlesSection: TitleSectionProps = {
    primaryTitle: PrimaryTitle,
    secondaryTitle: SecondaryTitle,
    descriptions: Descriptions,
};
