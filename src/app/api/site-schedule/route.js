import connectDB from "@/config/db";
import SiteSchedule from "@/models/SiteSchedule";
import {
  DEFAULT_SITE_SCHEDULE,
  deepMerge,
  resolveMembershipStats,
  resolveCtaSection,
} from "@/lib/site-schedule-defaults";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function mergeScheduleFromDoc(doc) {
  const partial = doc
    ? {
        ...(doc.ega != null ? { ega: doc.ega } : {}),
        ...(doc.ee != null ? { ee: doc.ee } : {}),
        ...(doc.home != null ? { home: doc.home } : {}),
        ...(doc.sog != null ? { sog: doc.sog } : {}),
      }
    : {};
  return deepMerge(
    JSON.parse(JSON.stringify(DEFAULT_SITE_SCHEDULE)),
    partial
  );
}

/** Normalize nested fields after merge (Mongo may store strings; older rows may omit keys). */
function normalizeSchedule(schedule) {
  const s = JSON.parse(JSON.stringify(schedule));
  if (s.ega) {
    s.ega.membershipStats = resolveMembershipStats(s.ega);
    s.ega.ctaSection = resolveCtaSection(s.ega);
    s.ega.growthBanner = {
      ...DEFAULT_SITE_SCHEDULE.ega.growthBanner,
      ...(typeof s.ega.growthBanner === "object" && s.ega.growthBanner
        ? s.ega.growthBanner
        : {}),
    };
  }
  return s;
}

export async function GET() {
  try {
    await connectDB();
    const doc = await SiteSchedule.findOne({ singletonKey: "default" }).lean();
    const schedule = normalizeSchedule(mergeScheduleFromDoc(doc));
    return Response.json({ schedule });
  } catch (err) {
    console.error("site-schedule GET:", err?.message || err);
    return Response.json(
      {
        error:
          err?.message ||
          "Could not load site schedule. Check database connection.",
        schedule: normalizeSchedule(
          JSON.parse(JSON.stringify(DEFAULT_SITE_SCHEDULE))
        ),
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON body." }, { status: 400 });
    }
    if (!body || typeof body !== "object") {
      return Response.json({ error: "Expected JSON object body." }, { status: 400 });
    }
    const doc = await SiteSchedule.findOne({ singletonKey: "default" }).lean();
    let next = mergeScheduleFromDoc(doc);

    if (body.ega !== undefined) {
      next.ega = deepMerge(
        JSON.parse(JSON.stringify(DEFAULT_SITE_SCHEDULE.ega)),
        body.ega
      );
    }
    if (body.ee !== undefined) {
      next.ee = {
        ...DEFAULT_SITE_SCHEDULE.ee,
        ...body.ee,
      };
    }
    if (body.home !== undefined) {
      next.home = deepMerge(
        JSON.parse(JSON.stringify(DEFAULT_SITE_SCHEDULE.home)),
        body.home
      );
    }
    if (body.sog !== undefined) {
      next.sog = deepMerge(
        JSON.parse(JSON.stringify(DEFAULT_SITE_SCHEDULE.sog)),
        body.sog
      );
    }

    await SiteSchedule.findOneAndUpdate(
      { singletonKey: "default" },
      {
        $set: {
          ega: next.ega,
          ee: next.ee,
          home: next.home,
          sog: next.sog,
        },
      },
      { upsert: true, new: true }
    );

    const schedule = normalizeSchedule(next);
    return Response.json({ schedule });
  } catch (err) {
    console.error("site-schedule PUT:", err?.message || err);
    return Response.json(
      { error: err?.message || "Could not save site schedule." },
      { status: 500 }
    );
  }
}
