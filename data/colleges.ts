export type ThemeColor =
  | "bg-red-50 text-red-600 border-red-200"
    | "bg-blue-50 text-blue-600 border-blue-200"
      | "bg-yellow-50 text-yellow-700 border-yellow-200"
        | "bg-emerald-50 text-emerald-600 border-emerald-200"
          | "bg-indigo-50 text-indigo-600 border-indigo-200"
            | "bg-purple-50 text-purple-600 border-purple-200"
              | "bg-orange-50 text-orange-600 border-orange-200"
                | "bg-pink-50 text-pink-600 border-pink-200";

                export type GeographicRegion = "North" | "South" | "East" | "West";
                export type InstitutionalTier = 1 | 2 | 3;
                export type ProvenanceStatus = "verified" | "malformed" | "unchecked";

                export interface RawCollege {
                  id: number;
                    name: string;
                      location: string;
                        region: GeographicRegion;
                          rating: number;
                            fees: number;
                              branch: string;
                                placement: number;
                                  averagePackage: number;
                                    placementRate: number;
                                      nirf: number;
                                        nirfYear: number;
                                          established: number;
                                            campus: string;
                                              logoText: string;
                                                themeColor: ThemeColor;
                                                  tier: InstitutionalTier;
                                                    sourceName: string;
                                                      sourceUrl: string;
                                                        lastUpdated: string;
                                                          provenanceState: {
                                                              status: ProvenanceStatus;
                                                                  lastChecked: string;
                                                                    };
                                                                    }

                                                                    export interface College extends RawCollege {
                                                                      searchTokens: Set<string>;
                                                                      }

                                                                      export const SCORING_CONFIG = {
                                                                        placementWeight: 40,
                                                                          nirfMaxBase: 50,
                                                                            nirfPenaltyScalar: 0.3,
                                                                              tier1Bonus: 12,
                                                                                tier2Bonus: 5,
                                                                                  roiMaxBonus: 20,
                                                                                    roiLogMultiplier: 6.5,
                                                                                      ratingMultiplier: 6,
                                                                                      } as const;

                                                                                      const cleanTokens = (str: string): string[] =>
                                                                                        str
                                                                                            .toLowerCase()
                                                                                                .replace(/[^a-z0-9\s]/g, "")
                                                                                                    .split(/\s+/)
                                                                                                        .filter(Boolean);
