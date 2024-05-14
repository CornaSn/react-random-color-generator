import { randomColor } from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const color = randomColor();
  // Create a state for the button
  const [hexCode, setHexCode] = useState(color);
  const [hue, setColorHue] = useState('Enter a hue here...');
  const [lum, setColorLightness] = useState('Enter a luminosity here...');
  const param = {
    hue: hue,
    luminosity: lum,
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: 'black',
          color: `${hexCode}`,
          textAlign: 'center',
        }}
      >
        Random Color Generator
      </h1>
      <input
        style={{
          border: '2px solid #ccc',
          borderRadius: '10%',
          padding: '10px',
          width: '300px',
          height: '30px',
          fontSize: '16px',
          backgroundColor: '#f0f0f0',
          color: '#333',
          boxSizing: 'border-box',
          marginLeft: '300px',
        }}
        value={hue}
        onChange={(event) => {
          setColorHue(event.currentTarget.value);
        }}
      />
      <input
        style={{
          border: '2px solid #ccc',
          borderRadius: '10%',
          padding: '10px',
          width: '300px',
          height: '30px',
          fontSize: '16px',
          backgroundColor: '#f0f0f0',
          color: '#333',
          boxSizing: 'border-box',
        }}
        value={lum}
        onChange={(event) => setColorLightness(event.currentTarget.value)}
      />
      <button
        style={{
          border: '2px solid #ccc',
          borderRadius: '50%',
          padding: '20px',
          width: '150px',
          height: '150px',
          fontSize: '16px',
          backgroundColor: '#f0f0f0',
          boxSizing: 'border-box',
          marginLeft: '200px',
          color: `${hexCode}`,
        }}
        onClick={() => {
          const newColor = randomColor(param);
          setHexCode(newColor);
        }}
      >
        Generate Random Color
      </button>

      <div
        style={{
          backgroundColor: `${hexCode}`,
          border: '1px dotted black',
          borderRadius: '3rem',
          textAlign: 'center',
          fontSize: '30px',
          margin: '3px',
          height: '10px',
          padding: '200px',
        }}
      >
        {' '}
        Generated Color:
        {hexCode}
      </div>
    </>
  );
}
