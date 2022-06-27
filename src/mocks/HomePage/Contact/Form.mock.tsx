import {
    ContactUsFormProps,
    ErrorMessages,
    FormToSend,
    TSubmitResponse,
} from "../../../components/HomePage/Contact/components/Form/types";

const messages: ErrorMessages = {
    onlyLettersMessage: "That field must contain only letters",
    minLettersForName: "That field must contain at least 2 letters",
    firstCapitalLetter: "That field must begins with a capital letter",
    minLettersForDescription: "That field must contain at least 15 letters",
    emailMessage: "Passed e-mail is inappropriate",
    successMessage: "Success. We will be in touch shortly",
    errorMessage: "Something goes wrong, please try again",
};

const timerUnsuccessful = async (value: FormToSend) => {
    return new Promise<TSubmitResponse>((resolve, reject) => {
        setTimeout(() => {
            console.log(`FormToSend:`, value);

            reject({
                status: "error",
                message: "Something goes wrong, please try again",
            });
        }, 2000);
    });
};
const timerSuccessful = async (value: FormToSend) => {
    return new Promise<TSubmitResponse>((resolve, reject) => {
        setTimeout(() => {
            console.log(`FormToSend:`, value);

            resolve({
                status: "success",
                message: "Success. We will be in touch shortly",
            });
        }, 2000);
    });
};

const asyncSuccessfulHandler = async (value: FormToSend): Promise<TSubmitResponse> => {
    const response = await timerSuccessful(value);

    // console.log(response);
    return response;
};

const asyncUnsuccessfulHandler = async (value: FormToSend): Promise<TSubmitResponse> => {
    const response = await timerUnsuccessful(value);

    // console.log(response);
    return response;
};

export const FormSuccessfulMock: ContactUsFormProps = {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    descriptionPlaceholder: "Your Message",
    submitLabel: "Submit",
    messages,
    handleSubmit: asyncSuccessfulHandler,
};

export const FormUnsuccessfulMock: ContactUsFormProps = {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    descriptionPlaceholder: "Your Message",
    submitLabel: "Submit",
    messages,
    handleSubmit: asyncUnsuccessfulHandler,
};
