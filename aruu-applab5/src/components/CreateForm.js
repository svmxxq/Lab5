import React, { useState } from 'react';
import './CreateForm.css';

const CreateForm = ({ onAddExpense }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [photo, setPhoto] = useState(null);

    // файлды тандап оброботка жасайды
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhoto(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            name,
            amount,
            date,
            photo,
        };

        onAddExpense(newExpense);

        setName('');
        setAmount('');
        setDate('');
        setPhoto(null);
    };

    return (
        <form className="add-expense-form" onSubmit={handleSubmit}>
            <h2 className="add-expense-form-title">Create</h2>
            <input
                className="add-expense-form-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="add-expense-form-input"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                className="add-expense-form-input"
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            {/* Элемент для загрузки фотографии */}
            <input
                className="add-expense-form-input"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
            />
            {/* Отображение выбранной фотографии */}
            {photo && (
                <div className="add-expense-form-photo">
                    <img src={photo} alt="Expense" style={{ maxWidth: '100px', maxHeight: '100px'}}/>
                </div>
            )}
            <button className="add-expense-form-button" type="submit">Create</button>
        </form>
    );
};

export default CreateForm;
