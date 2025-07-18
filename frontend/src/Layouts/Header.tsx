import { X, Search } from 'lucide-react'
import { useState } from 'react'
import NewCardButton from '../components/Buttons/NewCardButton'
import BankDropdown from '../components/Dropdowns/BankDropdown'
import ProfileDropdown from '../components/Dropdowns/ProfileDropdown'

interface headerProp {
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setTitle }: headerProp) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
    const [showMobileSearch, setShowMobileSearch] = useState(false)
    const [bankDropdownOpen, setBankDropdownOpen] = useState<boolean>(false)

    return (
        <header className="shadow-lg sticky top-0 z-50 bg-black">
            <nav className="mx-auto max-w-7xl p-1 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section */}
                    {!showMobileSearch && (<NewCardButton />)}

                    {/* Center Section */}
                    <div className="flex justify-center">
                        {/* Desktop Search Box */}
                        <div className="hidden md:flex w-full max-w-md">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="w-5 text-white" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search Budget Card..."
                                    className="block w-full pl-10 pr-3 py-2 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-transparent"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Mobile Search Box */}
                        {showMobileSearch && (
                            <div className="md:hidden mt-4 fixed top-0 left-0 w-screen z-50 bg-black px-4 py-2 flex items-center">
                                <Search className="h-5 w-5 text-gray-400 absolute left-5" />
                                <input
                                    type="text"
                                    placeholder="Search Budget Card..."
                                    className="w-full pl-10 pr-10 py-2 border rounded-lg text-sm text-white bg-transparent"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <button
                                    onClick={() => {
                                        setShowMobileSearch(false)
                                        setTitle('')
                                    }}
                                    className="absolute right-5 text-gray-400"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        )}

                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-2 md:w-auto">
                        {!showMobileSearch && (
                            <>
                                {/* Mobile Search Toggle Button */}
                                <button
                                    onClick={() => setShowMobileSearch(true)}
                                    className="block md:hidden text-gray-600 hover:text-white"
                                >
                                    <Search className="h-5 w-5 text-white" />
                                </button>

                                {/* Bank Dropdown */}
                                <BankDropdown
                                    bankDropdownOpen={bankDropdownOpen}
                                    setBankDropdownOpen={setBankDropdownOpen}
                                />

                                {/* Profile Dropdown */}
                                <ProfileDropdown
                                    setProfileDropdownOpen={setProfileDropdownOpen}
                                    profileDropdownOpen={profileDropdownOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Overlay to close dropdowns on outside click */}
            {(profileDropdownOpen || mobileMenuOpen || bankDropdownOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setProfileDropdownOpen(false)
                        setMobileMenuOpen(false)
                        setBankDropdownOpen(false)
                    }}
                />
            )}
        </header>
    )
}

export default Header
