import { useEffect, useState } from "react";
import { fetchAllClient, deleteClient } from "../../features/client/asyncActionClient";
import Sidebar from "../fragments/sidebar";
import { useDispatch, useSelector } from "react-redux";
import ButtonSubmit from "../elements/authButtonSubmit";
import ModalAddClient from "../fragments/client/modalAddClient";
import ModalEditClient from "../fragments/client/modalEditClient";
import { Link } from "react-router-dom";

export default function ClientLayout() {
    const dispatch = useDispatch();
    const client = useSelector((state) => state.client.client);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    //fetch data
    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true)
            try {
                await dispatch(fetchAllClient());
            } catch (error) {
                console.log(error);
            } finally {
                setIsloading(false)
            }
        };

        fetchData();

    }, [dispatch]);

    //delete
    const handleOnDelete = async(id) => {
        try {
            const res = await dispatch(deleteClient(id))
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
                    client.length === 0 ? (
                        <div className="w-full h-screen flex flex-col justify-center items-center">
                            <p className="text-5xl mb-4">You don't have any client</p>
                            <ButtonSubmit modalId={'addClient'}>
                                <ModalAddClient /> Add Client
                            </ButtonSubmit>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col p-10">
                            <p className="text-3xl mb-14">Your Client</p>
                            <div>
                                <ButtonSubmit modalId={'addClient'}>
                                    <ModalAddClient /> Add Client
                                </ButtonSubmit>
                                {error && <p className="text-red-500 text-xs mt-5">*{error}</p>}
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Phone
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Credit
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Add by
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        {client.map((item) => (
                                            <tbody key={item.id}>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th
                                                        scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        {item?.name}
                                                    </th>
                                                    <td className="px-6 py-4">{item?.email}</td>
                                                    <td className="px-6 py-4">{item?.phone}</td>
                                                    <td className="px-6 py-4">{item?.credit}</td>
                                                    <td className="px-6 py-4">{item.User?.name}</td>
                                                    <td className="px-6 py-4">
                                                        <Link to={`/add-client/${item.id}`} onClick={() => document.getElementById('editClient').showModal()}>
                                                            Edit
                                                        </Link>
                                                        <ModalEditClient />
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
