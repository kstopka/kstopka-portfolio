import { AuthorHomeProps } from "../Author/types.d";
import { DescriptionHomeProps } from "../Description/types.d";
import { TitleHomeProps } from "../Title/types.d";

export interface TitlesContentHomeProps {
    titlesContent: {
        title: TitleHomeProps;
        author: AuthorHomeProps;
        description: DescriptionHomeProps;
    };
}
