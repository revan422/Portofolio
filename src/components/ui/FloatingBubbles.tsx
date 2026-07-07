"use client";

import React, { useEffect, useRef } from "react";

export function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // One Piece / Anime theme bubble colors: Luffy Red, Strawhat Yellow/Gold, Ocean Blue, Coral Orange
    const colors = [
      "rgba(255, 62, 62, 0.35)",   // Luffy Red
      "rgba(255, 215, 0, 0.4)",    // Gold/Yellow
      "rgba(0, 168, 255, 0.3)",    // Ocean Blue
      "rgba(255, 127, 80, 0.3)",    // Orange
    ];

    interface Bubble {
      x: number;
      y: number;
      radius: number;
      speed: number;
      wobble: number;
      wobbleSpeed: number;
      color: string;
      glow: number;
    }

    const bubbles: Bubble[] = [];
    const maxBubbles = 35; // optimal quantity for aesthetics & performance

    const createBubble = (isInitial = false): Bubble => {
      const radius = Math.random() * 12 + 4;
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + radius + 10,
        radius,
        speed: Math.random() * 0.6 + 0.25,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.015 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() * 8 + 4,
      };
    };

    // Initialize bubbles
    for (let i = 0; i < maxBubbles; i++) {
      bubbles.push(createBubble(true));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((bubble, index) => {
        // Update positions
        bubble.y -= bubble.speed;
        bubble.wobble += bubble.wobbleSpeed;
        const currentX = bubble.x + Math.sin(bubble.wobble) * 12;

        // Draw bubble
        ctx.beginPath();
        ctx.arc(currentX, bubble.y, bubble.radius, 0, Math.PI * 2);

        // Shiny reflection on bubble
        const gradient = ctx.createRadialGradient(
          currentX - bubble.radius / 3,
          bubble.y - bubble.radius / 3,
          1,
          currentX,
          bubble.y,
          bubble.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.75)");
        gradient.addColorStop(0.25, bubble.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.01)");

        ctx.save();
        ctx.fillStyle = gradient;
        ctx.shadowBlur = bubble.glow;
        ctx.shadowColor = bubble.color;
        ctx.fill();
        ctx.restore();

        // Rim highlight
        ctx.beginPath();
        ctx.arc(currentX, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Reset bubble when it moves off the top screen
        if (bubble.y < -bubble.radius) {
          bubbles[index] = createBubble(false);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
