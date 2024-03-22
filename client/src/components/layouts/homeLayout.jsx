import { Link } from "react-router-dom";
import Sidebar from "../fragments/sidebar";
import ButtonSubmit from "../elements/authButtonSubmit";

export default function HomeLayout() {
    return (
        <>
            <div className="flex w-full h-screen">
                <div className="w-1/6">
                    <Sidebar />
                </div>

                <div className="w-5/6 flex justify-center items-center">
                    <div className="w-full flex p-24">
                        <img src="https://voffice.co.id/storage/img/GALERI/Centennial/Meeting-Room-Centennial.jpg" className="w-3/4 h-96" />
                        <div className="w-1/2 ml-10">
                            <p className="text-5xl">Meeting Room</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nobis ea ut laboriosam vero iste. Quam praesentium consequatur, non reprehenderit eos numquam laudantium enim debitis illum aliquam eum recusandae nihil!</p>
                            <div className="mt-10">
                                <Link to={'/booking'}>
                                    <ButtonSubmit >
                                        Book Now
                                    </ButtonSubmit >
                                </Link>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}