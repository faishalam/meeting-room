import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './features/client/clientSlice'
import bookingReducer from './features/booking/bookingSlice'
import roomReducer from './features/room/roomSlice'


export default configureStore({
    reducer: {
        client: clientReducer,
        booking: bookingReducer,
        room: roomReducer
    }
})