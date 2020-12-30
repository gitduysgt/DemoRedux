import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup} from 'reactstrap';
import InputField from 'custom-fields/InputField';

FormAdd.propTypes = {
    onSubmit: PropTypes.func,
};

FormAdd.defaultProps = {
    onSubmit: null,
};

function FormAdd(props) {
    const { initialValues, isAddMode } = props;
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
        {formikProps => {
            return (
                <Form>
                    <FastField
                        name="id"
                        component={InputField}

                        label="Id"
                        placeholder="nhập Id..."
                        disabled={isAddMode ? false : true}
                    />
                    <FastField
                        name="name"
                        component={InputField}

                        label="Name"
                        placeholder="nhập tên..."
                    />
                    <FastField
                        name="age"
                        component={InputField}

                        label="Age"
                        placeholder="nhập tuổi..."
                    />

                    <FormGroup>
                        <Button type="submit" color='primary'>
                            Lưu
                    </Button>
                    </FormGroup>
                </Form>
            )
        }}
        </Formik>
    );
}

export default FormAdd;