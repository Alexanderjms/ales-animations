"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type RotateSettings = {
	animationName: string;
	durationFactor: number;
	count: number;
};

export default function RotatesPage() {
	const [duration, setDuration] = useState(600);
	const [selectedVariant, setSelectedVariant] = useState("rotate-in");

	const rotateVariants = [
		{ id: "rotate-in", name: "Rotate In", code: "r-in", description: "Rotate in" },
		{ id: "rotate-in-dl", name: "Rotate In Down Left", code: "r-in-dl", description: "Rotate in from top left" },
		{ id: "rotate-in-dr", name: "Rotate In Down Right", code: "r-in-dr", description: "Rotate in from top right" },
		{ id: "rotate-in-ul", name: "Rotate In Up Left", code: "r-in-ul", description: "Rotate in from bottom left" },
		{ id: "rotate-in-ur", name: "Rotate In Up Right", code: "r-in-ur", description: "Rotate in from bottom right" },
		{ id: "rotate-out", name: "Rotate Out", code: "r-out", description: "Rotate out" },
		{ id: "rotate-out-dl", name: "Rotate Out Down Left", code: "r-out-dl", description: "Rotate out to bottom left" },
		{ id: "rotate-out-dr", name: "Rotate Out Down Right", code: "r-out-dr", description: "Rotate out to bottom right" },
		{ id: "rotate-out-ul", name: "Rotate Out Up Left", code: "r-out-ul", description: "Rotate out to top left" },
		{ id: "rotate-out-ur", name: "Rotate Out Up Right", code: "r-out-ur", description: "Rotate out to top right" },
	];

	const currentVariant = rotateVariants.find((variant) => variant.id === selectedVariant) || rotateVariants[0];

	const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getRotateSettings = (variant: string): RotateSettings => {
		switch (variant) {
			case "rotate-in-dl":
				return { animationName: "rotateInDownLeft", durationFactor: 1, count: 1 };
			case "rotate-in-dr":
				return { animationName: "rotateInDownRight", durationFactor: 1, count: 1 };
			case "rotate-in-ul":
				return { animationName: "rotateInUpLeft", durationFactor: 1, count: 1 };
			case "rotate-in-ur":
				return { animationName: "rotateInUpRight", durationFactor: 1, count: 1 };
			case "rotate-out":
				return { animationName: "rotateOut", durationFactor: 1, count: 1 };
			case "rotate-out-dl":
				return { animationName: "rotateOutDownLeft", durationFactor: 1, count: 1 };
			case "rotate-out-dr":
				return { animationName: "rotateOutDownRight", durationFactor: 1, count: 1 };
			case "rotate-out-ul":
				return { animationName: "rotateOutUpLeft", durationFactor: 1, count: 1 };
			case "rotate-out-ur":
				return { animationName: "rotateOutUpRight", durationFactor: 1, count: 1 };
			default:
				return { animationName: "rotateIn", durationFactor: 1, count: 1 };
		}
	};

	const getRotateStyle = (variant: string): React.CSSProperties => {
		const settings = getRotateSettings(variant);
		const resolvedDuration = Math.max(120, duration * settings.durationFactor);

		return {
			["--rotate-name" as const]: settings.animationName,
			["--rotate-duration" as const]: `${resolvedDuration}ms`,
			["--rotate-count" as const]: String(settings.count),
		} as React.CSSProperties;
	};

	const getTextClasses = () =>
		"text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 rotate-on-hover";

	const getBoxClasses = () =>
		"w-20 h-20 bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg rotate-on-hover";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Rotate's" secondPart="" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
						{rotateVariants.map((variant) => (
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
							<p className={getTextClasses()} style={getRotateStyle(selectedVariant)}>
								{currentVariant.name} Example Text
							</p>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div className={getBoxClasses()} style={getRotateStyle(selectedVariant)}></div>
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
