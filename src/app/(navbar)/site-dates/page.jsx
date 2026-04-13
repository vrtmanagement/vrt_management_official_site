"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSiteSchedule } from "@/contexts/SiteScheduleContext";
import { DEFAULT_SITE_SCHEDULE } from "@/lib/site-schedule-defaults";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function clone(x) {
  return JSON.parse(JSON.stringify(x));
}

export default function SiteDatesPage() {
  const { ega, ee, home, sog, hydrated, persistPartial } = useSiteSchedule();

  const [tab, setTab] = useState("ega");
  const [egaDraft, setEgaDraft] = useState(null);
  const [eeDraft, setEeDraft] = useState(null);
  const [homeDraft, setHomeDraft] = useState(null);
  const [sogDraft, setSogDraft] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (hydrated && egaDraft === null) setEgaDraft(clone(ega));
  }, [hydrated, ega, egaDraft]);

  useEffect(() => {
    if (hydrated && eeDraft === null) setEeDraft(clone(ee));
  }, [hydrated, ee, eeDraft]);

  useEffect(() => {
    if (hydrated && homeDraft === null) setHomeDraft(clone(home));
  }, [hydrated, home, homeDraft]);

  useEffect(() => {
    if (hydrated && sogDraft === null) setSogDraft(clone(sog));
  }, [hydrated, sog, sogDraft]);

  if (!hydrated || !egaDraft || !eeDraft || !homeDraft || !sogDraft) {
    return (
      <div className="min-h-[50vh] pt-28 px-6 text-center text-gray-600">
        Loading editor…
      </div>
    );
  }

  const g = egaDraft.growthSystemInstallation;
  const m = egaDraft.mentoringImplementation;
  const s = egaDraft.scaleBusiness;

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          Dates &amp; numbers
        </h1>
        <p className="text-neutral-600 mb-6">
          Changes apply across the site for{" "}
          <strong>EGA</strong> or <strong>EE</strong> separately. Values are
          stored in your <strong>MongoDB</strong> database (same for all visitors
          after they reload).
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            type="button"
            variant={tab === "ega" ? "default" : "outline"}
            onClick={() => setTab("ega")}
            className={tab === "ega" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            EGA
          </Button>
          <Button
            type="button"
            variant={tab === "ee" ? "default" : "outline"}
            onClick={() => setTab("ee")}
            className={tab === "ee" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            EE
          </Button>
          <Button
            type="button"
            variant={tab === "home" ? "default" : "outline"}
            onClick={() => setTab("home")}
            className={tab === "home" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            HOME
          </Button>
          <Button
            type="button"
            variant={tab === "sog" ? "default" : "outline"}
            onClick={() => setTab("sog")}
            className={tab === "sog" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            SOG
          </Button>
        </div>

        {tab === "home" && (
          <div className="space-y-6 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-red-700">
              Home stats showcase
            </h2>
            <div className="grid gap-4">
              {(homeDraft.statsShowcase || []).map((row, i) => (
                <div key={`${row.label}-${i}`} className="space-y-2 border rounded-lg p-4">
                  <p className="text-sm font-medium text-neutral-700">Card {i + 1}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label>Label</Label>
                      <Input
                        value={row.label ?? ""}
                        onChange={(e) => {
                          const statsShowcase = [...homeDraft.statsShowcase];
                          statsShowcase[i] = { ...statsShowcase[i], label: e.target.value };
                          setHomeDraft({ ...homeDraft, statsShowcase });
                        }}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Value (number)</Label>
                      <Input
                        type="number"
                        value={row.value ?? 0}
                        onChange={(e) => {
                          const statsShowcase = [...homeDraft.statsShowcase];
                          statsShowcase[i] = {
                            ...statsShowcase[i],
                            value: Number(e.target.value) || 0,
                          };
                          setHomeDraft({ ...homeDraft, statsShowcase });
                        }}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Prefix (optional)</Label>
                      <Input
                        value={row.prefix ?? ""}
                        onChange={(e) => {
                          const statsShowcase = [...homeDraft.statsShowcase];
                          statsShowcase[i] = { ...statsShowcase[i], prefix: e.target.value };
                          setHomeDraft({ ...homeDraft, statsShowcase });
                        }}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Suffix (optional)</Label>
                      <Input
                        value={row.suffix ?? ""}
                        onChange={(e) => {
                          const statsShowcase = [...homeDraft.statsShowcase];
                          statsShowcase[i] = { ...statsShowcase[i], suffix: e.target.value };
                          setHomeDraft({ ...homeDraft, statsShowcase });
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label>Description</Label>
                    <Input
                      value={row.description ?? ""}
                      onChange={(e) => {
                        const statsShowcase = [...homeDraft.statsShowcase];
                        statsShowcase[i] = {
                          ...statsShowcase[i],
                          description: e.target.value,
                        };
                        setHomeDraft({ ...homeDraft, statsShowcase });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-700"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const next = await persistPartial({ home: homeDraft });
                    setHomeDraft(clone(next.home));
                    toast.success("HOME settings saved to the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not save HOME settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Save HOME
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const defaults = clone(DEFAULT_SITE_SCHEDULE.home);
                    const next = await persistPartial({ home: defaults });
                    setHomeDraft(clone(next.home));
                    toast.success("HOME settings reset to defaults in the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not reset HOME settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Reset HOME defaults
              </Button>
            </div>
          </div>
        )}

        {tab === "sog" && (
          <div className="space-y-6 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-red-700">
              SOG hero stats strip
            </h2>
            <div className="grid gap-4">
              {(sogDraft.heroStats || []).map((row, i) => (
                <div key={`${row.valueText}-${i}`} className="space-y-2 border rounded-lg p-4">
                  <p className="text-sm font-medium text-neutral-700">Stat {i + 1}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label>Value text</Label>
                      <Input
                        value={row.valueText ?? ""}
                        onChange={(e) => {
                          const heroStats = [...sogDraft.heroStats];
                          heroStats[i] = { ...heroStats[i], valueText: e.target.value };
                          setSogDraft({ ...sogDraft, heroStats });
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label>Description</Label>
                    <Input
                      value={row.description ?? ""}
                      onChange={(e) => {
                        const heroStats = [...sogDraft.heroStats];
                        heroStats[i] = {
                          ...heroStats[i],
                          description: e.target.value,
                        };
                        setSogDraft({ ...sogDraft, heroStats });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-700"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const next = await persistPartial({ sog: sogDraft });
                    setSogDraft(clone(next.sog));
                    toast.success("SOG settings saved to the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not save SOG settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Save SOG
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const defaults = clone(DEFAULT_SITE_SCHEDULE.sog);
                    const next = await persistPartial({ sog: defaults });
                    setSogDraft(clone(next.sog));
                    toast.success("SOG settings reset to defaults in the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not reset SOG settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Reset SOG defaults
              </Button>
            </div>
          </div>
        )}

        {tab === "ee" && (
          <div className="space-y-6 rounded-xl border bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="ee-trusted">Trusted entrepreneurs count (number)</Label>
              <Input
                id="ee-trusted"
                type="number"
                value={eeDraft.trustedEntrepreneursCount}
                onChange={(e) =>
                  setEeDraft({
                    ...eeDraft,
                    trustedEntrepreneursCount: Number(e.target.value) || 0,
                  })
                }
              />
              <p className="text-xs text-neutral-500">
                Shown as &quot;Trusted by {`{count}`}+ Entrepreneurs…&quot;
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ee-date">Masterclass date (display text)</Label>
              <Input
                id="ee-date"
                value={eeDraft.masterclassDate}
                onChange={(e) =>
                  setEeDraft({ ...eeDraft, masterclassDate: e.target.value })
                }
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-700"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const next = await persistPartial({ ee: eeDraft });
                    setEeDraft(clone(next.ee));
                    toast.success("EE settings saved to the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not save EE settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Save EE
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const defaults = clone(DEFAULT_SITE_SCHEDULE.ee);
                    const next = await persistPartial({ ee: defaults });
                    setEeDraft(clone(next.ee));
                    toast.success("EE schedule reset to defaults in the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not reset EE settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Reset EE defaults
              </Button>
            </div>
          </div>
        )}

        {tab === "ega" && (
          <div className="space-y-10">
            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">
                Hero / membership stats (numbers)
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Years experience</Label>
                  <Input
                    type="number"
                    value={egaDraft.membershipStats.yearsExperience}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        membershipStats: {
                          ...egaDraft.membershipStats,
                          yearsExperience: Number(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Companies count</Label>
                  <Input
                    type="number"
                    value={egaDraft.membershipStats.companiesCount}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        membershipStats: {
                          ...egaDraft.membershipStats,
                          companiesCount: Number(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Financial impact ($M)</Label>
                  <Input
                    type="number"
                    value={egaDraft.membershipStats.financialImpactMillions}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        membershipStats: {
                          ...egaDraft.membershipStats,
                          financialImpactMillions: Number(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <p className="text-sm text-neutral-600 pt-2">
                Short lines under each stat on the EGA page (hero membership
                section)
              </p>
              <div className="grid gap-3">
                <div className="space-y-2">
                  <Label>Caption under years stat</Label>
                  <Input
                    value={egaDraft.membershipStats.captionYears ?? ""}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        membershipStats: {
                          ...egaDraft.membershipStats,
                          captionYears: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Caption under companies stat</Label>
                  <Input
                    value={egaDraft.membershipStats.captionCompanies ?? ""}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        membershipStats: {
                          ...egaDraft.membershipStats,
                          captionCompanies: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Caption under $M stat</Label>
                  <Input
                    value={egaDraft.membershipStats.captionFinancial ?? ""}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        membershipStats: {
                          ...egaDraft.membershipStats,
                          captionFinancial: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">Growth banner</h2>
              <div className="space-y-2">
                <Label>Highlight sentence (red text)</Label>
                <Input
                  value={egaDraft.growthBanner.highlightText}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthBanner: {
                        ...egaDraft.growthBanner,
                        highlightText: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">EGA CTA section</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Experience years (paragraph)</Label>
                  <Input
                    type="number"
                    value={egaDraft.ctaSection.experienceYears}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        ctaSection: {
                          ...egaDraft.ctaSection,
                          experienceYears: Number(e.target.value) || 0,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Support count (e.g. 1,424+)</Label>
                  <Input
                    value={egaDraft.ctaSection.supportCountFormatted}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        ctaSection: {
                          ...egaDraft.ctaSection,
                          supportCountFormatted: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Financial impact (e.g. $524M+)</Label>
                  <Input
                    value={egaDraft.ctaSection.financialImpactFormatted}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        ctaSection: {
                          ...egaDraft.ctaSection,
                          financialImpactFormatted: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">
                Final call-to-action buttons
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Online cohort line</Label>
                  <Input
                    value={egaDraft.finalCta.onlineStartsLine}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        finalCta: {
                          ...egaDraft.finalCta,
                          onlineStartsLine: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>In-person cohort line</Label>
                  <Input
                    value={egaDraft.finalCta.inPersonStartsLine}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        finalCta: {
                          ...egaDraft.finalCta,
                          inPersonStartsLine: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">
                Scale business section (EGA home)
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Online phase title</Label>
                  <Input
                    value={s.onlineTitle[0]}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: {
                          ...s,
                          onlineTitle: [e.target.value],
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>In-person phase title</Label>
                  <Input
                    value={s.inPersonTitle[0]}
                    onChange={(e) =>
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: {
                          ...s,
                          inPersonTitle: [e.target.value],
                        },
                      })
                    }
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-neutral-700">Online cohorts</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[0, 1].map((i) => (
                  <div key={i} className="space-y-2 border rounded-lg p-3">
                    <Label>Cohort {i + 1} label</Label>
                    <Input
                      value={s.onlineCohorts[i]?.label ?? ""}
                      onChange={(e) => {
                        const onlineCohorts = [...s.onlineCohorts];
                        onlineCohorts[i] = {
                          ...onlineCohorts[i],
                          label: e.target.value,
                        };
                        setEgaDraft({
                          ...egaDraft,
                          scaleBusiness: { ...s, onlineCohorts },
                        });
                      }}
                    />
                    <Label>Cohort {i + 1} dates</Label>
                    <Input
                      value={s.onlineCohorts[i]?.value ?? ""}
                      onChange={(e) => {
                        const onlineCohorts = [...s.onlineCohorts];
                        onlineCohorts[i] = {
                          ...onlineCohorts[i],
                          value: e.target.value,
                        };
                        setEgaDraft({
                          ...egaDraft,
                          scaleBusiness: { ...s, onlineCohorts },
                        });
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-neutral-700">
                Online summary (Day / Duration / Time)
              </p>
              <div className="grid gap-3">
                {s.onlineSummary.map((row, i) => (
                  <div key={row.label} className="flex flex-wrap gap-2 items-end">
                    <div className="space-y-1 flex-1 min-w-[120px]">
                      <Label className="text-xs">Label</Label>
                      <Input
                        value={row.label}
                        onChange={(e) => {
                          const onlineSummary = [...s.onlineSummary];
                          onlineSummary[i] = {
                            ...onlineSummary[i],
                            label: e.target.value,
                          };
                          setEgaDraft({
                            ...egaDraft,
                            scaleBusiness: { ...s, onlineSummary },
                          });
                        }}
                      />
                    </div>
                    <div className="space-y-1 flex-[2] min-w-[180px]">
                      <Label className="text-xs">Value</Label>
                      <Input
                        value={row.value}
                        onChange={(e) => {
                          const onlineSummary = [...s.onlineSummary];
                          onlineSummary[i] = {
                            ...onlineSummary[i],
                            value: e.target.value,
                          };
                          setEgaDraft({
                            ...egaDraft,
                            scaleBusiness: { ...s, onlineSummary },
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-neutral-700">In-person locations</p>
              {[0, 1].map((i) => (
                <div key={i} className="grid sm:grid-cols-3 gap-2 border rounded-lg p-3">
                  <Input
                    placeholder="Location"
                    value={s.inPersonLocations[i]?.name ?? ""}
                    onChange={(e) => {
                      const inPersonLocations = [...s.inPersonLocations];
                      inPersonLocations[i] = {
                        ...inPersonLocations[i],
                        name: e.target.value,
                      };
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: { ...s, inPersonLocations },
                      });
                    }}
                  />
                  <Input
                    placeholder="Cohort label"
                    value={s.inPersonLocations[i]?.cohort ?? ""}
                    onChange={(e) => {
                      const inPersonLocations = [...s.inPersonLocations];
                      inPersonLocations[i] = {
                        ...inPersonLocations[i],
                        cohort: e.target.value,
                      };
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: { ...s, inPersonLocations },
                      });
                    }}
                  />
                  <Input
                    placeholder="Session dates"
                    value={s.inPersonLocations[i]?.sessionDates ?? ""}
                    onChange={(e) => {
                      const inPersonLocations = [...s.inPersonLocations];
                      inPersonLocations[i] = {
                        ...inPersonLocations[i],
                        sessionDates: e.target.value,
                      };
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: { ...s, inPersonLocations },
                      });
                    }}
                  />
                </div>
              ))}
              <p className="text-sm font-medium text-neutral-700">In-person summary</p>
              {s.inPersonSummary.map((row, i) => (
                <div key={row.label} className="flex flex-wrap gap-2 items-end">
                  <Input
                    className="max-w-[140px]"
                    value={row.label}
                    onChange={(e) => {
                      const inPersonSummary = [...s.inPersonSummary];
                      inPersonSummary[i] = {
                        ...inPersonSummary[i],
                        label: e.target.value,
                      };
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: { ...s, inPersonSummary },
                      });
                    }}
                  />
                  <Input
                    className="flex-1"
                    value={row.value}
                    onChange={(e) => {
                      const inPersonSummary = [...s.inPersonSummary];
                      inPersonSummary[i] = {
                        ...inPersonSummary[i],
                        value: e.target.value,
                      };
                      setEgaDraft({
                        ...egaDraft,
                        scaleBusiness: { ...s, inPersonSummary },
                      });
                    }}
                  />
                </div>
              ))}
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">
                Growth system installation page
              </h2>
              <div className="space-y-2">
                <Label>Hero badge</Label>
                <Input
                  value={g.heroBadge}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        heroBadge: e.target.value,
                      },
                    })
                  }
                />
              </div>
              {[0, 1].map((ci) => (
                <div
                  key={ci}
                  className="border rounded-lg p-4 space-y-2 bg-neutral-50/80"
                >
                  <p className="font-medium">Cohort block {ci + 1}</p>
                  {[
                    ["title", "Title"],
                    ["type", "Type"],
                    ["startDate", "Start date"],
                    ["endDate", "End date"],
                    ["day", "Day"],
                    ["time", "Time"],
                  ].map(([key, lab]) => (
                    <div key={key} className="space-y-1">
                      <Label className="text-xs">{lab}</Label>
                      <Input
                        value={g.cohorts[ci]?.[key] ?? ""}
                        onChange={(e) => {
                          const cohorts = [...g.cohorts];
                          cohorts[ci] = {
                            ...cohorts[ci],
                            [key]: e.target.value,
                          };
                          setEgaDraft({
                            ...egaDraft,
                            growthSystemInstallation: { ...g, cohorts },
                          });
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
              <p className="text-sm font-medium">About stats (counters)</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Input
                  type="number"
                  placeholder="Years"
                  value={g.aboutStats.yearsInBusiness}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutStats: {
                          ...g.aboutStats,
                          yearsInBusiness: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Companies"
                  value={g.aboutStats.companiesServed}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutStats: {
                          ...g.aboutStats,
                          companiesServed: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="$M"
                  value={g.aboutStats.financialImpactMillions}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutStats: {
                          ...g.aboutStats,
                          financialImpactMillions: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
              </div>
              <p className="text-sm font-medium">About paragraph</p>
              <div className="grid gap-2">
                <Input
                  type="number"
                  placeholder="Years in opening sentence"
                  value={g.aboutParagraph.years}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutParagraph: {
                          ...g.aboutParagraph,
                          years: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Millions phrase ($524 million)"
                  value={g.aboutParagraph.millionsPhrase}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutParagraph: {
                          ...g.aboutParagraph,
                          millionsPhrase: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Companies phrase"
                  value={g.aboutParagraph.companiesPhrase}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutParagraph: {
                          ...g.aboutParagraph,
                          companiesPhrase: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Countries"
                  value={g.aboutParagraph.countries}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutParagraph: {
                          ...g.aboutParagraph,
                          countries: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Professionals trained (e.g. 14,542)"
                  value={g.aboutParagraph.professionalsTrained}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      growthSystemInstallation: {
                        ...g,
                        aboutParagraph: {
                          ...g.aboutParagraph,
                          professionalsTrained: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
            </section>

            <section className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-red-700">
                Mentoring / implementation page
              </h2>
              <div className="space-y-2">
                <Label>Hero badge</Label>
                <Input
                  value={m.heroBadge}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        heroBadge: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <p className="text-sm font-medium">Ticker / stats bar</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Input
                  type="number"
                  placeholder="Years in business"
                  value={m.ticker.yearsInBusiness}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        ticker: {
                          ...m.ticker,
                          yearsInBusiness: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Companies (1,424+)"
                  value={m.ticker.companiesServedDisplay}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        ticker: {
                          ...m.ticker,
                          companiesServedDisplay: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Financial ($524M+)"
                  value={m.ticker.financialImpactDisplay}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        ticker: {
                          ...m.ticker,
                          financialImpactDisplay: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Countries"
                  value={m.ticker.countries}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        ticker: {
                          ...m.ticker,
                          countries: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
              </div>
              <p className="text-sm font-medium">About section</p>
              <div className="grid gap-2">
                <Input
                  type="number"
                  placeholder="Heading years (18 Years of Helping…)"
                  value={m.about.headingYears}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        about: {
                          ...m.about,
                          headingYears: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Years in paragraph (For X years…)"
                  value={m.about.yearsInParagraph}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        about: {
                          ...m.about,
                          yearsInParagraph: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Millions phrase"
                  value={m.about.millionsPhrase}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        about: {
                          ...m.about,
                          millionsPhrase: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Companies phrase"
                  value={m.about.companiesPhrase}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        about: {
                          ...m.about,
                          companiesPhrase: e.target.value,
                        },
                      },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Countries"
                  value={m.about.countries}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        about: {
                          ...m.about,
                          countries: Number(e.target.value) || 0,
                        },
                      },
                    })
                  }
                />
                <Input
                  placeholder="Professionals phrase"
                  value={m.about.professionalsTrained}
                  onChange={(e) =>
                    setEgaDraft({
                      ...egaDraft,
                      mentoringImplementation: {
                        ...m,
                        about: {
                          ...m.about,
                          professionalsTrained: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              {["cohort2605", "cohort2606"].map((ck) => {
                const c = m[ck];
                return (
                  <div key={ck} className="border rounded-lg p-4 space-y-2">
                    <p className="font-medium">{ck}</p>
                    {[
                      ["title", "Card title"],
                      ["type", "Type"],
                      ["session1", "Session 1"],
                      ["session2", "Session 2"],
                      ["session3", "Session 3"],
                      ["session4", "Session 4"],
                      ["format", "Format"],
                      ["time", "Time"],
                    ].map(([key, lab]) => (
                      <div key={key} className="space-y-1">
                        <Label className="text-xs">{lab}</Label>
                        <Input
                          value={c[key] ?? ""}
                          onChange={(e) =>
                            setEgaDraft({
                              ...egaDraft,
                              mentoringImplementation: {
                                ...m,
                                [ck]: { ...c, [key]: e.target.value },
                              },
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </section>

            <div className="flex flex-wrap gap-3 pb-8">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-700"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const next = await persistPartial({ ega: egaDraft });
                    setEgaDraft(clone(next.ega));
                    toast.success("EGA settings saved to the database.");
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not save EGA settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Save EGA
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const defaults = clone(DEFAULT_SITE_SCHEDULE.ega);
                    const next = await persistPartial({ ega: defaults });
                    setEgaDraft(clone(next.ega));
                    toast.success(
                      "EGA schedule reset to defaults in the database."
                    );
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not reset EGA settings. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Reset EGA defaults
              </Button>
              <Button
                type="button"
                variant="secondary"
                disabled={saving}
                onClick={async () => {
                  setSaving(true);
                  try {
                    const next = await persistPartial({
                      ega: clone(DEFAULT_SITE_SCHEDULE.ega),
                      ee: clone(DEFAULT_SITE_SCHEDULE.ee),
                      home: clone(DEFAULT_SITE_SCHEDULE.home),
                      sog: clone(DEFAULT_SITE_SCHEDULE.sog),
                    });
                    setEgaDraft(clone(next.ega));
                    setEeDraft(clone(next.ee));
                    setHomeDraft(clone(next.home));
                    setSogDraft(clone(next.sog));
                    toast.success(
                      "All schedule data reset to defaults in the database."
                    );
                  } catch (e) {
                    toast.error(
                      e?.message || "Could not reset schedule. Try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
              >
                Reset everything
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
