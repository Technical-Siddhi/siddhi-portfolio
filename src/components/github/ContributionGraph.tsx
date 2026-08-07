import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitCommit, Flame } from 'lucide-react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Mon', 'Wed', 'Fri'];

// Generate 52 weeks x 7 days heat intensities (0-4)
const generateGridData = () => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      // Create natural contribution distribution pattern
      const rand = (w * 7 + d * 13) % 100;
      let level = 0;
      if (rand > 75) level = 4;
      else if (rand > 50) level = 3;
      else if (rand > 30) level = 2;
      else if (rand > 15) level = 1;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

const LEVEL_CLASSES: Record<number, string> = {
  0: 'bg-secondary/40 border-border/20',
  1: 'bg-emerald-950/60 dark:bg-emerald-950/80 border-emerald-800/40 text-emerald-300',
  2: 'bg-emerald-700/80 dark:bg-emerald-700/80 border-emerald-600/50',
  3: 'bg-emerald-500 border-emerald-400',
  4: 'bg-emerald-400 dark:bg-emerald-300 border-emerald-200 shadow-sm shadow-emerald-400/50',
};

export const ContributionGraph: React.FC = () => {
  const grid = generateGridData();

  return (
    <Card glass className="p-6 rounded-2xl space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
        <div className="flex items-center space-x-2">
          <GitCommit className="h-5 w-5 text-emerald-500" />
          <h3 className="text-lg font-heading font-bold text-foreground">
            Contribution Graph
          </h3>
        </div>
        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="flex items-center text-emerald-500 font-bold">
            <Flame className="h-4 w-4 mr-1 animate-pulse" /> 1,420+ Contributions in 2026
          </span>
          <Badge variant="glow" className="text-[10px]">
            Active Contributor
          </Badge>
        </div>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[650px] space-y-2">
          {/* Months Headers */}
          <div className="flex text-[10px] font-mono text-muted-foreground pl-8 justify-between">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Grid Rows */}
          <div className="flex space-x-1.5">
            {/* Days Column Labels */}
            <div className="flex flex-col justify-between text-[9px] font-mono text-muted-foreground pr-2 py-0.5">
              {DAYS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Weeks Blocks */}
            <div className="flex space-x-1 flex-1">
              {grid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col space-y-1">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`h-3 w-3 rounded-xs border transition-transform hover:scale-125 cursor-pointer ${LEVEL_CLASSES[level]}`}
                      title={`Day ${wIdx * 7 + dIdx + 1}: ${level * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t border-border/40">
        <span>Learn more about GitHub contribution telemetry</span>
        <div className="flex items-center space-x-1.5">
          <span>Less</span>
          <span className="h-2.5 w-2.5 rounded-xs bg-secondary/40 border border-border/20" />
          <span className="h-2.5 w-2.5 rounded-xs bg-emerald-950/60 border border-emerald-800/40" />
          <span className="h-2.5 w-2.5 rounded-xs bg-emerald-700/80 border border-emerald-600/50" />
          <span className="h-2.5 w-2.5 rounded-xs bg-emerald-500 border border-emerald-400" />
          <span className="h-2.5 w-2.5 rounded-xs bg-emerald-300 border border-emerald-200" />
          <span>More</span>
        </div>
      </div>
    </Card>
  );
};
