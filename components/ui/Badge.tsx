import { ReactNode } from "react";

export default function Badge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
      {children}
    </span>
  );
}
