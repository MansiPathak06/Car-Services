import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faCheckCircle, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./bookService.css";

const BookService = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carMake: "",
    carModel: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    "Engine Diagnostics",
    "Oil Change",
    "AC Repair",
    "Brake Service",
    "Car Detailing",
    "Tyre & Wheel Alignment",
    "Battery Replacement",
    "General Inspection",
    "Other (Please Specify)"
  ];

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.preferredDate) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("Service Booked Successfully! We'll contact you within 24 hours.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      carMake: "",
      carModel: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const quickInfo = [
    {
      icon: faClock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
    },
    {
      icon: faPhone,
      title: "Emergency Service",
      details: ["24/7 Roadside Assistance", "Call: +1 (555) 123-4567"]
    },
    {
      icon: faCheckCircle,
      title: "Service Guarantee",
      details: ["100% satisfaction", "Certified technicians", "Premium warranty"]
    }
  ];

  return (
    <div className="book-service-wrapper">
      {/* Hero Section - Same structure as Contact page */}
      <div className="book-service-hero">
        <div className="book-service-hero-overlay" />
        <div className="book-service-hero-content">
          <h1>
            Book Your <span>Service</span>
          </h1>
          <p className="book-service-breadcrumb">
            Home &gt; <span className="highlight">Book Service</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="book-service-main">
        <div className="book-grid">
          <div className="card">
            <div className="card-header">
              <FontAwesomeIcon icon={faCalendarAlt} />
              Service Booking Form
            </div>
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label>Full Name *</label>
                    <input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Phone Number *</label>
                    <input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="form-row">
                  <div>
                    <label>Car Make</label>
                    <input
                      value={formData.carMake}
                      onChange={(e) => handleInputChange("carMake", e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Car Model & Year</label>
                    <input
                      value={formData.carModel}
                      onChange={(e) => handleInputChange("carModel", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label>Select Service *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div>
                    <label>Preferred Date *</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label>Preferred Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot, i) => (
                        <option key={i} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label>Additional Info</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <button className="book-button" type="submit">
                  Book Service Appointment
                </button>
              </form>
            </div>
          </div>

          <div className="sidebar">
            {quickInfo.map((item, idx) => (
              <div className="card info-card" key={idx}>
                <h3><FontAwesomeIcon icon={item.icon} /> {item.title}</h3>
                {item.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}

            <div className="card emergency-card">
              <div className="card-content">
                <h3><FontAwesomeIcon icon={faPhone} /> Need Immediate Help?</h3>
                <p>For urgent repairs or help, contact us directly.</p>
                <div className="contact-info">
                  <span><FontAwesomeIcon icon={faPhone} /> +1 (555) 123-4567</span>
                  <span><FontAwesomeIcon icon={faEnvelope} /> info@turbocare.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;