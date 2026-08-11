import { css } from '@emotion/react';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      css={css`
        color: green;
      `}
    >
      chong chong
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        {count}
      </button>
    </div>
  );
}
