import "./TransactionsTable.css";
import { useState, useEffect } from "react";

const TransactionsTable = () => {
    const [transactions, setTransactions] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        // fetch transaction data
        const dataFetch = async () => {
            const transactions = await (
                await fetch(
                    `http://localhost:5000/api/transactions/user?user=${currentUser.username}`
                )
            ).json();
            setTransactions(transactions);
        };
        dataFetch();
    }, []);

    const addArr = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            return [arr[0].concat(arr[i + 1])];
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Hotel</th>
                    <th>Room</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Payment method</th>
                    <th>Status</th>
                </tr>
                {transactions.map((t) => (
                    <tr className="trans-info" key={t.id}>
                        <th>{t.id}</th>
                        <th>{t.name}</th>
                        <th>
                            {addArr(
                                t._doc.roomArr.map((r) => r.rooms_arr)
                            ).join(", ")}
                        </th>
                        <th>{t.date}</th>
                        <th>${t._doc.price}</th>
                        <th>{t._doc.payment}</th>
                        <th>
                            <div className={`${t._doc.status}`}>
                                {t._doc.status}
                            </div>
                        </th>
                    </tr>
                ))}
            </thead>
            <tbody></tbody>
        </table>
    );
};

export default TransactionsTable;
