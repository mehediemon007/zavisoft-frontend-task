'use client';

import React, { useState, createContext, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '../common/Icons';

// *** Context
interface ModalContextType {
    onClose: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('Modal compound components must be used within <Modal>');
    return ctx;
};

// *** Root
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose]);

    // Portal logic: Prevents "fixed" position issues inside Swiper/Transformed parents
    if (!mounted) return null;

    return createPortal(
        <ModalContext.Provider value={{ onClose }}>
            <div 
                className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
                
                {/* Modal Container */}
                <div className={`relative z-10 transition-transform duration-300 w-full flex justify-center p-4 ${
                    isOpen ? 'scale-100' : 'scale-95'
                }`}>
                    {children}
                </div>
            </div>
        </ModalContext.Provider>,
        document.body
    );
};

// *** Content
interface ContentProps {
    children: React.ReactNode;
    className?: string;
}

const Content = ({ children, className = '' }: ContentProps) => (
    <div className={`relative bg-background rounded-2xl shadow-xl w-full max-h-[90vh] overflow-y-auto ${className}`}>
        {/* Close Button is now rendered here so it anchors to the top-right of the content */}
        <Modal.CloseButton />
        {children}
    </div>
);

// *** Header
interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header = ({ children, className = '' }: HeaderProps) => {
    return (
        <div className={`flex justify-between items-center p-6 border-b border-gray-100 pr-14 ${className}`}>
            <div>{children}</div>
        </div>
    );
};

// *** Body
interface BodyProps {
    children: React.ReactNode;
    className?: string;
}

const Body = ({ children, className = '' }: BodyProps) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

// *** Footer
interface FooterProps {
    children: React.ReactNode;
    className?: string;
}

const Footer = ({ children, className = '' }: FooterProps) => (
    <div className={`flex justify-end gap-3 p-6 border-t border-gray-100 ${className}`}>
        {children}
    </div>
);

// *** Close Button
const CloseButton = () => {
    const { onClose } = useModal();
    return (
        <button 
            onClick={onClose} 
            className="absolute right-4 top-4 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-gray-100 hover:bg-gray-200 transition-all duration-200 z-[70]"
            aria-label="Close modal"
        >
            <XIcon className="w-5 h-5" />
        </button>
    );
};

// *** Attach sub-components
Modal.Content = Content;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.CloseButton = CloseButton;

export { Modal };