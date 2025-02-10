import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectSearch from '../cards/work/ProjectSearch';
import ProjectFilter from '../cards/work/ProjectFilter';
import ProjectGrid from '../cards/work/ProjectGrid';
const WorkPage = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const categories = ['Todos', 'Web', 'Mobile', 'Backend'];
    const projects = [
        {
            id: '1',
            title: 'Portafolio Personal',
            description: 'Portfolio profesional desarrollado con React, TypeScript y Tailwind CSS. Incluye animaciones fluidas y diseño responsive.',
            image: '/projects/portfolio.jpg',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Otras librerías'],
            category: 'Web',
            liveUrl: 'https://owenslopez211.github.io/owens-dev-journey/',
            githubUrl: 'https://github.com/OwensLopez211/owens-dev-journey'
        },
        {
            id: '2',
            title: 'API REST Gestión de Tareas',
            description: 'API RESTful para sistema de gestión de tareas con autenticación JWT, documentación Swagger y tests automatizados.',
            image: '/projects/tasks-api.jpg',
            technologies: ['Node.js', 'Express', 'MongoDB', 'Jest'],
            category: 'Backend',
            githubUrl: 'https://github.com/tuuser/tasks-api'
        },
        {
            id: '3',
            title: 'App de Delivery',
            description: 'Aplicación móvil para servicio de delivery con geolocalización, pagos en línea y tracking en tiempo real.',
            image: '/projects/delivery-app.jpg',
            technologies: ['React Native', 'Redux', 'Firebase', 'Google Maps'],
            category: 'Mobile',
            liveUrl: 'https://play.google.com/store/apps/details?id=com.tuapp',
            githubUrl: 'https://github.com/tuuser/delivery-app'
        },
        {
            id: '4',
            title: 'E-commerce Dashboard',
            description: 'Panel de administración para e-commerce con análisis de datos, gestión de productos y sistema de roles.',
            image: '/projects/dashboard.jpg',
            technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Recharts'],
            category: 'Web',
            liveUrl: 'https://dashboard-demo.com',
            githubUrl: 'https://github.com/tuuser/dashboard'
        },
        {
            id: '5',
            title: 'Chat en Tiempo Real',
            description: 'Aplicación de chat con mensajería en tiempo real, envío de archivos y soporte para salas grupales.',
            image: '/projects/chat-app.jpg',
            technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
            category: 'Web',
            githubUrl: 'https://github.com/tuuser/chat-app'
        },
        {
            id: '6',
            title: 'Sistema de Reservas',
            description: 'API para sistema de reservas con manejo de disponibilidad, notificaciones y reportes.',
            image: '/projects/booking-api.jpg',
            technologies: ['Django', 'DRF', 'Celery', 'PostgreSQL'],
            category: 'Backend',
            githubUrl: 'https://github.com/tuuser/booking-system'
        }
    ];
    const filteredProjects = projects.filter(project => (activeCategory === 'Todos' || project.category === activeCategory) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())));
    return (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, className: "container mx-auto px-4 py-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg mt-10", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx(motion.h1, { initial: { y: -20 }, animate: { y: 0 }, className: "mb-4 text-4xl font-bold text-gray-900", children: "Mis Proyectos" }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-gray-600", children: "Una colecci\u00F3n de proyectos que demuestran mi experiencia en desarrollo web, m\u00F3vil y backend utilizando tecnolog\u00EDas modernas." })] }), _jsxs("div", { className: "mb-12 space-y-6", children: [_jsx(ProjectSearch, { onSearch: setSearchTerm }), _jsx(ProjectFilter, { categories: categories, activeCategory: activeCategory, onCategoryChange: setActiveCategory })] }), _jsx(ProjectGrid, { projects: filteredProjects, filterCategory: activeCategory }), filteredProjects.length === 0 && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "mt-12 text-center", children: _jsx("p", { className: "text-lg text-gray-600", children: "No se encontraron proyectos que coincidan con tu b\u00FAsqueda." }) }))] }) }));
};
export default WorkPage;
