"use client";

import React from "react";

interface SkillBadgeProps {
  skill: string;
  icon?: React.ReactNode;
}

export default function SkillBadge({ skill, icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-violet-600 transition-colors duration-300 cursor-default">
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-medium text-white">{skill}</span>
    </div>
  );
}
