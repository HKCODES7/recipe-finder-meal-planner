import type { Components, JSX } from "../types/components";

interface AppModal extends Components.AppModal, HTMLElement {}
export const AppModal: {
    prototype: AppModal;
    new (): AppModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
