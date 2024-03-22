import { heroService } from "../../services/hero"
import { setClient, setNewClient, setClientById } from "./clientSlice"

export const fetchAllClient = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/client", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setClient(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addClient = (clientForm) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post("/client", clientForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })


            if (response.data !== null) {
                dispatch(setNewClient(response.data))
                dispatch(fetchAllClient())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteClient = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.delete(`/client/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            dispatch(fetchAllClient())
        } catch (error) {
            return error?.response?.data?.message
        }
    }
}

export const getClientById = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.get(`/client/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })


            if (response.data !== null) {
                dispatch(setClientById(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateClient = (id, clientForm) => {
    // console.log(clientForm, id, '<<<')
    return async (dispatch) => {
        try {
            console.log('masuk')
            const response = await heroService.put(`/client/${id}`, clientForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
        
            dispatch(fetchAllClient())
        } catch (error) {
            console.log(error)
        }
    }
}