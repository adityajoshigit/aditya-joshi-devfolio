export interface ISectionHeaderProps {
  label: string;
  align?: "left" | "center" | "right";
}

function SectionHeader({
  align = "center",
  label,
}: ISectionHeaderProps) {
  return (
    <div className={`w-full text-${align} relative`}>
      <h1 className="text-8xl text-gray-100 absolute w-full bottom-0 z-10">
        {label}
      </h1>
      <h3 className="text-5xl relative w-full z-20">
        {label}
      </h3>
    </div>
  );
}

export default SectionHeader;
