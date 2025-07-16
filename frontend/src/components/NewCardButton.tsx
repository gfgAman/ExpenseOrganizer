import { useState } from "react";
import CreateNewExpenseCardModal from '../modals/CreateNewExpenseCardModal'
import { banksListing } from "../assets/bankAccounts";
import { AddNewBankModal } from "../modals/AddNewBankModal";

const NewCardButton = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <div className=' font-bold text-white outline outline-white text-center p-2 cursor-pointer' onClick={() => setShowModal(true)}>
                + NEW
            </div>
            {
                banksListing.length === 0 ? (<AddNewBankModal

                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                //   onSave={handleSaveProfile}
                />) :
                    <CreateNewExpenseCardModal isOpen={showModal} onClose={() => setShowModal(false)} />
            }
        </>
    )
}

export default NewCardButton