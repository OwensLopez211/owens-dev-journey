declare global {
    interface Window {
        VANTA: any;
    }
}
export declare const useVanta: () => import("react").MutableRefObject<HTMLDivElement>;
