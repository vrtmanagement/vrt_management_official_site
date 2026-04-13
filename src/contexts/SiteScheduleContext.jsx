"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";
import {
  DEFAULT_SITE_SCHEDULE,
  deepMerge,
} from "@/lib/site-schedule-defaults";

const SiteScheduleContext = createContext(null);

export function SiteScheduleProvider({ children }) {
  const [schedule, setSchedule] = useState(DEFAULT_SITE_SCHEDULE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/site-schedule", { cache: "no-store" });
        const json = await res.json().catch(() => ({}));
        const next = json.schedule;
        if (!cancelled && next) {
          setSchedule(next);
        }
        if (!cancelled && !res.ok) {
          toast.error(
            json.error ||
              "Could not load dates from the database. Showing defaults."
          );
        }
      } catch (e) {
        if (!cancelled) {
          toast.error(
            e?.message ||
              "Could not reach the server. Showing default dates and numbers."
          );
        }
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const updateEga = useCallback((patch) => {
    setSchedule((prev) => ({
      ...prev,
      ega: deepMerge(prev.ega, patch),
    }));
  }, []);

  const updateEe = useCallback((patch) => {
    setSchedule((prev) => ({
      ...prev,
      ee: { ...prev.ee, ...patch },
    }));
  }, []);

  /**
   * Save partial schedule to MongoDB via API. Returns merged schedule from server.
   */
  const persistPartial = useCallback(async (partial) => {
    const res = await fetch("/api/site-schedule", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partial),
    });
    let json = {};
    try {
      json = await res.json();
    } catch {
      throw new Error("Invalid response from server.");
    }
    if (!res.ok) {
      throw new Error(json.error || `Save failed (${res.status})`);
    }
    if (!json.schedule) {
      throw new Error("Server did not return updated schedule.");
    }
    setSchedule(json.schedule);
    return json.schedule;
  }, []);

  const value = useMemo(
    () => ({
      schedule,
      ega: schedule.ega,
      ee: schedule.ee,
      home: schedule.home,
      sog: schedule.sog,
      hydrated,
      updateEga,
      updateEe,
      persistPartial,
    }),
    [schedule, hydrated, updateEga, updateEe, persistPartial]
  );

  return (
    <SiteScheduleContext.Provider value={value}>
      {children}
    </SiteScheduleContext.Provider>
  );
}

export function useSiteSchedule() {
  const ctx = useContext(SiteScheduleContext);
  if (!ctx) {
    throw new Error("useSiteSchedule must be used within SiteScheduleProvider");
  }
  return ctx;
}
