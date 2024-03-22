import { heroService } from "../../services/hero"
import { setNewRoom, setRoom, setRoomById } from "./roomSlice"

export const fetchAllRoom = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/room", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setRoom(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addRoom = (roomForm) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post("/room", roomForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })


            if (response.data !== null) {
                dispatch(setNewRoom(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteRoom = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.delete(`/room/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            dispatch(fetchAllRoom())
        } catch (error) {
            return error?.response?.data?.message
        }
    }
}

// export const getClientById = (id) => {
//     return async (dispatch) => {
//         try {
//             const response = await heroService.get(`/client/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
//                 }
//             })


//             if (response.data !== null) {
//                 dispatch(setClientById(response.data))
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// export const updateClient = (id, clientForm) => {
//     // console.log(clientForm, id, '<<<')
//     return async (dispatch) => {
//         try {
//             console.log('masuk')
//             const response = await heroService.put(`/client/${id}`, clientForm, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
//                 }
//             })
        
//             dispatch(fetchAllClient())
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }