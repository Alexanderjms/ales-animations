"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function FadeOutPage() {
  const [duration, setDuration] = useState(200);
  const [selectedVariant, setSelectedVariant] = useState("fade-out");

  const fadeVariants = [
    { 
      id: "fade-out", 
      name: "Fade Out", 
      code: "fo", 
      description: "Simple opacity transition" 
    },
    { 
      id: "fade-out-up", 
      name: "Fade Out Up", 
      code: "fo-up", 
      description: "Fade out with upward movement" 
    },
    { 
      id: "fade-out-down", 
      name: "Fade Out Down", 
      code: "fo-down", 
      description: "Fade out with downward movement" 
    },
    { 
      id: "fade-out-left", 
      name: "Fade Out Left", 
      code: "fo-left", 
      description: "Fade out from left side" 
    },
    { 
      id: "fade-out-right", 
      name: "Fade Out Right", 
      code: "fo-right", 
      description: "Fade out from right side" 
    },
    { 
      id: "fade-out-scale", 
      name: "Fade Out Scale", 
      code: "fo-scale", 
      description: "Fade out with scale effect" 
    },
    { 
      id: "fade-out-top-left", 
      name: "Fade Out Top Left", 
      code: "fo-tl", 
      description: "Fade out from top-left corner" 
    },
    { 
      id: "fade-out-top-right", 
      name: "Fade Out Top Right", 
      code: "fo-tr", 
      description: "Fade out from top-right corner" 
    },
    { 
      id: "fade-out-bottom-left", 
      name: "Fade Out Bottom Left", 
      code: "fo-bl", 
      description: "Fade out from bottom-left corner" 
    },
    { 
      id: "fade-out-bottom-right", 
      name: "Fade Out Bottom Right", 
      code: "fo-br", 
      description: "Fade out from bottom-right corner" 
    }
  ];

  const currentVariant = fadeVariants.find(v => v.id === selectedVariant) || fadeVariants[0];

  const codeString = `// Tailwind CSS
<div className="${currentVariant.code} d-${duration}">
  ${currentVariant.name} Animation
</div>`;

  const getAnimationClasses = (variant: string) => {
    const baseClasses = "text-xl font-medium text-gray-800 transition-all ease-out opacity-100 group-hover:opacity-0 text-center px-4";
    
    switch (variant) {
      case "fade-out-up":
        return `${baseClasses} group-hover:-translate-y-2`;
      case "fade-out-down":
        return `${baseClasses} group-hover:translate-y-2`;
      case "fade-out-left":
        return `${baseClasses} group-hover:-translate-x-2`;
      case "fade-out-right":
        return `${baseClasses} group-hover:translate-x-2`;
      case "fade-out-scale":
        return `${baseClasses} group-hover:scale-90`;
      case "fade-out-top-left":
        return `${baseClasses} group-hover:-translate-x-2 group-hover:-translate-y-2`;
      case "fade-out-top-right":
        return `${baseClasses} group-hover:translate-x-2 group-hover:-translate-y-2`;
      case "fade-out-bottom-left":
        return `${baseClasses} group-hover:-translate-x-2 group-hover:translate-y-2`;
      case "fade-out-bottom-right":
        return `${baseClasses} group-hover:translate-x-2 group-hover:translate-y-2`;
      default:
        return baseClasses;
    }
  };

  const getBoxAnimationClasses = (variant: string) => {
    const baseClasses = "w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg transition-all ease-out opacity-100 group-hover:opacity-0";
    
    switch (variant) {
      case "fade-out-up":
        return `${baseClasses} group-hover:-translate-y-2`;
      case "fade-out-down":
        return `${baseClasses} group-hover:translate-y-2`;
      case "fade-out-left":
        return `${baseClasses} group-hover:-translate-x-2`;
      case "fade-out-right":
        return `${baseClasses} group-hover:translate-x-2`;
      case "fade-out-scale":
        return `${baseClasses} group-hover:scale-90`;
      case "fade-out-top-left":
        return `${baseClasses} group-hover:-translate-x-2 group-hover:-translate-y-2`;
      case "fade-out-top-right":
        return `${baseClasses} group-hover:translate-x-2 group-hover:-translate-y-2`;
      case "fade-out-bottom-left":
        return `${baseClasses} group-hover:-translate-x-2 group-hover:translate-y-2`;
      case "fade-out-bottom-right":
        return `${baseClasses} group-hover:translate-x-2 group-hover:translate-y-2`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10 mb-10">
        <TitleComponents firstPart="Fade" secondPart="Out" />
        
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