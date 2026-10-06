function PersonalForm({
    formData,
    errors,
    handleChange,
  }) {
    return (
      <div>
        <h2>Personal Details</h2>
  
        <div className="field">
          <label>Name</label>
  
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
  
          {errors.name && (
            <span className="error">
              {errors.name}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>Email</label>
  
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
  
          {errors.email && (
            <span className="error">
              {errors.email}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>Age</label>
  
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
  
          {errors.age && (
            <span className="error">
              {errors.age}
            </span>
          )}
        </div>
      </div>
    );
  }
  
  export default PersonalForm;