import { useEffect, useState } from "react";
import Sidebar from "../fragments/sidebar";
import { useDispatch, useSelector } from "react-redux";
import ButtonSubmit from "../elements/authButtonSubmit";
import { deleteBooking, fetchAllBooking } from "../../features/booking/asyncActionBooking";
import ModalAddBooking from "../fragments/booking/modalAddBooking";
import { fetchAllClient } from "../../features/client/asyncActionClient";
import ModalNoAnyClient from "../fragments/booking/modalNoAnyClient";

export default function BookingLayout() {
    const dispatch = useDispatch();
    const booking = useSelector((state) => state.booking.booking);
    const [isLoading, setIsloading] = useState(true);
    const client = useSelector((state) => state.client.client);

    //fetch data
    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true)
            try {
                await dispatch(fetchAllBooking());
            } catch (error) {
                console.log(error);
            } finally {
                setIsloading(false)
            }
        };

        fetchData();
        dispatch(fetchAllClient())
    }, [dispatch]);



    // delete
    const handleOnDelete = (id) => {
        try {
            dispatch(deleteBooking(id));
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
                    booking.length === 0 ? (
                        <div className="w-full h-screen flex flex-col justify-center items-center">
                            <p className="text-5xl mb-4">You don't have any Booking</p>
                            {client.length === 0 ? (
                                <ButtonSubmit modalId={'noClient'}>
                                    <ModalNoAnyClient /> Add Booking
                                </ButtonSubmit>
                            ) : (
                                <ButtonSubmit modalId={'addBooking'}>
                                    <ModalAddBooking /> Add Booking
                                </ButtonSubmit>
                            )}

                        </div>
                    ) : (
                        <div className="w-full flex flex-col p-10">
                            <p className="text-3xl mb-14">Your Client Booking</p>
                            <div>
                                <ButtonSubmit modalId={'addBooking'}>
                                    <ModalAddBooking /> Add Booking
                                </ButtonSubmit>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Client Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Room Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Booking Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Start Time
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    End Time
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>

                                            </tr>
                                        </thead>
                                        {booking.map((item) => (
                                            <tbody key={item.id}>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        {item?.Client?.name}
                                                    </th>
                                                    <td className="px-6 py-4">{item?.Room?.roomName}</td>
                                                    <td className="px-6 py-4">{item?.bookingDate.split('T')[0]}</td>
                                                    <td className="px-6 py-4">{item?.startTime}</td>
                                                    <td className="px-6 py-4">{item?.endTime}</td>
                                                    <td className="px-6 py-4">
                                                        {/* <Link to={`/add-client/${item.id}`} onClick={() => document.getElementById('editClient').showModal()}>
                                                            Edit
                                                        </Link>
                                                        <ModalEditClient /> */}
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
