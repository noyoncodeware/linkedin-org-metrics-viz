
export interface LinkedInPageStatistics {
  paging: {
    start: number;
    count: number;
    links: any[];
  };
  elements: Array<{
    organization: string;
    totalPageStatistics: {
      views: PageViews;
    };
    pageStatisticsByGeoCountry: Array<{
      geo: string;
      pageStatistics: {
        views: {
          allPageViews: {
            pageViews: number;
          };
        };
      };
    }>;
    pageStatisticsByStaffCountRange: Array<{
      staffCountRange: string;
      pageStatistics: {
        views: PageViews;
      };
    }>;
    pageStatisticsByIndustryV2: Array<{
      industryV2: string;
      pageStatistics: {
        views: {
          allPageViews: {
            pageViews: number;
          };
        };
      };
    }>;
  }>;
}

export interface PageViews {
  allPageViews: { pageViews: number };
  allDesktopPageViews: { pageViews: number };
  allMobilePageViews: { pageViews: number };
  overviewPageViews: { pageViews: number };
  peoplePageViews: { pageViews: number };
  jobsPageViews: { pageViews: number };
  aboutPageViews: { pageViews: number };
  careersPageViews: { pageViews: number };
  productsPageViews: { pageViews: number };
  lifeAtPageViews: { pageViews: number };
  insightsPageViews: { pageViews: number };
}
