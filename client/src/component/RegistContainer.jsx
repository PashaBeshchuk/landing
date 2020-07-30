import React from 'react'
import Registration from './Registration'
import { connect } from 'react-redux'
import { postUserDataThunk } from '../redux/userReducer'
const RegistContainer = (props) => {
    return <div>
        <Registration {...props}/>
    </div>
}
const mapStateToProps = (state) => {
    return {
        usersData: state.userReducer.usersData,
        image: state.userReducer.image
    }
}
export default connect(mapStateToProps, {postUserDataThunk})(RegistContainer)