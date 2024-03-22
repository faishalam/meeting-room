import { heroService } from "../../services/hero"
import { setBooking, setBookingById, setNewBooking } from "./bookingSlice"

export const fetchAllBooking = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/roomUsage", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setBooking(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addBooking = (bookingForm) => {
    console.log(bookingForm, 'actions')
    return async (dispatch) => {
        try {
            const response = await heroService.post("/roomUsage", bookingForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })


            if (response.data !== null) {
                dispatch(setNewBooking(response.data))
                dispatch(fetchAllBooking())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteBooking = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.delete(`/roomUsage/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            dispatch(fetchAllBooking())
        } catch (error) {
            console.log(error)
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