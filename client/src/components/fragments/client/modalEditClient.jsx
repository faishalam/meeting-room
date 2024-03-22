import ButtonSubmit from "../../elements/authButtonSubmit";
import ModalInput from "../../elements/modalInput";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateClient, getClientById } from "../../../features/client/asyncActionClient";

export default function ModalEditClient() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const clientById = useSelector((state) => state.client.clientById);
    const [clientForm, setClientForm] = useState({
        name: '',
        email: '',
        phone: '',
        credit: 0
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (clientById.length > 0) {
            const { name, email, phone, credit } = clientById[0];
            setClientForm({ name, email, phone, credit });
        }
    }, [clientById]);

    useEffect(() => {
        dispatch(getClientById(id));
    }, [dispatch, id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setClientForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateClient(id, clientForm));
            document.getElementById('editClient').close();
        } catch (error) {
            setError(error?.response?.data?.message);
        }
    };


    return (
        <dialog id="editClient" className="modal">
            <div className="modal-box">
                <div className="flex flex-wrap justify-center items-center my-10 gap-6 p-4">
                    <form className="bg-white" onSubmit={handleSubmit}>
                        <h1 className="text-gray-800 font-bold text-xl mb-4">Edit</h1>
                        {error && <p className="text-red-500 text-xs">*{error}</p>}

                        <div className="flex items-center border-2 py-2 px-3 rounded-xl mb-4 w-96">
                            <ModalInput
                                label="Name"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
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
                                type="number"
                                name="credit"
                                id="credit"
                                placeholder="Client Credit"
                                onChange={handleChange}
                                value={clientForm.credit}
                            />
                        </div>

                        <ButtonSubmit type={'submit'}>Update Client</ButtonSubmit>
                    </form>
                </div>
            </div>
        </dialog>
    );
}
