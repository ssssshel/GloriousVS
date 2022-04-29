import HeadLayout from "../../../../../components/Head"
import Footer from "../../../../../components/Footer"
import Navbar from "../../../../../components/Navbar"

const PurchaseDetails = () => {
    return (
        <div>
            <HeadLayout section={"Detalles compra codigo"} />
            <Navbar />
            <div className="flex flex-col w-full h-auto px-40 py-20 gap-11 bg-ivory">
                <div className="flex flex-col justify-center w-full h-20 px-6 shadow-xl rounded-2xl bg-green">
                    <p className="text-3xl font-Pacifico text-charleston">Detalles compra codigo</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PurchaseDetails;