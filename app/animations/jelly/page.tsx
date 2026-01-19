"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function JellyPage() {
	const [duration, setDuration] = useState(900);

	const codeString = `// Tailwind CSS\n<div className="jello-on-hover d-${duration}">\n  Jelly Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--jello-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Jelly" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					The <code className="text-purple-600 font-semibold text-sm bg-purple-50 px-2 py-0.5 rounded">jello</code> (or Jelly) animation makes the element wobble like a gelatin dessert. It uses 2D skew transformations to create a squishy, fluid motion.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Gelatin Text" duration={duration}>
							<p className="text-3xl font-bold text-teal-600 jello-on-hover cursor-pointer" style={getStyle()}>
								Squishy Text
							</p>
						</AnimationCard>

						<AnimationCard title="Jelly Blob" duration={duration}>
							<div 
								className="w-24 h-24 bg-teal-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg jello-on-hover flex items-center justify-center text-white font-bold"
								style={getStyle()}
							>
								JELLY
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Did you know?</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							The "Jello" effect is achieved by alternating <code className="text-pink-600 font-mono">skewX</code> and <code className="text-pink-600 font-mono">skewY</code> values rapidly.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
