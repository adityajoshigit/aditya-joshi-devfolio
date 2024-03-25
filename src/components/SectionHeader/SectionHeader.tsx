export interface ISectionHeaderProps {
  label: string;
  align?: string;
}

function SectionHeader({
  align = "center",
  label,
}: ISectionHeaderProps) {
  return (
    <div className="w-full text-2xl font-semibold">
      <h1>{label}</h1>
      <h4>{label}</h4>
    </div>
  );
}

export default SectionHeader;
