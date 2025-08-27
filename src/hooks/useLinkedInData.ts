
import { useQuery } from '@tanstack/react-query';
import { LinkedInPageStatistics } from '@/types/linkedin';

// Sample data as fallback
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

const fetchLinkedInData = async (): Promise<LinkedInPageStatistics> => {
  console.log('Fetching LinkedIn data from API...');
  
  try {
    const response = await fetch('https://cwrndadmin.idesk360.com/business/linkedin-page-insights');
    
    if (!response.ok) {
      console.log('API response not ok, using sample data');
      return sampleData;
    }
    
    const data = await response.json();
    console.log('Successfully fetched data from API');
    return data;
  } catch (error) {
    console.log('Error fetching from API, using sample data:', error);
    return sampleData;
  }
};

export const useLinkedInData = () => {
  return useQuery({
    queryKey: ['linkedin-data'],
    queryFn: fetchLinkedInData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
