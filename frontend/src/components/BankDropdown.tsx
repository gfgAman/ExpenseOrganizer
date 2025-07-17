import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AddNewBankModal } from '../modals/AddNewBankModal';
import { banksListing } from '../assets/bankAccounts';
import { useDispatch } from 'react-redux';
import { setWallet } from '../redux/cardSlice';

interface bankDropdownProp {
    bankDropdownOpen: boolean,
    setBankDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BankDropdown = ({ bankDropdownOpen, setBankDropdownOpen }: bankDropdownProp) => {
    const [openCreateBankModal, setOpenCreateBankModal] = useState<boolean>(false)
    const [bankName, setBankName] = useState<string>('')

    const bankAccountDropdown = () => {
        if (banksListing.length > 0) {
            setBankDropdownOpen(!bankDropdownOpen)
            return
        }
        setOpenCreateBankModal(true)
    }

    const dispatch = useDispatch()
    return (
        <div className=" block relative">
            <button
                onClick={bankAccountDropdown}
                className="flex items-center text-white font-bold text-sm outline outline-2 outline-white space-x-2 p-2 rounded-lg transition-colors duration-200 w-50 flex justify-between"
            >
                {banksListing.length > 0 ? (
                    <>
                        <span>{bankName ? bankName : 'SELECT YOUR BANK'}</span>
                        <ChevronDown
                            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${bankDropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </>
                ) : (
                    'ADD BANK ACCOUNT'
                )}
            </button>


            {/* Dropdown list */}
            {bankDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-60 z-50">
                    <li className='px-4 py-2 text-center text-sm font-bold text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-200' onClick={() => {
                        setOpenCreateBankModal(true)
                        setBankDropdownOpen(false)
                    }}>ADD NEW BANK</li>
                    {banksListing?.map((bank, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setBankDropdownOpen(false)
                                setBankName(bank.bank_name)
                                dispatch(setWallet(bank))
                                
                            }}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                        >
                            {bank.bank_name}
                        </li>
                    ))}
                </ul>
            )}

            {
                openCreateBankModal && <AddNewBankModal

                    isOpen={openCreateBankModal}
                    onClose={() => setOpenCreateBankModal(false)}
                />
            }

        </div>
    );
};

export default BankDropdown;
