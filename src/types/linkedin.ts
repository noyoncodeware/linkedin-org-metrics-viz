
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
    pageStatisticsBySeniority: Array<{
      seniority: string;
      pageStatistics: {
        views: PageViews;
      };
    }>;
    pageStatisticsByFunction: Array<{
      function: string;
      pageStatistics: {
        views: PageViews;
      };
    }>;
    pageStatisticsByGeo: Array<{
      geo: string;
      pageStatistics: {
        views: {
          allPageViews: {
            pageViews: number;
          };
        };
      };
    }>;
    pageStatisticsByTargetedContent: any[];
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
  mobileProductsPageViews: { pageViews: number };
  mobileAboutPageViews: { pageViews: number };
  mobileOverviewPageViews: { pageViews: number };
  mobileCareersPageViews: { pageViews: number };
  mobileJobsPageViews: { pageViews: number };
  mobileLifeAtPageViews: { pageViews: number };
  mobileInsightsPageViews: { pageViews: number };
  mobilePeoplePageViews: { pageViews: number };
  desktopProductsPageViews: { pageViews: number };
  desktopAboutPageViews: { pageViews: number };
  desktopOverviewPageViews: { pageViews: number };
  desktopCareersPageViews: { pageViews: number };
  desktopJobsPageViews: { pageViews: number };
  desktopLifeAtPageViews: { pageViews: number };
  desktopInsightsPageViews: { pageViews: number };
  desktopPeoplePageViews: { pageViews: number };
}
