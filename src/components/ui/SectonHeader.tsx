interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function SectonHeader({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4 mb-9">
      {badge && (
        <span className="inline-block text-sm text-sky-500 bg-[#20b2a6]/10 px-4 py-1.5 rounded-full border border-[#242b32]">
          {badge}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-shadow-white leading-tight">
        {title}{" "} {highlight && <span className="text-sky-500">{highlight}</span>}
      </h2>

      {description && (
        <p className="text-gray-400 max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
