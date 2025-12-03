"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/ui/dialog";
import { Badge } from "@/src/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/ui/card";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const ProjectCard = ({
  title,
  description,
  thumbnail,
  techStack,
  longDescription,
  liveUrl,
  githubUrl,
  metrics,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden border border-white/10 bg-slate-950/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">{title}</CardTitle>
            <CardDescription className="text-white-200">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-purple-500/30 bg-purple-500/10 text-purple-300"
                >
                  {tech}
                </Badge>
              ))}
              {techStack.length > 4 && (
                <Badge variant="outline" className="border-white/20 bg-white/5 text-white-200">
                  +{techStack.length - 4} more
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-3xl border border-white/10 bg-slate-950/95 text-white backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <p className="text-white-200 leading-relaxed">
              {longDescription || description}
            </p>
          </div>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-4"
                  >
                    <p className="text-sm text-white-200">{metric.label}</p>
                    <p className="text-2xl font-bold text-purple-400">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-purple-500/30 bg-purple-500/10 text-purple-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-2 font-medium text-white transition-colors hover:bg-purple-700"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                View Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-2 font-medium text-white transition-colors hover:bg-white/10"
              >
                <FaGithub className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
