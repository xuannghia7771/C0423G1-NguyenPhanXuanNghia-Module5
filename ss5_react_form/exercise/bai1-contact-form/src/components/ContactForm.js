import React, {useState} from 'react';
import {Formik} from 'formik';
import {useFormik} from "formik";
import * as Yup from "yup";
import "./contact.css";

export const ContactForm = () => {

    const formik=useFormik({
        initialValues:{
            email: "",
            name: "",
            phone:"",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().required("Required")
                .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please enter a valid email"),
            phone: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            window.alert("Add contact successfully!!!");
        }
    });

    return (
        <section>
            <form onSubmit={formik.handleSubmit} className="infoform">
                <label htmlFor="">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && (
                    <p className="errorMsg">{formik.errors.name}</p>
                )}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && (
                    <p className="errorMsg">{formik.errors.email}</p>
                )}
                <label htmlFor="">Phone number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                {formik.errors.phone && (
                    <p className="errorMsg">{formik.errors.phone}</p>
                )}
                <label htmlFor="">Message</label>
                <textarea
                    rows="10"
                    id="message"
                    name="message"
                    placeholder="Enter some message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}