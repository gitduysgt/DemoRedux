import FormAdd from 'features/ListUser/components/Form';
import { addUser, editUser } from 'features/ListUser/listuserSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userid } = useParams();
    const idAdd = !userid;
    const infoUserEdit = useSelector(state => state.listUserStores.find(i => i.id === userid));
    console.log("infoUserEdit", infoUserEdit)
    const initialValues = idAdd ? {
        id: '',
        name: '',
        age: ''
    } : infoUserEdit;

    const handleSubmit = (values) => {
        if (idAdd) {
            console.log('value:', values);
            const action = addUser(values);
            dispatch(action);

        } else {
            const action = editUser(values);
            dispatch(action);
        }
        history.push('/listusers');
    }

    return (
        <div>
            <div>
                <FormAdd
                    isAddMode={idAdd}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>


    );
}

export default AddEditPage;