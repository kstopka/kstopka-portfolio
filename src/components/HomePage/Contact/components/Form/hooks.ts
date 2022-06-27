import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import {
    ContactUsStateContentProps,
    ErrorMessages,
    FormToSend,
    TSubmitHandler,
    TUseContactUsStateOperationsProps,
} from "./types";
import { isPropertyValid, validation } from "./utils";

export const useContactUs = (handleSubmit: TSubmitHandler, messages: ErrorMessages) => {
    const initFormStateContent: ContactUsStateContentProps = {
        name: {
            content: "",
            isError: false,
            errorMessage: "",
        },
        email: {
            content: "",
            isError: false,
            errorMessage: "",
        },
        description: {
            content: "",
            isError: false,
            errorMessage: "",
        },
    };
    const [formStateContent, setFormStateContent] = useState<ContactUsStateContentProps>(initFormStateContent);

    const [formStateOperations, setFormStateOperations] = useState<TUseContactUsStateOperationsProps>({
        isSubmitting: false,
        isSuccessSubmited: false,
        isError: false,
        status: "default",
        message: "",
    });

    const handleInputChange = useCallback(
        // (e: h.JSX.TargetedEvent<HTMLTextAreaElement | HTMLInputElement, Event>) => {
        (e: any) => {
            const { name, value } = e.currentTarget;
            const content = value.trim();
            setFormStateContent((prevState) => ({
                ...prevState,
                [name]: {
                    content,
                    isError: false,
                    errorMessage: "",
                },
            }));
        },
        []
    );

    // const handleInputBlur = useCallback((e: h.JSX.TargetedEvent<HTMLTextAreaElement | HTMLInputElement, Event>) => {
    const handleInputBlur = useCallback((e: any) => {
        const { name, value } = e.currentTarget;
        const content = value.trim();

        const { isError, errorMessage } = validation[name](content, messages);

        if (isError) {
            return setFormStateContent((prevState) => ({
                ...prevState,
                [name]: {
                    content,
                    isError: true,
                    errorMessage: errorMessage,
                },
            }));
        }
    }, []);

    // const handleSubmitForm = async (e: h.JSX.TargetedEvent<HTMLFormElement, Event>) => {
    const handleSubmitForm = async (e: any) => {
        e.preventDefault();

        if (!isPropertyValid(formStateContent)) {
            setFormStateOperations((prevState) => ({
                ...prevState,
                isSubmitting: false,
                isError: true,
                isSuccessSubmited: false,
            }));
            return;
        }

        setFormStateOperations((prevState) => ({
            ...prevState,
            isSubmitting: true,
        }));

        const { name, email, description } = formStateContent;
        const formToSend: FormToSend = {
            name: name.content,
            email: email.content,
            description: description.content,
        };

        try {
            const response = await handleSubmit(formToSend);
            const { status, message } = response;

            setFormStateOperations({
                isSuccessSubmited: true,
                isError: false,
                isSubmitting: false,
                status,
                message,
            });
        } catch (err: any) {
            if (typeof err.status !== "string") return;
            if (typeof err.message !== "string") return;

            setFormStateOperations((prevState) => ({
                ...prevState,
                isSuccessSubmited: true,
                isError: true,
                isSubmitting: false,
                status: err.status || "error",
                message: err.message || messages.errorMessage,
            }));
        }
    };

    useEffect(() => {
        setFormStateOperations((prevState) => ({
            ...prevState,
            isError: !isPropertyValid(formStateContent),
        }));
    }, [formStateContent, formStateOperations.isError]);

    useEffect(() => {
        if (
            (formStateOperations.isSuccessSubmited && formStateOperations.status === "success") ||
            formStateOperations.status === "error"
        ) {
            const timerId = setTimeout(() => {
                setFormStateOperations((prevstate) => ({
                    ...prevstate,
                    status: "default",
                    message: "",
                }));
                if (!formStateOperations.isError) {
                    setFormStateContent(initFormStateContent);
                }
            }, 5000);

            return () => clearTimeout(timerId);
        }
    }, [formStateOperations.status]);

    return {
        formStateOperations,
        formStateContent,
        handleSubmitForm,
        handleInputBlur,
        handleInputChange,
    };
};
