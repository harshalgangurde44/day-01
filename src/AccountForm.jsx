function AccountForm({
    formData,
    errors,
    handleChange,
  }) {
    return (
      <div>
        <h2>Account Details</h2>
  
        <div className="field">
          <label>Username</label>
  
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
  
          {errors.username && (
            <span className="error">
              {errors.username}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>Password</label>
  
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
  
          {errors.password && (
            <span className="error">
              {errors.password}
            </span>
          )}
        </div>
  
        <div className="field">
          <label>Confirm Password</label>
  
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
  
          {errors.confirmPassword && (
            <span className="error">
              {errors.confirmPassword}
            </span>
          )}
        </div>
      </div>
    );
  }
  
  export default AccountForm;