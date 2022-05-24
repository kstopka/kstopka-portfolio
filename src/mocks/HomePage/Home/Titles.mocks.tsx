import { AuthorHomeProps } from "../../../components/HomePage/Home/components/Author/types.d";
import { DescriptionHomeProps } from "../../../components/HomePage/Home/components/Description/types.d";
import { TitleHomeProps } from "../../../components/HomePage/Home/components/Title/types.d";
import { HomeProps } from "../../../components/HomePage/Home/types.d";
import { ImageHomeMock } from "./ImageHome.mocks";

const TitleHomeMock: TitleHomeProps = {
    title: "Cześć",
};

const AuthorHomeMocok: AuthorHomeProps = {
    author: "Jestem Krystian",
};
const DescriptionHomeMock: DescriptionHomeProps = {
    description: "Front End Dev",
};

export const TitlesHomeMock = {
    titlesContent: {
        title: TitleHomeMock,
        author: AuthorHomeMocok,
        description: DescriptionHomeMock,
    },
};

export const HomeMock: HomeProps = {
    titlesContent: TitlesHomeMock,
    image: ImageHomeMock,
};
