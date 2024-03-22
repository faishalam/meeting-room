import { Link } from "react-router-dom";
import ButtonSubmit from "../../elements/authButtonSubmit";

export default function ModalNoAnyClient() {
    return (
        <dialog id="noClient" className="modal" style={{width: '500px', height: '200px'}}>
            <div className="modal-box w-full h-full flex flex-col justify-center items-center ">
                <h3 className="font-bold text-2xl">No any client</h3>
                <p className="py-4">Please add client first</p>
                <Link to={'/add-client'}>
                    <ButtonSubmit>
                        Add Client
                    </ButtonSubmit>
                </Link>
            </div>
        </dialog>
    )
}