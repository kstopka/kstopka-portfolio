import { AuthorHomeProps } from "../Author/types.d";
import { DescriptionHomeProps } from "../Description/types.d";
import { TitleHomeProps } from "../Title/types.d";

export interface TitlesContentHomeProps {
    title: TitleHomeProps;
    author: AuthorHomeProps;
    description: DescriptionHomeProps;
}
