import { useMemo } from 'react';

type Duration = {
  years: number;
  months: number;
};

type ExperienceType = {
  startYear: number;
  startMonth: number;
  endYear?: number;
  endMonth?: number;
};

type DetailsProp = {
  designation: string;
  exp: ExperienceType;
  stack: string[];
};

function calculateDuration(
  startYear: number,
  startMonth: number,
  endYear?: number,
  endMonth?: number
): Duration {
  const now = new Date();

  const eY = endYear ?? now.getFullYear();
  const eM = endMonth ?? now.getMonth() + 1;

  const totalMonths =
    eY * 12 + eM - (startYear * 12 + startMonth);

  const safeMonths = Math.max(totalMonths, 0);

  return {
    years: Math.floor(safeMonths / 12),
    months: safeMonths % 12,
  };
}

export const DetailsComponent = ({
  designation,
  exp,
  stack,
}: DetailsProp) => {
  const duration = useMemo(
    () =>
      calculateDuration(
        exp.startYear,
        exp.startMonth,
        exp.endYear,
        exp.endMonth
      ),
    [exp.startYear, exp.startMonth, exp.endYear, exp.endMonth]
  );

  return (
    <div className="flex flex-col md:flex-row text-neutral-400 items-center justify-center gap-2 text-sm">
      <p>{designation}</p>
      <span>|</span>
      <p>
        {duration.years}Y {duration.months}M
      </p>
      <span>|</span>
      <p>{stack.join(' • ')}</p>
    </div>
  );
};