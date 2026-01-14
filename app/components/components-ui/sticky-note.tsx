interface StickyNoteProps {
  text: string;
}

export default function StickyNote({ text }: StickyNoteProps) {
  return (
    <div className="relative group w-40">
      <div className="absolute inset-0 bg-yellow-200 transform rotate-2 skew-x-1 shadow-sm rounded-sm"></div>
      
      <div className="relative bg-yellow-100 p-3 shadow-md border-l-2 border-yellow-400 rounded-sm hover:-translate-y-0.5 transition-transform duration-200">
        <h3 className="text-[10px] text-yellow-700 font-mono mb-1 uppercase tracking-tighter font-bold">Type</h3>
        <p className="text-sm text-yellow-900 font-medium italic leading-tight">
          {text}
        </p>
        
      </div>
    </div>
  );
}
