import { useRef, useState } from "react";

export function getRefValue(ref) {
  return ref.current;
}

export function useStateRef(defaultValue) {
  const ref = useRef(defaultValue);
  const [state, _setState] = useState(defaultValue);
  const setState = (value) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}
