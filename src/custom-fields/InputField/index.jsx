import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled
    } = props;
    const { name } = field;
    return (
        <FormGroup>
            {label && <Label for={name} style={{textAlign:"left"}}>{label}</Label>}
            <br/>
            <Input
                id={name}
                {...field}

                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
        </FormGroup>
    );
}

export default InputField;