"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function BlurPage() {
	const [duration, setDuration] = useState(500);

	const codeString = `// Tailwind CSS\n<div className="blur-on-hover d-${duration}">\n  Blurred Content\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--blur-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Blur" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					Blur animations provide a soft, high-end feel often seen in mobile OS transitions. It guides the eye by gradually bringing content into focus.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Image Blur" duration={duration}>
							<div 
								className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-300 rounded-xl blur-on-hover flex items-center justify-center"
								style={getStyle()}
							>
								<span className="text-2xl font-bold text-gray-400">IMAGE</span>
							</div>
						</AnimationCard>

						<AnimationCard title="Text Focal" duration={duration}>
							<p className="text-4xl font-bold blur-on-hover text-gray-800" style={getStyle()}>
								FOCUS
							</p>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2 italic underline decoration-blue-500">Apple-esque</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							iOS utilizes blur heavily in its UI to maintain context without overwhelming the user with detail.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
