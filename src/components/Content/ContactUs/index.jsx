import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "./Toastify.css";
import styles from "./ContactUs.module.scss";
const ContactUs = () => {
  const form = useRef();
  const notify = () =>
    toast(`Cảm ơn anh/chị đã để lại thông tin. Em sẽ liên hệ lại trong thời gian sớm nhất
`);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "mipu_gmail",
        "template_6dgphip",

        form.current,
        "jUogCwmfcjHHcCHwu"
      )
      .then(
        (result) => {
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.contactUs}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Name</label>
          <input type="text" name="user_name" required id="user-name" />
          <label>Email</label>
          <input type="email" name="user_email" required id="user-email" />
          <label>Message</label>
          <textarea name="message" required id="user-message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
