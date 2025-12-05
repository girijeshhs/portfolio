"use client";

export default function SkillsSection() {
  const prompts = [
    "frontend",
    "backend", 
    "databases",
    "blockchain",
    "ml",
    "tools",
    "skills all",
  ];

  return (
    <div id="skills" className="font-mono text-sm">
      <div className="text-gray-400 mb-4 text-base font-semibold">Try typing:</div>
      <div className="space-y-2.5">
        {prompts.map((cmd) => (
          <div key={cmd} className="text-gray-400 hover:text-purple-400 transition-colors cursor-default text-sm">
            <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">{cmd}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-500 text-xs">
        type <span className="text-gray-300">help</span> for more • <span className="text-gray-300">clear</span> to reset
      </div>
    </div>
  );
}
