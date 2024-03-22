import ButtonSubmit from "../../elements/authButtonSubmit";
import ModalInput from "../../elements/modalInput";
import { useState } from "react";
import { addClient, fetchAllClient } from "../../../features/client/asyncActionClient";
import { useDispatch } from "react-redux";

export default function ModalAddClient() {
    const dispatch = useDispatch();
    const [clientForm, setClientForm] = useState({
        name: '',
        email: '',
        phone: '',
        credit: ''
    });
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setClientForm({
            ...clientForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(addClient(clientForm))
            setClientForm({
                name: '',
                email: '',
                phone: '',
                credit: ''
            })
            dispatch(fetchAllClient())
            document.getElementById('addClient').close();
        } catch (error) {
            setError(error?.response?.data?.message);
        }
    };


    return (
        <>
            <dialog id="addClient" className="modal">
                <div className="modal-box">

                    <div className="flex flex-wrap justify-center items-center my-10 gap-6 p-4">
                        <form className="bg-white" onSubmit={handleSubmit}>
                            <h1 className="text-gray-800 font-bold text-xl mb-4">Add News!</h1>
                            {error && <p className="text-red-500 text-xs">*{error}</p>}

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="name"
                                    onChange={handleChange}
                                    value={clientForm.name}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Email"
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Client Email"
                                    onChange={handleChange}
                                    value={clientForm.email}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Phone"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Client Phone"
                                    onChange={handleChange}
                                    value={clientForm.phone}
                                />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                                <ModalInput
                                    label="Credit"
                                    type="text"
                                    name="credit"
                                    id="credit"
                                    placeholder="Client Credit"
                                    onChange={handleChange}
                                    value={clientForm.credit}
                                />
                            </div>


                            <ButtonSubmit
                                type={'submit'}
                            >
                                Add Client
                            </ButtonSubmit>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}