import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import HealthForm from "./Components/Form.js";
import SuccessPage from "./Components/SuccessPage";
// import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import EmotionAnalysis from "./Components/EmotionAnalysis";
import AdminPage from "./Components/AdminPage";
// import AppointmentForm from "./Components/AppointmentForm";
import HospitalMap from "./Components/HospitalMap";
import Chatbot from "./Components/Chatbot";

function App() {
  const [predictionResult, setPredictioResult] = useState(null);
  // Function to fetch the prediction result from backend
  const fetchPredictionResult = async () => {
    try {
      const response = await fetch("/api/predict"); // Replace with your backend API endpoint
      const data = await response.json();
      // console.log(data);
      setPredictioResult(data.prediction); // Assuming your backend returns a 'prediction' field
    } catch (error) {
      console.log("Error fetching prediction: ", error);
    }
  };

  useEffect(() => {
    fetchPredictionResult(); // Fetch prediction result when the component mounts
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/health-form" element={<HealthForm />} />
        <Route path="/emotion-analysis" element={<EmotionAnalysis />} />
        <Route
          path="/success"
          element={<SuccessPage predictionResult={predictionResult} />}
        ></Route>
        {/* <Route path="/appointment-form" element={<AppointmentForm />} /> */}
        <Route path="/hospital-map" element={<HospitalMap />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
