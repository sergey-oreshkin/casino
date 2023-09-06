import React from "react";
import cl from "./Modal.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from "../../../store/ProfileSlice";

const Modal = ({children, name}) => {
    const dispatcher = useDispatch();

    const showModal = useSelector(state => state.showModal);

    const classes = [cl.modal];

    if (showModal === name) {
        
        classes.push(cl.active)
    }

    return (
        <div className={classes.join(" ")} onMouseDown={() => dispatcher(setShowModal(""))}>
            <div className={classes.ModalContent} onMouseDown={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;