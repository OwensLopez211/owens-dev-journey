import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { X, Copy, Check, Calendar, MessageCircle, Mail } from 'lucide-react';
const ContactModal = ({ isOpen, onClose, email = "owenslpz12@gmail.com", whatsappNumber = "983612026", linkedinUrl = "https://www.linkedin.com/in/owens-lópez/", }) => {
    const [copied, setCopied] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape')
                onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget)
            onClose();
    };
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            showNotificationMessage('Email copiado al portapapeles');
            setTimeout(() => setCopied(false), 2000);
        }
        catch {
            showNotificationMessage('Error al copiar el email');
        }
    };
    const showNotificationMessage = (message) => {
        setNotificationMessage(message);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", onClick: handleBackdropClick, children: _jsxs("div", { className: "relative w-full max-w-lg p-6 mx-4 bg-white rounded-xl shadow-xl", children: [_jsx("button", { onClick: onClose, className: "absolute p-2 transition-colors rounded-full right-4 top-4 text-gray-500 hover:bg-gray-100", children: _jsx(X, { className: "w-5 h-5" }) }), _jsxs("div", { className: "mb-8 text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Contacto" }), _jsx("p", { className: "mt-2 text-gray-600", children: "Elige el medio que prefieras para comunicarte" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("a", { href: `https://wa.me/${whatsappNumber}`, target: "_blank", rel: "noopener noreferrer", className: "w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98]", children: [_jsx(MessageCircle, { className: "w-6 h-6" }), "WhatsApp"] }), _jsxs("a", { href: linkedinUrl, target: "_blank", rel: "noopener noreferrer", className: "w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98]", children: [_jsx("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 fill-current", children: _jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }), "LinkedIn"] }), _jsxs("button", { onClick: () => showNotificationMessage('Función de agenda en desarrollo'), className: "w-full flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98]", children: [_jsx(Calendar, { className: "w-6 h-6" }), "Agendar Cita"] }), _jsxs("div", { className: "flex items-center justify-between p-4 transition-colors bg-gray-50 rounded-lg hover:bg-gray-100", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "w-5 h-5 text-gray-600" }), _jsx("span", { className: "font-medium text-gray-800", children: email })] }), _jsxs("button", { onClick: handleCopyEmail, className: "flex items-center gap-2 px-3 py-2 transition-colors rounded-md hover:bg-gray-200", children: [copied ? (_jsx(Check, { className: "w-5 h-5 text-green-600" })) : (_jsx(Copy, { className: "w-5 h-5 text-gray-600" })), _jsx("span", { className: "text-sm font-medium text-gray-600", children: copied ? 'Copiado' : 'Copiar' })] })] })] }), showNotification && (_jsx("div", { className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300", children: notificationMessage }))] }) }));
};
export default ContactModal;
