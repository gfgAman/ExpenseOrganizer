import { useState } from "react";
import CreateNewExpenseCardModal from '../modals/CreateNewExpenseCardModal'

const NewCardButton = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className=' font-bold text-white outline outline-white text-center p-2 cursor-pointer' onClick={() => setShowModal(true)}>
                + NEW
            </div>
            <CreateNewExpenseCardModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

export default NewCardButton