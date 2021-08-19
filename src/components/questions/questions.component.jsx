import React, { useState, useEffect } from "react";

import "./questions.styles.scss";
import ProgressBar from "../../components/progress-bar/progress-bar.component";

export default function Questions() {
  const [value, updateValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateValue((oldValue) => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <ProgressBar value={value} />
    </div>
  );
}
