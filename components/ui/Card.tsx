import { ReactNode } from "react";

export default function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-100">
      {children}
    </div>
  );
}
