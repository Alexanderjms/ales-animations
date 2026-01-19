"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function ScalePage() {
	const [duration, setDuration] = useState(400);

	const codeString = `// Tailwind CSS\n<div className="scale-on-hover d-${duration}">\n  Scaled Element\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--scale-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Scaling" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					Scaling is the most fundamental UI interaction. Smooth scaling suggests focus and depth, making the interface feel more responsive and physical.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Scale Up" duration={duration}>
							<div 
								className="w-24 h-24 bg-pink-500 rounded-full scale-on-hover shadow-lg flex items-center justify-center text-white"
								style={getStyle()}
							>
								<span className="text-2xl font-bold">+</span>
							</div>
						</AnimationCard>

						<AnimationCard title="Scale Text" duration={duration}>
							<p className="text-3xl font-bold bg-pink-100 text-pink-600 px-6 py-2 rounded-xl scale-on-hover" style={getStyle()}>
								GROW
							</p>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Usage Rule</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Keep scale factor subtle (e.g., 1.05 or 1.1) for professional UIs. Over-scaling can feel obstructive or distract from surrounding content.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
