import React, { useEffect, useRef } from 'react';

export function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial resize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create parallel wave curves
        class Wave {
            yOffset: number;
            amplitude: number;
            frequency: number;
            phase: number;
            color: string;

            constructor(yOffset: number, amplitude: number, frequency: number, phase: number, color: string) {
                this.yOffset = yOffset;
                this.amplitude = amplitude;
                this.frequency = frequency;
                this.phase = phase;
                this.color = color;
            }

            draw(ctx: CanvasRenderingContext2D, width: number) {
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2.5;
                ctx.lineCap = 'round';
                ctx.beginPath();

                for (let x = 0; x <= width; x++) {
                    const y = this.yOffset +
                        Math.sin((x * this.frequency) + this.phase) * this.amplitude;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.stroke();
            }

            getY(x: number) {
                return this.yOffset +
                    Math.sin((x * this.frequency) + this.phase) * this.amplitude;
            }
        }

        // Create spark particles
        class Spark {
            wave: Wave;
            x: number;
            speed: number;
            size: number;

            constructor(wave: Wave, speed: number, width: number) {
                this.wave = wave;
                this.x = Math.random() * width;
                this.speed = speed;
                this.size = 1.5;
            }

            update(width: number) {
                this.x += this.speed;

                if (this.x > width + 20) {
                    this.x = -20;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                const y = this.wave.getY(this.x);

                // Soft outer glow
                const outerGlow = ctx.createRadialGradient(this.x, y, 0, this.x, y, 6);
                outerGlow.addColorStop(0, 'rgba(34, 211, 238, 0.4)');
                outerGlow.addColorStop(0.5, 'rgba(34, 211, 238, 0.2)');
                outerGlow.addColorStop(1, 'rgba(34, 211, 238, 0)');

                ctx.fillStyle = outerGlow;
                ctx.beginPath();
                ctx.arc(this.x, y, 6, 0, Math.PI * 2);
                ctx.fill();

                // Subtle trailing glow (very short)
                const glowLength = 6;
                const gradient = ctx.createLinearGradient(
                    this.x - glowLength, y,
                    this.x, y
                );
                gradient.addColorStop(0, 'rgba(34, 211, 238, 0)');
                gradient.addColorStop(0.6, 'rgba(34, 211, 238, 0.3)');
                gradient.addColorStop(1, 'rgba(34, 211, 238, 0.6)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.ellipse(this.x - glowLength / 3, y, glowLength / 1.5, this.size * 1.2, 0, 0, Math.PI * 2);
                ctx.fill();

                // Core spark with soft glow
                const coreGlow = ctx.createRadialGradient(this.x, y, 0, this.x, y, this.size * 2);
                coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
                coreGlow.addColorStop(0.5, 'rgba(34, 211, 238, 0.7)');
                coreGlow.addColorStop(1, 'rgba(34, 211, 238, 0)');

                ctx.fillStyle = coreGlow;
                ctx.beginPath();
                ctx.arc(this.x, y, this.size * 2, 0, Math.PI * 2);
                ctx.fill();

                // Small bright core
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(this.x, y, this.size * 0.8, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize waves - centered with 4 lines
        // We need to initialize these inside the effect or ref to access current dimensions if dependent
        // But logic uses dynamic resizing or fixed? The original code initialized them once based on height
        // To support resize better, we might need to update yOffset on resize, but let's stick to the script for now
        // and just re-initialize if height changes significantly? 
        // Actually, let's keep it simple: initialize once, maybe re-init on resize if needed.
        // However, the original code used `canvas.height * 0.45` etc.
        // So we should probably re-create waves on resize or just use a ratio in draw.
        // Let's re-create or update properties on resize.

        let waves: Wave[] = [];
        let sparks: Spark[] = [];

        const initSimulation = () => {
            // Move waves higher on mobile, centered on desktop
            const isMobile = window.innerWidth < 640;
            const baseOffset = isMobile ? 0.35 : 0.45;

            waves = [
                new Wave(canvas.height * baseOffset, 50, 0.005, 0, 'rgba(6, 182, 212, 0.4)'),
                new Wave(canvas.height * (baseOffset + 0.04), 50, 0.005, 0.5, 'rgba(6, 182, 212, 0.3)'),
                new Wave(canvas.height * (baseOffset + 0.08), 50, 0.005, 1, 'rgba(6, 182, 212, 0.25)'),
                new Wave(canvas.height * (baseOffset + 0.12), 50, 0.005, 1.5, 'rgba(6, 182, 212, 0.2)'),
            ];

            // Initialize sparks - 1 per wave
            sparks = [];
            waves.forEach((wave) => {
                sparks.push(new Spark(wave, 0.8, canvas.width));
            });
        };

        initSimulation();

        // Add resize listener specific to simulation update
        const handleResize = () => {
            resizeCanvas();
            initSimulation(); // Re-center waves on resize
        };

        window.removeEventListener('resize', resizeCanvas); // Remove the simple one
        window.addEventListener('resize', handleResize);


        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw static waves
            waves.forEach(wave => {
                wave.draw(ctx, canvas.width);
            });

            // Update and draw sparks
            sparks.forEach(spark => {
                spark.update(canvas.width);
                spark.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)', zIndex: 0 }}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
