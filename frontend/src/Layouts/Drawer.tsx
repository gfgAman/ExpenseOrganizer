// components/Drawer.tsx
import React from 'react';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold">Budget Details</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-black">X</button>
            </div>
            <div className="p-4 overflow-y-auto h-full">{children}</div>
        </div>
    );
}
