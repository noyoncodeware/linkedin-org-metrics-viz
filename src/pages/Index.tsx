
import React from 'react';
import { Monitor, Smartphone, Eye, Users, Building2, Globe, TrendingUp } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import PageTypeChart from '@/components/PageTypeChart';
import GeographicChart from '@/components/GeographicChart';
import StaffRangeChart from '@/components/StaffRangeChart';
import { LinkedInPageStatistics } from '@/types/linkedin';

// Updated sample data from the actual LinkedIn API response
const sampleData: LinkedInPageStatistics = {
  "paging": {
    "start": 0,
    "count": 10,
    "links": []
  },
  "elements": [
    {
      "pageStatisticsByIndustryV2": [
        {
          "industryV2": "urn:li:industry:4",
          "pageStatistics": {
            "views": {
              "allPageViews": {
                "pageViews": 17
              }
            }
          }
        }
      ],
      "pageStatisticsBySeniority": [
        {
          "pageStatistics": {
            "views": {
              "mobileProductsPageViews": { "pageViews": 0 },
              "allDesktopPageViews": { "pageViews": 21 },
              "insightsPageViews": { "pageViews": 0 },
              "mobileAboutPageViews": { "pageViews": 0 },
              "allMobilePageViews": { "pageViews": 0 },
              "productsPageViews": { "pageViews": 0 },
              "desktopProductsPageViews": { "pageViews": 0 },
              "jobsPageViews": { "pageViews": 0 },
              "peoplePageViews": { "pageViews": 0 },
              "overviewPageViews": { "pageViews": 21 },
              "mobileOverviewPageViews": { "pageViews": 0 },
              "lifeAtPageViews": { "pageViews": 0 },
              "desktopOverviewPageViews": { "pageViews": 21 },
              "mobileCareersPageViews": { "pageViews": 0 },
              "allPageViews": { "pageViews": 21 },
              "careersPageViews": { "pageViews": 0 },
              "mobileJobsPageViews": { "pageViews": 0 },
              "mobileLifeAtPageViews": { "pageViews": 0 },
              "desktopJobsPageViews": { "pageViews": 0 },
              "desktopPeoplePageViews": { "pageViews": 0 },
              "aboutPageViews": { "pageViews": 0 },
              "desktopAboutPageViews": { "pageViews": 0 },
              "mobilePeoplePageViews": { "pageViews": 0 },
              "desktopCareersPageViews": { "pageViews": 0 },
              "desktopInsightsPageViews": { "pageViews": 0 },
              "desktopLifeAtPageViews": { "pageViews": 0 },
              "mobileInsightsPageViews": { "pageViews": 0 }
            }
          },
          "seniority": "urn:li:seniority:3"
        }
      ],
      "organization": "urn:li:organization:107813090",
      "pageStatisticsByGeoCountry": [
        {
          "geo": "urn:li:geo:106215326",
          "pageStatistics": {
            "views": {
              "allPageViews": {
                "pageViews": 21
              }
            }
          }
        }
      ],
      "pageStatisticsByTargetedContent": [],
      "totalPageStatistics": {
        "views": {
          "mobileProductsPageViews": { "pageViews": 0 },
          "allDesktopPageViews": { "pageViews": 22 },
          "insightsPageViews": { "pageViews": 0 },
          "mobileAboutPageViews": { "pageViews": 0 },
          "allMobilePageViews": { "pageViews": 0 },
          "productsPageViews": { "pageViews": 0 },
          "desktopProductsPageViews": { "pageViews": 0 },
          "jobsPageViews": { "pageViews": 0 },
          "peoplePageViews": { "pageViews": 1 },
          "overviewPageViews": { "pageViews": 21 },
          "mobileOverviewPageViews": { "pageViews": 0 },
          "lifeAtPageViews": { "pageViews": 0 },
          "desktopOverviewPageViews": { "pageViews": 21 },
          "mobileCareersPageViews": { "pageViews": 0 },
          "allPageViews": { "pageViews": 22 },
          "careersPageViews": { "pageViews": 0 },
          "mobileJobsPageViews": { "pageViews": 0 },
          "mobileLifeAtPageViews": { "pageViews": 0 },
          "desktopJobsPageViews": { "pageViews": 0 },
          "desktopPeoplePageViews": { "pageViews": 1 },
          "aboutPageViews": { "pageViews": 0 },
          "desktopAboutPageViews": { "pageViews": 0 },
          "mobilePeoplePageViews": { "pageViews": 0 },
          "desktopCareersPageViews": { "pageViews": 0 },
          "desktopInsightsPageViews": { "pageViews": 0 },
          "desktopLifeAtPageViews": { "pageViews": 0 },
          "mobileInsightsPageViews": { "pageViews": 0 }
        }
      },
      "pageStatisticsByStaffCountRange": [
        {
          "staffCountRange": "SIZE_51_TO_200",
          "pageStatistics": {
            "views": {
              "mobileProductsPageViews": { "pageViews": 0 },
              "allDesktopPageViews": { "pageViews": 15 },
              "insightsPageViews": { "pageViews": 0 },
              "mobileAboutPageViews": { "pageViews": 0 },
              "allMobilePageViews": { "pageViews": 0 },
              "productsPageViews": { "pageViews": 0 },
              "desktopProductsPageViews": { "pageViews": 0 },
              "jobsPageViews": { "pageViews": 0 },
              "peoplePageViews": { "pageViews": 0 },
              "overviewPageViews": { "pageViews": 15 },
              "mobileOverviewPageViews": { "pageViews": 0 },
              "lifeAtPageViews": { "pageViews": 0 },
              "desktopOverviewPageViews": { "pageViews": 15 },
              "mobileCareersPageViews": { "pageViews": 0 },
              "allPageViews": { "pageViews": 15 },
              "careersPageViews": { "pageViews": 0 },
              "mobileJobsPageViews": { "pageViews": 0 },
              "mobileLifeAtPageViews": { "pageViews": 0 },
              "desktopJobsPageViews": { "pageViews": 0 },
              "desktopPeoplePageViews": { "pageViews": 0 },
              "aboutPageViews": { "pageViews": 0 },
              "desktopAboutPageViews": { "pageViews": 0 },
              "mobilePeoplePageViews": { "pageViews": 0 },
              "desktopCareersPageViews": { "pageViews": 0 },
              "desktopInsightsPageViews": { "pageViews": 0 },
              "desktopLifeAtPageViews": { "pageViews": 0 },
              "mobileInsightsPageViews": { "pageViews": 0 }
            }
          }
        }
      ],
      "pageStatisticsByFunction": [
        {
          "pageStatistics": {
            "views": {
              "mobileProductsPageViews": { "pageViews": 0 },
              "allDesktopPageViews": { "pageViews": 21 },
              "insightsPageViews": { "pageViews": 0 },
              "mobileAboutPageViews": { "pageViews": 0 },
              "allMobilePageViews": { "pageViews": 0 },
              "productsPageViews": { "pageViews": 0 },
              "desktopProductsPageViews": { "pageViews": 0 },
              "jobsPageViews": { "pageViews": 0 },
              "peoplePageViews": { "pageViews": 0 },
              "overviewPageViews": { "pageViews": 21 },
              "mobileOverviewPageViews": { "pageViews": 0 },
              "lifeAtPageViews": { "pageViews": 0 },
              "desktopOverviewPageViews": { "pageViews": 21 },
              "mobileCareersPageViews": { "pageViews": 0 },
              "allPageViews": { "pageViews": 21 },
              "careersPageViews": { "pageViews": 0 },
              "mobileJobsPageViews": { "pageViews": 0 },
              "mobileLifeAtPageViews": { "pageViews": 0 },
              "desktopJobsPageViews": { "pageViews": 0 },
              "desktopPeoplePageViews": { "pageViews": 0 },
              "aboutPageViews": { "pageViews": 0 },
              "desktopAboutPageViews": { "pageViews": 0 },
              "mobilePeoplePageViews": { "pageViews": 0 },
              "desktopCareersPageViews": { "pageViews": 0 },
              "desktopInsightsPageViews": { "pageViews": 0 },
              "desktopLifeAtPageViews": { "pageViews": 0 },
              "mobileInsightsPageViews": { "pageViews": 0 }
            }
          },
          "function": "urn:li:function:8"
        }
      ],
      "pageStatisticsByGeo": [
        {
          "geo": "urn:li:geo:101094033",
          "pageStatistics": {
            "views": {
              "allPageViews": {
                "pageViews": 16
              }
            }
          }
        }
      ]
    }
  ]
};

