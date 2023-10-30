import { create } from "zustand";

interface useSubscriptionModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

};

const useSubscriptionModal = create<useSubscriptionModal>((set) => ({
    isOpen : false,
    onOpen:() => set({isOpen: true}),
    onClose:() => set({isOpen: false}),
}))

export default useSubscriptionModal;