"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type WobbleSettings = {
	animationName: string;
	durationFactor: number;
	count: number | string;
};

export default function WobblePage() {
	const [duration, setDuration] = useState(800);
	const [selectedVariant, setSelectedVariant] = useState("wobble-basic");

	const wobbleVariants = [
		{ id: "wobble-basic", name: "Wobble", code: "wobble", description: "Standard wobble animation" },
		{ id: "wobble-slow", name: "Slow Wobble", code: "wobble d-slow", description: "Slower pendulum-like effect" },
		{ id: "wobble-fast", name: "Fast Wobble", code: "wobble d-fast", description: "Quick vibration wobble" },
		{ id: "wobble-infinite", name: "Infinite Wobble", code: "wobble infinite", description: "Continuous wobble effect" },
	];

	const currentVariant = wobbleVariants.find((variant) => variant.id === selectedVariant) || wobbleVariants[0];

	const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getWobbleSettings = (variant: string): WobbleSettings => {
		switch (variant) {
			case "wobble-slow":
				return { animationName: "wobble", durationFactor: 1.5, count: 1 };
			case "wobble-fast":
				return { animationName: "wobble", durationFactor: 0.5, count: 1 };
			case "wobble-infinite":
				return { animationName: "wobble", durationFactor: 1, count: "infinite" };
			default:
				return { animationName: "wobble", durationFactor: 1, count: 1 };
		}
	};

	const getWobbleStyle = (variant: string): React.CSSProperties => {
		const settings = getWobbleSettings(variant);
		const resolvedDuration = Math.max(120, duration * settings.durationFactor);

		return {
			["--wobble-name" as const]: settings.animationName,
			["--wobble-duration" as const]: `${resolvedDuration}ms`,
			["--wobble-count" as const]: String(settings.count),
		} as React.CSSProperties;
	};

	const getTextClasses = () =>
		"text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 wobble-on-hover";

	const getBoxClasses = () =>
		"w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg wobble-on-hover flex items-center justify-center text-white font-bold";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Wobble" secondPart="Animation" />


				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
						{wobbleVariants.map((variant) => (
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
								<div className="text-[10px] text-purple-600 font-mono mb-1">{variant.code}</div>
								<div className="text-[10px] text-gray-400 line-clamp-2 leading-tight">{variant.description}</div>
							</button>
						))}
					</div>
				</section>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples - {currentVariant.name}</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Text Example" duration={duration}>
							<p className={getTextClasses()} style={getWobbleStyle(selectedVariant)}>
								Wobble Text Effect
							</p>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div className={getBoxClasses()} style={getWobbleStyle(selectedVariant)}>
								WOBBLE
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			
		</div>
	);
}
