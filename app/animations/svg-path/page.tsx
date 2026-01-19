"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function SVGPathPage() {
	const [duration, setDuration] = useState(1500);

	const codeString = `// Tailwind CSS\n<div className="svg-draw-on-hover d-${duration}">\n  <svg>...</svg>\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--svg-duration" as const]: `${duration}ms`,
			["--svg-length" as const]: "500",
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="SVG" secondPart="Path Animation" />

				<p className="text-gray-600 leading-relaxed">
					Animate SVG strokes to create a "drawing" effect. This technique uses <code className="text-purple-600 font-mono">stroke-dasharray</code> and <code className="text-purple-600 font-mono">stroke-dashoffset</code> to reveal paths over time.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Draw Icon" duration={duration}>
							<div className="svg-draw-on-hover cursor-pointer" style={getStyle()}>
								<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path 
										d="M20 50 L50 80 L80 20" 
										stroke="#8b5cf6" 
										strokeWidth="8" 
										strokeLinecap="round" 
										strokeLinejoin="round"
										style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
									/>
								</svg>
							</div>
						</AnimationCard>

						<AnimationCard title="Circle Draw" duration={duration}>
							<div className="svg-draw-on-hover cursor-pointer" style={getStyle()}>
								<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle 
										cx="50" cy="50" r="40" 
										stroke="#3b82f6" 
										strokeWidth="8"
										style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
									/>
								</svg>
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2 italic">Pro Tip</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Ensure your paths have a defined length. You can use <code className="text-pink-600">getTotalLength()</code> in JS or estimate it for the <code className="text-pink-600">stroke-dasharray</code> property.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
