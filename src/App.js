import { randomColor } from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const color = randomColor();
  // Create a state for the button
  const [hexCode, setHexCode] = useState(color);
  console.log(hexCode);

  return (
    <>
      <div>
        <h1
          style={{
            backgroundColor: 'black',
            color: `${hexCode}`,
            textAlign: 'center',
          }}
        >
          Random Color Generator
        </h1>
      </div>

      <div>
        <button
          style={{
            fontSize: '14px',
            textAlign: 'center',
            padding: '12px',
            marginLeft: '50px',
            marginTop: '60px',
            height: '300px',
            border: '5px solid black',
            borderRadius: '30px',
            position: 'absolute',
            backgroundColor: 'black',
            color: `${hexCode}`,
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
          border: '1px dotted black',
          borderRadius: '3rem',
          textAlign: 'center',
          fontSize: '30px',
          margin: '30px',
          height: '20px',
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
