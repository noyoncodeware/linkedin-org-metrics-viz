
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { PageViews } from '@/types/linkedin';

interface PageTypeChartProps {
  data: PageViews;
}

const PageTypeChart: React.FC<PageTypeChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Overview', desktop: data.overviewPageViews.pageViews, mobile: 0 },
    { name: 'People', desktop: data.peoplePageViews.pageViews, mobile: 0 },
    { name: 'Jobs', desktop: data.jobsPageViews.pageViews, mobile: 0 },
    { name: 'About', desktop: data.aboutPageViews.pageViews, mobile: 0 },
    { name: 'Careers', desktop: data.careersPageViews.pageViews, mobile: 0 },
    { name: 'Products', desktop: data.productsPageViews.pageViews, mobile: 0 },
    { name: 'Life At', desktop: data.lifeAtPageViews.pageViews, mobile: 0 },
    { name: 'Insights', desktop: data.insightsPageViews.pageViews, mobile: 0 },
  ].filter(item => item.desktop > 0 || item.mobile > 0);

  return (
    <Card className="metric-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Page Views by Type</h3>
        <p className="text-sm text-muted-foreground">Breakdown of views across different page sections</p>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={70}
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
            <Bar dataKey="desktop" fill="hsl(var(--chart-1))" name="Desktop Views" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="hsl(var(--chart-2))" name="Mobile Views" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PageTypeChart;
