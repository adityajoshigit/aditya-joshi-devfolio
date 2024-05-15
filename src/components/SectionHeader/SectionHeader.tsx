export interface ISectionHeaderProps {
  label: string;
  align?: "left" | "center" | "right";
}

function SectionHeader({
  align = "center",
  label,
}: ISectionHeaderProps) {
  return (
    <div
      className={`w-full text-${align} relative py-2 my-2`}>
      <h1 className="bottom-0 z-10 absolute w-full text-7xl text-gray-100">
        {label}
      </h1>
      <h3 className="relative z-20 w-full text-5xl">
        {label}
      </h3>
    </div>
  );
}

export default SectionHeader;
