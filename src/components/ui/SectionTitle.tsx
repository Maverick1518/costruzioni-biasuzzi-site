interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** Mostra una barra brand sotto il titolo */
  marker?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className = "",
  marker = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {marker && (
        <div className={`mt-3 h-0.5 w-10 bg-brand ${align === "center" ? "mx-auto" : ""}`} />
      )}
      {subtitle && (
        <p className={`${marker ? "mt-3" : "mt-3"} max-w-2xl text-base text-neutral-600`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
