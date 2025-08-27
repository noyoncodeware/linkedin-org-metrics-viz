
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from '@/components/ui/card';

interface GeographicChartProps {
  data: Array<{
    geo: string;
    pageStatistics: {
      views: {
        allPageViews: {
          pageViews: number;
        };
      };
    };
  }>;
}

const GeographicChart: React.FC<GeographicChartProps> = ({ data }) => {
  const chartData = data.map((item, index) => ({
    name: `Region ${index + 1}`,
    value: item.pageStatistics.views.allPageViews.pageViews,
    geo: item.geo
  }));

  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))'
  ];

  return (
    <Card className="metric-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Geographic Distribution</h3>
        <p className="text-sm text-muted-foreground">Page views by geographic regions</p>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default GeographicChart;
