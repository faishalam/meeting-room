import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    booking: [],
    bookingById: {
        clientId: 0,
        roomId: 0,
        bookingDate: '',
        startTime: '',
        endTime: '',
        quotaUsed: 0
    }
}

export const bookingSlice = createSlice({
    name: 'client',
    initialState: initialState,
    reducers: {
        setBooking: (state, action) => {
            state.booking = action.payload
        },
        setNewBooking: (state, action) => {
            console.log(action.payload, '<<<')
            state.booking.push(action.payload)
        },
        setBookingById: (state, action) => {
            state.bookingById = action.payload
        }
    }
})

export const { setBooking, setNewBooking, setBookingById } = bookingSlice.actions

export default bookingSlice.reducer