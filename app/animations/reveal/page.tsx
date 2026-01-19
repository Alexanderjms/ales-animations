"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function RevealPage() {
	const [duration, setDuration] = useState(600);
	const [selectedVariant, setSelectedVariant] = useState("reveal-right");

	const variants = [
		{ id: "reveal-right", name: "Reveal Right", code: "revealIn", description: "Slide from left to right" },
		{ id: "reveal-left", name: "Reveal Left", code: "revealInLeft", description: "Slide from right to left" },
		{ id: "reveal-up", name: "Reveal Up", code: "revealInUp", description: "Slide from bottom to top" },
		{ id: "reveal-down", name: "Reveal Down", code: "revealInDown", description: "Slide from top to bottom" },
		{ id: "reveal-circle", name: "Reveal Circle", code: "revealInCircle", description: "Expand from center" },
	];

	const currentVariant = variants.find((v) => v.id === selectedVariant) || variants[0];

	const codeString = `// Tailwind CSS\n<div className="reveal-on-hover d-${duration}">\n  ${currentVariant.name} Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--reveal-name" as const]: currentVariant.code,
			["--reveal-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Reveal" secondPart="Animation" />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
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
						<AnimationCard title="Text Reveal" duration={duration}>
							<div className="overflow-hidden bg-gray-100 p-4 rounded-lg">
								<p 
									className="text-2xl font-bold text-gray-800 reveal-on-hover"
									style={getStyle()}
								>
									REVEAL ME
								</p>
							</div>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div 
								className="w-full h-32 bg-linear-to-r from-blue-400 to-purple-500 rounded-xl reveal-on-hover flex items-center justify-center text-white font-bold" 
								style={getStyle()}
							>
								REVEAL CONTENT
							</div>
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
								<span className="col-span-2 font-mono text-purple-600">reveal-on-hover</span>
							</div>
							<div className="grid grid-cols-3">
								<span className="font-medium">Variables:</span>{" "}
								<span className="col-span-2 font-mono text-blue-600">--reveal-name, --reveal-duration</span>
							</div>
							<div className="grid grid-cols-3 pt-2 border-t border-gray-100">
								<span className="font-medium">Technique:</span>{" "}
								<span className="col-span-2">CSS Clip-path</span>
							</div>
						</div>
					</div>

					<div className="bg-purple-600 rounded-xl p-4 shadow-md text-white">
						<h3 className="font-semibold text-sm mb-2 italic">Pro Tip</h3>
						<p className="text-xs opacity-90 leading-relaxed">
							Reveal animations work best with high-contrast elements and bold typography.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
