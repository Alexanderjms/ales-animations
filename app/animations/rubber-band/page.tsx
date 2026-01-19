"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function RubberBandPage() {
	const [duration, setDuration] = useState(750);

	const codeString = `// Tailwind CSS\n<div className="rubber-band-on-hover d-${duration}">\n  Rubber Band Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--rb-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Rubber Band" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					The <code className="text-purple-600 font-semibold text-sm bg-purple-50 px-2 py-0.5 rounded">rubberBand</code> animation stretches and squashes the element, giving it a tactile, elastic feel. It's perfect for buttons or items that should feel "clickable" and responsive.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Elastic Text" duration={duration}>
							<p 
								className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-pink-600 rubber-band-on-hover cursor-default"
								style={getStyle()}
							>
								Stretchy Text
							</p>
						</AnimationCard>

						<AnimationCard title="Elastic Button" duration={duration}>
							<button 
								className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg rubber-band-on-hover"
								style={getStyle()}
							>
								BOUNCE ME
							</button>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2 italic underline decoration-purple-500">How it works</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							It uses a sequence of <code className="text-pink-600 font-mono italic">scale3d</code> transformations to simulate the physics of a rubber band being pulled and released.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
