import "./BookingInfor.css";
import { Form } from "react-router-dom";

const BookingInfor = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <Form className="container">
      <h3>Reserve Info</h3>
      <div className="controller">
        <label>Your full name:</label>
        <input
          defaultValue={currentUser.fullName}
          type="text"
          placeholder="Full name"
        />
      </div>
      <div className="controller">
        <label>Your Email:</label>
        <input
          defaultValue={currentUser.email}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="controller">
        <label>Your phone number:</label>
        <input
          defaultValue={currentUser.phoneNumber}
          type="text"
          placeholder="Phone number"
        />
      </div>
      <div className="controller">
        <label>Your identity card number:</label>
        <input type="text" placeholder="Card number" />
      </div>
    </Form>
  );
};

export default BookingInfor;
