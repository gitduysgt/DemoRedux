import React from 'react';
import PropTypes from 'prop-types';
import { Row, Table } from 'reactstrap';

ShowListUser.propTypes = {
    userList: PropTypes.array,
    userEdit: PropTypes.object,
    editUserClick: PropTypes.func,
};

ShowListUser.defaultPros = {
    userList: [],
    userEdit: {},
    editUserClick: null
}

function ShowListUser(props) {
    const { userList, userEdit, editUserClick } = props;
    const handleEdit = (a) => {
        console.log('a:', a);
        if (editUserClick) editUserClick(a);
    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Id
                    </th>
                        <th>
                            Name
                    </th>
                        <th>
                            Age
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user => (
                        <tr key={user.id} onClick={() => handleEdit(user)}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ShowListUser;