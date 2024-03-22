import { useEffect, useState } from "react";
import Sidebar from "../fragments/sidebar";
import { useDispatch, useSelector } from "react-redux";
import ButtonSubmit from "../elements/authButtonSubmit";
import { deleteRoom, fetchAllRoom } from "../../features/room/asyncActionRoom";
import ModalAddRoom from "../fragments/room/modalAddRoom";

export default function CmsRoomLayout() {
    const dispatch = useDispatch();
    const room = useSelector((state) => state.room.room);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');

    //fetch data
    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true)
            try {
                await dispatch(fetchAllRoom());
            } catch (error) {
                console.log(error);
            } finally {
                setIsloading(false)
            }
        };

        fetchData();
    }, [dispatch]);


    // delete
    const handleOnDelete = async (id) => {
        try {
            const res = await dispatch(deleteRoom(id));
            if(res) {
                setError(res)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            <div className="w-full h-screen flex">
                <div className="w-1/6">
                    <Sidebar />
                </div>

                {
                    room.length === 0 ? (
                        <div className="w-full h-screen flex flex-col justify-center items-center">
                            <p className="text-5xl mb-4">No Room</p>
                            <ButtonSubmit modalId={'addRoom'}>
                                <ModalAddRoom /> Add Booking
                            </ButtonSubmit>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col p-10">
                            <p className="text-3xl mb-14">List Room</p>
                            <div>
                                <ButtonSubmit modalId={'addRoom'}>
                                    <ModalAddRoom /> Add New Room
                                </ButtonSubmit>
                                {error && <p className="text-red-500 text-xs mt-4">*{error}</p>}
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Room Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Cost Per Hour
                                                </th>

                                                <th scope="col" className="px-6 py-3">
                                                    Actions
                                                </th>

                                            </tr>
                                        </thead>
                                        {room.map((item) => (
                                            <tbody key={item.id}>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        {item?.roomName}
                                                    </th>
                                                    <td className="px-6 py-4">{item?.costPerHour}</td>
                                                    <td className="px-6 py-4">
                                                       
                                                        <p
                                                            onClick={() => handleOnDelete(item.id)}
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Delete
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
