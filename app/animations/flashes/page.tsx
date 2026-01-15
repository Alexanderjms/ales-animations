"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import StickyNote from "@/app/components/components-ui/sticky-note";
import AnimationCard from "@/app/components/components-ui/animation-card";

type FlashSettings = {
  durationFactor: number;
  count: number;
  minOpacity: number;
};

export default function FlashesPage() {
  const [duration, setDuration] = useState(400);
  const [selectedVariant, setSelectedVariant] = useState("flash");

  const flashVariants = [
    { id: "flash", name: "Flash", code: "fl", description: "Single flash" },
    { id: "flash-fast", name: "Flash Fast", code: "fl-fast", description: "Quick flash" },
    { id: "flash-slow", name: "Flash Slow", code: "fl-slow", description: "Slow flash" },
    { id: "flash-twice", name: "Flash Twice", code: "fl-2x", description: "Two flashes" },
    { id: "flash-thrice", name: "Flash Thrice", code: "fl-3x", description: "Three flashes" },
    { id: "flash-soft", name: "Flash Soft", code: "fl-soft", description: "Gentle flash" },
    { id: "flash-hard", name: "Flash Hard", code: "fl-hard", description: "Strong flash" },
  ];

  const currentVariant =
    flashVariants.find((variant) => variant.id === selectedVariant) || flashVariants[0];

  const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

  const getFlashSettings = (variant: string): FlashSettings => {
    switch (variant) {
      case "flash-fast":
        return { durationFactor: 0.5, count: 1, minOpacity: 0.2 };
      case "flash-slow":
        return { durationFactor: 2, count: 1, minOpacity: 0.2 };
      case "flash-twice":
        return { durationFactor: 1, count: 2, minOpacity: 0.2 };
      case "flash-thrice":
        return { durationFactor: 1, count: 3, minOpacity: 0.2 };
      case "flash-soft":
        return { durationFactor: 1, count: 1, minOpacity: 0.5 };
      case "flash-hard":
        return { durationFactor: 1, count: 1, minOpacity: 0.05 };
      default:
        return { durationFactor: 1, count: 1, minOpacity: 0.2 };
    }
  };

  const getFlashStyle = (variant: string): React.CSSProperties => {
    const settings = getFlashSettings(variant);
    const resolvedDuration = Math.max(80, duration * settings.durationFactor);

    return {
      ["--flash-duration" as const]: `${resolvedDuration}ms`,
      ["--flash-count" as const]: settings.count,
      ["--flash-min-opacity" as const]: settings.minOpacity,
    } as React.CSSProperties;
  };

  const getTextClasses = () =>
    "text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 flash-on-hover";

  const getBoxClasses = () =>
    "w-20 h-20 bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg flash-on-hover";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10 mb-10">
        <TitleComponents firstPart="Flashes" secondPart="" />

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {flashVariants.map((variant) => (
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
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Examples - {currentVariant.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationCard title="Text Example" duration={duration}>
              <p className={getTextClasses()} style={getFlashStyle(selectedVariant)}>
                {currentVariant.name} Example Text
              </p>
            </AnimationCard>

            <AnimationCard title="Box Example" duration={duration}>
              <div className={getBoxClasses()} style={getFlashStyle(selectedVariant)}></div>
            </AnimationCard>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 block">
        <div className="mt-29 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-sm text-gray-800 mb-2">Quick Info</h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div>
                <span className="font-medium">Class:</span>{" "}
                <code className="bg-gray-100 px-1 rounded">{currentVariant.code}</code>
              </div>
              <div>
                <span className="font-medium">Duration:</span>{" "}
                <code className="bg-gray-100 px-1 rounded">d-{duration}</code>
              </div>
              <div>
                <span className="font-medium">Type:</span> {currentVariant.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}