import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    client: [],
    clientById: {
        name: '',
        email: '',
        phone: '',
        credit: ''
    }
}

export const clientSlice = createSlice({
    name: 'client',
    initialState: initialState,
    reducers: {
        setClient: (state, action) => {
            state.client = action.payload
        },
        setNewClient: (state, action) => {
            console.log(action.payload, '<<<')
            state.client.push(action.payload)
        },
        setClientById: (state, action) => {
            state.clientById = action.payload
        }
    }
})

export const { setClient, setNewClient, setClientById } = clientSlice.actions

export default clientSlice.reducer