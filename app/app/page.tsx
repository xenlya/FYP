"use client";

import { useState } from "react";
import CarInputField from "@/components/car/CarInputField";
import Button from "@/components/ui/Button";

export default function Home() {
    const [studentName, setStudentName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");
    const [car,setCar] = useState({
        brand: "",
        model: "",
        year: 2020
    });

    const handleSubmit = () => {
        if (!car.brand.trim() || !car.model.trim()) return;
        setSubmittedName(studentName);
        setSubmittedEmail(email);
        setStudentName("");
        setEmail("");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-dark-900 text-white">
            <div className="w-full max-w-lg rounded-lg bg-gray-900 p-8 shadow-lg">
                <h1 className="text-4xl font-bold">Welcome to the Student Portal</h1>
                <p className="text-2xl font-bold">Please enter your name:</p>

                <div className="mt-4">
                    <CarInputField
                        label="Name"
                        placeholder="Enter your name"
                        value={studentName}
                        onChange={setStudentName}
                    />
                </div>

                <div className="mt-4">
                    <CarInputField
                        label="Car Brand"
                        placeholder="Enter car brand"
                        value={car.brand}
                        onChange={(value) => setCar({...car, brand: value})}
                    />
                    <CarInputField
                        label="Car Model"
                        placeholder="Enter car model"
                        value={car.model}
                        onChange={(value) => setCar({...car, model: value})}
                    />
                    <CarInputField
                        label="Car Year"
                        type="number"
                        placeholder="Enter car year"
                        value={car.year.toString()}
                        onChange={(value) => setCar({...car, year: parseInt(value) || 2020})}
                    />
                    
                    <Button text="Submit" onClick={handleSubmit} disabled = {(!car.brand.trim() || !car.model.trim() || !car.year.toString().trim())}/>

                    <Button 
                    text = "Reset"
                    variant = "danger"
                    onClick = {() => {
                        setStudentName("");
                        setEmail("");
                        setCar({ brand: "", model: "", year: 2020 });
                    }}/>

                    <Button
                        text = "Save"
                        variant = "success"
                        />
                    

                    <p className="mt-4 text-lg">
                        Hello, {submittedName || "Student"}
                        {submittedEmail ? ` (${submittedEmail})` : ""}!
                    </p>
                </div>
            </div>
        </main>
        
    );
}