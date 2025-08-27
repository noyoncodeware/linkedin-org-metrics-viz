
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface StaffRangeChartProps {
  data: Array<{
    staffCountRange: string;
    pageStatistics: {
      views: {
        allPageViews: {
          pageViews: number;
        };
      };
    };
  }>;
}

const StaffRangeChart: React.FC<StaffRangeChartProps> = ({ data }) => {
  const formatStaffRange = (range: string) => {
    return range.replace('SIZE_', '').replace('_TO_', '-').replace('_', '+');
  };

  const chartData = data.map(item => ({
    range: formatStaffRange(item.staffCountRange),
    views: item.pageStatistics.views.allPageViews.pageViews
  }));

  return (
    <Card className="metric-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Views by Company Size</h3>
        <p className="text-sm text-muted-foreground">Page views segmented by visitor company staff count</p>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="range" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Bar 
              dataKey="views" 
              fill="hsl(var(--chart-3))" 
              name="Page Views"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default StaffRangeChart;
