/**
 * Default copy for dates, cohorts, and stats. Editable on /site-dates (persisted via API / DB).
 * EGA and EE are independent: updating one does not affect the other.
 */

export const DEFAULT_SITE_SCHEDULE = {
  ega: {
    membershipStats: {
      yearsExperience: 39,
      companiesCount: 1424,
      financialImpactMillions: 524,
      captionYears: "of leadership and business experience.",
      captionCompanies: "Coached and advised to success.",
      captionFinancial:
        "Millions in economic value generated for clients.",
    },
    growthBanner: {
      highlightText: "starting online Cohort 2602 on 16th April 2026!",
    },
    ctaSection: {
      experienceYears: 39,
      supportCountFormatted: "1,424+",
      financialImpactFormatted: "$524M+",
    },
    finalCta: {
      onlineStartsLine: "Starts April 16",
      inPersonStartsLine: "Starts April 14",
    },
    scaleBusiness: {
      onlineTitle: ["Online Cohort"],
      onlineHref: "/ega/growth-system-installation",
      onlineIcon: "/ega/custom-icons/online-meeting.png",
      inPersonHref: "/ega/mentoring-implementation",
      inPersonIcon: "/ega/custom-icons/class.png",
      onlineCohorts: [
        { label: "Cohort 2603", value: "June 4 - August 6, 2026" },
        { label: "Cohort 2604", value: "August 20 - October 22, 2026" },
      ],
      onlineSummary: [
        { label: "Day", value: "Every Thursday" },
        { label: "Duration", value: "10 Weeks" },
        { label: "Time", value: "11:00 AM - 2:00 PM EST" },
      ],
      inPersonTitle: ["In person Cohort"],
      inPersonLocations: [
        {
          name: "Connecticut",
          cohort: "Cohort 2605",
          sessionDates: "Sep 11-12 and Sep 25-26, 2026",
        },
        {
          name: "Texas",
          cohort: "Cohort 2606",
          sessionDates: "Sep 11-12 and Sep 25-26, 2026",
        },
      ],
      inPersonSummary: [
        { label: "Schedule", value: "4 Complete Days" },
        { label: "Time", value: "8:30 AM to 5:00 PM (CST)" },
      ],
    },
    growthSystemInstallation: {
      heroBadge: "Cohort-2603-2604",
      cohorts: [
        {
          title: "Cohort 2603",
          type: "In-person Zoom Workshop",
          startDate: "Thursday, June 4, 2026",
          endDate: "Thursday, August 6, 2026",
          day: "Thursdays (10 weeks)",
          time: "11:00 AM to 2:00 PM (EST)",
        },
        {
          title: "Cohort 2604",
          type: "In-person Zoom Workshop",
          startDate: "Thursday, August 20, 2026",
          endDate: "Thursday, October 22, 2026",
          day: "Thursdays (10 weeks)",
          time: "11:00 AM to 2:00 PM (EST)",
        },
      ],
      aboutStats: {
        yearsInBusiness: 18,
        companiesServed: 1424,
        financialImpactMillions: 524,
      },
      aboutParagraph: {
        years: 18,
        millionsPhrase: "$524 million",
        companiesPhrase: "1,424+ companies",
        countries: 28,
        professionalsTrained: "14,542",
      },
    },
    mentoringImplementation: {
      heroBadge: "Cohorts-2605-2606",
      ticker: {
        yearsInBusiness: 18,
        companiesServedDisplay: "1,424+",
        financialImpactDisplay: "$524M+",
        countries: 28,
      },
      about: {
        headingYears: 18,
        yearsInParagraph: 18,
        millionsPhrase: "$524 million in measurable financial benefits",
        companiesPhrase: "1,424+ companies",
        countries: 28,
        professionalsTrained: "14,542 professionals",
      },
      cohort2605: {
        title: "Cohort 2605",
        type: "In-person live Workshop",
        session1: "Friday, September 11, 2026",
        session2: "Saturday, September 12, 2026",
        session3: "Thursdays (10 weeks)",
        session4: "11:00 AM to 2:00 PM (EST)",
        format: "4 Complete in-person days",
        time: "08:30 AM to 5:00 PM (CST)",
      },
      cohort2606: {
        title: "Cohort 2606",
        type: "In-person live Workshop",
        session1: "Friday, October 09, 2026",
        session2: "Saturday, October 10, 2026",
        session3: "Friday, October 23, 2026",
        session4: "Saturday, October 24, 2026",
        format: "4 Complete in-person days",
        time: "08:30 AM to 5:00 PM (CST)",
      },
    },
  },
  ee: {
    trustedEntrepreneursCount: 14573,
    masterclassDate: "April 29, 2026",
  },
  home: {
    statsShowcase: [
      {
        label: "Years",
        value: 39,
        prefix: "",
        suffix: "+",
        description: "Years Leadership and Business Growth Experience",
      },
      {
        label: "Businesses",
        value: 1424,
        prefix: "",
        suffix: "+",
        description: "Entrepreneurs and SMBs Supported",
      },
      {
        label: "Leaders",
        value: 43,
        prefix: "",
        suffix: "%",
        description: "Avg. Revenue Growth in 12 Months",
      },
      {
        label: "Value Generated",
        value: 92,
        prefix: "",
        suffix: "%",
        description: "Client Success Rate",
      },
      {
        label: "Value Generated",
        value: 524,
        prefix: "$",
        suffix: "M+",
        description: "In Measurable Financial Impact Delivered",
      },
    ],
  },
  sog: {
    heroStats: [
      {
        valueText: "50%",
        description:
          "of businesses fail in their first year without stage-fit execution",
      },
      {
        valueText: "80%",
        description:
          "don't survive past five years due to wrong systems, wrong timing",
      },
      {
        valueText: "130%",
        description:
          "average revenue growth, client-reported with stage-aligned playbooks",
      },
      {
        valueText: "1,424+",
        description:
          "businesses transformed since 1987 across industries and geographies",
      },
    ],
  },
};

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

