// BookingForm.js
import { useState, useEffect } from "react";
import Doctors from "../Doctors.json";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    setDoctors(Doctors);
  }, []);

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const areAllFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    if (areAllFieldsFilled && selectedDoctor) {
      setFormData({
        name: "",
        phoneNumber: "",
        age: "",
        city: "",
        company: "",
        chiefComplaints: "",
        previousExperience: "",
      });
      setSelectedDoctor(null);
      alert("Booking successful!");
    } else {
      alert("Please fill in all required fields and select a doctor.");
    }
  };

  return (
    <section className="booking-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <br />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Chief Complaints:
          <textarea
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {formData.age >= 40 && (
          <label>
            Previous Experience with Physiotherapy:
            <textarea
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleInputChange}
            />
          </label>
        )}
        {formData.city && doctors.length > 0 && (
          <div>
            <h3>Available Doctors</h3>
            {doctors
              .filter((doctor) => doctor.city === formData.city)
              .map((doctor) => (
                <label key={doctor.name}>
                  <input
                    type="radio"
                    name="doctor"
                    value={doctor.name}
                    onChange={() => handleDoctorSelection(doctor)}
                  />
                  {doctor.name} - {doctor.expertise}
                </label>
              ))}
          </div>
        )}

        <button type="submit">Book Consultation</button>
      </form>
    </section>
  );
};

export default BookingForm;
