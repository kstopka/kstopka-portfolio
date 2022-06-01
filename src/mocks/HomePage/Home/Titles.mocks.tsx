import { AuthorHomeProps } from "../../../components/HomePage/Home/components/Author/types.d";
import { DescriptionHomeProps } from "../../../components/HomePage/Home/components/Description/types.d";
import { TitleHomeProps } from "../../../components/HomePage/Home/components/Title/types.d";
import { TitlesContentHomeProps } from "../../../components/HomePage/Home/components/TitlesContent/types.d";

const TitleHomeMock: TitleHomeProps = {
    title: "Cześć, Jestem",
};

const AuthorHomeMocok: AuthorHomeProps = {
    author: "Krystian",
};
const DescriptionHomeMock: DescriptionHomeProps = {
    description: "Front End Dev",
};

export const TitlesHomeMock: TitlesContentHomeProps = {
    title: TitleHomeMock,
    author: AuthorHomeMocok,
    description: DescriptionHomeMock,
};
