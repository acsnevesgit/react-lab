import { useCallback, useState, useEffect } from 'react';

// Save data to localStorage and trigger a component rerender, reflecting the new localStorage value
const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) ?? initialState);

  const updatedSetValue = useCallback(
    (newValue) => {
      if (newValue === initialState || typeof newValue === 'undefined') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newValue);
      }
      setValue(newValue ?? initialState);
    },
    [initialState, key]
  );
  return [value, updatedSetValue];
};

// e.g.
// const Component = () => {
//   const [value, setValue] = useLocalStorage('key', 'initial');
//   return (
//     <input
//       onChange={e => setValue(e.target.value)}
//       value={value ?? ''}
//     />
//   );
// };
