import React from "react";

export default function Password({
    hiddenMargin,
    label,
    mjs,
}) {
  return (
    <div className={(hiddenMargin ? "" : "mb-7") + " relative"}>
      <div className="relative z-1">
        <div
          className="absolute top-1.5 right-2.5 w-7 opacity-50 cursor-pointer"          
        >
          {'' === "password" ? (
            <span className="material-icons-round text-libellum-gray">
              visibility
            </span>
          ) : (
            <span className="material-icons-round text-libellum-gray">
              visibility_off
            </span>
          )}
        </div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder={label}
          autoComplete="off"          
          className="w-full border rounded py-1 px-3 border-libellum-border focus:outline-none focus:invalid:border-red-500 focus:invalid:ring-red-500 text-libellum-gray"          
        />
      </div>
      {mjs && (
        <div className="text-red-600 text-sm absolute">{mjs}</div>
      )}
    </div>
  );
}
