export function Section({ title, children, className = "" }) {
  return (
    <section className={`flex flex-col gap-4 ${className}`}>
      <h1 className="font-bold text-[18px] text-[#1F2937]">{title}</h1>
      {children}
    </section>
  );
}
