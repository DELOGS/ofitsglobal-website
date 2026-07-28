import { LucideIcon } from "lucide-react";
import Card from "./Card";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <Card>
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>
    </Card>
  );
}
