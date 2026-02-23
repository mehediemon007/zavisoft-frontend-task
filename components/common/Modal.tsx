'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '../common/Icons';

interface ModalContextType {
    onClose: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('Modal compound components must be used within <Modal>');
    return ctx;
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose, isOpen]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    return createPortal(
        <ModalContext.Provider value={{ onClose }}>
            <div 
                onClick={handleOverlayClick}
                className={`fixed inset-0 z-9999 flex items-center justify-center p-4 transition-all duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                
                <div 
                    ref={modalRef}
                    className={`relative z-10 transition-all duration-300 w-full flex justify-center ${
                        isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
                    }`}
                >
                    {children}
                </div>
            </div>
        </ModalContext.Provider>,
        document.body
    );
};

interface ContentProps {
    children: React.ReactNode;
    className?: string;
}

const Content = ({ children, className = '' }: ContentProps) => (
    <div className={`relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden ${className}`}>
        <Modal.CloseButton />
        
        <div className="overflow-y-auto w-full">
            {children}
        </div>
    </div>
);

const Header = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`flex items-center p-6 border-b border-gray-100 pr-16 ${className}`}>
        <div className="w-full font-bold text-xl">{children}</div>
    </div>
);

const Body = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-4 sm:p-6 ${className}`}>
        {children}
    </div>
);

const Footer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`flex justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50/50 ${className}`}>
        {children}
    </div>
);

const CloseButton = () => {
    const { onClose } = useModal();
    return (
        <button 
            onClick={onClose} 
            className="absolute right-4 top-4 p-2 rounded-full bg-foreground  z-70"
            aria-label="Close modal"
        >
            <XIcon className="w-5 h-5 text-white" />
        </button>
    );
};

Modal.Content = Content;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.CloseButton = CloseButton;

export { Modal };