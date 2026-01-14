import React from "react";

interface AnimationCardProps {
  title: string;
  duration: number;
  text?: string;
  children?: React.ReactNode;
}

export default function AnimationCard({ title, duration, text, children }: AnimationCardProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
        {title}
      </h3>
      <div className="h-48 border border-gray-200 rounded-2xl flex items-center justify-center bg-gray-50/50 shadow-sm relative group overflow-hidden">
        {text ? (
          <p
            style={{ transitionDuration: `${duration}ms` }}
            className="text-xl font-medium text-gray-800 transition-all ease-out opacity-0 group-hover:opacity-100 text-center px-4"
          >
            {text}
          </p>
        ) : (
         
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              const elementChild = child as React.ReactElement<{ style?: React.CSSProperties }>;
              return React.cloneElement(elementChild, {
                style: { ...elementChild.props.style, transitionDuration: `${duration}ms` },
              });
            }
            return child;
          })
        )}
        <span className="absolute bottom-4 text-[10px] text-gray-400">
          Hover inside to see effect
        </span>
      </div>
    </div>
  );
}
