"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function TypingPage() {
	const [duration, setDuration] = useState(2000);
	const [selectedVariant, setSelectedVariant] = useState("typing-standard");

	const variants = [
		{ id: "typing-standard", name: "Standard", steps: 15, caret: "#8b5cf6" },
		{ id: "typing-fast", name: "Fast", steps: 15, caret: "#3b82f6" },
		{ id: "typing-long", name: "Long Text", steps: 30, caret: "#ef4444" },
	];

	const currentVariant = variants.find((v) => v.id === selectedVariant) || variants[0];

	const codeString = `// Tailwind CSS\n<p className="typing-on-hover d-${duration}">\n  Typewriter Effect...\n</p>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--type-duration" as const]: `${selectedVariant === "typing-fast" ? duration / 2 : duration}ms`,
			["--type-steps" as const]: currentVariant.steps,
			["--type-caret" as const]: currentVariant.caret,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Typing" secondPart="Effect" />

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
								<div className="font-semibold text-sm text-gray-800 mb-1">{v.name} Typing</div>
								<div className="text-[10px] text-gray-500">{v.steps} Characters</div>
							</button>
						))}
					</div>
				</section>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 gap-8">
						<AnimationCard title="Typewriter Preview" duration={duration}>
							<div className="flex justify-center w-full">
								<p 
									className="text-3xl font-mono font-bold text-gray-800 typing-on-hover"
									style={getStyle()}
								>
									{selectedVariant === "typing-long" ? "This is a much longer typing sequence" : "Hello World!"}
								</p>
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
								<span className="col-span-2 font-mono text-purple-600">typing-on-hover</span>
							</div>
							<div className="grid grid-cols-3">
								<span className="font-medium">Mechanism:</span>{" "}
								<span className="col-span-2">Width + Steps()</span>
							</div>
							<div className="grid grid-cols-3 pt-2 border-t border-gray-100">
								<span className="font-medium">Caret:</span>{" "}
								<span className="col-span-2">Animated Border</span>
							</div>
						</div>
					</div>

					<div className="bg-gray-800 rounded-xl p-4 shadow-md text-cyan-400 font-mono">
						<h3 className="text-sm mb-2 uppercase tracking-widest border-b border-cyan-400/30 pb-1">Developer Note</h3>
						<p className="text-[10px] leading-relaxed">
							Ensure <code className="text-white">white-space: nowrap</code> is applied to prevent text wrapping during the width expansion.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
