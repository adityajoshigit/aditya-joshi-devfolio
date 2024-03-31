interface INameTagProps {
  name: string;
  className?: string;
}

function NameTag({ name, className = "" }: INameTagProps) {
  return (
    <div className={`w-full  text-center ${className}`}>
      {name}
    </div>
  );
}

export default NameTag;
