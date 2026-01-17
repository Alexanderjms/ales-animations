"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type SlideSettings = {
	animationName: string;
	durationFactor: number;
	count: number;
};

export default function SlidingsPage() {
	const [duration, setDuration] = useState(400);
	const [selectedVariant, setSelectedVariant] = useState("slide-in");

	const slideVariants = [
		{ id: "slide-in", name: "Slide In", code: "s-in", description: "Slide in" },
		{ id: "slide-in-up", name: "Slide In Up", code: "s-in-up", description: "Slide in upward" },
		{ id: "slide-in-down", name: "Slide In Down", code: "s-in-down", description: "Slide in downward" },
		{ id: "slide-in-left", name: "Slide In Left", code: "s-in-left", description: "Slide in from left" },
		{ id: "slide-in-right", name: "Slide In Right", code: "s-in-right", description: "Slide in from right" },
		{ id: "slide-out", name: "Slide Out", code: "s-out", description: "Slide out" },
		{ id: "slide-out-up", name: "Slide Out Up", code: "s-out-up", description: "Slide out upward" },
		{ id: "slide-out-down", name: "Slide Out Down", code: "s-out-down", description: "Slide out downward" },
		{ id: "slide-out-left", name: "Slide Out Left", code: "s-out-left", description: "Slide out to left" },
		{ id: "slide-out-right", name: "Slide Out Right", code: "s-out-right", description: "Slide out to right" },
	];

	const currentVariant = slideVariants.find((variant) => variant.id === selectedVariant) || slideVariants[0];

	const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getSlideSettings = (variant: string): SlideSettings => {
		switch (variant) {
			case "slide-in-up":
				return { animationName: "slideInUp", durationFactor: 1, count: 1 };
			case "slide-in-down":
				return { animationName: "slideInDown", durationFactor: 1, count: 1 };
			case "slide-in-left":
				return { animationName: "slideInLeft", durationFactor: 1, count: 1 };
			case "slide-in-right":
				return { animationName: "slideInRight", durationFactor: 1, count: 1 };
			case "slide-out":
				return { animationName: "slideOutDown", durationFactor: 1, count: 1 };
			case "slide-out-up":
				return { animationName: "slideOutUp", durationFactor: 1, count: 1 };
			case "slide-out-down":
				return { animationName: "slideOutDown", durationFactor: 1, count: 1 };
			case "slide-out-left":
				return { animationName: "slideOutLeft", durationFactor: 1, count: 1 };
			case "slide-out-right":
				return { animationName: "slideOutRight", durationFactor: 1, count: 1 };
			default:
				return { animationName: "slideInUp", durationFactor: 1, count: 1 };
		}
	};

	const getSlideStyle = (variant: string): React.CSSProperties => {
		const settings = getSlideSettings(variant);
		const resolvedDuration = Math.max(120, duration * settings.durationFactor);

		return {
			["--slide-name" as const]: settings.animationName,
			["--slide-duration" as const]: `${resolvedDuration}ms`,
			["--slide-count" as const]: String(settings.count),
		} as React.CSSProperties;
	};

	const getTextClasses = () =>
		"text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 slide-on-hover";

	const getBoxClasses = () =>
		"w-20 h-20 bg-linear-to-br from-rose-500 to-orange-500 rounded-2xl shadow-lg slide-on-hover";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Slidings" secondPart="" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
						{slideVariants.map((variant) => (
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
							<p className={getTextClasses()} style={getSlideStyle(selectedVariant)}>
								{currentVariant.name} Example Text
							</p>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div className={getBoxClasses()} style={getSlideStyle(selectedVariant)}></div>
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
