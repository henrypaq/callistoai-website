'use client';

import { Database, CreditCard, Cpu, Brain, BarChart3 } from 'lucide-react';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isCore?: boolean;
  className?: string;
}

function ModuleCard({ icon, title, description, isCore = false, className = '' }: ModuleCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl backdrop-blur-md border border-white/10
        ${isCore 
          ? 'bg-white/15 shadow-[0_0_60px_rgba(255,255,255,0.1)] p-5' 
          : 'bg-white/8 shadow-xl shadow-black/10 p-4'
        }
        ${className}
      `}
    >
      {isCore && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      )}
      <div className="relative z-10">
        <div className={`
          ${isCore ? 'w-10 h-10' : 'w-8 h-8'} 
          rounded-lg bg-white/10 flex items-center justify-center mb-3
        `}>
          {icon}
        </div>
        <h4 className={`
          font-semibold text-white mb-1
          ${isCore ? 'text-base' : 'text-sm'}
        `}>
          {title}
        </h4>
        <p className={`
          text-white/50 leading-snug
          ${isCore ? 'text-sm' : 'text-xs'}
        `}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ConnectionLine({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute hidden lg:block ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-[0.5px]" />
      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 animate-pulse-slow" 
        style={{ animationDelay: `${Math.random() * 2}s` }} 
      />
    </div>
  );
}

export default function PlatformBlueprintExample() {
  return (
    <div className="relative w-full h-[420px] lg:h-[480px]">
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.6; transform: translateY(-50%) scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes flow {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .animate-flow {
          animation: flow 4s linear infinite;
        }
      `}</style>

      {/* Mobile Layout - Stacked */}
      <div className="lg:hidden flex flex-col gap-3 p-4">
        <ModuleCard
          icon={<Database className="w-4 h-4 text-white/70" />}
          title="CRM Module"
          description="Customer management"
        />
        <ModuleCard
          icon={<CreditCard className="w-4 h-4 text-white/70" />}
          title="Billing Module"
          description="Payment processing"
        />
        <ModuleCard
          icon={<Cpu className="w-5 h-5 text-white/80" />}
          title="Core Platform"
          description="Central orchestration layer"
          isCore
        />
        <ModuleCard
          icon={<Brain className="w-4 h-4 text-white/70" />}
          title="AI Engine"
          description="Intelligence layer"
        />
        <ModuleCard
          icon={<BarChart3 className="w-4 h-4 text-white/70" />}
          title="Analytics"
          description="Insights & reporting"
        />
      </div>

      {/* Desktop Layout - Grid with connections */}
      <div className="hidden lg:block relative w-full h-full">
        {/* Connection Lines */}
        {/* CRM to Core */}
        <div className="absolute top-[85px] left-[140px] w-[120px] h-[1px] rotate-[25deg] origin-left">
          <div className="w-full h-full bg-gradient-to-r from-white/10 via-white/15 to-white/5 blur-[0.5px]" />
          <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30 animate-flow" />
        </div>
        
        {/* Billing to Core */}
        <div className="absolute top-[85px] right-[140px] w-[120px] h-[1px] -rotate-[25deg] origin-right">
          <div className="w-full h-full bg-gradient-to-l from-white/10 via-white/15 to-white/5 blur-[0.5px]" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1.5 h-1.5 rounded-full bg-white/30 animate-flow" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* AI Engine to Core */}
        <div className="absolute bottom-[130px] left-[140px] w-[120px] h-[1px] -rotate-[25deg] origin-left">
          <div className="w-full h-full bg-gradient-to-r from-white/10 via-white/15 to-white/5 blur-[0.5px]" />
          <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30 animate-flow" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Analytics to Core */}
        <div className="absolute bottom-[130px] right-[140px] w-[120px] h-[1px] rotate-[25deg] origin-right">
          <div className="w-full h-full bg-gradient-to-l from-white/10 via-white/15 to-white/5 blur-[0.5px]" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1.5 h-1.5 rounded-full bg-white/30 animate-flow" style={{ animationDelay: '3s' }} />
        </div>

        {/* Top Row */}
        <div className="absolute top-6 left-6">
          <ModuleCard
            icon={<Database className="w-4 h-4 text-white/70" />}
            title="CRM Module"
            description="Customer management"
            className="w-[160px]"
          />
        </div>
        
        <div className="absolute top-6 right-6">
          <ModuleCard
            icon={<CreditCard className="w-4 h-4 text-white/70" />}
            title="Billing Module"
            description="Payment processing"
            className="w-[160px]"
          />
        </div>

        {/* Center - Core Platform */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ModuleCard
            icon={<Cpu className="w-5 h-5 text-white/80" />}
            title="Core Platform"
            description="Central orchestration layer"
            isCore
            className="w-[190px]"
          />
        </div>

        {/* Bottom Row */}
        <div className="absolute bottom-6 left-6">
          <ModuleCard
            icon={<Brain className="w-4 h-4 text-white/70" />}
            title="AI Engine"
            description="Intelligence layer"
            className="w-[160px]"
          />
        </div>
        
        <div className="absolute bottom-6 right-6">
          <ModuleCard
            icon={<BarChart3 className="w-4 h-4 text-white/70" />}
            title="Analytics"
            description="Insights & reporting"
            className="w-[160px]"
          />
        </div>

        {/* Ambient glow behind core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
}
