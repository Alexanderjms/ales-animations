"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function GlitchPage() {
	const [duration, setDuration] = useState(300);

	const codeString = `// Tailwind CSS\n<div className="glitch-on-hover d-${duration}">\n  Glitch Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--glitch-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Glitch" secondPart="Effect" />

				
				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Cyberpunk Text" duration={duration}>
							<p 
								className="text-4xl font-black italic tracking-tighter text-gray-900 glitch-on-hover cursor-crosshair uppercase"
								style={getStyle()}
							>
								System Error
							</p>
						</AnimationCard>

						<AnimationCard title="Distorted Box" duration={duration}>
							<div 
								className="w-32 h-32 bg-black glitch-on-hover flex items-center justify-center border-2 border-white"
								style={getStyle()}
							>
								<div className="text-white font-mono text-2xl font-bold">0101</div>
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			
		</div>
	);
}
