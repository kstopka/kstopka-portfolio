import * as React from "react";
import { FunctionComponent } from "react";
import { ContactUsFormProps } from "./types";

import styles from "./rwd.module.scss";
import { useContactUs } from "./hooks";
import { classes } from "./utils";

const {
    wrapper,
    wrapperForm,
    wrapperFormInput,
    wrapperFormInputError,
    wrapperErrorContainerMessage,
    wrapperFormContainer,
    wrapperFormContainerButton,
    wrapperFormContainerButtonDisabled,
    wrapperSuccessContainer,
    wrapperErrorContainer,
    wrapperSuccessContainerMessage,
} = styles;

export const ContactUsForm: FunctionComponent<ContactUsFormProps> = ({
    namePlaceholder,
    emailPlaceholder,
    descriptionPlaceholder,
    submitLabel,
    messages,
    handleSubmit,
}) => {
    const {
        handleSubmitForm,
        handleInputBlur,
        handleInputChange,
        formStateOperations: { isError, isSubmitting, isSuccessSubmited, status, message },
        formStateContent: { name, email, description },
    } = useContactUs(handleSubmit, messages);

    return (
        <div className={wrapper}>
            <form onSubmit={(e) => handleSubmitForm(e)} className={wrapperForm}>
                <input
                    value={name.content}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    minLength={2}
                    name="name"
                    type="text"
                    className={classes(name.isError, wrapperFormInput, wrapperFormInputError)}
                    disabled={isSubmitting}
                    placeholder={namePlaceholder}
                />

                <input
                    value={email.content}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    className={classes(email.isError, wrapperFormInput, wrapperFormInputError)}
                    disabled={isSubmitting}
                    placeholder={emailPlaceholder}
                />

                <textarea
                    value={description.content}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    minLength={15}
                    name="description"
                    // type={}
                    className={classes(description.isError, wrapperFormInput, wrapperFormInputError)}
                    disabled={isSubmitting}
                    placeholder={descriptionPlaceholder}
                />

                <div className={wrapperFormContainer}>
                    {isSuccessSubmited && status === "success" ? (
                        <div className={wrapperSuccessContainer}>
                            <p className={wrapperSuccessContainerMessage}>{message || messages.successMessage}</p>
                        </div>
                    ) : (
                        <>
                            <button
                                type="submit"
                                disabled={isError}
                                className={classes(
                                    isError,
                                    wrapperFormContainerButton,
                                    wrapperFormContainerButtonDisabled
                                )}
                            >
                                {submitLabel}
                            </button>

                            {isSuccessSubmited && status === "error" ? (
                                <div className={wrapperErrorContainer}>
                                    <p className={wrapperErrorContainerMessage}>{message || messages.errorMessage}</p>
                                </div>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>
            </form>

            {name.isError && (
                <div className={wrapperErrorContainer}>
                    <small className={wrapperErrorContainerMessage}>{name.errorMessage}</small>
                </div>
            )}
            {email.isError && (
                <div className={wrapperErrorContainer}>
                    <small className={wrapperErrorContainerMessage}>{email.errorMessage}</small>
                </div>
            )}
            {description.isError && (
                <div className={wrapperErrorContainer}>
                    <small className={wrapperErrorContainerMessage}>{description.errorMessage}</small>
                </div>
            )}
        </div>
    );
};
