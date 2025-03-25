import React, { useEffect, useState } from "react";
import TraitsInput from "./components/TraitsInput";
import SpectralVisualizer from "./components/SpectralVisualizer";

function App() {
  const [spectralData, setSpectralData] = useState<any>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setSpectralData(json))
      .catch((err) => console.error("Failed to load data.json", err));
  }, []);

  const handleTraitChange = async (traitValues: Record<string, number>) => {
    console.log("Simulating Lambda call with:", traitValues);

    // Simulate API delay
    const simulatedResponse = await new Promise((resolve) =>
      setTimeout(() => resolve(spectralData), 500)
    );

    setSpectralData(simulatedResponse);
  };

  return (
    <main style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Spectral Simulator</h1>
      <TraitsInput onChange={handleTraitChange} />
      {spectralData && <SpectralVisualizer data={spectralData} />}
    </main>
  );
}

export default App;
