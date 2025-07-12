import { useState } from 'react';

const banks = ['State Bank of India', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda'];

const CreateNewExpenseCardModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [selectedBank, setSelectedBank] = useState('');
    const [cardTitle, setCardTitle] = useState('');
    const [budget, setBudget] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">Add Card</h2>

                {/* Section 1: Bank Account Dropdown */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank Account</label>
                    <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">-- Choose a bank --</option>
                        {banks.map((bank, index) => (
                            <option key={index} value={bank}>
                                {bank}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Section 2: Inputs */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Title</label>
                        <input
                            type="text"
                            value={cardTitle}
                            onChange={(e) => setCardTitle(e.target.value)}
                            placeholder="e.g. Food Expenses"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Budget Amount</label>
                        <input
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            placeholder="e.g. 5000"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-right">
                    <button
                        onClick={() => {
                            console.log({ selectedBank, cardTitle, budget });
                            onClose();
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewExpenseCardModal;
