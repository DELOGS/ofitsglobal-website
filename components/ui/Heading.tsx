type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function Heading({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center mb-16" : "mb-16"}>
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}
