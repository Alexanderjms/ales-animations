"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

type ZoomSettings = {
	animationName: string;
	durationFactor: number;
	count: number;
};

export default function ZoomsPage() {
	const [duration, setDuration] = useState(600);
	const [selectedVariant, setSelectedVariant] = useState("zoom-in");

	const zoomVariants = [
		{ id: "zoom-in", name: "Zoom In", code: "z-in", description: "Zoom in" },
		{ id: "zoom-in-up", name: "Zoom In Up", code: "z-in-up", description: "Zoom in upward" },
		{ id: "zoom-in-down", name: "Zoom In Down", code: "z-in-down", description: "Zoom in downward" },
		{ id: "zoom-in-left", name: "Zoom In Left", code: "z-in-left", description: "Zoom in from left" },
		{ id: "zoom-in-right", name: "Zoom In Right", code: "z-in-right", description: "Zoom in from right" },
		{ id: "zoom-out", name: "Zoom Out", code: "z-out", description: "Zoom out" },
		{ id: "zoom-out-up", name: "Zoom Out Up", code: "z-out-up", description: "Zoom out upward" },
		{ id: "zoom-out-down", name: "Zoom Out Down", code: "z-out-down", description: "Zoom out downward" },
		{ id: "zoom-out-left", name: "Zoom Out Left", code: "z-out-left", description: "Zoom out to left" },
		{ id: "zoom-out-right", name: "Zoom Out Right", code: "z-out-right", description: "Zoom out to right" },
	];

	const currentVariant = zoomVariants.find((variant) => variant.id === selectedVariant) || zoomVariants[0];

	const codeString = `// Tailwind CSS\n<div className="${currentVariant.code} d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getZoomSettings = (variant: string): ZoomSettings => {
		switch (variant) {
			case "zoom-in-up":
				return { animationName: "zoomInUp", durationFactor: 1, count: 1 };
			case "zoom-in-down":
				return { animationName: "zoomInDown", durationFactor: 1, count: 1 };
			case "zoom-in-left":
				return { animationName: "zoomInLeft", durationFactor: 1, count: 1 };
			case "zoom-in-right":
				return { animationName: "zoomInRight", durationFactor: 1, count: 1 };
			case "zoom-out":
				return { animationName: "zoomOut", durationFactor: 1, count: 1 };
			case "zoom-out-up":
				return { animationName: "zoomOutUp", durationFactor: 1, count: 1 };
			case "zoom-out-down":
				return { animationName: "zoomOutDown", durationFactor: 1, count: 1 };
			case "zoom-out-left":
				return { animationName: "zoomOutLeft", durationFactor: 1, count: 1 };
			case "zoom-out-right":
				return { animationName: "zoomOutRight", durationFactor: 1, count: 1 };
			default:
				return { animationName: "zoomIn", durationFactor: 1, count: 1 };
		}
	};

	const getZoomStyle = (variant: string): React.CSSProperties => {
		const settings = getZoomSettings(variant);
		const resolvedDuration = Math.max(120, duration * settings.durationFactor);

		return {
			["--zoom-name" as const]: settings.animationName,
			["--zoom-duration" as const]: `${resolvedDuration}ms`,
			["--zoom-count" as const]: String(settings.count),
		} as React.CSSProperties;
	};

	const getTextClasses = () =>
		"text-xl font-medium text-gray-800 transition-all ease-out text-center px-4 zoom-on-hover";

	const getBoxClasses = () =>
		"w-20 h-20 bg-linear-to-br from-emerald-500 to-cyan-600 rounded-2xl shadow-lg zoom-on-hover";

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Zoom's" secondPart="" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
						{zoomVariants.map((variant) => (
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
							<p className={getTextClasses()} style={getZoomStyle(selectedVariant)}>
								{currentVariant.name} Example Text
							</p>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div className={getBoxClasses()} style={getZoomStyle(selectedVariant)}></div>
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
