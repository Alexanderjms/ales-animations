"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function HeartbeatPage() {
	const [duration, setDuration] = useState(1300);

	const codeString = `// Tailwind CSS\n<div className="heartbeat-on-hover d-${duration}">\n  Heartbeat Animation\n</div>`;

	const getStyle = (): React.CSSProperties => {
		return {
			["--hb-duration" as const]: `${duration}ms`,
		} as React.CSSProperties;
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
			<div className="lg:col-span-8 space-y-10 mb-10">
				<TitleComponents firstPart="Heartbeat" secondPart="Animation" />

				<p className="text-gray-600 leading-relaxed">
					The <code className="text-purple-600 font-semibold text-sm bg-purple-50 px-2 py-0.5 rounded">heartBeat</code> animation creates a realistic dual-beat pulse effect. It's excellent for signifying "life", "health", or "emergency" states in a UI.
				</p>

				<CodeBlock code={codeString} duration={duration} onDurationChange={setDuration} />

				<section>
					<h2 className="text-lg font-semibold text-gray-800 mb-6">Examples</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<AnimationCard title="Heart Icon" duration={duration}>
							<div className="text-6xl heartbeat-on-hover cursor-pointer" style={getStyle()}>
								❤️
							</div>
						</AnimationCard>

						<AnimationCard title="Notification Pulse" duration={duration}>
							<div 
								className="w-16 h-16 bg-red-500 rounded-full shadow-lg shadow-red-200 heartbeat-on-hover flex items-center justify-center text-white"
								style={getStyle()}
							>
								<span className="text-2xl font-bold">!</span>
							</div>
						</AnimationCard>
					</div>
				</section>
			</div>

			<div className="lg:col-span-4 block">
				<div className="mt-29 flex flex-col gap-4">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
						<h3 className="font-semibold text-sm text-gray-800 mb-2 font-mono">Best Practice</h3>
						<p className="text-xs text-gray-600 leading-relaxed">
							Because of its association with urgent states, use Heartbeat sparingly. For standard focus effects, a simple <code className="text-blue-600">pulse</code> might be better.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
