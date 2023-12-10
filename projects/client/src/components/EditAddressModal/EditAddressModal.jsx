import React from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
const EditAddressModal = ({ isOpen, handleEditConfirm, cancelEdit }) => {
    const customStyle = {
        content: {
            width: "500px",
            height: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            z: "50",
        },
    };
    return (
        <Modal
            style={customStyle}
            overlayClassName={
                "fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center"
            }
            isOpen={isOpen}
            //   shouldCloseOnOverlayClick={true}
            //   onRequestClose={onRequestClose}
            shouldCloseOnEsc={true}
        >
            <div className="h-full relative">
                <textarea
                    style={{ resize: "none" }}
                    className="w-full border-customGray rounded-[24px] py-[20px] px-[24px] text-[16px]"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
                <div className="flex w-full gap-5 absolute bottom-0">
                    <div className="w-[50%]">
                        <Button
                            btnName="Cancel"
                            btnCSS="w-full rounded-[16px] bg-white border-[1px] border-primaryOrange text-primaryOrange"
                            onClick={cancelEdit}
                        />
                    </div>
                    <div className="w-[50%]">
                        <Button
                            btnName="Confirm"
                            btnCSS="w-full text-white rounded-[16px] h-[42px]"
                            onClick={() => handleEditConfirm()}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EditAddressModal;
