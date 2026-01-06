import React from 'react';
import { 
    FaBars, FaAngleDown, FaXmark, FaPlay, FaCircleDot, FaCircleArrowRight,
    FaCheckCircle, FaStar, FaQuoteRight, FaArrowUp, FaCheck, FaXmark as FaX,
    FaPhoneVolume, FaEnvelope, FaLocationDot, FaCalendar, FaFolder, FaUser,
    FaArrowRight, FaArrowCircleRight, FaBrain, FaBug, FaDiagramProject,
    FaFilter, FaGears, FaBuilding, FaPlug, FaRobot, FaMagnet, FaHeadset,
    FaShieldHalved, FaCode, FaDollarSign, FaChartLine, FaTools, FaHome,
    FaHeartPulse, FaDumbbell, FaShoppingCart, FaChalkboardUser, FaScaleBalanced,
    FaCar, FaGraduationCap, FaBriefcase, FaCloud, FaUtensils
} from 'react-icons/fa6';
import { FaAccessibleIcon } from 'react-icons/fa';

// Mapping FontAwesome classes to react-icons components
const iconMap = {
    'fa-bars': FaBars,
    'fa-angle-down': FaAngleDown,
    'fa-xmark': FaXmark,
    'fa-play': FaPlay,
    'fa-circle-dot': FaCircleDot,
    'fa-circle-arrow-right': FaCircleArrowRight,
    'fa-check-circle': FaCheckCircle,
    'fa-star': FaStar,
    'fa-quote-right': FaQuoteRight,
    'fa-arrow-up': FaArrowUp,
    'fa-check': FaCheck,
    'fa-xmark': FaX,
    'fa-phone-volume': FaPhoneVolume,
    'fa-envelope': FaEnvelope,
    'fa-location-dot': FaLocationDot,
    'fa-calendar': FaCalendar,
    'fa-folder': FaFolder,
    'fa-user': FaUser,
    'fa-arrow-right': FaArrowRight,
    'fa-arrow-circle-right': FaArrowCircleRight,
    'fa-brain': FaBrain,
    'fa-bug': FaBug,
    'fa-diagram-project': FaDiagramProject,
    'fa-filter': FaFilter,
    'fa-gears': FaGears,
    'fa-building': FaBuilding,
    'fa-plug': FaPlug,
    'fa-robot': FaRobot,
    'fa-magnet': FaMagnet,
    'fa-headset': FaHeadset,
    'fa-shield-halved': FaShieldHalved,
    'fa-code': FaCode,
    'fa-dollar-sign': FaDollarSign,
    'fa-chart-line': FaChartLine,
    'fa-tools': FaTools,
    'fa-home': FaHome,
    'fa-heart-pulse': FaHeartPulse,
    'fa-dumbbell': FaDumbbell,
    'fa-shopping-cart': FaShoppingCart,
    'fa-chalkboard-user': FaChalkboardUser,
    'fa-scale-balanced': FaScaleBalanced,
    'fa-car': FaCar,
    'fa-graduation-cap': FaGraduationCap,
    'fa-briefcase': FaBriefcase,
    'fa-cloud': FaCloud,
    'fa-utensils': FaUtensils,
    'fa-accessible-icon': FaAccessibleIcon,
};

const Icon = ({ className, style, ...props }) => {
    // Extract icon name from className (e.g., "fa-solid fa-bars" -> "fa-bars")
    const classNames = className?.split(' ') || [];
    const iconClass = classNames.find(cls => cls.startsWith('fa-') && cls !== 'fa-solid' && cls !== 'fa-regular' && cls !== 'fa-brands');
    
    if (!iconClass) {
        console.warn(`Icon class not found in: ${className}`);
        return null;
    }

    const IconComponent = iconMap[iconClass];
    
    if (!IconComponent) {
        console.warn(`Icon component not found for: ${iconClass}`);
        return <i className={className} {...props} />;
    }

    // Extract size classes (fa-2x, fa-3x, etc.)
    const sizeClass = classNames.find(cls => cls.match(/^fa-\d+x?$/));
    let size = '1em';
    if (sizeClass) {
        const sizeMatch = sizeClass.match(/fa-(\d+)x/);
        if (sizeMatch) {
            size = `${parseInt(sizeMatch[1])}em`;
        }
    }

    // Extract color from className if present
    const colorClass = classNames.find(cls => cls.includes('accent-color') || cls.includes('color'));
    
    return (
        <IconComponent 
            style={{ fontSize: size, ...style }}
            className={colorClass ? colorClass : ''}
            {...props}
        />
    );
};

export default Icon;

