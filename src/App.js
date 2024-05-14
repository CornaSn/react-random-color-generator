import { randomColor } from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const color = randomColor();
  // Create a state for the button
  const [hexCode, setHexCode] = useState(color);
  console.log(hexCode);

  return (
    <>
      <div>
        <h1>Random Color Generator</h1>
      </div>

      <div>
        <button
          style={{
            fontSize: '14px',
            textAlign: 'center',
            padding: '6px',
            margin: '20px',
            border: '1px solid black',
            position: 'absolute',
          }}
          onClick={() => {
            const newColor = randomColor();
            setHexCode(newColor);
          }}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          backgroundColor: `${hexCode}`,
          textAlign: 'center',
          fontSize: '30px',
          margin: '100px',
          height: '200px',
          padding: '30px 70px',
        }}
      >
        {' '}
        Generated Color:
        {hexCode}
      </div>
    </>
  );
}
