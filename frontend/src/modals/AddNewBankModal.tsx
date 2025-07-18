import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

interface ExpenseCardProp {
  isOpen: boolean;
  onClose: () => void;
  // onSave: (data: any) => void;
}

export const AddNewBankModal = ({ isOpen, onClose }: ExpenseCardProp) => {
  const [useUPI, setUseUPI] = useState(true);
  const [formData, setFormData] = useState({
    upiId: '',
    bankName: '',
    branchName: '',
    accountNumber: '',
    ifscCode: '',
    bankBal: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Optional: sanitize or validate payment fields
    if (useUPI) {
      formData.bankName = '';
      formData.branchName = '';
      formData.accountNumber = '';
      formData.ifscCode = '';
      formData.bankBal = ''
    } else {
      formData.upiId = '';
    }

    // onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="text-l font-bold text-gray-900">Add Your Bank Details</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white hover:bg-opacity-50 rounded-full transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-3 space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Payment Method</h4>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setUseUPI(true)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${useUPI ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                    }`}
                >
                  UPI
                </button>
                <button
                  type="button"
                  onClick={() => setUseUPI(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${!useUPI ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                    }`}
                >
                  Bank
                </button>
              </div>

              {useUPI ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                    <input
                      type="text"
                      value={formData.upiId}
                      onChange={(e) => handleInputChange('upiId', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="example@upi"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Add Bank Balance</label>
                    <input
                      type="text"
                      value={formData.bankBal}
                      onChange={(e) => handleInputChange('bankBal', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="10000"
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branch Name</label>
                    <input
                      type="text"
                      value={formData.branchName}
                      onChange={(e) => handleInputChange('branchName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                    <input
                      type="text"
                      value={formData.ifscCode}
                      onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Enter Bank Balance</label>
                    <input
                      type="text"
                      value={formData.bankBal}
                      onChange={(e) => handleInputChange('bankBal', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              )}
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-4 p-2 border-t border-gray-200 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-all duration-200 flex items-center font-medium shadow-lg hover:shadow-xl"
          >
            <Save size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
