export function SectionHeading({
  label,
  title,
  goldWord,
  description,
  center = true,
}: {
  label: string;
  title: string;
  goldWord?: string;
  description?: string;
  center?: boolean;
}) {
  const titleParts = goldWord ? title.split(goldWord) : [title];

  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">
        {label}
      </p>
      <h2 className="font-display text-4xl md:text-6xl text-off-white mb-4">
        {goldWord ? (
          <>
            {titleParts[0]}
            <span className="text-gold">{goldWord}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-[2px] bg-gold mt-6 mx-auto" />
    </div>
  );
}
