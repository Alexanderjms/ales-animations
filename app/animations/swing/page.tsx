"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function SwingPage() {
	const [duration, setDuration] = useState(1000);

	const codeString = `// Tailwind CSS\n<div className="swing-on-hover d-${duration}">\n  Swing Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--swing-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Swing" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					The <code className="text-purple-600 font-semibold text-sm bg-purple-50 px-2 py-0.5 rounded">swing</code> animation simulates a hanging object swinging from its top center. It's particularly effective for icons that look like they're "hanging" or for playful UI elements.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Icon/Text Example" duration={duration}>
							<div className="flex flex-col items-center gap-2 swing-on-hover cursor-pointer" style={getStyle()}>
								<span className="text-4xl">🔔</span>
								<p className="text-xl font-medium text-gray-800 transition-all ease-out text-center px-4">
									Swing Interaction
								</p>
							</div>
						</AnimationCard>

						<AnimationCard title="Box Example" duration={duration}>
							<div 
								className="w-24 h-32 bg-indigo-600 rounded-b-2xl shadow-lg swing-on-hover flex items-end justify-center pb-4 text-white font-bold"
								style={getStyle()}
							>
								SWING
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Technical Note</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							This animation uses <code className="text-pink-600 font-mono italic">transform-origin: top center</code> to create the pivot point at the top of the element.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
