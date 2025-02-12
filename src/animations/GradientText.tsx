import { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    animationSpeed?: number;
    showBorder?: boolean;
    variant?: 'primary' | 'secondary'; // Añadido para flexibilidad
}

export default function GradientText({
    children,
    className = "",
    animationSpeed = 8,
    showBorder = false,
    variant = 'primary',
}: GradientTextProps) {
    const { theme } = useTheme();
    
    // Definimos los colores basados en el tema y la variante
    const gradientColors = variant === 'primary' 
        ? [theme.primary.light, theme.primary.dark, theme.primary.light]
        : [theme.secondary.light, theme.secondary.dark, theme.secondary.light];

    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${gradientColors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div
            className={`relative mx-auto flex max-w-fit flex-row items-center justify-center font-medium duration-500 overflow-hidden cursor-pointer ${className}`}
        >
            {showBorder && (
                <div
                    className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-transparent rounded-[1.25rem] z-[-1]"
                        style={{
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: `${theme.background.DEFAULT}e6`, // 90% opacidad
                        }}
                    ></div>
                </div>
            )}
            <div
                className="inline-block relative z-2 text-transparent bg-cover bg-transparent animate-gradient"
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
            </div>
        </div>
    );
}