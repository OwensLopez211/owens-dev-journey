import React from 'react';
interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    email?: string;
    whatsappNumber?: string;
    linkedinUrl?: string;
}
declare const ContactModal: React.FC<ContactModalProps>;
export default ContactModal;
