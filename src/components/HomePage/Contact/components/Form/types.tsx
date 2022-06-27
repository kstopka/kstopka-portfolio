export type TSubmitHandler = (value: FormToSend) => Promise<TSubmitResponse>;

export type ErrorMessages = {
  [key: string]: string;
};

export type ContactUsFormProps = {
  namePlaceholder: string;
  emailPlaceholder: string;
  descriptionPlaceholder: string;
  submitLabel: string;
  messages: ErrorMessages;
  handleSubmit: TSubmitHandler;
};

export type ErrorInfromation = { isError: boolean; errorMessage: string };

export type ContactUsStateContentProps = {
  [key: string]: {
    content: string;
  } & ErrorInfromation;
};

export type FormToSend = {
  [key: string]: string;
};

export type TUseContactUsStateOperationsProps = {
  isSubmitting: boolean;
  isSuccessSubmited: boolean;
  isError: boolean;
} & TSubmitResponse;

export type TSubmitResponse = {
  status: 'default' | 'error' | 'success';
  message: string;
};

export type CheckPropertyType = (
  content: string,
  messages: ErrorMessages,
) => ErrorInfromation;

export type ValidationType = {
  [key: string]: CheckPropertyType;
};