const Index = () => {
  const data = sampleData.elements[0];
  const totalViews = data.totalPageStatistics.views;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-info flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="dashboard-header">LinkedIn Analytics Dashboard</h1>
              <p className="text-muted-foreground">Organization Page Performance Insights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Page Views"
            value={totalViews.allPageViews.pageViews}
            subtitle="All page views"
            trend="up"
            trendValue="+12%"
            icon={<Eye className="w-5 h-5" />}
          />
          
          <MetricCard
            title="Desktop Views"
            value={totalViews.allDesktopPageViews.pageViews}
            subtitle={`${((totalViews.allDesktopPageViews.pageViews / totalViews.allPageViews.pageViews) * 100).toFixed(0)}% of total`}
            trend="up"
            trendValue="+8%"
            icon={<Monitor className="w-5 h-5" />}
          />
          
          <MetricCard
            title="Mobile Views"
            value={totalViews.allMobilePageViews.pageViews}
            subtitle={`${((totalViews.allMobilePageViews.pageViews / totalViews.allPageViews.pageViews) * 100).toFixed(0)}% of total`}
            trend="neutral"
            trendValue="0%"
            icon={<Smartphone className="w-5 h-5" />}
          />
          
          <MetricCard
            title="Geographic Reach"
            value={data.pageStatisticsByGeoCountry.length}
            subtitle="Countries/Regions"
            trend="up"
            trendValue="+25%"
            icon={<Globe className="w-5 h-5" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PageTypeChart data={totalViews} />
          <GeographicChart data={data.pageStatisticsByGeoCountry} />
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StaffRangeChart data={data.pageStatisticsByStaffCountRange} />
          
          {/* Engagement Summary */}
          <div className="metric-card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">Engagement Summary</h3>
              <p className="text-sm text-muted-foreground">Key insights from your page performance</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Most Popular Page</span>
                </div>
                <span className="text-sm text-muted-foreground">Overview ({totalViews.overviewPageViews.pageViews} views)</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">Primary Platform</span>
                </div>
                <span className="text-sm text-muted-foreground">Desktop (100%)</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">Top Company Size</span>
                </div>
                <span className="text-sm text-muted-foreground">51-200 employees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