export function deepMerge(base, patch) {
  if (!isPlainObject(patch)) return base;
  const out = { ...base };
  for (const key of Object.keys(patch)) {
    const pv = patch[key];
    const bv = base[key];
    if (isPlainObject(pv) && isPlainObject(bv)) {
      out[key] = deepMerge(bv, pv);
    } else if (Array.isArray(pv)) {
      out[key] = pv;
    } else {
      out[key] = pv;
    }
  }
  return out;
}

const D = DEFAULT_SITE_SCHEDULE.ega.membershipStats;

/** Coerce DB / API values so UI always gets numbers + caption strings. */
export function resolveMembershipStats(ega) {
  const m = ega?.membershipStats;
  const years = Number(m?.yearsExperience);
  const companies = Number(m?.companiesCount);
  const millions = Number(m?.financialImpactMillions);
  return {
    yearsExperience: Number.isFinite(years) ? years : D.yearsExperience,
    companiesCount: Number.isFinite(companies) ? companies : D.companiesCount,
    financialImpactMillions: Number.isFinite(millions)
      ? millions
      : D.financialImpactMillions,
    captionYears:
      typeof m?.captionYears === "string" && m.captionYears.trim()
        ? m.captionYears
        : D.captionYears,
    captionCompanies:
      typeof m?.captionCompanies === "string" && m.captionCompanies.trim()
        ? m.captionCompanies
        : D.captionCompanies,
    captionFinancial:
      typeof m?.captionFinancial === "string" && m.captionFinancial.trim()
        ? m.captionFinancial
        : D.captionFinancial,
  };
}

export function resolveGrowthBanner(ega) {
  const t = ega?.growthBanner?.highlightText;
  if (typeof t === "string" && t.trim()) return t;
  return DEFAULT_SITE_SCHEDULE.ega.growthBanner.highlightText;
}

export function resolveCtaSection(ega) {
  const c = DEFAULT_SITE_SCHEDULE.ega.ctaSection;
  const x = ega?.ctaSection;
  const exp = Number(x?.experienceYears);
  return {
    experienceYears: Number.isFinite(exp) ? exp : c.experienceYears,
    supportCountFormatted:
      typeof x?.supportCountFormatted === "string" && x.supportCountFormatted
        ? x.supportCountFormatted
        : c.supportCountFormatted,
    financialImpactFormatted:
      typeof x?.financialImpactFormatted === "string" &&
      x.financialImpactFormatted
        ? x.financialImpactFormatted
        : c.financialImpactFormatted,
  };
}
