import { AuthorHomeProps } from "../../../components/HomePage/Home/components/Author/types.d";
import { DescriptionHomeProps } from "../../../components/HomePage/Home/components/Description/types.d";
import { TitleHomeProps } from "../../../components/HomePage/Home/components/Title/types.d";

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
