"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Globe, Shield } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Node {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  angle: number;
  ring: number;
}

interface SmallNode {
  id: string;
  ring: number;
  angle: number;
  size: number;
}

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  colorIndex: number;
}

const AnimatedHeroVisual = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [smallNodes, setSmallNodes] = useState<SmallNode[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mainNodes: Node[] = [
    {
      id: 'performance',
      label: 'Performance',
      icon: <Zap className="w-5 h-5" />,
      description: 'Lightning-fast processing and optimization',
      angle: 45,
      ring: 2,
    },
    {
      id: 'data',
      label: 'Data',
      icon: <Database className="w-5 h-5" />,
      description: 'Secure and scalable data management',
      angle: 135,
      ring: 3,
    },
    {
      id: 'global',
      label: 'Global',
      icon: <Globe className="w-5 h-5" />,
      description: 'Worldwide reach and connectivity',
      angle: 225,
      ring: 2,
    },
    {
      id: 'security',
      label: 'Security',
      icon: <Shield className="w-5 h-5" />,
      description: 'Enterprise-grade protection',
      angle: 315,
      ring: 3,
    },
  ];

  // Generate random nodes and particles only on client to avoid hydration mismatch
  useEffect(() => {
    setSmallNodes(Array.from({ length: 24 }, (_, i) => ({
      id: `small-${i}`,
      ring: (i % 5),
      angle: (i * 15) + (Math.random() * 10 - 5),
      size: 3 + Math.random() * 5,
    })));
    setParticles(Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 5,
      colorIndex: i % 2,
    })));
    setMounted(true);
  }, []);

  const rings = [
    { radius: 120, duration: 60, direction: 1, blur: 60, opacity: 0.3 },
    { radius: 180, duration: 80, direction: -1, blur: 70, opacity: 0.25 },
    { radius: 240, duration: 100, direction: 1, blur: 80, opacity: 0.2 },
    { radius: 300, duration: 120, direction: -1, blur: 90, opacity: 0.15 },
    { radius: 360, duration: 140, direction: 1, blur: 100, opacity: 0.1 },
  ];

  const getPositionOnRing = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/10 via-transparent to-transparent" />
      
      <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
        <TooltipProvider>
          <div className="relative w-[800px] h-[800px]">
            {rings.map((ring, index) => (
              <motion.div
                key={`ring-${index}`}
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: ring.radius * 2,
                  height: ring.radius * 2,
                  marginLeft: -ring.radius,
                  marginTop: -ring.radius,
                  border: '1px solid',
                  borderColor: index % 2 === 0 ? 'rgba(34, 211, 238, 0.15)' : 'rgba(196, 181, 253, 0.15)',
                  boxShadow: index % 2 === 0 
                    ? `0 0 ${ring.blur / 2}px rgba(34, 211, 238, ${ring.opacity * 0.6}), inset 0 0 ${ring.blur / 2}px rgba(34, 211, 238, ${ring.opacity * 0.4})`
                    : `0 0 ${ring.blur / 2}px rgba(196, 181, 253, ${ring.opacity * 0.6}), inset 0 0 ${ring.blur / 2}px rgba(196, 181, 253, ${ring.opacity * 0.4})`,
                }}
                animate={{
                  rotate: ring.direction === 1 ? 360 : -360,
                }}
                transition={{
                  duration: ring.duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}

            <motion.div 
              className="absolute top-1/2 left-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full bg-gradient-to-br from-cyan-950/40 to-violet-950/40 backdrop-blur-xl border border-cyan-500/20 flex items-center justify-center"
              style={{
                boxShadow: '0 0 60px rgba(34, 211, 238, 0.15), 0 0 100px rgba(196, 181, 253, 0.1), inset 0 0 40px rgba(34, 211, 238, 0.05)'
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-950/30 to-violet-950/30 flex items-center justify-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">LOGO</div>
              </div>
            </motion.div>

            {mounted && smallNodes.map((node) => {
              const ring = rings[node.ring];
              const initialAngle = node.angle;
              const pos = getPositionOnRing(initialAngle, ring.radius);
              
              return (
                <motion.div
                  key={node.id}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 0,
                    height: 0,
                  }}
                  animate={{
                    rotate: ring.direction === 1 ? [0, 360] : [0, -360],
                  }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: node.size,
                      height: node.size,
                      left: pos.x - node.size / 2,
                      top: pos.y - node.size / 2,
                      background: node.ring % 2 === 0 
                        ? 'radial-gradient(circle, rgba(34, 211, 238, 0.9), rgba(34, 211, 238, 0.2))'
                        : 'radial-gradient(circle, rgba(196, 181, 253, 0.9), rgba(196, 181, 253, 0.2))',
                      boxShadow: node.ring % 2 === 0
                        ? `0 0 ${node.size * 5}px rgba(34, 211, 238, 0.5)`
                        : `0 0 ${node.size * 5}px rgba(196, 181, 253, 0.5)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              );
            })}

            {mainNodes.map((node) => {
              const ring = rings[node.ring];
              const pos = getPositionOnRing(node.angle, ring.radius);
              const isHovered = hoveredNode === node.id;
              
              return (
                <Tooltip key={node.id}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: 0,
                        height: 0,
                      }}
                      animate={{
                        rotate: ring.direction === 1 ? [0, 360] : [0, -360],
                      }}
                      transition={{
                        duration: ring.duration,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <motion.div
                        className="cursor-pointer"
                        style={{
                          position: 'absolute',
                          left: pos.x - 32,
                          top: pos.y - 32,
                        }}
                        animate={{
                          scale: isHovered ? 1.2 : 1,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 25,
                        }}
                        onHoverStart={() => setHoveredNode(node.id)}
                        onHoverEnd={() => setHoveredNode(null)}
                      >
                      <motion.div
                        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-900/50 to-violet-900/50 flex items-center justify-center border border-cyan-400/30"
                        style={{
                          boxShadow: isHovered
                            ? '0 0 50px rgba(34, 211, 238, 0.6), 0 0 90px rgba(196, 181, 253, 0.4), inset 0 0 30px rgba(34, 211, 238, 0.2)'
                            : '0 0 25px rgba(34, 211, 238, 0.3), 0 0 45px rgba(196, 181, 253, 0.2)',
                        }}
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: isHovered
                            ? [
                                '0 0 50px rgba(34, 211, 238, 0.6), 0 0 90px rgba(196, 181, 253, 0.4), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                                '0 0 70px rgba(34, 211, 238, 0.8), 0 0 110px rgba(196, 181, 253, 0.6), inset 0 0 40px rgba(34, 211, 238, 0.3)',
                                '0 0 50px rgba(34, 211, 238, 0.6), 0 0 90px rgba(196, 181, 253, 0.4), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                              ]
                            : '0 0 25px rgba(34, 211, 238, 0.3), 0 0 45px rgba(196, 181, 253, 0.2)',
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <div className="text-cyan-300">{node.icon}</div>
                        
                        {isHovered && (
                          <motion.div
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-cyan-300 bg-black/80 px-3 py-1.5 rounded-full border border-cyan-500/30"
                            style={{
                              boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                            }}
                            initial={{ opacity: 0, y: -5, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -5, scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            {node.label}
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <motion.div
                        className="absolute inset-0 rounded-full border border-cyan-400/40"
                        style={{
                          left: pos.x - 32,
                          top: pos.y - 32,
                          width: 64,
                          height: 64,
                        }}
                        animate={{
                          scale: isHovered ? [1, 1.6, 1] : 1,
                          opacity: isHovered ? [0.6, 0, 0.6] : 0,
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    </motion.div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-black/95 border-cyan-500/30 text-cyan-100 backdrop-blur-xl"
                    style={{
                      boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)'
                    }}
                  >
                    <p className="font-semibold">{node.label}</p>
                    <p className="text-xs text-violet-300">{node.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}

            <motion.div
              className="absolute top-1/2 left-1/2 w-[760px] h-[760px] -ml-[380px] -mt-[380px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, rgba(196, 181, 253, 0.03) 50%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </TooltipProvider>
      </div>

      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={`particle-${particle.id}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                background: particle.colorIndex === 0 ? 'rgba(34, 211, 238, 0.4)' : 'rgba(196, 181, 253, 0.4)',
                boxShadow: particle.colorIndex === 0 ? '0 0 8px rgba(34, 211, 238, 0.6)' : '0 0 8px rgba(196, 181, 253, 0.6)',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedHeroVisual;


