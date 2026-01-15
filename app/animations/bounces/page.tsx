"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import StickyNote from "@/app/components/components-ui/sticky-note";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function BouncesPage() {
  const [duration, setDuration] = useState(600);
  const [selectedVariant, setSelectedVariant] = useState("bounce-up");

  const bounceVariants = [
    { id: "bounce-up", name: "Bounce Up", code: "b-up", description: "Bounce with upward movement" },
    { id: "bounce-scale", name: "Bounce Scale", code: "b-scale", description: "Bounce with scale effect" },
  ];

  const currentVariant = bounceVariants.find(v => v.id === selectedVariant) || bounceVariants[0];

  const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

  const getAnimationClasses = (variant: string) => {
    const baseClasses = "text-xl font-medium text-gray-800 transform transition-all ease-out opacity-100 text-center px-4";

    switch (variant) {
      case "bounce-up":
        return `${baseClasses} group-hover:-translate-y-2 group-hover:animate-bounce`;
      case "bounce-scale":
        return `${baseClasses} scale-90 group-hover:scale-100 group-hover:animate-bounce`;
    }
  };

  const getBoxAnimationClasses = (variant: string) => {
    const baseClasses = "w-20 h-20 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl shadow-lg transform transition-all ease-out opacity-100";

    switch (variant) {
      case "bounce-up":
        return `${baseClasses} group-hover:-translate-y-2 group-hover:animate-bounce`;
      case "bounce-scale":
        return `${baseClasses} scale-90 group-hover:scale-100 group-hover:animate-bounce`;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10 mb-10">
        <TitleComponents firstPart="Bounces" secondPart="" />
        
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {bounceVariants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all hover:scale-105 ${
                  selectedVariant === variant.id
                    ? "border-purple-500 bg-purple-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-purple-300"
                }`}
              >
                <div className="font-semibold text-sm text-gray-800 mb-1">{variant.name}</div>
                <div className="text-xs text-purple-600 font-mono mb-1">{variant.code}</div>
                <div className="text-xs text-gray-500">{variant.description}</div>
              </button>
            ))}
          </div>
        </section>

        <CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Examples - {currentVariant.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationCard title="Text Example" duration={duration}>
              <p className={getAnimationClasses(selectedVariant)}>
                {currentVariant.name} Example Text
              </p>
            </AnimationCard>

            <AnimationCard title="Box Example" duration={duration}>
              <div className={getBoxAnimationClasses(selectedVariant)} style={{ transitionDuration: `${duration}ms` }}></div>
            </AnimationCard>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 block">
        <div className="mt-24 flex flex-col gap-4">
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