import React from "react";

interface TraitsInputProps {
  onChange: (traitValues: Record<string, number>) => void;
}

const TraitsInput: React.FC<TraitsInputProps> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange({ trait: newValue });
  };

  return (
    <div>
      <label htmlFor="trait-slider">Trait Value:</label>
      <input
        id="trait-slider"
        type="range"
        min="0"
        max="100"
        onChange={handleChange}
      />
    </div>
  );
};

export default TraitsInput;
