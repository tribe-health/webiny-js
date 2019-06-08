//@flow
import * as React from "react";
import { css } from "emotion";
import { Form } from "webiny-app-forms/components/Form";

const pageInnerWrapper = css({
    overflowY: "scroll",
    overflowX: "hidden",
    height: "calc(100vh - 230px)",
    position: "relative"
});

type Props = {
    form: Object
};

const FormPreview = ({ form }: Props) => {
    return (
        <div className={pageInnerWrapper}>
            <Form data={form} />
        </div>
    );
};

export default FormPreview;