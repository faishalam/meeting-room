import ButtonSubmit from "../../elements/authButtonSubmit";
import ModalInput from "../../elements/modalInput";
import { useEffect, useState } from "react";
import { fetchAllClient } from "../../../features/client/asyncActionClient";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRoom } from "../../../features/room/asyncActionRoom";
import { addBooking, fetchAllBooking } from "../../../features/booking/asyncActionBooking";

export default function ModalAddBooking() {
    const dispatch = useDispatch();
    const client = useSelector((state) => state.client.client);
    const room = useSelector((state) => state.room.room);

    useEffect(() => {
        dispatch(fetchAllClient())
        dispatch(fetchAllRoom())
    }, [dispatch]);


    const [bookingForm, setBookingForm] = useState({
        clientId: 0,
        roomId: 0,
        bookingDate: '',
        startTime: '',
        endTime: '',
        quotaUsed: 0
    });
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setBookingForm({
            ...bookingForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(addBooking(bookingForm))
            setBookingForm({
                clientId: 0,
                roomId: 0,
                bookingDate: '',
                startTime: '',
                endTime: '',
                quotaUsed: 0
            })
            dispatch(fetchAllBooking())
            document.getElementById('addBooking').close();
        } catch (error) {
            setError(error?.response?.data?.message);
        }
    };

    return (
        <>
            <dialog id="addBooking" className="modal">
                <div className="modal-box">
                    <div className="flex flex-wrap justify-center items-center my-10 gap-6 p-4">
                        <form className="bg-white" onSubmit={handleSubmit}>
                            <h1 className="text-gray-800 font-bold text-xl mb-4">Add Booking</h1>
                            {error && <p className="text-red-500 text-xs">*{error}</p>}

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <label className="mr-2 max-w-5" >Client Name:</label>
                                <select
                                    id="clientId"
                                    name="clientId"
                                    className="w-full ml-10"
                                    value={bookingForm?.clientId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Client</option>
                                    {client.map((client) => (
                                        <option key={client.id} value={Number(client.id)}>{client.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <label className="mr-2 max-w-5" >Room Name:</label>
                                <select
                                    id="roomId"
                                    name="roomId"
                                    className="w-full ml-10"
                                    value={bookingForm?.roomId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Room</option>
                                    {room.map((item) => (
                                        <option key={item.id} value={Number(item.id)}>{item.roomName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Booking Date"
                                    type="date"
                                    name="bookingDate"
                                    id="bookingDate"
                                    placeholder="Booking Date"
                                    onChange={handleChange}
                                    value={bookingForm?.bookingDate}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Start Time"
                                    type="time"
                                    name="startTime"
                                    id="startTime"
                                    placeholder="Start Time"
                                    onChange={handleChange}
                                    value={bookingForm?.startTime}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="End Time"
                                    type="time"
                                    name="endTime"
                                    id="endTime"
                                    placeholder="End Time"
                                    onChange={handleChange}
                                    value={bookingForm?.endTime}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Quota Used"
                                    type="number"
                                    name="quotaUsed"
                                    id="quotaUsed"
                                    placeholder="Quota Used"
                                    onChange={handleChange}
                                    value={bookingForm?.quotaUsed}
                                />
                            </div>

                            <ButtonSubmit
                                type={'submit'}
                            >
                                Booking
                            </ButtonSubmit>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}