import ButtonSubmit from "../../elements/authButtonSubmit";
import ModalInput from "../../elements/modalInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRoom, fetchAllRoom } from "../../../features/room/asyncActionRoom";

export default function ModalAddRoom() {
    const dispatch = useDispatch();
    const [roomForm, setRoomForm] = useState({
        roomName: '',
        costPerHour: 0,
    });
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setRoomForm({
            ...roomForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(addRoom(roomForm))
            setRoomForm({
                roomName: '',
                costPerHour: '',
            })
            dispatch(fetchAllRoom())
            document.getElementById('addRoom').close();
        } catch (error) {
            setError(error?.response?.data?.message);
        }
    };


    return (
        <>
            <dialog id="addRoom" className="modal">
                <div className="modal-box">

                    <div className="flex flex-wrap justify-center items-center my-10 gap-6 p-4">
                        <form className="bg-white" onSubmit={handleSubmit}>
                            <h1 className="text-gray-800 font-bold text-xl mb-4">Add Room!</h1>
                            {error && <p className="text-red-500 text-xs">*{error}</p>}

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Room Name"
                                    type="text"
                                    name="roomName"
                                    id="roomName"
                                    placeholder="Room Name"
                                    onChange={handleChange}
                                    value={roomForm.roomName}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Cost Per Hour"
                                    type="number"
                                    name="costPerHour"
                                    id="costPerHour"
                                    placeholder="Cost Per Hour"
                                    onChange={handleChange}
                                    value={roomForm.costPerHour}
                                />
                            </div>

                            <ButtonSubmit
                                type={'submit'}
                            >
                                Add Room
                            </ButtonSubmit>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}