"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function PerspectivePage() {
	const [duration, setDuration] = useState(600);
	const [selectedVariant, setSelectedVariant] = useState("tilt-x");

	const variants = [
		{ id: "tilt-x", name: "Tilt X", code: "perspective-tilt", description: "Perspective rotation on X axis" },
		{ id: "tilt-y", name: "Tilt Y", code: "perspective-tilt-y", description: "Perspective rotation on Y axis" },
		{ id: "lift", name: "3D Lift", code: "perspective-lift", description: "Bring forward in Z space" },
		{ id: "push", name: "3D Push", code: "perspective-push", description: "Push back in Z space" },
	];

	const currentVariant = variants.find((v) => v.id === selectedVariant) || variants[0];

	const codeString = `// Tailwind CSS\n<div className="perspective-on-hover d-${duration}">\n  ${currentVariant.name}\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--p-name" as const]: currentVariant.code,
			["--p-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Perspective" secondPart="Animation" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
						{variants.map((v) => (
							<button
								key={v.id}
								onClick={() => setSelectedVariant(v.id)}
								className={`p-4 rounded-xl border-2 text-left transition-all ${
									selectedVariant === v.id
										? "border-purple-500 bg-purple-50 shadow-lg"
										: "border-gray-200 bg-white hover:border-purple-300"
								}`}
							>
								<div className="font-semibold text-sm text-gray-800 mb-1">{v.name}</div>
								<div className="text-[10px] text-gray-500">{v.description}</div>
							</button>
						))}
					</div>
				</section>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples - {currentVariant.name}</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="3D Card" duration={duration}>
							<div 
								className="w-full h-40 bg-linear-to-tr from-purple-600 to-indigo-600 rounded-2xl shadow-xl perspective-on-hover flex items-center justify-center text-white font-black text-3xl"
								style={getStyle()}
							>
								DEPTH
							</div>
						</AnimationCard>

						<AnimationCard title="Perspective Text" duration={duration}>
							<p 
								className="text-4xl font-bold text-gray-800 perspective-on-hover px-4"
								style={getStyle()}
							>
								{currentVariant.name}
							</p>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2 font-mono">Quick Info</h3>
						<div className="space-y-2 text-xs text-gray-600">
							<div className="grid grid-cols-3">
								<span className="font-medium">Class:</span>{" "}
								<span className="col-span-2 font-mono text-purple-600">perspective-on-hover</span>
							</div>
							<div className="grid grid-cols-3">
								<span className="font-medium">Spec:</span>{" "}
								<span className="col-span-2">Uses perspective: 800px</span>
							</div>
							<div className="grid grid-cols-3 pt-2 border-t border-gray-100">
								<span className="font-medium">Axis:</span>{" "}
								<span className="col-span-2">X, Y, Z Transformation</span>
							</div>
						</div>
					</div>

					<div className="bg-indigo-600 rounded-xl p-4 shadow-md text-white">
						<h3 className="font-semibold text-sm mb-2 italic">UI Depth</h3>
						<p className="text-xs opacity-90 leading-relaxed">
							Perspective transforms create a "tangible" feel. Use Tilt Y for sidebars or menus to suggest orientation within a 3D space.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
