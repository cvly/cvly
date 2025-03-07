import { FC, useEffect, useState } from "react";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface ContributionResponse {
  total: {
    [year: string]: number;
  };
  contributions: Contribution[];
}

const Contributions: FC<{ profile: any }> = ({ profile }) => {
  const [contributions, setContributions] = useState<ContributionResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/boringcuriosity?y=2025`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch contributions: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Validate the response data structure
        if (!data || !data.total || !Array.isArray(data.contributions)) {
          throw new Error('Invalid response data structure');
        }
        
        setContributions(data);
      } catch (error) {
        console.error('Error fetching contributions:', error);
        setError(error instanceof Error ? error.message : 'Failed to load GitHub contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <div id="contributions" className="section flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading contributions...</div>
      </div>
    );
  }

  if (error || !contributions) {
    return (
      <div id="contributions" className="section flex items-center justify-center text-gray-600">
        {error || 'Unable to load GitHub contributions'}
      </div>
    );
  }

  // Group contributions by week
  const weeks: Contribution[][] = [];
  let currentWeek: Contribution[] = [];
  
  contributions.contributions.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === contributions.contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  const currentYear = new Date().getFullYear().toString();
  const totalContributions = contributions.total[currentYear] || 0;

  return (
    <div id="contributions" className="section relative flex flex-col md:flex-row items-start md:px-5 w-full mb-6">
      <div>
        <p className="text-[#676769] text-sm md:mb-6 pt-5">GitHub Contributions</p>
      </div>
      
      <div className="flex flex-col w-full gap-4 pt-2">
        <div className="bg-white rounded-lg pt-6 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-900">
              {totalContributions.toLocaleString()} contributions in {currentYear}
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day) => {
                    // Calculate color based on contribution level
                    const getColor = (level: number) => {
                      switch (level) {
                        case 0: return 'bg-gray-100';
                        case 1: return 'bg-green-200';
                        case 2: return 'bg-green-300';
                        case 3: return 'bg-green-400';
                        case 4: return 'bg-green-500';
                        default: return 'bg-gray-100';
                      }
                    };

                    return (
                      <div
                        key={day.date}
                        className={`w-3 h-3 rounded-sm ${getColor(day.level)}`}
                        title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString()}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;