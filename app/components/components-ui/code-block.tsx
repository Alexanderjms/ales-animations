"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  duration: number;
  onDurationChange: (value: number) => void;
}

export default function CodeBlock({ code, duration, onDurationChange }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.trim().startsWith("//")) {
        return <div key={i} className="text-gray-400">{line}</div>;
      }

      const parts = line.split(/(\w+="[^"]*"|className|<\/?[a-z0-9]+>?)/g);
      
      return (
        <div key={i}>
          {parts.map((part, j) => {
            if (!part) return null;
            
            if (part.includes('="')) {
              const [attr, value] = part.split('=');
              
              if (value.includes('d-')) {
                const innerParts = value.split(/(d-\d+)/g);
                return (
                  <span key={j}>
                    <span className={attr === 'className' ? "text-green-400 font-semibold" : ""}>{attr}</span>
                    =
                    <span className="text-yellow-300 font-semibold">
                      {innerParts.map((inner, k) => {
                        if (inner.startsWith('d-')) {
                          return (
                            <span key={k} className="inline-flex items-center">
                              d-
                              <input
                                type="number"
                                value={duration}
                                onChange={(e) => onDurationChange(Number(e.target.value))}
                                style={{ width: `${duration.toString().length + 1}ch` }}
                                className="bg-purple-900/50 text-yellow-300 border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:ring-1 focus:ring-yellow-300 rounded text-center transition-all px-0"
                              />
                            </span>
                          );
                        }
                        return inner;
                      })}
                    </span>
                  </span>
                );
              }

              return (
                <span key={j}>
                  <span className={attr === 'className' ? "text-green-400 font-semibold" : ""}>{attr}</span>
                  =
                  <span className="text-yellow-300 font-semibold">{value}</span>
                </span>
              );
            }
            
            if (part === "className") return <span key={j} className="text-green-400">{part}</span>;
            
            if (part.startsWith("<") || part.startsWith("</")) {
              return <span key={j} className="text-purple-400 font-semibold">{part}</span>;
            }

            return <span key={j}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Code</h2>
        <button 
          onClick={copyToClipboard}
          className="text-xs font-medium text-purple-500 hover:text-purple-600 transition-colors"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="bg-[#2a154a] rounded-xl p-5 font-mono text-sm text-purple-200 overflow-x-auto shadow-inner border border-purple-800/50">
        <pre>
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </section>
  );
}
