import { SubtitleHobbyProps } from "../../../components/HomePage/Hobby/components/Subtitle/types.d";
import { TitleHobbyProps } from "../../../components/HomePage/Hobby/components/Title/types.d";
import { TitlesContentHobbyProps } from "../../../components/HomePage/Hobby/components/TitlesContent/types.d";

const TitleHobbyMock: TitleHobbyProps = {
    title: "Cześć",
};

const SubtitleHobbyMock: SubtitleHobbyProps = {
    subtitle: "Jestem Krystian",
};

export const TitlesHobbyMock: TitlesContentHobbyProps = {
    title: TitleHobbyMock,
    subtitle: SubtitleHobbyMock,
};
