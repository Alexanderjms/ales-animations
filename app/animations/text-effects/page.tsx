"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function TextEffectsPage() {
	const [duration, setDuration] = useState(600);
	const [selectedVariant, setSelectedVariant] = useState("focus-in");

	const variants = [
		{ id: "focus-in", name: "Blur Focus", code: "text-focus-in", description: "Soft blur to clear text" },
		{ id: "expand", name: "Letter Space", code: "text-expand", description: "Expand letter spacing" },
	];

	const currentVariant = variants.find((v) => v.id === selectedVariant) || variants[0];

	const codeString = `// Tailwind CSS\n<p className="${currentVariant.code} d-${duration}">\n  Animated Text\n</p>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--text-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Text" secondPart="Effects" />

				<p className="text-gray-600 leading-relaxed">
					Typography-focused animations that emphasize readability and style. These effects manipulate <code className="text-purple-600 font-bold">blur</code> and <code className="text-purple-600 font-bold">letter-spacing</code>.
				</p>

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-4">Variants</h2>
					<div className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-6">
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
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 gap-8">
						<AnimationCard title="Text Preview" duration={duration}>
							<p 
								className={`text-5xl font-black text-center text-indigo-600 uppercase ${currentVariant.code}`}
								style={getStyle()}
							>
								HYPERTEXT
							</p>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Typography Tip</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Text animations perform best on larger headers. For body text, keep durations short (under 400ms) to avoid frustrating the reader.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
