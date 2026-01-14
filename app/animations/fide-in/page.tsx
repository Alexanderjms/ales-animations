"use client";

import { useState } from "react";
import TitleComponents from "@/app/components/components-ui/tittle-components";
import CodeBlock from "@/app/components/components-ui/code-block";
import StickyNote from "@/app/components/components-ui/sticky-note";
import AnimationCard from "@/app/components/components-ui/animation-card";

export default function FadeInPage() {
  const [duration, setDuration] = useState(1000);

  const codeString = `// Tailwind CSS
<div className="f-i d-${duration}">
  Fade In Animation
</div>`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10">
        <TitleComponents firstPart="Fade" secondPart="In" />
        <CodeBlock
          code={codeString}
          duration={duration}
          onDurationChange={setDuration}
        />

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimationCard 
              title="Text Example" 
              duration={duration} 
              text="Fade In Up Example Text" 
            />

            <AnimationCard title="Box Example" duration={duration}>
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg transition-all ease-out opacity-0 group-hover:opacity-100"></div>
            </AnimationCard>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 block">
        <div className="mt-29 flex flex-col gap-4">
          <StickyNote text="Fade In" />
        </div>
      </div>
    </div>
  );
}