import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AddNewBankModal} from '../modals/AddNewBankModal';

interface bankDropdownProp {
    bankDropdownOpen: boolean,
    setBankDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BankDropdown = ({ bankDropdownOpen, setBankDropdownOpen }: bankDropdownProp) => {

    const banksListing =    ["State Bank of India", "ICICI", "Axis Bank", "Bank of Baroda"];
    // const banksListing: [] = []
    const [openCreateBankModal, setOpenCreateBankModal] = useState<boolean>(false)

    const bankAccountDropdown = () => {
        if (banksListing.length > 0) {
            setBankDropdownOpen(!bankDropdownOpen)
            return
        }
        setOpenCreateBankModal(true)
    }
    return (
        <div className="hidden md:block relative">
            <button
                onClick={bankAccountDropdown}
                className="flex items-center text-white font-bold text-sm outline outline-2 outline-white space-x-2 p-2 rounded-lg transition-colors duration-200"
            >
                {
                    banksListing.length > 0 ? (<>SELECT YOUR BANK

                        <ChevronDown
                            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${bankDropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </>) : "ADD BANK ACCOUNT"
                }
            </button>

            {/* Dropdown list */}
            {bankDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-60 z-50">
                    {banksListing?.map((bank, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                        >
                            {bank}
                        </li>
                    ))}
                </ul>
            )}

            {
                openCreateBankModal && <AddNewBankModal

                    isOpen={openCreateBankModal}
                    onClose={() => setOpenCreateBankModal(false)}
                //   onSave={handleSaveProfile}
                />
            }

        </div>
    );
};

export default BankDropdown;
