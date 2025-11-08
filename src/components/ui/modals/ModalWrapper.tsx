import type { ReactNode } from "react";
import useCloseModal from "../../../shared/hooks/useCloseModal"

interface IProps {
    closeModal: (value: boolean) => void;
    children: ReactNode;
}

const ModalWrapper =({children, closeModal}: IProps) => {
    return(
        <div
           onClick={useCloseModal(closeModal)}
           className="modalCenter z-50  h-screen w-full bg-black/30">
          <div onClick={(e) => e.stopPropagation()} className="relative mx-auto w-xl h-full bg-white shadow-2xl rounded-3xl px-8 py-4">
           {children}
          </div>
          </div>
    )
}

export default ModalWrapper