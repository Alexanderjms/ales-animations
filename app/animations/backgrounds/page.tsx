"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function BackgroundsPage() {
	const [duration, setDuration] = useState(3000);

	const codeString = `// Tailwind CSS\n<div className="bg-pan-hover d-${duration} bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">\n  Background Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--bg-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Background" secondPart="Animations" />

				<p className="text-gray-600 leading-relaxed">
					Dynamic backgrounds bring life to static layouts. These effects often involve <code className="text-purple-600 font-bold">background-position</code> shifts or smooth gradient transitions.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 gap-8">
						<AnimationCard title="Gradient Pan" duration={duration}>
							<div 
								className="w-full h-48 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl bg-pan-hover flex items-center justify-center text-white"
								style={getStyle()}
							>
								<span className="text-2xl font-black tracking-widest uppercase">Moving Gradient</span>
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Performance Tip</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Animating <code className="text-pink-600">background-position</code> is slightly more expensive for the GPU than <code className="text-pink-600">transform</code>. For very large areas, consider using an animated pseudo-element with a transform instead.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
