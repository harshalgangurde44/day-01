function Tabs({
    tabs,
    activeTab,
    setActiveTab,
  }) {
    const handleTabClick = (index) => {
      // Don't allow skipping future tabs
      if (index <= activeTab) {
        setActiveTab(index);
      }
    };
  
    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={
              activeTab === index
                ? "tab active"
                : "tab"
            }
            onClick={() => handleTabClick(index)}
          >
            {index + 1}. {tab}
          </button>
        ))}
      </div>
    );
  }
  
  export default Tabs;