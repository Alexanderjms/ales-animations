"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function SkewPage() {
	const [duration, setDuration] = useState(600);

	const codeString = `// Tailwind CSS\n<div className="skew-on-hover d-${duration}">\n  Skewed Element\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--skew-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Skew" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					Skew animations tilt elements along their axes, creating a sense of speed or dynamic motion. It's often used for "glance" effects or slanted designs.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Skew Box" duration={duration}>
							<div 
								className="w-32 h-32 bg-orange-500 rounded-lg skew-on-hover shadow-lg flex items-center justify-center text-white font-bold"
								style={getStyle()}
							>
								SKEW
							</div>
						</AnimationCard>

						<AnimationCard title="Skew Text" duration={duration}>
							<p className="text-4xl font-black italic skew-on-hover text-orange-600" style={getStyle()}>
								DYNAMIC
							</p>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 border-l-4 border-l-orange-500">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Creative Tip</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Combine skew with horizontal translation to create a "speeding" effect for icons or buttons.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
