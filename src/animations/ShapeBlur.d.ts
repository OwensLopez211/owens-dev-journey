import { FC } from 'react';
interface ShapeBlurProps {
    className?: string;
    variation?: number;
    pixelRatioProp?: number;
    shapeSize?: number;
    roundness?: number;
    borderSize?: number;
    circleSize?: number;
    circleEdge?: number;
}
declare const ShapeBlur: FC<ShapeBlurProps>;
export default ShapeBlur;
