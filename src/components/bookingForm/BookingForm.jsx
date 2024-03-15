import "./BookingForm.css";
import { DateRange } from "react-date-range";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookingInfor from "./BookingInfor";

const BookingForm = () => {
    const { hotelId } = useParams();
    const [rooms, setRooms] = useState([]);
    const [roomArr, setRoomArr] = useState([]);
    const [totalBill, setTotalBill] = useState(0);
    const [payment, setPayment] = useState("Credit Card");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigate();
    const reserveClick = () => {
        fetch("http://localhost:5000/api/transactions/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: currentUser.username,
                hotelId,
                roomArr,
                date,
                totalBill,
                payment,
                status: "Booked",
            }),
        }).then(() => {
            navigate("/transactions");
        });
    };

    const amountDay = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Tính số milliseconds giữa hai ngày
        const timeDiff = endDate.getTime() - startDate.getTime();

        // Chuyển milliseconds thành số ngày
        const totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (totalDays === 0) {
            return totalDays + 1;
        }

        return totalDays;
    };

    const dateHandle = async (item) => {
        setDate([item.selection]);
        if (date) {
            const respone = await fetch(
                `http://localhost:5000/api/rooms/room-available/${hotelId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        date: date,
                    }),
                }
            );
            const data = await respone.json();
            if (data) {
                setRooms(data);
                console.log("1111", rooms);
            }
        }
    };

    const toggleRoom = (room, r) => {
        if (roomArr.some((a) => a.room_id == room._id)) {
            roomArr.map((a) => {
                if (a.room_id !== room._id) return r;
                const index = a.rooms_arr.indexOf(r);
                if (index === -1) {
                    a.rooms_arr.push(r);
                } else {
                    a.rooms_arr.splice(index, 1);
                }
            });
        } else {
            const obj = {
                room_id: room._id,
                rooms_arr: [r],
            };
            roomArr.push(obj);
        }

        // neu rooms_arr rong thi xoa obj

        setRoomArr(roomArr.filter((a) => a.rooms_arr.length !== 0));
    };

    console.log("111", roomArr);

    const checkHandle = (e, room, r) => {
        toggleRoom(room, r);
        let bill = 0;
        if (e.target.checked) {
            bill = room.price * amountDay(date[0].startDate, date[0].endDate);
        } else {
            bill = -room.price * amountDay(date[0].startDate, date[0].endDate);
        }
        setTotalBill(totalBill + bill);
    };

    return (
        <div className="bookingContainer">
            <div className="bookingInforContainer">
                <div className="dateContainer">
                    <h3>Dates</h3>
                    <DateRange
                        editableDateInputs={true}
                        onChange={dateHandle}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                    />
                </div>
                <BookingInfor />
            </div>
            <div>
                <h3>Select Rooms</h3>
                <div className="availableRoom">
                    {rooms.map((room) => (
                        <div className="roomItem" key={room._id}>
                            <div>
                                <div>
                                    <strong>{room.title}</strong>
                                </div>
                                <div>{room.desc}</div>
                                <div>
                                    Max people:{" "}
                                    <strong>{room.maxPeople}</strong>
                                </div>
                                <div>
                                    <strong>${room.price}</strong>
                                </div>
                            </div>
                            {room.roomNumbers.map((r, index) => (
                                <div key={index}>
                                    <form className="formCheckRoom">
                                        <label>{r}</label>
                                        <input
                                            type="checkbox"
                                            id={room._id}
                                            name="room"
                                            value={r}
                                            onChange={(e) => {
                                                checkHandle(e, room, r);
                                            }}
                                        />
                                    </form>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <h2>Total bill: ${totalBill}</h2>
                <div className="action">
                    <select
                        name="payment"
                        value={payment}
                        onChange={(e) => {
                            setPayment(e.target.value);
                        }}
                    >
                        <option value="">Select payment method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                    </select>
                    <button onClick={reserveClick} className="btnReserve">
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
