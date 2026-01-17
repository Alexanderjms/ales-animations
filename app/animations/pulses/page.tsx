"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type PulseSettings = {
  durationFactor: number;
  count: number;
  scale: number;
};

export default function PulsesPage() {
  const [duration, setDuration] = useState(400);
  const [selectedVariant, setSelectedVariant] = useState("pulse");

  const pulseVariants = [
    { id: "pulse", name: "Pulse", code: "p", description: "Single pulse" },
    { id: "pulse-fast", name: "Pulse Fast", code: "p-fast", description: "Quick pulse" },
    { id: "pulse-slow", name: "Pulse Slow", code: "p-slow", description: "Slow pulse" },
    { id: "pulse-twice", name: "Pulse Twice", code: "p-2x", description: "Two pulses" },
    { id: "pulse-thrice", name: "Pulse Thrice", code: "p-3x", description: "Three pulses" },
    { id: "pulse-soft", name: "Pulse Soft", code: "p-soft", description: "Gentle pulse" },
    { id: "pulse-hard", name: "Pulse Hard", code: "p-hard", description: "Strong pulse" },
    { id: "pulse-infinity", name: "Pulse Infinity", code: "p-infinity", description: "Infinite pulse" },

  ];

  const currentVariant = pulseVariants.find((variant) => variant.id === selectedVariant) || pulseVariants[0];

  const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

  const getPulseSettings = (variant: string): PulseSettings => {
    switch (variant) {
      case "pulse-fast":
        return { durationFactor: 0.3, count: 1, scale: 1.4 };
      case "pulse-slow":
        return { durationFactor: 2, count: 1, scale: 1.4 };
      case "pulse-twice":
        return { durationFactor: 1, count: 2, scale: 1.4 };
      case "pulse-thrice":
        return { durationFactor: 1, count: 3, scale: 1.4 };
      case "pulse-soft":
        return { durationFactor: 1, count: 1, scale: 1.4 };
      case "pulse-hard":
        return { durationFactor: 0.7, count: 10, scale: 1.4 };
        case "pulse-infinity":
        return { durationFactor: 1, count: 999, scale: 1.4 };
      default:
        return { durationFactor: 0.3, count: 1, scale: 1.4 };
    }
  };

  const getTextClasses = () =>
    "text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 pulse-on-hover";

  const getBoxClasses = () =>
    "w-20 h-20 bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg pulse-on-hover";

  const getPulseStyle = (variant: string): React.CSSProperties => {
    const settings = getPulseSettings(variant);
    const resolvedDuration = Math.max(80, duration * settings.durationFactor);

    return {
      ["--pulse-duration" as const]: `${resolvedDuration}ms`,
      ["--pulse-count" as const]: String(settings.count),
      ["--pulse-scale" as const]: String(settings.scale),
    } as React.CSSProperties;
  };

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10 mb-10">
          <TitleComponents firstPart="Pulses" secondPart="" />

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {pulseVariants.map((variant) => (
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
                <p className={getTextClasses()} style={getPulseStyle(selectedVariant)}>
                  {currentVariant.name} Example Text
                </p>
              </AnimationCard>

              <AnimationCard title="Box Example" duration={duration}>
                <div className={getBoxClasses()} style={getPulseStyle(selectedVariant)}></div>
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
                  <code className="bg-gray-100 px-1 rounded">{duration} ms</code>
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
};
