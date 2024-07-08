import React from 'react'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik'

export default function Book() {
    let [books, setBooks] = useState([]);
    let [indexSelected, setIndexSelected] = useState(-1);
    const [form, setForm] = useState({
        title: '',
        qty: ''
    });
    const REGEX = {
        qty: /^\d+$/
    };
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.title) {
            errors.title = "Required";
        }
        if (!form.qty) {
            errors.qty = "Required";
        }
        else if (!REGEX.qty.test(form.qty)) {
            errors.qty = "Invalid: Qty Only numeric values";
        }

        return errors;
    }
    let handleSelect = (book, index) => {
        setForm({
            title: book.title,
            qty: book.qty
        });
        setIndexSelected(index);
        
    }
    
    function handleSubmit() {
        if (indexSelected > -1 ) {
            books.splice(indexSelected,1,form);
            setBooks([...books]);
            alert("Books edited successfully!!!");
            setForm({
                title: "",
                qty: ""
            });
        }
        else {
            setBooks([...books, form]);
            alert("Books added successfully!!!");
            setForm({
                title: "",
                qty: ""
            });
        }
    }
    let handleDelete = (index) => {
        books.splice(index, 1);
        setBooks([...books]);
    }
    return (
        <div>
            <h1>Library</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.title ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.title}</p>
                        </div>

                        <div
                            className={`custom-input ${errors.qty ? "custom-input-error" : ""
                                }`}
                        >
                            <label>Qty</label>
                            <input
                                type="text"
                                name="qty"
                                value={form.qty || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.qty}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Qty</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item, i) => (
                            <tr className={i} key={i}>
                                <td>{item.title}</td>
                                <td>{item.qty}</td>
                                <td>
                                    <button onClick={() => { handleSelect(item, i) }}>Edit</button>
                                    <button onClick={() => { handleDelete(i) }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
