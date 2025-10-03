import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export type ToastType = { variant: "success" | "error"; message: string };

type ToastProps = {
  toast: ToastType | null;
  onClose: () => void;
  duration?: number;
};

const Toast: React.FC<ToastProps> = ({ toast, onClose, duration = 4000 }) => {
  useEffect(() => {
    const id = window.setTimeout(() => onClose(), duration);
    return () => clearTimeout(id);
  }, [onClose, duration]);
  
  if (!toast) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div aria-live="polite" className="fixed bottom-4 right-4 z-[9999]">
      <div
        className={[
          "max-w-xs rounded-lg px-4 py-2 shadow-lg text-white flex items-center gap-2",
          toast.variant === "success" ? "bg-green-600" : "bg-red-600",
          "animate-toast",
        ].join(" ")}
      >
        <span className="text-lg">
          {toast.variant === "success" ? "✅" : "❌"}
        </span>
        <span className="text-sm">{toast.message}</span>
      </div>
    </div>,
    document.body
  );
};

export default Toast;
