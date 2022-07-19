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

const asyncSuccessfulHandler = async (
  value: FormToSend
): Promise<TSubmitResponse> => {
  const response = await timerSuccessful(value);
  return response;
};

const asyncUnsuccessfulHandler = async (
  value: FormToSend
): Promise<TSubmitResponse> => {
  const response = await timerUnsuccessful(value);
  return response;
};

export const FormSuccessfulMock: ContactUsFormProps = {
  namePlaceholder: "Podaj proszę Imię",
  emailPlaceholder: "Email, żebym mógł odpisać",
  descriptionPlaceholder: "Napisz wiadomość do mnie ;)",
  submitLabel: "Wyślij",
  messages,
  handleSubmit: asyncSuccessfulHandler,
};

export const FormUnsuccessfulMock: ContactUsFormProps = {
  namePlaceholder: "Podaj proszę Imię",
  emailPlaceholder: "Email, żebym mógł odpisać",
  descriptionPlaceholder: "Napisz wiadomość do mnie ;)",
  submitLabel: "Wyślij",
  messages,
  handleSubmit: asyncUnsuccessfulHandler,
};
