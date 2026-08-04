"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" aria-hidden="true">
      <div className="page-loader-mark"><span>R</span></div>
    </div>
  );
}