const rawColleges: RawCollege[] = [
  {
    id: 1,
    name: "IIT Madras",
    location: "Chennai",
    region: "South",
    rating: 4.8,
    fees: 250000,
    branch: "CSE",
    placement: 2500000,
    averagePackage: 2140000,
    placementRate: 94,
    nirf: 1,
    nirfYear: 2024,
    established: 1959,
    campus: "617 Acres",
    logoText: "IITM",
    themeColor: "bg-red-50 text-red-600 border-red-200",
    tier: 1,
    sourceName: "NIRF 2024 Audited Report",
    sourceUrl: "https://www.nirfindia.org/2024/EngineeringRanking.html",
    lastUpdated: "2024-08-15",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 2,
    name: "IIT Delhi",
    location: "Delhi",
    region: "North",
    rating: 4.8,
    fees: 255000,
    branch: "CSE",
    placement: 2700000,
    averagePackage: 2250000,
    placementRate: 96,
    nirf: 2,
    nirfYear: 2024,
    established: 1961,
    campus: "325 Acres",
    logoText: "IITD",
    themeColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
    tier: 1,
    sourceName: "IIT Delhi Career Services",
    sourceUrl: "https://ocs.iitd.ac.in",
    lastUpdated: "2024-08-20",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 3,
    name: "IIT Bombay",
    location: "Mumbai",
    region: "West",
    rating: 4.9,
    fees: 260000,
    branch: "CSE",
    placement: 2800000,
    averagePackage: 2350000,
    placementRate: 97,
    nirf: 3,
    nirfYear: 2024,
    established: 1958,
    campus: "550 Acres",
    logoText: "IITB",
    themeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    tier: 1,
    sourceName: "IITB Placement Audits",
    sourceUrl: "https://www.iitb.ac.in/en/activities/placement-reports",
    lastUpdated: "2024-09-02",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 4,
    name: "IIT Kharagpur",
    location: "Kharagpur",
    region: "East",
    rating: 4.7,
    fees: 223000,
    branch: "CSE",
    placement: 2400000,
    averagePackage: 1850000,
    placementRate: 91,
    nirf: 6,
    nirfYear: 2024,
    established: 1951,
    campus: "2100 Acres",
    logoText: "IITKGP",
    themeColor: "bg-blue-50 text-blue-600 border-blue-200",
    tier: 1,
    sourceName: "IIT KGP CDC",
    sourceUrl: "https://www.iitkgp.ac.in",
    lastUpdated: "2024-07-15",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 5,
    name: "IIT Kanpur",
    location: "Kanpur",
    region: "North",
    rating: 4.8,
    fees: 240000,
    branch: "CSE",
    placement: 2600000,
    averagePackage: 2000000,
    placementRate: 93,
    nirf: 4,
    nirfYear: 2024,
    established: 1959,
    campus: "1055 Acres",
    logoText: "IITK",
    themeColor: "bg-orange-50 text-orange-600 border-orange-200",
    tier: 1,
    sourceName: "IIT Kanpur Placement Cell",
    sourceUrl: "https://www.iitk.ac.in",
    lastUpdated: "2024-08-01",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 6,
    name: "IIT Roorkee",
    location: "Roorkee",
    region: "North",
    rating: 4.7,
    fees: 230000,
    branch: "CSE",
    placement: 2300000,
    averagePackage: 1820000,
    placementRate: 92,
    nirf: 5,
    nirfYear: 2024,
    established: 1847,
    campus: "365 Acres",
    logoText: "IITR",
    themeColor: "bg-purple-50 text-purple-600 border-purple-200",
    tier: 1,
    sourceName: "IIT Roorkee Media Cell",
    sourceUrl: "https://www.iitr.ac.in",
    lastUpdated: "2024-07-22",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 7,
    name: "IIT Guwahati",
    location: "Guwahati",
    region: "East",
    rating: 4.6,
    fees: 220000,
    branch: "CSE",
    placement: 2200000,
    averagePackage: 1750000,
    placementRate: 89,
    nirf: 7,
    nirfYear: 2024,
    established: 1994,
    campus: "700 Acres",
    logoText: "IITG",
    themeColor: "bg-pink-50 text-pink-600 border-pink-200",
    tier: 1,
    sourceName: "IIT Guwahati Board",
    sourceUrl: "https://www.iitg.ac.in",
    lastUpdated: "2024-08-10",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 8,
    name: "IIIT Hyderabad",
    location: "Hyderabad",
    region: "South",
    rating: 4.8,
    fees: 320000,
    branch: "CSE",
    placement: 2800000,
    averagePackage: 2600000,
    placementRate: 99,
    nirf: 8,
    nirfYear: 2024,
    established: 1998,
    campus: "66 Acres",
    logoText: "IITH",
    themeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    tier: 1,
    sourceName: "IIIT-H Academic Council",
    sourceUrl: "https://www.iiit.ac.in/placements/",
    lastUpdated: "2024-07-28",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 9,
    name: "NIT Trichy",
    location: "Trichy",
    region: "South",
    rating: 4.6,
    fees: 165000,
    branch: "CSE",
    placement: 1800000,
    averagePackage: 1550000,
    placementRate: 92,
    nirf: 9,
    nirfYear: 2024,
    established: 1964,
    campus: "800 Acres",
    logoText: "NITT",
    themeColor: "bg-purple-50 text-purple-600 border-purple-200",
    tier: 1,
    sourceName: "NIT Trichy Placement Reports",
    sourceUrl: "https://www.nitt.edu/home/students/placement/",
    lastUpdated: "2024-07-19",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 10,
    name: "NIT Surathkal",
    location: "Surathkal",
    region: "South",
    rating: 4.5,
    fees: 155000,
    branch: "CSE",
    placement: 1700000,
    averagePackage: 1420000,
    placementRate: 90,
    nirf: 12,
    nirfYear: 2024,
    established: 1960,
    campus: "295 Acres",
    logoText: "NITK",
    themeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
    tier: 1,
    sourceName: "NITK Institutional Audit",
    sourceUrl: "https://www.nitk.ac.in",
    lastUpdated: "2024-06-18",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 11,
    name: "VIT Vellore",
    location: "Vellore",
    region: "South",
    rating: 4.3,
    fees: 198000,
    branch: "CSE",
    placement: 1100000,
    averagePackage: 920000,
    placementRate: 88,
    nirf: 11,
    nirfYear: 2024,
    established: 1984,
    campus: "372 Acres",
    logoText: "VIT",
    themeColor: "bg-orange-50 text-orange-600 border-orange-200",
    tier: 2,
    sourceName: "VIT CDC Statistics",
    sourceUrl: "https://vit.ac.in/placement",
    lastUpdated: "2024-07-25",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 12,
    name: "SRM Institute Chennai",
    location: "Chennai",
    region: "South",
    rating: 4.2,
    fees: 260000,
    branch: "CSE",
    placement: 950000,
    averagePackage: 750000,
    placementRate: 85,
    nirf: 28,
    nirfYear: 2024,
    established: 1985,
    campus: "250 Acres",
    logoText: "SRM",
    themeColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
    tier: 2,
    sourceName: "SRM Placement Hub",
    sourceUrl: "https://www.srmist.edu.in",
    lastUpdated: "2024-07-11",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 13,
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore",
    region: "South",
    rating: 4.1,
    fees: 240000,
    branch: "CSE",
    placement: 900000,
    averagePackage: 710000,
    placementRate: 86,
    nirf: 19,
    nirfYear: 2024,
    established: 1994,
    campus: "400 Acres",
    logoText: "AMRITA",
    themeColor: "bg-pink-50 text-pink-600 border-pink-200",
    tier: 2,
    sourceName: "Amrita Corporate Relations",
    sourceUrl: "https://www.amrita.edu",
    lastUpdated: "2024-08-04",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 14,
    name: "BITS Pilani",
    location: "Pilani",
    region: "West",
    rating: 4.7,
    fees: 450000,
    branch: "CSE",
    placement: 2000000,
    averagePackage: 1710000,
    placementRate: 95,
    nirf: 20,
    nirfYear: 2024,
    established: 1964,
    campus: "328 Acres",
    logoText: "BITS",
    themeColor: "bg-red-50 text-red-600 border-red-200",
    tier: 1,
    sourceName: "BITS Placement Bulletin",
    sourceUrl: "https://www.bits-pilani.ac.in/placements",
    lastUpdated: "2024-08-11",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 15,
    name: "JNTU Kakinada",
    location: "Kakinada",
    region: "South",
    rating: 4.2,
    fees: 45000,
    branch: "CSE",
    placement: 580000,
    averagePackage: 450000,
    placementRate: 75,
    nirf: 101, // Regional band approximation
    nirfYear: 2024,
    established: 1946,
    campus: "110 Acres",
    logoText: "JNTUK",
    themeColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
    tier: 2,
    sourceName: "JNTU-K Directorate of Placements",
    sourceUrl: "https://www.jntuk.edu.in",
    lastUpdated: "2024-05-15",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 16,
    name: "JNTU Anantapur",
    location: "Anantapur",
    region: "South",
    rating: 4.0,
    fees: 40000,
    branch: "CSE",
    placement: 520000,
    averagePackage: 410000,
    placementRate: 72,
    nirf: 125,
    nirfYear: 2024,
    established: 1946,
    campus: "155 Acres",
    logoText: "JNTUA",
    themeColor: "bg-orange-50 text-orange-600 border-orange-200",
    tier: 3,
    sourceName: "JNTU-A Placement Desk",
    sourceUrl: "https://www.jntua.ac.in",
    lastUpdated: "2024-05-20",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 17,
    name: "Andhra University",
    location: "Visakhapatnam",
    region: "South",
    rating: 4.4,
    fees: 70000,
    branch: "CSE",
    placement: 650000,
    averagePackage: 510000,
    placementRate: 79,
    nirf: 43,
    nirfYear: 2024,
    established: 1926,
    campus: "422 Acres",
    logoText: "AU",
    themeColor: "bg-blue-50 text-blue-600 border-blue-200",
    tier: 2,
    sourceName: "AU Institutional Disclosure",
    sourceUrl: "https://www.andhrauniversity.edu.in",
    lastUpdated: "2024-06-30",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 18,
    name: "Sri Venkateswara University",
    location: "Tirupati",
    region: "South",
    rating: 4.2,
    fees: 55000,
    branch: "CSE",
    placement: 600000,
    averagePackage: 480000,
    placementRate: 76,
    nirf: 72,
    nirfYear: 2024,
    established: 1954,
    campus: "1000 Acres",
    logoText: "SVU",
    themeColor: "bg-purple-50 text-purple-600 border-purple-200",
    tier: 2,
    sourceName: "SVU CE Placement Cell",
    sourceUrl: "https://www.svuniversity.edu.in",
    lastUpdated: "2024-06-12",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 19,
    name: "GMR Institute of Technology",
    location: "Rajam",
    region: "South",
    rating: 3.9,
    fees: 105000,
    branch: "CSE",
    placement: 480000,
    averagePackage: 380000,
    placementRate: 80,
    nirf: 180,
    nirfYear: 2024,
    established: 1997,
    campus: "117 Acres",
    logoText: "GMRIT",
    themeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    tier: 3,
    sourceName: "GMRIT Training & Placement",
    sourceUrl: "https://www.gmrit.org",
    lastUpdated: "2024-05-18",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  },
  {
    id: 20,
    name: "Gayatri Vidya Parishad",
    location: "Visakhapatnam",
    region: "South",
    rating: 4.1,
    fees: 115000,
    branch: "CSE",
    placement: 550000,
    averagePackage: 440000,
    placementRate: 82,
    nirf: 160,
    nirfYear: 2024,
    established: 1996,
    campus: "61 Acres",
    logoText: "GVP",
    themeColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
    tier: 2,
    sourceName: "GVPCE Placement Bulletin",
    sourceUrl: "https://www.gvpce.ac.in",
    lastUpdated: "2024-06-05",
    provenanceState: { status: "unchecked", lastChecked: "2026-06-23" }
  }
];
 export const colleges: College[] = rawColleges.map((col) => {
                  	  const combinedContext =
                  	      `${col.name} ${col.location} ${col.branch} engineering college university`;

                  	        return {
                  	        	    ...col,
                  	        	        searchTokens: new Set(cleanTokens(combinedContext)),
                  	        	          };
                  	        	          });

                  	        	          const DATASET_MAX_RATING = Math.max(
                  	        	          	  ...colleges.map((c) => c.rating),
                  	        	          	    4.9
                  	        	          	    );

                  	        	          	    export const MAX_THEORETICAL_SCORE =
                  	        	          	      SCORING_CONFIG.placementWeight +
                  	        	          	        (SCORING_CONFIG.nirfMaxBase -
                  	        	          	            (1 * SCORING_CONFIG.nirfPenaltyScalar)) +
                  	        	          	              SCORING_CONFIG.tier1Bonus +
                  	        	          	                (DATASET_MAX_RATING *
                  	        	          	                    SCORING_CONFIG.ratingMultiplier) +
                  	        	          	                      SCORING_CONFIG.roiMaxBonus;
