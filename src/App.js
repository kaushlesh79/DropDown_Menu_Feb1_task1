import "./styles.css";

import { useState, useEffect, useRef } from "react";

export default function App() {
  const [showList, setShowList] = useState(false);
  const [optionValue, setOptionValue] = useState("Menu");
  const options = ["A", "B", "C", "D"];

  const dropdownRef = useRef(null);

  // for handling click outside dropdown Menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <h1>Dropdown Menu</h1>

      <div className="dropdownMenu" ref={dropdownRef}>
        <div className="dropdownBox">
          <p>{optionValue}</p>
          <p
            className="dropdownToggle"
            onClick={() => setShowList((val) => !val)}
          >
            {showList ? "▴" : "▾"}
          </p>
        </div>
        {showList && (
          <div className="dropdownList">
            {options.map((option, idx) => (
              <p
                key={idx}
                onClick={() => {
                  setShowList(false);
                  setOptionValue(option);
                }}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
