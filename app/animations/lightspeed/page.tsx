"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type LightspeedSettings = {
	animationName: string;
	durationFactor: number;
	count: number;
};

export default function LightspeedPage() {
	const [duration, setDuration] = useState(600);
	const [selectedVariant, setSelectedVariant] = useState("ls-in-right");

	const lsVariants = [
		{ id: "ls-in-right", name: "In Right", code: "ls-in-r", description: "Lightspeed in from right" },
		{ id: "ls-in-left", name: "In Left", code: "ls-in-l", description: "Lightspeed in from left" },
		{ id: "ls-out-right", name: "Out Right", code: "ls-out-r", description: "Lightspeed out to right" },
		{ id: "ls-out-left", name: "Out Left", code: "ls-out-l", description: "Lightspeed out to left" },
	];

	const currentVariant = lsVariants.find((variant) => variant.id === selectedVariant) || lsVariants[0];

	const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getLSSettings = (variant: string): LightspeedSettings => {
		switch (variant) {
			case "ls-in-left":
				return { animationName: "lightSpeedInLeft", durationFactor: 1, count: 1 };
			case "ls-out-right":
				return { animationName: "lightSpeedOutRight", durationFactor: 1, count: 1 };
			case "ls-out-left":
				return { animationName: "lightSpeedOutLeft", durationFactor: 1, count: 1 };
			default:
				return { animationName: "lightSpeedInRight", durationFactor: 1, count: 1 };
		}
	};

	const getLSStyle = (variant: string): React.CSSProperties => {
		const settings = getLSSettings(variant);
		const resolvedDuration = Math.max(120, duration * settings.durationFactor);

		return {
			["--ls-name" as const]: settings.animationName,
			["--ls-duration" as const]: `${resolvedDuration}ms`,
			["--ls-count" as const]: String(settings.count),
		} as React.CSSProperties;
	};

	const getTextClasses = () =>
		"text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 lightspeed-on-hover";

	const getBoxClasses = () =>
		"w-20 h-20 bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg lightspeed-on-hover";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Lightspeed" secondPart="" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
						{lsVariants.map((variant) => (
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
							<p className={getTextClasses()} style={getLSStyle(selectedVariant)}>
								{currentVariant.name} Example Text
							</p>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div className={getBoxClasses()} style={getLSStyle(selectedVariant)}></div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Quick Info</h3>
						<div className="space-y-2 text-xs text-gray-600">
							<div className="grid grid-cols-3">
								<span className="font-medium">Class:</span>{" "}
								<code className="bg-gray-100 px-1 rounded col-span-2 text-center w-fit">{currentVariant.code}</code>
							</div>
							<div className="grid grid-cols-3">
								<span className="font-medium">Duration:</span>{" "}
								<code className="bg-gray-100 px-1 rounded col-span-2 text-center w-fit">{duration} ms</code>
							</div>
							<div className="grid grid-cols-3">
								<span className="font-medium">Type:</span> 
								<span className="col-span-2">{currentVariant.description}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

