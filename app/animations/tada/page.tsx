"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function TadaPage() {
	const [duration, setDuration] = useState(1000);

	const codeString = `// Tailwind CSS\n<div className="tada-on-hover d-${duration}">\n  Tada Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--tada-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Tada!" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					The <code className="text-purple-600 font-semibold text-sm bg-purple-50 px-2 py-0.5 rounded">tada</code> animation is a celebratory effect that combines scaling and rotation. Use it when something special happens, like a user completing a task or unlocking a reward.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Celebration Icon" duration={duration}>
							<div className="text-6xl tada-on-hover cursor-pointer" style={getStyle()}>
								🎉
							</div>
						</AnimationCard>

						<AnimationCard title="Achievement Box" duration={duration}>
							<div 
								className="w-full h-32 bg-linear-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg border-4 border-white tada-on-hover flex flex-col items-center justify-center text-white"
								style={getStyle()}
							>
								<span className="text-sm font-bold uppercase tracking-widest">New Achievement</span>
								<span className="text-2xl font-black italic">WINNER!</span>
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 border-l-4 border-l-yellow-400">
						<h3 className="font-semibold text-sm text-gray-800 mb-2">Usage Tip</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Tada is very high-energy. It works best as a one-time response to a significant user action rather than a subtle hover state for every button.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
