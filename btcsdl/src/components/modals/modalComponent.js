import React, { useState } from "react";
import "./cfBox.scss";

const ConfirmModal = ({}) => {
	const handleCloseConfirmBox = () => {
    const messageBoxContainer = document.querySelector(".msg-box-container-in");
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.add("msg-box-leave");
    messageBoxContainer.classList.add("msg-box-container-leave");
    setTimeout(() => {
      messageBox.classList.add("msg-box-gone");
      messageBoxContainer.classList.remove("msg-box-container-leave");
      messageBox.classList.remove("msg-box-leave");
    }, 200);
  };

	const handleCancelModal = () => {
    const messageBox = document.querySelector(".msg-box-in");
    messageBox.classList.remove("msg-box-gone");
    setConfirmBoxMsg("Xác nhận bỏ thay đổi?");
    setConfirmBox(true);
  };

  return (
    <div className="msg-box-in msg-box-gone">
      <div className="msg-box-container-in">
        <MessageBoxHeader>
          <DialogClose onClick={handleCloseConfirmBox}>
            <DialogButton>
              <DialogCloseIcon />
            </DialogButton>
          </DialogClose>
        </MessageBoxHeader>
        <MessageBoxContent>{confirmBoxMsg}</MessageBoxContent>
        <MessageBoxFooter>
          <MessageBoxButton onClick={handleCloseConfirmBox} notClose={false}>
            <span>Hủy</span>
          </MessageBoxButton>
          <MessageBoxButton onClick={handleCancelConfirmBox} notClose={true}>
            <span>Xác nhận</span>
          </MessageBoxButton>
        </MessageBoxFooter>
      </div>
    </div>
  );
};

export default ConfirmModal;
