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
    <div id="skills" className="font-mono text-xs">
      <div className="text-gray-500 mb-3">Try typing:</div>
      <div className="space-y-1.5">
        {prompts.map((cmd) => (
          <div key={cmd} className="text-gray-400 hover:text-purple-400 transition-colors cursor-default">
            <span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-white">{cmd}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-gray-600 text-[10px]">
        type <span className="text-gray-400">help</span> for more • <span className="text-gray-400">clear</span> to reset
      </div>
    </div>
  );
}
