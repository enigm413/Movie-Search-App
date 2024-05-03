import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function callBack(event) {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }
    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [action]);
}
