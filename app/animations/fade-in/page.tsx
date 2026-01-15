"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import StickyNote from "@/app/components/components-ui/sticky-note";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function FadeInPage() {
  const [duration, setDuration] = useState(200);
  const [selectedVariant, setSelectedVariant] = useState("fade-in");

  const fadeVariants = [
    { 
      id: "fade-in", 
      name: "Fade In", 
      code: "fi", 
      description: "Simple opacity transition" 
    },
    { 
      id: "fade-in-up", 
      name: "Fade In Up", 
      code: "fi-up", 
      description: "Fade in with upward movement" 
    },
    { 
      id: "fade-in-down", 
      name: "Fade In Down", 
      code: "fi-down", 
      description: "Fade in with downward movement" 
    },
    { 
      id: "fade-in-left", 
      name: "Fade In Left", 
      code: "fi-left", 
      description: "Fade in from left side" 
    },
    { 
      id: "fade-in-right", 
      name: "Fade In Right", 
      code: "fi-right", 
      description: "Fade in from right side" 
    },
    { 
      id: "fade-in-scale", 
      name: "Fade In Scale", 
      code: "fi-scale", 
      description: "Fade in with scale effect" 
    },
    { 
      id: "fade-in-top-left", 
      name: "Fade In Top Left", 
      code: "fi-tl", 
      description: "Fade in from top-left corner" 
    },
    { 
      id: "fade-in-top-right", 
      name: "Fade In Top Right", 
      code: "fi-tr", 
      description: "Fade in from top-right corner" 
    },
    { 
      id: "fade-in-bottom-left", 
      name: "Fade In Bottom Left", 
      code: "fi-bl", 
      description: "Fade in from bottom-left corner" 
    },
    { 
      id: "fade-in-bottom-right", 
      name: "Fade In Bottom Right", 
      code: "fi-br", 
      description: "Fade in from bottom-right corner" 
    }
  ];

  const currentVariant = fadeVariants.find(v => v.id === selectedVariant) || fadeVariants[0];

  const codeString = `// Tailwind CSS
<div className="${currentVariant.code} d-${duration}">
  ${currentVariant.name} Animation
</div>`;

  const getAnimationClasses = (variant: string) => {
    const baseClasses = "text-xl font-medium text-gray-800 transition-all ease-out opacity-0 group-hover:opacity-100 text-center px-4";
    
    switch (variant) {
      case "fade-in-up":
        return `${baseClasses} translate-y-2 group-hover:translate-y-0`;
      case "fade-in-down":
        return `${baseClasses} -translate-y-2 group-hover:translate-y-0`;
      case "fade-in-left":
        return `${baseClasses} translate-x-2 group-hover:translate-x-0`;
      case "fade-in-right":
        return `${baseClasses} -translate-x-2 group-hover:translate-x-0`;
      case "fade-in-scale":
        return `${baseClasses} scale-90 group-hover:scale-100`;
      case "fade-in-top-left":
        return `${baseClasses} -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      case "fade-in-top-right":
        return `${baseClasses} translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      case "fade-in-bottom-left":
        return `${baseClasses} -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      case "fade-in-bottom-right":
        return `${baseClasses} translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      default:
        return baseClasses;
    }
  };

  const getBoxAnimationClasses = (variant: string) => {
    const baseClasses = "w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg transition-all ease-out opacity-0 group-hover:opacity-100";
    
    switch (variant) {
      case "fade-in-up":
        return `${baseClasses} translate-y-2 group-hover:translate-y-0`;
      case "fade-in-down":
        return `${baseClasses} -translate-y-2 group-hover:translate-y-0`;
      case "fade-in-left":
        return `${baseClasses} translate-x-2 group-hover:translate-x-0`;
      case "fade-in-right":
        return `${baseClasses} -translate-x-2 group-hover:translate-x-0`;
      case "fade-in-scale":
        return `${baseClasses} scale-90 group-hover:scale-100`;
      case "fade-in-top-left":
        return `${baseClasses} -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      case "fade-in-top-right":
        return `${baseClasses} translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      case "fade-in-bottom-left":
        return `${baseClasses} -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      case "fade-in-bottom-right":
        return `${baseClasses} translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10 mb-10">
        <TitleComponents firstPart="Fade" secondPart="In" />
        
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {fadeVariants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-105 ${
                  selectedVariant === variant.id
                    ? "border-purple-500 bg-purple-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-purple-300"
                }`}
              >
                <div className="font-semibold text-sm text-gray-800 mb-1">
                  {variant.name}
                </div>
                <div className="text-xs text-purple-600 font-mono mb-1">
                  {variant.code}
                </div>
                <div className="text-xs text-gray-500">
                  {variant.description}
                </div>
              </button>
            ))}
          </div>
        </section>

        <CodeBlock
          code={codeString}
          duration={duration}
          onDurationChange={setDuration}
        />

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Examples - {currentVariant.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                Text Example
              </h3>
              <div className="h-48 border border-gray-200 rounded-2xl flex items-center justify-center bg-gray-50/50 shadow-sm relative group overflow-hidden">
                <p
                  style={{ transitionDuration: `${duration}ms` }}
                  className={getAnimationClasses(selectedVariant)}
                >
                  {currentVariant.name} Example Text
                </p>
                <span className="absolute bottom-4 text-[10px] text-gray-400">
                  Hover inside to see effect
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                Box Example
              </h3>
              <div className="h-48 border border-gray-200 rounded-2xl flex items-center justify-center bg-gray-50/50 shadow-sm relative group overflow-hidden">
                <div
                  style={{ transitionDuration: `${duration}ms` }}
                  className={getBoxAnimationClasses(selectedVariant)}
                ></div>
                <span className="absolute bottom-4 text-[10px] text-gray-400">
                  Hover inside to see effect
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 block">
        <div className="mt-29 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-sm text-gray-800 mb-2">Quick Info</h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div><span className="font-medium">Class:</span> <code className="bg-gray-100 px-1 rounded">{currentVariant.code}</code></div>
              <div><span className="font-medium">Duration:</span> <code className="bg-gray-100 px-1 rounded">{duration} ms</code></div>
              <div><span className="font-medium">Type:</span> {currentVariant.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}