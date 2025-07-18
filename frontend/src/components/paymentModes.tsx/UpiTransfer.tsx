import { useState } from 'react'
import Drawer from '../../Layouts/Drawer'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const UpiTransfer = () => {
    const [upi, setUpi] = useState('')
    const [showDrawer, setShowDrawer] = useState(false)

    const { wallet } = useSelector((state: RootState) => state.cardSlice)

    const handlePay = () => {
        alert(`Paying to UPI ID: ${upi}`)
    }

    return (
        <div className="bg-white text-black p-3 rounded-lg">
            {
                wallet?.bank_name ?
                    (<>
                        <h2 className="text-xl font-semibold mb-2">Pay via UPI ID</h2>
                        <input
                            type="text"
                            placeholder="e.g. name@upi"
                            className="border p-2 w-full mb-2 rounded"
                            value={upi}
                            onChange={(e) => setUpi(e.target.value)}
                        />
                        <button onClick={handlePay} className="bg-green-600 text-white px-4 py-2 rounded">
                            Pay Now
                        </button>
                    </>
                    ) :<p>No Bank Selected</p>
            }
            <Drawer isOpen={!!showDrawer} onClose={() => setShowDrawer(false)}>
                {wallet?.budget_cards?.map((card, i) => (
                    <div key={i} className="p-4 border rounded mb-3 bg-gray-100">
                        <h4 className="font-semibold">{card.title}</h4>
                        <p>₹ {card.budget_price.toLocaleString()}</p>
                    </div>
                ))}
            </Drawer>
        </div>
    )
}

export default UpiTransfer
