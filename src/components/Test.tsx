import { useState } from "react";
export default function Dialog() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsActive((p) => !p)}
        className="p-2 bg-black text-white"
      >
        {isActive ? "Close" : "Open"}
      </button>
      {isActive && (
        <div className="bg-red-500">
          Test react integration lorem ipsum dolor sit amet, qui minim labore
          adipisicing minim sint cillum sint consectetur cupidatat.
        </div>
      )}
    </>
  );
}
