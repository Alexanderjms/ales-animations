interface TitleComponentsProps {
  firstPart: string;
  secondPart: string;
}

export default function TitleComponents({ firstPart, secondPart }: TitleComponentsProps) {
  return (
    <div>
       <div className="border-l-4 border-b-2 border-blue-500 px-2 inline-block">
        <h1 className="text-2xl font-bold text-blue-500">
          {firstPart}
          <span className="text-indigo-500"> {secondPart}</span>
        </h1>
      </div>
    </div>
  );
}