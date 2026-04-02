import { useState, useCallback } from "react";

/**
 * A simple hook to toggle a boolean state.
 * @param {boolean} initialState - The starting state.
 * @returns {[boolean, function]} - The current state and a toggle function.
 */
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  
  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  const setExplicit = useCallback((value) => {
    setState(value);
  }, []);

  return [state, toggle, setExplicit];
};

export default useToggle;
