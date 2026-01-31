import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.png";

export function Loader({ progress = 0, taglines }) {
  const safeProgress = Math.max(0, Math.min(100, Math.floor(progress)));

  const lines = useMemo(() => {
    const defaults = [
      "Integrity. Insight. Impact.",
      "Precision with perspective.",
      "Law grounded in values.",
      "Advocacy with clarity.",
    ];
    if (Array.isArray(taglines) && taglines.length > 0) return taglines;
    if (typeof taglines === "string" && taglines.trim().length > 0) return [taglines];
    return defaults;
  }, [taglines]);

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (lines.length === 0) {
      setActiveIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setActiveIndex((i) => ((i + 1) % lines.length));
    }, 800); // calmer cadence for readability
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="loader-backdrop" role="alert" aria-live="polite">
      <div className="loader-container">
        <div className="loader-logo" aria-label="Brand Logo">
          <img src={logo} alt="Firm logo" className="loader-logo-img" />
        </div>

        <div className="loader-taglines" aria-label="Taglines">
          <div className="loader-tagline is-active">
            {lines[activeIndex] || ""}
          </div>
        </div>

        <div className="loader-progress" aria-label="Loading Progress">
          <div className="loader-progress-bar">
            <div
              className="loader-progress-fill"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
          <div className="loader-progress-text" aria-live="polite">
            {safeProgress}%
          </div>
        </div>
      </div>
    </div>
  );
}
