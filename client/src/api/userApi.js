import { instans } from './instans'
export const userApi = {
    postUserData: (userData) => {
        return instans.post('/create-user', userData)
    },
    postUserImage: (photo) => {
        const formData = new FormData()
        formData.append("image",photo)
        return instans.post('/create-photo', formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
    },
    
    getUserData: () => {
        return instans.get('/')
    },
    getImages: () => {
        return instans.get('/images')
    }
}