import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const value = localStorage.getItem("currentUser");
    let currentUser;
    try {
        currentUser = JSON.parse(value);
    } catch (err) {
        console.log(err);
    }

    const homeClickHandle = () => {
        navigate("/");
    };

    const signupClickHandle = () => {
        navigate("/sign-up");
    };

    const loginClickHandle = () => {
        navigate("/login");
    };

    const logoutClickHandle = () => {
        navigate("/login");
        localStorage.removeItem("currentUser");
    };

    const transactionClickHandle = () => {
        navigate("/transactions");
    };
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={homeClickHandle}>
                    Booking Website
                </span>
                {currentUser && (
                    <div className="navItems">
                        <p>{currentUser.username}</p>
                        <button
                            className="navButton"
                            onClick={transactionClickHandle}
                        >
                            Transactions
                        </button>
                        <button
                            className="navButton"
                            onClick={logoutClickHandle}
                        >
                            Logout
                        </button>
                    </div>
                )}
                {!currentUser && (
                    <div className="navItems">
                        <button
                            className="navButton"
                            onClick={signupClickHandle}
                        >
                            Sign Up
                        </button>
                        <button
                            className="navButton"
                            onClick={loginClickHandle}
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
