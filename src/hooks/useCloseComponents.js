import { useEffect } from "react";

export const useCloseComponents = (setShow, ref) => {
  useEffect(() => {
    function handleClose(e) {
      if (e.key === "Escape") {
        setShow(false);
        return;
      }

      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    }

    setTimeout(() => {
      window.addEventListener("click", handleClose);
    }, 0);

    window.addEventListener("keydown", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
      window.removeEventListener("keydown", handleClose);
    };
  }, [setShow, ref]);
};
