const contacts = ['Aman Kumar', 'Priya Sharma', 'Rahul Verma']

const PayToContacts = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Pay to Contacts</h2>
            <ul className="grid grid-cols-2 gap-4">
                {contacts.map((name) => (
                    <li
                        key={name}
                        className="bg-blue-100 text-blue-800 p-3 rounded cursor-pointer hover:bg-blue-200"
                        onClick={() => alert(`Paying to ${name}`)}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PayToContacts
