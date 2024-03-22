import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: [],
    roomById: {
        roomName: '',
        costPerHour: 0,
    }
}

export const roomSlice = createSlice({
    name: 'client',
    initialState: initialState,
    reducers: {
        setRoom: (state, action) => {
            state.room = action.payload
        },
        setNewRoom: (state, action) => {
            state.room.push(action.payload)
        },
        setRoomById: (state, action) => {
            state.roomById = action.payload
        }
    }
})

export const { setRoom, setNewRoom, setRoomById } = roomSlice.actions

export default roomSlice.reducer