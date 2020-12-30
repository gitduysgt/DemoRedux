import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ShowListUser from 'features/ListUser/components/List'

function MainPage(props) {
    const listUserMain = useSelector(state => state.listUserStores);
    const dispatch = useDispatch();
    const history = useHistory();
    //console.log('list of users:', listUserMain);
    
    const handleEditUser = (user) => {
        console.log('user', user);
        const url = `/listusers/${user.id}`;
        history.push(url);
    }
    
    return (
        <div>
            <Container className="text-center">
            <h1>SaigonThink</h1>
            <hr/>
            <Link to="/listusers/add">Thêm User</Link>
            <ShowListUser
            userList={listUserMain}
            editUserClick={handleEditUser}
            />
            </Container>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage