import { useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store"
import Drawer from "../../Layouts/Drawer"

const contacts = ['Aman Kumar', 'Priya Sharma', 'Rahul Verma']

const PayToContacts = () => {
    const [showDrawer, setShowDrawer] = useState<boolean>(false)
    const { wallet } = useSelector((state: RootState) => state.cardSlice)
    return (
        <div className="bg-white text-black p-3 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Pay to Contacts</h2>
            <ul className="grid grid-cols-2 gap-4">
                {wallet?.bank_name ? contacts.map((name) => (
                    <li
                        key={name}
                        className="bg-blue-100 text-blue-800 p-3 rounded cursor-pointer hover:bg-blue-200"
                        onClick={() => setShowDrawer(true)}
                    >
                        {name}
                    </li>
                )) : <p>No Bank Selected</p>}
            </ul>


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

export default PayToContacts
