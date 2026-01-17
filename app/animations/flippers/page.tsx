"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type FlipSettings = {
	animationName: string;
	durationFactor: number;
	count: number;
};

export default function FlippersPage() {
	const [duration, setDuration] = useState(500);
	const [selectedVariant, setSelectedVariant] = useState("flip");

	const flipVariants = [
		{ id: "flip", name: "Flip", code: "flp", description: "Classic 3D flip" },
		{ id: "flip-x", name: "Flip X", code: "flp-x", description: "Flip on X axis" },
		{ id: "flip-y", name: "Flip Y", code: "flp-y", description: "Flip on Y axis" },
		{ id: "flip-in-x", name: "Flip In X", code: "flp-in-x", description: "Flip in on X axis" },
		{ id: "flip-in-y", name: "Flip In Y", code: "flp-in-y", description: "Flip in on Y axis" },
		{ id: "flip-out-x", name: "Flip Out X", code: "flp-out-x", description: "Flip out on X axis" },
		{ id: "flip-out-y", name: "Flip Out Y", code: "flp-out-y", description: "Flip out on Y axis" },
		{ id: "flip-fast", name: "Flip Fast", code: "flp-fast", description: "Faster flip" },
		{ id: "flip-slow", name: "Flip Slow", code: "flp-slow", description: "Slower flip" },
	];

	const currentVariant = flipVariants.find((variant) => variant.id === selectedVariant) || flipVariants[0];

	const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getFlipSettings = (variant: string): FlipSettings => {
		switch (variant) {
			case "flip-x":
			case "flip-in-x":
				return { animationName: "flipInX", durationFactor: 1.3, count: 1 };
			case "flip-y":
			case "flip-in-y":
				return { animationName: "flipInY", durationFactor: 1.3, count: 1 };
			case "flip-out-x":
				return { animationName: "flipOutX", durationFactor: 1.3, count: 1 };
			case "flip-out-y":
				return { animationName: "flipOutY", durationFactor: 1.3, count: 1 };
			case "flip-fast":
				return { animationName: "flip", durationFactor: 0.8, count: 1 };
			case "flip-slow":
				return { animationName: "flip", durationFactor: 1.8, count: 1 };
			default:
				return { animationName: "flip", durationFactor: 1.5, count: 1 };
		}
	};

	const getFlipStyle = (variant: string): React.CSSProperties => {
		const settings = getFlipSettings(variant);
		const resolvedDuration = Math.max(160, duration * settings.durationFactor);

		return {
			["--flip-name" as const]: settings.animationName,
			["--flip-duration" as const]: `${resolvedDuration}ms`,
			["--flip-count" as const]: String(settings.count),
		} as React.CSSProperties;
	};

	const getTextClasses = () =>
		"text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 flip-on-hover";

	const getBoxClasses = () =>
		"w-20 h-20 bg-linear-to-br from-slate-500 to-indigo-600 rounded-2xl shadow-lg flip-on-hover";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Flippers" secondPart="" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
						{flipVariants.map((variant) => (
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
							<p className={getTextClasses()} style={getFlipStyle(selectedVariant)}>
								{currentVariant.name} Example Text
							</p>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div className={getBoxClasses()} style={getFlipStyle(selectedVariant)}></div>
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
}
