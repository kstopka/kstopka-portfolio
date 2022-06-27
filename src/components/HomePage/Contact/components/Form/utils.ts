import {
    CheckPropertyType,
    ContactUsStateContentProps,
    ErrorInfromation,
    ErrorMessages,
    ValidationType,
} from "./types";

export const classes = (isError: boolean, correctClass: string, wrongClass: string): string =>
    `${correctClass} ${isError ? wrongClass : ""}`.trim();

const isUserNameValid: CheckPropertyType = (content, messages) => {
    let information: ErrorInfromation = {
        isError: false,
        errorMessage: "",
    };
    if (content.length < 2) {
        return (information = {
            isError: true,
            errorMessage: messages.minLettersForName,
        });
    }
    if (!content.match(/^[A-Z\d]/)) {
        return (information = {
            isError: true,
            errorMessage: messages.firstCapitalLetter,
        });
    }
    return information;
};

const isEmailValid: CheckPropertyType = (content, messages) => {
    let information = {
        isError: false,
        errorMessage: "",
    };
    const emailRegExp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegExp.test(content)) {
        return (information = {
            isError: true,
            errorMessage: messages.emailMessage,
        });
    }
    return information;
};

const isDescriptionValid: CheckPropertyType = (content, messages) => {
    let information = {
        isError: false,
        errorMessage: "",
    };
    if (content.length < 15) {
        return (information = {
            isError: true,
            errorMessage: messages.minLettersForDescription,
        });
    }
    return information;
};

export const validation: ValidationType = {
    name: (content: string, messages: ErrorMessages) => isUserNameValid(content, messages),
    email: (content: string, messages: ErrorMessages) => isEmailValid(content, messages),
    description: (content: string, messages: ErrorMessages) => isDescriptionValid(content, messages),
};

export const isPropertyValid = (value: ContactUsStateContentProps): boolean => {
    const properties = Object.keys(value);

    const isPropertiesValid = properties.map((property) => {
        if (value[property].isError) return false;
        if (!value[property].content) return false;
        return true;
    });

    return !isPropertiesValid.some((item) => item === false);
};
