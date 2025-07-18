import { ChevronDown, FileText, Settings, User } from 'lucide-react'

interface profileDropdownProp {
    setProfileDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>,
    profileDropdownOpen: boolean
}

const ProfileDropdown = ({ setProfileDropdownOpen, profileDropdownOpen }: profileDropdownProp) => {

    return (
        <div className="relative">
            <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-2 rounded-lg transition-colors duration-200"
            >
                <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover"
                />
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {profileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <img
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Profile"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-900">John Doe</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-2">
                        <a
                            href="/user-profile"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <User className="h-4 w-4 mr-3" />
                            View Profile
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <Settings className="h-4 w-4 mr-3" />
                            Account Settings
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <FileText className="h-4 w-4 mr-3" />
                            View All Transactions
                        </a>
                    </div>

                    {/* <div className="border-t border-gray-200 py-2">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                            <LogOut className="h-4 w-4 mr-3" />
                            Sign Out
                        </button>
                    </div> */}
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown