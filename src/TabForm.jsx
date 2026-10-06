import { useState } from "react";

import Tabs from "./Tabs";
import PersonalForm from "./PersonalForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import FormNavigation from "./FormNavigation";

const tabs = ["Personal", "Address", "Account"];

function TabForm() {
  const [activeTab, setActiveTab] = useState(0);

  const [formData, setFormData] = useState({
    // Personal
    name: "",
    email: "",
    age: "",

    // Address
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Account
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Common input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validate current tab
  const validateTab = () => {
    const newErrors = {};

    // Personal validation
    if (activeTab === 0) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email";
      }

      if (!formData.age) {
        newErrors.age = "Age is required";
      }
    }

    // Address validation
    if (activeTab === 1) {
      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }

      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }

      if (!formData.state.trim()) {
        newErrors.state = "State is required";
      }

      if (!formData.pincode) {
        newErrors.pincode = "Pincode is required";
      } else if (!/^\d{6}$/.test(formData.pincode)) {
        newErrors.pincode = "Pincode must be 6 digits";
      }
    }

    // Account validation
    if (activeTab === 2) {
      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password =
          "Password must be at least 6 characters";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword =
          "Confirm password is required";
      } else if (
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword =
          "Passwords do not match";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateTab()) return;

    setActiveTab((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setErrors({});
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (!validateTab()) return;

    console.log("Submitted Data:", formData);

    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Registration Form</h1>

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="form-content">
          {activeTab === 0 && (
            <PersonalForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}

          {activeTab === 1 && (
            <AddressForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}

          {activeTab === 2 && (
            <AccountForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}
        </div>

        <FormNavigation
          activeTab={activeTab}
          totalTabs={tabs.length}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default TabForm;