function FormNavigation({
    activeTab,
    totalTabs,
    handleNext,
    handlePrevious,
    handleSubmit,
  }) {
    return (
      <div className="navigation">
        {activeTab > 0 && (
          <button onClick={handlePrevious}>
            Previous
          </button>
        )}
  
        {activeTab < totalTabs - 1 && (
          <button onClick={handleNext}>
            Next
          </button>
        )}
  
        {activeTab === totalTabs - 1 && (
          <button onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    );
  }
  
  export default FormNavigation;