import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleChange = () => {
    const length = inputRef.current.value.length;
    setCharCount(length);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleChange}
        placeholder="Type something..."
      />
      <p>Character count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
