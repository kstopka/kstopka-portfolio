import { SubtitleHobbyProps } from "../../../components/HomePage/Hobby/components/Subtitle/types.d";
import { TitleHobbyProps } from "../../../components/HomePage/Hobby/components/Title/types.d";
import { TitlesContentHobbyProps } from "../../../components/HomePage/Hobby/components/TitlesContent/types.d";

const TitleHobbyMock: TitleHobbyProps = {
    title: "Title",
};

const SubtitleHobbyMock: SubtitleHobbyProps = {
    subtitle: "Subtitle",
};

export const TitlesHobbyMock: TitlesContentHobbyProps = {
    title: TitleHobbyMock,
    subtitle: SubtitleHobbyMock,
};
