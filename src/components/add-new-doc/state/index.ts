import { atom } from "jotai";

interface ModalState {
  isOpen: boolean
}

export const modalAtom = atom<ModalState>({
	isOpen: false,
});
