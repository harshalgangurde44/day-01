function AddressForm({
    formData,
    errors,
    handleChange,
  }) {
    return (
      <div>
        <h2>Address Details</h2>
  
        <div className="field">
          <label>Address</label>
  
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
  
          {errors.address && (
            <span className="error">
              {errors.address}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>City</label>
  
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
  
          {errors.city && (
            <span className="error">
              {errors.city}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>State</label>
  
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter your state"
          />
  
          {errors.state && (
            <span className="error">
              {errors.state}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>Pincode</label>
  
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter 6 digit pincode"
            maxLength={6}
          />
  
          {errors.pincode && (
            <span className="error">
              {errors.pincode}
            </span>
          )}
        </div>
      </div>
    );
  }
  
  export default AddressForm;