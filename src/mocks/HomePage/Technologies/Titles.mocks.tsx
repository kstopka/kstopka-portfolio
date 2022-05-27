import { SubtitleTechnologiesProps } from "../../../components/HomePage/Technologies/components/Subtitle/types.d";
import { TitleTechnologiesProps } from "../../../components/HomePage/Technologies/components/Title/types.d";
import { TitlesContentTechnologiesProps } from "../../../components/HomePage/Technologies/components/TitlesContent/types.d";

const TitleTechnologiesMock: TitleTechnologiesProps = {
    title: "Title",
};

const SubtitleTechnologiesMock: SubtitleTechnologiesProps = {
    subtitle: "Subtitle",
};

export const TitlesTechnologiesMock: TitlesContentTechnologiesProps = {
    title: TitleTechnologiesMock,
    subtitle: SubtitleTechnologiesMock,
};
