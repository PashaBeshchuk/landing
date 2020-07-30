import React, { useEffect, useState } from "react"
import userImg from '../image/Icon-user.png'
import { connect } from "react-redux"
import { getUsersData } from '../redux/userReducer'


const OurEmployees = (props)=> {
    useEffect(()=>{
        props.getUsersData()
    },[props.usersData])
    const [numberOfOpenUsers, setNumberOfOpenUsers] =  useState(6)    
    const showMore = () => {
        setNumberOfOpenUsers(numberOfOpenUsers+3)
    }
    const listUsersData = props.usersData.map((user, id)=>{
        if(numberOfOpenUsers > id){
            return <div key={id} className='user-data'>
                <img src={user.photo}/>
                {/* <img src={userImg}/> */}
                <h2>{user.name}</h2>
                <p>{user.profession}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div> 
        }
        
    })

    return <div className='employees-body'>  
        <h1 className="employees-h1">Our cheerful users</h1>
        <h5 className="employees-h5">Attention! Sorting users by registration date</h5>
        <div className="list-users-data">
            {listUsersData}
        </div>
        <button onClick={showMore} className="btn btn-danger">Show more</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        usersData: state.userReducer.usersData
    }
}

export default connect(mapStateToProps, { getUsersData })(OurEmployees)