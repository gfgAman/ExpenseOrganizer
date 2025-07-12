import {
    Menu, X, Search, User, Settings, LogOut
} from 'lucide-react'
import NewCardButton from './NewCardButton'
import { useState } from 'react'
import BankDropdown from './BankDropdown'
import ProfileDropdown from './ProfileDropdown'

interface headerProp {
    setTitle: React.Dispatch<React.SetStateAction<string>>
}
const Header = ({ setTitle }: headerProp) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
    const [showMobileSearch, setShowMobileSearch] = useState(false)
    const [bankDropdownOpen, setBankDropdownOpen] = useState<boolean>(false)

    const handleLogout = () => {
        window.location.reload()
    }

    return (
        <header className="shadow-lg sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <NewCardButton />
                    <div className="flex justify-center w-3/5">
                        {/* Desktop */}
                        <div className="hidden md:flex w-full max-w-md">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search Budget Card..."
                                    className="block w-full pl-10 pr-3 py-2 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Mobile search */}
                        {showMobileSearch && (
                            <div className="flex md:hidden w-full max-w-sm relative">
                                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Search className="h-5 w-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    className="pl-10 pr-8 py-2 w-full border rounded-lg text-sm text-white"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <button
                                    onClick={() => setShowMobileSearch(false)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                    <div>

                        {!showMobileSearch && (
                            <BankDropdown bankDropdownOpen={bankDropdownOpen} setBankDropdownOpen={setBankDropdownOpen} />
                        )}
                    </div>

                    {/* Right: Icons and menu */}
                    <div className="flex items-center space-x-2">
                        {/* Search icon for mobile */}
                        {!showMobileSearch && (
                            <button
                                onClick={() => setShowMobileSearch(true)}
                                className="block md:hidden text-gray-600 hover:text-gray-900"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                        )}

                        <ProfileDropdown setProfileDropdownOpen={setProfileDropdownOpen} profileDropdownOpen={profileDropdownOpen} />
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown overlay */}
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

            {/* Mobile menu content can go here */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-4 py-6 space-y-4">
                        <div className="flex items-center space-x-3 pb-4 border-b">
                            <img
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                alt="Profile"
                                className="h-10 w-10 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-medium">John Doe</p>

                            </div>
                        </div>

                        <div className="space-y-2 pt-4 border-t">
                            <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">
                                <User className="h-5 w-5 mr-3" /> View Profile
                            </a>
                            <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded">
                                <Settings className="h-5 w-5 mr-3" /> Settings
                            </a>
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded"
                            >
                                <LogOut className="h-5 w-5 mr-3" /> Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
