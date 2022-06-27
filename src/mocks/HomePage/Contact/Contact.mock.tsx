import { ContactProps } from "../../../components/HomePage/Contact/types.d";
import { FormSuccessfulMock } from "./Form.mock";
import { TitlesSection } from "./TitleSection.mock";

export const ContactMock: ContactProps = {
    content: {
        titles: TitlesSection,
        formOptions: FormSuccessfulMock,
    },
};
