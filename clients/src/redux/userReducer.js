import { userApi } from "../api/userApi"
const UPDATE_IMAGE = "UPDATE_IMAGE" 
const UPDATE_USERS_DATA = 'UPDATE_USERS_DATA'
const initStore = {
    usersData:[],
    image:'',
}

export const userReducer = (state=initStore, action) => {
    switch(action.type) {
        case UPDATE_USERS_DATA:
            return {
                ...state,
                usersData: action.usersData
            }
        case UPDATE_IMAGE:
            return {
                ...state,
                image: action.image
            }
        default: 
            return state
    }
}

export const updateImageAC = (image) => ({type: UPDATE_IMAGE, image})
export const updateUsersDataAC = (usersData) => ({type: UPDATE_USERS_DATA, usersData})

export const getUsersData = () => {
    return async (dispatch) => {
        const response = await userApi.getUserData()
        dispatch(updateUsersDataAC(response.data))
    }
} 

export const postUserDataThunk = (userData) => {
    return async (dispatch) => {
        dispatch(getUsersData())
        const responseImage = await userApi.postUserImage(userData.photo)
        if(responseImage.status === 200) {
            userData.pathPhoto = responseImage.data.path  
            const responseData = await userApi.postUserData(userData)
            console.log(responseData)
            dispatch(getUsersData())  
        }
    }
}

