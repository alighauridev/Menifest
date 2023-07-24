import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../scss/contactForm.scss";
const InquiryForm = ({ setInquiryFormShow }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        twitter: "",
        company: "",
    });
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();
        setloading(true);
        emailjs
            .send(
                "service_2ur2ldk",
                "template_p0zefpf",
                { ...form },
                "Xj2jv7BvQrywwCPht"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    navigate("/");
                    toast.success("Submitted Successfully!");
                    setInquiryFormShow(false);
                    setloading(false);
                },
                (error) => {
                    console.log(error.text);
                    toast.error(error.text);
                    setInquiryFormShow(false);
                    setloading(false);
                }
            );
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const investmentBudgetOptions = [
        { value: "$0 - $5k", label: " $0 - $5k" },
        { value: "$5k - $10k", label: "$5k - $10k" },
        { value: "$10k - $25k", label: "$10k - $25k" },
        { value: "$25k - $50k", label: "$25k - $50k" },
        { value: "$50k +", label: "  $50k +" },
    ];

    const bestTimeToContactOptions = [
        { value: "Morning", label: "Morning" },
        { value: "Afternoon", label: "Afternoon" },
        { value: "Evening", label: "Evening" },
    ];

    return (
        <div className="contact" data-aos={"fade-up"} data-aos-duration="300">
            <div className="container ">
                <div
                    className="cross"
                    onClick={() => {
                        setInquiryFormShow(false);
                    }}
                >
                    <img src="/images/bb (2).png" alt="" />
                </div>
                <div className="heading">
                    <h2>Fill Out the details</h2>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="first">
                        <div className="item">
                            <input
                                id="name"
                                required={true}
                                type="text"
                                placeholder="Enter Your Name"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="second">
                        <input
                            id="email"
                            required={true}
                            type="email"
                            placeholder="Enter Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="third">
                        <input
                            id="company"
                            required={true}
                            type="text"
                            placeholder="Company"
                            onChange={handleChange}
                        />
                        <input
                            id="twitter"
                            required={true}
                            type="text"
                            placeholder="Twitter Link"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="first">

                        <button>{loading ? "Submitting..." : "Submit"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InquiryForm;
