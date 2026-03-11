"use client";

import React, { useState, useEffect } from "react";
import { eeWomenColors as colors } from "./theme";

export function EEWomenEffects() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const curR = document.getElementById("curR");

    if (!cur || !curR) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animFrameId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    document.addEventListener("mousemove", onMouseMove);

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      curR.style.left = `${rx}px`;
      curR.style.top = `${ry}px`;
      animFrameId = requestAnimationFrame(loop);
    };
    animFrameId = requestAnimationFrame(loop);

    const hoverTargets = document.querySelectorAll(
      "a,button,.sc,.stc,.mc,.pi,.wc,.ocard,.ticker,.rp",
    );

    const onEnter = () => {
      cur.classList.add("big");
      curR.classList.add("big");
    };
    const onLeave = () => {
      cur.classList.remove("big");
      curR.classList.remove("big");
    };

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const hero = document.querySelector(".hero");
    const hgrid = document.getElementById("hgrid");
    const htitle = document.querySelector(".htitle");

    const onHeroMove = (e) => {
      if (!hero || !hgrid || !htitle) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      hgrid.style.transform = `translate(${x * 0.28}px,${y * 0.28}px)`;
      htitle.style.transform = `translate(${x * 0.07}px,${y * 0.07}px)`;
    };
    if (hero) hero.addEventListener("mousemove", onHeroMove);

    function tilt3d(sel, rxVal = 16, ryVal = 16, tz = 10) {
      document.querySelectorAll(sel).forEach((el) => {
        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          const nx = x / r.width - 0.5;
          const ny = y / r.height - 0.5;
          el.style.transform = `perspective(700px) rotateY(${nx * ryVal}deg) rotateX(${
            -ny * rxVal
          }deg) translateZ(${tz}px)`;
        };
        const onLeaveCard = () => {
          el.style.transform = "";
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeaveCard);
      });
    }

    tilt3d(".sc", 16, 16, 10);
    tilt3d(".stc", 13, 13, 18);
    tilt3d(".mc", 12, 12, 10);

    document.querySelectorAll(".pc").forEach((card) => {
      const orig = card.classList.contains("pc-main")
        ? "rotate(-3deg)"
        : card.classList.contains("pc-f1")
        ? "rotate(5deg)"
        : "rotate(-2.5deg)";

      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const nx = x / r.width - 0.5;
        const ny = y / r.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${nx * 10}deg) rotateX(${
          -ny * 10
        }deg) translateZ(24px) scale(1.04)`;
      };
      const onLeaveCard = () => {
        card.style.transform = orig;
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeaveCard);
    });

    const oc = document.querySelector(".ocard");
    const onOfferMove = (e) => {
      if (!oc) return;
      const r = oc.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const nx = x / r.width - 0.5;
      const ny = y / r.height - 0.5;
      oc.style.transform = `perspective(1200px) rotateY(${nx * 4}deg) rotateX(${
        -ny * 4
      }deg) translateY(-6px)`;
    };
    const onOfferLeave = () => {
      if (oc) oc.style.transform = "";
    };
    if (oc) {
      oc.addEventListener("mousemove", onOfferMove);
      oc.addEventListener("mouseleave", onOfferLeave);
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            setTimeout(() => {
              target.classList.add("vis");
            }, i * 90);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".rev").forEach((el) => {
      revealObserver.observe(el);
    });

    const metricsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const container = entry.target;
          container.querySelectorAll(".mc").forEach((card) => {
            const targetEl = card.querySelector(".mn");
            const tAttr = card.getAttribute("data-t");
            if (!targetEl || !tAttr) return;
            const target = parseInt(tAttr, 10);
            const start = performance.now();

            const animate = (now) => {
              const p = Math.min((now - start) / 2000, 1);
              const ease = 1 - Math.pow(1 - p, 4);
              targetEl.textContent = `${Math.round(ease * target)}%`;
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          });
          metricsObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    const metrics = document.querySelector(".metrics");
    if (metrics) metricsObserver.observe(metrics);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameId);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      if (hero) hero.removeEventListener("mousemove", onHeroMove);
      if (oc) {
        oc.removeEventListener("mousemove", onOfferMove);
        oc.removeEventListener("mouseleave", onOfferLeave);
      }
      revealObserver.disconnect();
      metricsObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cur" />
      <div className="cursor-ring" id="curR" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
    </>
  );
}

export function EEWomenNav() {
  return (
    <nav className="ee-nav">
      <div className="logo">
        VRT <span>Management Group</span>
      </div>
      <div className="nav-pill">
        <span>18 free seats — claim yours now</span>
        <a href="#apply" className="nbtn">
          Apply Free →
        </a>
      </div>
    </nav>
  );
}

export function EEWomenAnnouncement() {
  return (
    <div className="ann">
      🎉 VRT Management Group celebrates{" "}
      <strong>18 Years of Excellence</strong> — gifting 18 women entrepreneurs a
      $2,500 program, completely free
    </div>
  );
}

export function EEWomenHero() {
  const stats = [
    { label: "Program Value", value: "$2,500" },
    { label: "Your Investment", value: "FREE" },
    { label: "Seats Available", value: "18" },
    { label: "Leaders Transformed", value: "14,542+" },
    { label: "Years of Research", value: "39" },
  ];

  return (
    <section
      className="hero relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-8 pb-20 pt-28 text-center max-md:px-4"
      style={{ backgroundColor: colors.cream }}
    >
      <div
        id="hgrid"
        className="hero-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(123,20,38,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(123,20,38,0.035)_1px,transparent_1px)] bg-[length:60px_60px]"
      />

      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <div className="eyebrow mb-9 inline-flex items-center gap-5 rounded-full border border-[#EBE3D0] bg-white px-5 py-2 text-[11px] font-bold tracking-[0.04em] text-[#c80506] shadow-[0_4px_20px_rgba(28,10,14,0.07)]">
          <span className="edot h-[10px] w-[10px] rounded-full bg-[#c80506]" />
          <span className="text-lg">VRT 18th Anniversary · Limited to 18 Women</span>
        </div>

        <h1 className="htitle mb-6 max-w-3xl text-[clamp(44px,6.5vw,86px)] font-black leading-[1.0] text-[#1C0A0E]">
          You Were <span className="it italic text-[#c80506]">Built</span>
          <br />
          to{" "}
          <span
            className="out inline-block text-transparent"
            style={{ WebkitTextStroke: "2px #c80506" }}
          >
            Scale.
          </span>
        </h1>

        <p className="hsub mb-12 max-w-xl text-[21px] leading-[1.75] text-[#8A6B6E]">
        Unlock Premium $2500 Entrepreneur Excellence<sup>©</sup> Program
FREE For 18 Women Entrepreneurs 

<br />
✦ Join VRT’s 39+ research-backed psychometric masterclass, trusted by 14,542+ global
leaders and executives to unlock smarter leadership, faster business growth, and turn
your business vision into reality.
        </p>

        <div className="hbtns mb-16 flex items-center gap-5 max-sm:flex-col">
          <a href="#apply" className="btnp">
            Claim My Free Seat — $2,500 Value →
          </a>
          <a href="#steps" className="btng">
            See How It Works ↓
          </a>
        </div>

        <div className="hstats flex w-full max-w-5xl flex-wrap justify-center gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="sc relative overflow-hidden rounded-2xl border border-[#EBE3D0] bg-white px-6 py-6 text-center shadow-[0_4px_20px_rgba(28,10,14,0.06)]"
            >
              <div className="snum text-[38px] font-black text-[#c80506]">
                {item.value}
              </div>
              <div className="slbl mt-1 text-[10.5px] tracking-[0.12em] text-[#8A6B6E]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EEWomenUrgency() {
  const items = [
    { label: "Total Free Seats", value: "18" },
    { label: "Real Program Value", value: "$2,500" },
    { label: "Your Cost Today", value: "$0" },
    { label: "Returns at", value: "Apr '26" },
  ];

  return (
    // <section
    //   className="urg relative w-full px-8 max-md:px-4"
    //   style={{ backgroundColor: colors.maroon }}
    // >
    //   <div className="urg-inner mx-auto flex max-w-5xl">
    //     {items.map((item) => (
    //       <div
    //         key={item.label}
    //         className="ui flex-1 border-r border-[rgba(255,255,255,0.1)] px-7 py-9 text-center last:border-r-0"
    //       >
    //         <div className="ubig text-[46px] font-black leading-none text-[#E2BD6A]">
    //           {item.value}
    //         </div>
    //         <div className="usmall mt-1 text-[10.5px] tracking-[0.14em] text-[rgba(250,246,239,0.55)]">
    //           {item.label}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <></>
  );
}

export function EEWomenProblem() {
  return (
    <section className="sec prob-sec">
      <div className="si">
      <div className="text-[#c80506] text-2xl font-bold" style={{ textAlign: "center", maxWidth: "100%" }}>
          The Uncomfortable Truth
        </div>
        <h2 className="h2 rev">
          Why most passionate entrepreneurs
          <br />
          <em>never truly scale</em>
        </h2>
        <div className="prob-layout">
          <div className="prob-vis rev left">
            <div className="pc pc-main">
              <div className="pcn">80%</div>
              <div className="pct">
                of businesses fail within the first 5 years, not because of the market but because of the leader running it.
              </div>
            </div>
            <div className="pc pc-f1">
              <div className="pcn">4%</div>
              <div className="pct">of founders still successfully scaling by year ten.</div>
            </div>
            <div className="pc pc-f2">
              <div className="pcn">96%</div>
              <div className="pct">never get the blueprint to break their own ceiling.</div>
            </div>
          </div>
          <div className="prob-pts">
            <div className="pi rev">
              <div className="pico">🧱</div>
              <div>
                <div className="pit">
                  It&apos;s not the market. It&apos;s the Leadership Ceiling.
                </div>
                <div className="pib">
                  Your own blind spots, behavioral patterns, and leadership gaps quietly
                  become the cap on everything your business can become. Most founders
                  never know it&apos;s happening.
                </div>
              </div>
            </div>
            <div className="pi rev">
              <div className="pico">🔄</div>
              <div>
                <div className="pit">
                  The traits that got you here won&apos;t get you there.
                </div>
                <div className="pib">
                Working harder on the wrong things only gets you to burnout faster. Without knowing your gaps, you keep pushing while the real problem sits hidden and completely fixable.
                </div>
              </div>
            </div>
            <div className="pi rev">
              <div className="pico">🚪</div>
              <div>
                <div className="pit">The real inequality? Access to the blueprint.</div>
                <div className="pib">
                Women with $10M potential run $500K businesses not because they aren't capable, but because nobody ever handed them the precise roadmap to close the gap.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EEWomenSteps() {
  return (
    <section className="sec steps-sec" id="steps">
      <div className="si">
        {/* <div className="tag rev">The EE Masterclass — 4 Steps</div> */}
        <div
          className="text-[#c80506] text-2xl font-bold"
          style={{ textAlign: "center", maxWidth: "100%" }}
        >
          The EE<sup>©</sup> Masterclass — 4 Steps
        </div>
        <h2 className="h2 rev">
          A precision-built blueprint.
          <br />
          <em>Built entirely for you.</em>
        </h2>
        <p
          style={{
            color: "var(--text3)",
            maxWidth: "100%",
            marginTop: "14px",
            fontSize: "16px",
            lineHeight: "1.75",
            fontFamily: "'Poppins',sans-serif",
            textAlign: "center",
          }}
          className="rev"
        >
         Backed by 39 years of research, proven by 14,542+ founders worldwide. This is not a course, this is your data-driven roadmap to scale.
        </p>
        <div className="sg">
          <div className="stc rev sc2">
            <div className="stn">01</div>
            <span className="stemi">🔬</span>
            <div className="sttit">Psychometric Assessment</div>
            <div className="stbod">
            A scientifically validated deep dive into your actual behaviors, motivators, and leadership competencies. Not a personality quiz. It is a data-driven mirror of who you truly are as a founder today.
            </div>
            <span className="stpill">Behaviors · Motivators · Competencies</span>
          </div>
          <div className="stc rev sc2">
            <div className="stn">02</div>
            <span className="stemi">📊</span>
            <div className="sttit">Benchmark Comparison</div>
            <div className="stbod">
            Your results measured against the top 4% of entrepreneurs globally, the ones who consistently build, scale, and sustain great businesses. See exactly where you align and where you are falling short.
            </div>
            <span className="stpill">Top 4% Global Benchmark</span>
          </div>
          <div className="stc rev sc2">
            <div className="stn">03</div>
            <span className="stemi">📋</span>
            <div className="sttit">Personalized GAP Report</div>
            <div className="stbod">
            A precise breakdown of the exact behaviors creating friction, motivational misalignments draining your decisions, and leadership gaps capping your growth. No vague feedback. Just brutal clarity.
            </div>
            <span className="stpill">No Fluff · Pure Precision</span>
          </div>
          <div className="stc rev sc2">
            <div className="stn">04</div>
            <span className="stemi">🗺️</span>
            <div className="sttit">Custom Development Plan</div>
            <div className="stbod">
            A step-by-step roadmap built entirely around your unique gaps and your specific goals, so scaling stops being accidental and starts being intentional and confident.
            </div>
            <span className="stpill">Built For You · Only You</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EEWomenApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    numberOfEmployees: "",
    role: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert("Please enter your first and last name.");
      return false;
    }
    if (!formData.email.trim()) {
      alert("Business email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!formData.companyName.trim()) {
      alert("Company name is required.");
      return false;
    }
    if (!formData.numberOfEmployees) {
      alert("Please select number of employees.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Reuse the same API as the EGA registration form
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
      const response = await fetch("/api/egaform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email: formData.email,
          companyName: formData.companyName,
          numberOfEmployees: formData.numberOfEmployees,
          // Use LinkedIn URL as "website" so it gets stored
          website: formData.linkedin || undefined,
          // Mark that this came from EE for Women, if backend wishes to differentiate
          cohortType: "EE for Women",
        }),
      });

      if (response.status === 201) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          numberOfEmployees: "",
          role: "",
          linkedin: "",
        });
        const el = document.getElementById("ee-women-success");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (response.status === 409) {
        const data = await response.json().catch(() => ({}));
        if (data?.error?.includes("Email already exists")) {
          alert("This email is already registered. Please use a different email address.");
        } else {
          alert(data?.error || "Something went wrong. Please try again.");
        }
      } else {
        const data = await response.json().catch(() => ({}));
        alert(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="sec form-sec" id="apply">
      <div className="si">
        <div style={{ textAlign: "center" }}>
          <div className="text-2xl font-bold text-[#c80506]" style={{ justifyContent: "center" }}>
            Apply Now
          </div>
          <h2 className="h2 rev" style={{ textAlign: "center", maxWidth: "100%" }}>
            Reserve Your Seat in
            <br />
            <em>
              Entrepreneur Excellence<sup>©</sup>
            </em>
          </h2>
        </div>
        <div className="fw rev sc2">
          {!submitted ? (
            <>
              <div className="ftit">
                Your future starts <em>here.</em>
              </div>
              <div className="fsub">
                18 seats · First-come, first-qualified · Archana will personally reach out
                within 48 hours.
              </div>
              <form id="aForm" onSubmit={handleSubmit}>
                <div className="fr">
                  <div className="fg">
                    <label className="fl">First Name</label>
                    <input
                      className="fi"
                      name="firstName"
                      type="text"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="fg">
                    <label className="fl">Last Name</label>
                    <input
                      className="fi"
                      name="lastName"
                      type="text"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="fg">
                  <label className="fl">Business Email</label>
                  <input
                    className="fi"
                    name="email"
                    type="email"
                    placeholder="you@yourcompany.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="fr">
                  <div className="fg">
                    <label className="fl">Company Name</label>
                    <input
                      className="fi"
                      name="companyName"
                      type="text"
                      placeholder="Your company"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="fg">
                    <label className="fl">Number of Employees</label>
                    <select
                      className="fs"
                      name="numberOfEmployees"
                      required
                      value={formData.numberOfEmployees}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      <option value="10–25 employees">10–25 employees</option>
                      <option value="26–50 employees">26–50 employees</option>
                      <option value="51–100 employees">51–100 employees</option>
                      <option value="100+ employees">100+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="fg">
                  <label className="fl">Your Title / Role</label>
                  <input
                    className="fi"
                    name="role"
                    type="text"
                    placeholder="e.g. Founder & CEO"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="fg">
                  <label className="fl">LinkedIn Profile URL</label>
                  <input
                    className="fi"
                    name="linkedin"
                    type="url"
                    placeholder="linkedin.com/in/yourname"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="fsub2" disabled={isSubmitting}>
                  Submit My Application — Claim My Seat 🎯
                </button>
                <p className="fnote">
                  By applying you confirm you meet the eligibility criteria. No spam, ever.
                  Your information is completely private.
                </p>
              </form>
            </>
          ) : (
            <div className="succ" id="succ" style={{ display: "block" }}>
              <h3>🎉 Application Received!</h3>
              <p>
                Archana will personally review your application and reach out within 48
                hours to confirm your spot. Check your inbox, your future is waiting.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function EEWomenFooter() {
  return (
    <footer className="ee-footer">
      <div className="fl2">
        VRT <span>Management Group</span>
      </div>
      <div className="fc">
        © 2026 VRT Management Group, LLC · Celebrating 18 Years of Excellence
        <br />
        <span style={{ opacity: 0.6 }}>
          Entrepreneur Excellence<sup>©</sup> is a trademark of VRT Management Group, LLC
        </span>
      </div>
      <div className="fr2">
        🔒 Secure &amp; Private
        <br />
        <span style={{ opacity: 0.6 }}>No spam. Ever.</span>
      </div>
    </footer>
  );
}

export function EEWomenTicker() {
  return (
    <div className="ticker fixed bottom-6 right-6 z-30 hidden w-39 rounded-2xl border border-[#DED4BC] bg-white px-5 py-4 text-left shadow-[0_12px_48px_rgba(123,20,38,0.15)] sm:block">
      <div className="ttop mb-1 flex items-center gap-2">
        <span className="tdot h-[7px] w-[7px] animate-pulse rounded-full bg-emerald-500" />
        <span className="tlive text-[9.5px] font-semibold tracking-[0.14em] text-emerald-500">
          Live
        </span>
      </div>
      <div className="tnum text-[34px] font-black leading-none text-[#c80506]">
        18
      </div>
      <div className="tlbl mt-0.5 text-[10.5px] text-[#8A6B6E]">
        Free Seats Remaining
      </div>
    </div>
  );
}

export function EEWomenResults() {
  const metrics = [
    {
      label: "Higher Profits from leaders who implement the EE© blueprint",
      value: 27,
    },
    {
      label: "Higher Sales with sharper leadership clarity",
      value: 50,
    },
    {
      label: "Higher Customer Loyalty after closing competency gaps",
      value: 50,
    },
    {
      label: "Above-Average Productivity when you stop bottlenecking",
      value: 38,
    },
  ];

  return (
    <section
      className="sec res-sec w-full px-8 py-24 max-md:px-4"
      style={{ backgroundColor: colors.cream2 }}
    >
      <div className="si mx-auto max-w-6xl">
        <div className="text-2xl font-bold text-[#c80506]" style={{ textAlign: "center", maxWidth: "100%" }}>
          Proven, Measurable Impact
        </div>
        <h2 className="h2 rev text-2xl font-extrabold leading-snug text-[#1C0A0E] sm:text-3xl lg:text-[32px]">
          What happens when you lead
          <br />
          <em className="italic text-[#c80506]">like the top 4%</em>
        </h2>
        <div className="res-layout mt-10 grid gap-10 md:grid-cols-2">
          <div className="metrics rev left grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="mc counter rounded-2xl border border-[#EBE3D0] bg-white px-6 py-8 text-center shadow-[0_4px_20px_rgba(28,10,14,0.06)]"
                data-t={m.value}
              >
                <div className="mn mt-2 text-[52px] font-black text-[#c80506]">
                  0%
                </div>
                <div className="ml mt-4 text-[17.5px] leading-snug text-[#8A6B6E]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <div className="res-r rev right flex flex-col gap-4">
            <div className="rp flex gap-4 rounded-xl border border-[#EBE3D0] bg-white px-6 py-5 transition">
              <div className="rdot mt-1 h-[9px] w-[9px] flex-shrink-0 rounded-full bg-[#c80506]" />
              <div>
                <div className="rtit mb-1 text-[20px] font-semibold text-[#1C0A0E]">
                  Smarter decisions that save time and money
                </div>
                <p className="rbod text-[15.5px] leading-relaxed text-[#8A6B6E]">
                  Stop making expensive, gut-driven mistakes. Every decision
                  becomes grounded in self-awareness, not assumption.
                </p>
              </div>
            </div>
            <div className="rp flex gap-4 rounded-xl border border-[#EBE3D0] bg-white px-6 py-5 transition">
              <div className="rdot mt-1 h-[9px] w-[9px] flex-shrink-0 rounded-full bg-[#c80506]" />
              <div>
                <div className="rtit mb-1 text-[20px] font-semibold text-[#1C0A0E]">
                  Stop being your own biggest bottleneck
                </div>
                <p className="rbod text-[15.5px] leading-relaxed text-[#8A6B6E]">
                  Discover the exact blind spots quietly destroying your
                  leadership. Once visible, they&apos;re completely fixable.
                </p>
              </div>
            </div>
            <div className="rp flex gap-4 rounded-xl border border-[#EBE3D0] bg-white px-6 py-5 transition">
              <div className="rdot mt-1 h-[9px] w-[9px] flex-shrink-0 rounded-full bg-[#c80506]" />
              <div>
                <div className="rtit mb-1 text-[20px] font-semibold text-[#1C0A0E]">
                  Scale with confidence instead of chaos
                </div>
                <p className="rbod text-[15.5px] leading-relaxed text-[#8A6B6E]">
                  Stop feeling overwhelmed and reactive. Your growth becomes
                  predictable, structured, and sustainable.
                </p>
              </div>
            </div>
            <div className="rp flex gap-4 rounded-xl border border-[#EBE3D0] bg-white px-6 py-5 transition">
              <div className="rdot mt-1 h-[9px] w-[9px] flex-shrink-0 rounded-full bg-[#c80506]" />
              <div>
                <div className="rtit mb-1 text-[20px] font-semibold text-[#1C0A0E]">
                  Build a team that actually performs
                </div>
                <p className="rbod text-[15.5px] leading-relaxed text-[#8A6B6E]">
                  Understand exactly what team you need, and finally eliminate
                  the friction that&apos;s been killing performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EEWomenWhom() {
  return (
    <section
      className="sec whom-sec w-full px-8 py-24 max-md:px-4"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="si mx-auto max-w-6xl">
        <div className="text-2xl font-bold text-[#c80506]" style={{ textAlign: "center", maxWidth: "100%" }}>
          Eligibility
        </div>
        <h2 className="h2 rev text-2xl font-extrabold leading-snug text-[#1C0A0E] sm:text-3xl lg:text-[32px]">
          This seat was made
          <br />
          for the <em className="italic text-[#c80506]">right woman.</em>
        </h2>
        <div className="wg mt-10 grid gap-6 md:grid-cols-2">
          <div className="wc yes rev left rounded-3xl border border-[#EBE3D0] bg-white px-8 py-10 shadow-[0_8px_40px_rgba(123,20,38,0.08)]">
            <div className="wh mb-7 text-[21px] font-extrabold text-[#c80506]">
              ✦ This is for you if...
            </div>
            <div className="wl flex flex-col gap-3.5 text-[14.5px] text-[#4A2830]">
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#c80506] text-[11px] text-white">
                  ✓
                </div>
                <span className="text-[17.5px]">You lead a business with a minimum of 10 employees.</span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#c80506] text-[11px] text-white">
                  ✓
                </div>
                <span className="text-[17.5px]">
                  You&apos;re done running on hustle alone and want a real,
                  data-driven strategy.
                </span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#c80506] text-[11px] text-white">
                  ✓
                </div>
                <span className="text-[17.5px]">
                  You have a genuine growth mindset and are serious about
                  execution.
                </span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#c80506] text-[11px] text-white">
                  ✓
                </div>
                <span className="text-[17.5px]">You&apos;re ready to look inward and lead differently.</span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#c80506] text-[11px] text-white">
                  ✓
                </div>
                <span className="text-[17.5px]">
                  You&apos;re committed to joining the top 4% of entrepreneurs
                  who truly scale.  
                </span>
              </div>
            </div>
          </div>
          <div className="wc no rev right rounded-3xl border border-[#EBE3D0] bg-[#F3EDE0] px-8 py-10">
            <div className="wh mb-7 text-[21px] font-extrabold text-[#8A6B6E]">
              ✕ This is not for you if...
            </div>
            <div className="wl flex flex-col gap-3.5 text-[14.5px] text-[#8A6B6E]">
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EBE3D0] text-[11px] text-[#8A6B6E]">
                  ✕
                </div>
                <span className="text-[17.5px]">You&apos;re looking for shortcuts or a quick fix.</span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EBE3D0] text-[11px] text-[#8A6B6E]">
                  ✕
                </div>
                <span className="text-[17.5px]">
                  You want results without investing in yourself as a leader.
                </span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EBE3D0] text-[11px] text-[#8A6B6E]">
                  ✕
                </div>
                <span className="text-[17.5px]">
                  You&apos;re unwilling to change how you lead and communicate.
                </span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EBE3D0] text-[11px] text-[#8A6B6E]">
                  ✕
                </div>
                <span className="text-[17.5px]">
                  You&apos;re a passive learner who won&apos;t implement what
                  you learn.
                </span>
              </div>
              <div className="wr flex items-start gap-3">
                <div className="wck mt-[2px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EBE3D0] text-[11px] text-[#8A6B6E]">
                  ✕
                </div>
                <span className="text-[17.5px]">You&apos;re chasing trends without a long-term vision.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EEWomenOffer() {
  return (
    <section
      className="sec off-sec w-full px-8 py-24 max-md:px-4"
      style={{ backgroundColor: colors.cream2 }}
    >
      <div className="si mx-auto max-w-6xl">
        <div className=" mb-4 flex justify-center text-2xl font-bold text-[#c80506]">
          The Anniversary Gift
        </div>
        <h2 className="h2 rev mb-3 text-center text-2xl font-extrabold leading-snug text-[#1C0A0E] sm:text-3xl lg:text-[32px]">
          18 Seats. Zero Cost.
          <br />
          <em className="italic text-[#c80506]">One Decision.</em>
        </h2>
        <p className="rev mx-auto mt-3 max-w-[500px] text-center text-[20px] leading-[1.75] text-[#8A6B6E]">
          This is not a discount. This is 18 years of VRT believing the right
          woman, with the right tools, can build something that lasts.
        </p>

        <div className="ocard rev sc2 mx-auto mt-10 max-w-[880px] overflow-hidden rounded-[32px] border border-[#EBE3D0] bg-white shadow-[0_24px_100px_rgba(123,20,38,0.11)]">
          <div className="oh relative bg-[#c80506] px-12 py-10 max-md:px-8">
            <div className="oh-top relative flex items-start justify-between gap-4">
              <div>
                <div className="opold mb-1 text-[20px] font-bold text-white line-through">
                  $2,500 Value
                </div>
                <div className="opnew text-[68px] font-black leading-none text-[#E2BD6A]">
                  FREE
                </div>
                <div className="opnl mt-1 text-[11px]  tracking-[0.12em]">
                  Your Investment Today
                </div>
              </div>
              <div className="obadge rounded-full bg-[#C49A3C] px-5 py-2 text-[11.5px] font-bold tracking-[0.06em] text-[#1C0A0E]">
                18 Seats Only
              </div>
            </div>
          </div>

          <div className="ob px-12 py-11 max-md:px-8">
            <div className="oincs mb-9 grid gap-3 md:grid-cols-2">
              <div className="oi">
                Psychometric Leadership Assessment
              </div>
              <div className="oi">Top 4% Benchmark Comparison</div>
              <div className="oi">Personalized GAP Report</div>
              <div className="oi">Custom Development Plan</div>
              <div className="oi">39 Years Research Methodology</div>
              <div className="oi">Proven by 14,542+ Global Leaders</div>
            </div>
            <div className="owarn mb-7 rounded-xl border border-[rgba(200,5,6,0.14)] bg-[rgba(200,5,6,0.06)] px-6 py-4 text-center text-[20px] leading-relaxed text-[#4A2830]">
              ⚠️ After April 2026, this program returns to its full price of{" "}
              <strong className="font-semibold text-[#c80506]">$2,500</strong>.
              These 18 seats are the only exception, offered on a first-come, first-qualified basis.
            </div>
            <a
              href="#apply"
              className="obtn block w-full rounded-xl bg-[#c80506] px-4 py-4 text-center text-[18px] font-semibold tracking-[0.18em] text-[#FAF6EF] shadow-[0_8px_32px_rgba(200,5,6,0.28)]"
            >
              Claim My Free Seat Before It&apos;s Gone →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EEWomenStyles() {
  return (
    <style jsx global>{`
      :root {
        --maroon: #c80506;
        --maroon-deep: #550E1A;
        --maroon-light: #9E1F33;
        --maroon-pale: rgba(123,20,38,0.07);
        --gold: #C49A3C;
        --gold-light: #E2BD6A;
        --cream: #FAF6EF;
        --cream2: #F3EDE0;
        --cream3: #EBE3D0;
        --cream4: #DED4BC;
        --white: #FFFFFF;
        --text: #1C0A0E;
        --text2: #4A2830;
        --text3: #8A6B6E;
      }
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
      html{scroll-behavior:smooth;}
      body{background:var(--cream);color:var(--text);font-family:'Poppins',sans-serif;overflow-x:hidden;cursor:none;}
      .cursor{position:fixed;width:10px;height:10px;background:var(--maroon);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .3s,height .3s,background .3s;mix-blend-mode:multiply;}
      .cursor-ring{position:fixed;width:36px;height:36px;border:1.5px solid var(--maroon);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);opacity:.4;transition:width .3s,height .3s,opacity .3s;}
      .cursor.big{width:18px;height:18px;background:var(--gold);}
      .cursor-ring.big{width:54px;height:54px;opacity:.25;}
      .orb{position:fixed;border-radius:50%;pointer-events:none;filter:blur(90px);z-index:0;}
      .orb1{width:500px;height:500px;background:rgba(123,20,38,.06);top:-80px;right:-80px;animation:orbf 14s ease-in-out infinite;}
      .orb2{width:380px;height:380px;background:rgba(196,154,60,.05);bottom:100px;left:-80px;animation:orbf 18s ease-in-out infinite reverse;}
      .orb3{width:280px;height:280px;background:rgba(123,20,38,.04);top:45%;left:45%;animation:orbf 10s ease-in-out infinite;}
      @keyframes orbf{0%,100%{transform:translate(0,0)}33%{transform:translate(30px,-30px)}66%{transform:translate(-20px,20px)}}
      .ann{background:var(--maroon);color:var(--cream);text-align:center;padding:12px 20px;font-size:12.5px;font-weight:500;letter-spacing:.1em;position:relative;z-index:10;}
      .ann strong{color:var(--gold-light);}
      nav{background:rgba(250,246,239,.88);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--cream3);padding:16px 80px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100;}
      .logo{font-family:'Poppins',sans-serif;font-size:20px;font-weight:700;color:var(--maroon);}
      .logo span{color:var(--text);font-weight:400;}
      .nav-pill{display:flex;align-items:center;gap:8px;background:var(--cream2);border:1px solid var(--cream3);padding:5px 7px 5px 14px;border-radius:100px;}
      .nav-pill span{font-size:13px;color:var(--text2);font-weight:500;}
      .nbtn{background:var(--maroon);color:var(--cream);border:none;padding:9px 20px;border-radius:100px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;cursor:none;text-decoration:none;transition:all .3s;display:inline-block;}
      .nbtn:hover{background:var(--maroon-deep);transform:scale(1.05);}
      .hero{min-height:94vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 80px 80px;position:relative;overflow:hidden;}
      .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(123,20,38,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(123,20,38,.035) 1px,transparent 1px);background-size:60px 60px;transition:transform .1s;}
      .hero-grid::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 75% 65% at 50% 50%,transparent 35%,var(--cream) 100%);}
      .eyebrow{display:inline-flex;align-items:center;gap:10px;background:var(--white);border:1px solid var(--cream3);box-shadow:0 4px 20px rgba(28,10,14,.07);padding:10px 20px;border-radius:100px;font-size:11.5px;font-weight:700;letter-spacing:.14em;color:var(--maroon);margin-bottom:38px;animation:fu 1s .1s both;}
      .edot{width:7px;height:7px;background:var(--maroon);border-radius:50%;animation:pulse 2s infinite;}
      @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.5)}}
      .htitle{font-family:'Poppins',sans-serif;font-size:clamp(44px,6.5vw,86px);font-weight:900;line-height:1.0;color:var(--text);max-width:920px;margin-bottom:26px;animation:fu 1s .25s both;position:relative;z-index:1;}
      .htitle .it{font-style:italic;color:var(--maroon);}
      .htitle .out{-webkit-text-stroke:2px var(--maroon);color:transparent;}
      .hsub{font-family:'Poppins',sans-serif;font-size:21px;color:var(--text3);max-width:560px;line-height:1.75;margin-bottom:52px;animation:fu 1s .4s both;}
      .hbtns{display:flex;align-items:center;gap:20px;margin-bottom:68px;animation:fu 1s .55s both;}
      .btnp{background:var(--maroon);color:var(--cream);padding:18px 44px;border-radius:6px;font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;letter-spacing:.08em;text-decoration:none;display:inline-block;transition:all .4s cubic-bezier(.34,1.56,.64,1);box-shadow:0 8px 32px rgba(123,20,38,.3);position:relative;overflow:hidden;}
      .btnp::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 55%);}
      .btnp:hover{transform:translateY(-5px) scale(1.03);box-shadow:0 20px 60px rgba(123,20,38,.4);}
      .btng{color:var(--text2);font-size:14px;font-weight:500;text-decoration:none;opacity:.65;transition:opacity .3s;}
      .btng:hover{opacity:1;}
      .hstats{display:flex;gap:16px;animation:fu 1s .7s both;perspective:1000px;}
      .sc{background:var(--white);border:1px solid var(--cream3);border-radius:18px;padding:26px 32px;text-align:center;box-shadow:0 4px 20px rgba(28,10,14,.06);transition:all .4s cubic-bezier(.34,1.56,.64,1);transform-style:preserve-3d;cursor:none;position:relative;overflow:hidden;}
      .sc::after{content:'';position:absolute;inset:0;border-radius:18px;background:linear-gradient(135deg,rgba(123,20,38,.05),transparent 60%);opacity:0;transition:opacity .3s;}
      .sc:hover::after{opacity:1;}
      .sc:hover{box-shadow:0 20px 60px rgba(123,20,38,.15);}
      .snum{font-family:'Poppins',sans-serif;font-size:38px;font-weight:900;color:var(--maroon);line-height:1;}
      .slbl{font-size:10.5px;letter-spacing:.12em;color:var(--text3);margin-top:5px;}
      @keyframes fu{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
      .urg{background:var(--maroon);padding:0 80px;position:relative;overflow:hidden;}
      .urg::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-55deg,transparent,transparent 30px,rgba(255,255,255,.025) 30px,rgba(255,255,255,.025) 31px);}
      .urg-inner{display:flex;max-width:1240px;margin:0 auto;}
      .ui{flex:1;padding:38px 28px;text-align:center;border-right:1px solid rgba(255,255,255,.1);position:relative;z-index:1;transition:background .3s;}
      .ui:last-child{border-right:none;}
      .ui:hover{background:rgba(255,255,255,.06);}
      .ubig{font-family:'Poppins',sans-serif;font-size:46px;font-weight:900;color:var(--gold-light);line-height:1;}
      .usmall{font-size:10.5px;color:rgba(250,246,239,.55);letter-spacing:.14em;margin-top:5px;}
      .sec{padding:108px 80px;position:relative;}
      .si{max-width:1240px;margin:0 auto;}
      .tag{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.22em;color:var(--maroon);margin-bottom:18px;}
      .tag::before{content:'';width:22px;height:2px;background:var(--maroon);border-radius:2px;}
      .h2{font-family:'Poppins',sans-serif;font-size:clamp(30px,4vw,52px);font-weight:800;line-height:1.1;color:var(--text);}
      .h2 em{font-style:italic;color:var(--maroon);}
      .prob-sec{background:var(--cream2);}
      .prob-layout{display:grid;grid-template-columns:1fr 1.15fr;gap:80px;align-items:center;margin-top:60px;}
      .prob-vis{position:relative;height:460px;perspective:900px;}
      .pc{position:absolute;background:var(--white);border-radius:20px;padding:30px;box-shadow:0 12px 48px rgba(28,10,14,.1);transition:all .5s cubic-bezier(.34,1.56,.64,1);}
      .pc-main{width:290px;top:65px;left:30px;transform:rotate(-3deg);z-index:3;border-left:4px solid var(--maroon);}
      .pc-main:hover{transform:rotate(0deg) scale(1.05) translateZ(30px);}
      .pc-f1{width:215px;top:15px;right:15px;transform:rotate(5deg);z-index:2;background:var(--maroon);}
      .pc-f1:hover{transform:rotate(0deg) scale(1.05) translateY(-10px);}
      .pc-f2{width:195px;bottom:25px;right:55px;transform:rotate(-2.5deg);z-index:1;background:var(--cream3);border:1px solid var(--cream4);}
      .pc-f2:hover{transform:rotate(0deg) translateY(-10px);}
      .pcn{font-family:'Poppins',sans-serif;font-size:50px;font-weight:900;line-height:1;margin-bottom:8px;}
      .pc-main .pcn{color:var(--maroon);}
      .pc-f1 .pcn{color:var(--gold-light);}
      .pc-f2 .pcn{color:var(--text2);font-size:36px;}
      .pct{font-size:13.5px;line-height:1.65;}
      .pc-f1 .pct{color:rgba(250,246,239,.82);}
      .pc-f2 .pct{color:var(--text3);}
      .prob-pts{display:flex;flex-direction:column;gap:18px;}
      .pi{background:var(--white);border-radius:16px;padding:26px 30px;border:1px solid var(--cream3);display:flex;gap:18px;align-items:flex-start;transition:all .4s cubic-bezier(.34,1.56,.64,1);}
      .pi:hover{transform:translateX(10px) translateY(-4px);box-shadow:-6px 16px 48px rgba(123,20,38,.12);border-color:rgba(123,20,38,.2);}
      .pico{width:42px;height:42px;background:var(--maroon-pale);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
      .pit{font-family:'Poppins',sans-serif;font-size:16.5px;font-weight:700;margin-bottom:5px;}
      .pib{font-size:13.5px;color:var(--text3);line-height:1.75;}
      .steps-sec{background:var(--cream);}
      .sg{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:60px;perspective:1200px;}
      .stc{background:var(--white);border-radius:24px;padding:38px 26px;border:1px solid var(--cream3);box-shadow:0 4px 24px rgba(28,10,14,.05);transition:all .5s cubic-bezier(.34,1.56,.64,1);transform-style:preserve-3d;position:relative;overflow:hidden;cursor:none;}
      .stc::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--maroon),var(--gold));transform:scaleX(0);transform-origin:left;transition:transform .4s;}
      .stc:hover{transform:translateY(-14px) rotateX(4deg) rotateY(-2deg);box-shadow:0 36px 80px rgba(123,20,38,.17);}
      .stc:hover::before{transform:scaleX(1);}
      .stn{font-family:'Poppins',sans-serif;font-size:62px;font-weight:900;color:var(--cream2);line-height:1;position:absolute;top:14px;right:18px;transition:color .3s;}
      .stc:hover .stn{color:rgba(123,20,38,.07);}
      .stemi{font-size:34px;display:block;margin-bottom:14px;}
      .sttit{font-family:'Poppins',sans-serif;font-size:18px;font-weight:700;color:var(--text);margin-bottom:10px;line-height:1.3;}
      .stbod{font-size:13px;color:var(--text3);line-height:1.85;}
      .stpill{display:inline-block;background:var(--maroon-pale);color:var(--maroon);font-size:10px;font-weight:700;letter-spacing:.1em;padding:5px 12px;border-radius:100px;margin-top:16px;}
      .res-sec{background:var(--cream2);}
      .res-layout{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;margin-top:60px;}
      .metrics{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
      .mc{background:var(--white);border-radius:20px;padding:34px 26px;border:1px solid var(--cream3);box-shadow:0 4px 20px rgba(28,10,14,.06);text-align:center;transition:all .4s cubic-bezier(.34,1.56,.64,1);cursor:none;}
      .mc:hover{transform:translateY(-8px) scale(1.02);box-shadow:0 24px 72px rgba(123,20,38,.15);border-color:rgba(123,20,38,.15);}
      .mc:nth-child(2),.mc:nth-child(4){transform:translateY(20px);}
      .mc:nth-child(2):hover,.mc:nth-child(4):hover{transform:translateY(12px) scale(1.02);}
      .mn{font-family:'Poppins',sans-serif;font-size:52px;font-weight:900;color:var(--maroon);line-height:1;}
      .ml{font-size:12.5px;color:var(--text3);margin-top:7px;line-height:1.55;}
      .res-r{display:flex;flex-direction:column;gap:16px;}
      .rp{display:flex;gap:18px;align-items:flex-start;padding:24px 26px;background:var(--white);border-radius:14px;border:1px solid var(--cream3);transition:all .3s;}
      .rp:hover{border-color:rgba(123,20,38,.2);box-shadow:0 8px 32px rgba(123,20,38,.1);transform:translateX(8px);}
      .rdot{width:9px;height:9px;background:var(--maroon);border-radius:50%;margin-top:7px;flex-shrink:0;}
      .rtit{font-family:'Poppins',sans-serif;font-size:16px;font-weight:700;margin-bottom:5px;}
      .rbod{font-size:13.5px;color:var(--text3);line-height:1.7;}
      .whom-sec{background:var(--cream);}
      .wg{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:60px;}
      .wc{border-radius:24px;padding:46px 42px;border:1px solid var(--cream3);transition:all .4s cubic-bezier(.34,1.56,.64,1);transform-style:preserve-3d;}
      .wc.yes{background:var(--white);box-shadow:0 8px 40px rgba(123,20,38,.08);}
      .wc.no{background:var(--cream2);}
      .wc:hover{transform:translateY(-8px) rotateX(2deg);box-shadow:0 28px 80px rgba(123,20,38,.13);}
      .wh{font-family:'Poppins',sans-serif;font-size:21px;font-weight:800;margin-bottom:28px;}
      .wc.yes .wh{color:var(--maroon);}
      .wc.no .wh{color:var(--text3);}
      .wl{display:flex;flex-direction:column;gap:14px;}
      .wr{display:flex;align-items:flex-start;gap:12px;font-size:14.5px;line-height:1.6;}
      .wc.yes .wr{color:var(--text2);}
      .wc.no .wr{color:var(--text3);}
      .wck{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;margin-top:2px;}
      .wc.yes .wck{background:var(--maroon);color:white;}
      .wc.no .wck{background:var(--cream3);color:var(--text3);}
      .off-sec{background:var(--cream2);}
      .ocard{background:var(--white);border-radius:32px;border:1px solid var(--cream3);box-shadow:0 24px 100px rgba(123,20,38,.11);overflow:hidden;margin-top:52px;max-width:880px;margin-left:auto;margin-right:auto;transition:all .4s;transform-style:preserve-3d;}
      .ocard:hover{transform:translateY(-6px);box-shadow:0 40px 120px rgba(123,20,38,.17);}
      .oh{background:var(--maroon);padding:40px 52px;position:relative;overflow:hidden;}
      .oh::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-45deg,transparent,transparent 20px,rgba(255,255,255,.02) 20px,rgba(255,255,255,.02) 21px);}
      .oh-top{display:flex;justify-content:space-between;align-items:flex-start;position:relative;z-index:1;}
      .opold{font-family:'Poppins',sans-serif;font-size:20px;text-decoration:line-through;font-weight:700;margin-bottom:4px; color: white;}
      .opnew{font-family:'Poppins',sans-serif;font-size:68px;font-weight:900;color:var(--gold-light);line-height:1;}
      .opnl{font-size:11px;color:rgba(250,246,239,.45);letter-spacing:.12em;margin-top:4px;}
      .obadge{background:var(--gold);color:var(--text);padding:10px 20px;border-radius:100px;font-size:11.5px;font-weight:700;letter-spacing:.06em;}
      .ob{padding:46px 52px;}
      .oincs{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:36px;}
      .oi{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--text2);padding:13px 16px;background:var(--cream);border-radius:10px;border:1px solid var(--cream3);transition:all .3s;}
      .oi:hover{background:var(--white);border-color:rgba(123,20,38,.2);transform:translateX(4px);}
      .oi::before{content:'✦';color:var(--gold);font-size:10px;flex-shrink:0;}
      .owarn{background:rgba(123,20,38,.06);border:1px solid rgba(123,20,38,.14);border-radius:12px;padding:16px 22px;font-size:19px;color:var(--text2);text-align:center;margin-bottom:28px;line-height:1.65;}
      .owarn strong{color:var(--maroon);}
      .obtn{display:block;width:100%;background:var(--maroon);color:var(--cream);padding:19px;border:none;border-radius:12px;font-family:'Poppins',sans-serif;font-size:18.5px;font-weight:700;letter-spacing:.08em;text-align:center;text-decoration:none;cursor:none;transition:all .4s cubic-bezier(.34,1.56,.64,1);box-shadow:0 8px 32px rgba(123,20,38,.28);position:relative;overflow:hidden;}
      .obtn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.12),transparent 50%);}
      .obtn:hover{transform:translateY(-3px) scale(1.01);box-shadow:0 20px 60px rgba(123,20,38,.4);}
      .form-sec{background:var(--cream);}
      .fw{max-width:660px;margin:52px auto 0;background:var(--white);border-radius:28px;padding:56px;border:1px solid var(--cream3);box-shadow:0 16px 80px rgba(28,10,14,.07);transition:box-shadow .4s;}
      .fw:hover{box-shadow:0 24px 100px rgba(123,20,38,.1);}
      .ftit{font-family:'Poppins',sans-serif;font-size:30px;font-weight:800;text-align:center;margin-bottom:8px;}
      .ftit em{font-style:italic;color:var(--maroon);}
      .fsub{text-align:center;color:var(--text3);font-size:15px;margin-bottom:36px;line-height:1.6;}
      .fr{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
      .fg{margin-bottom:12px;}
      .fl{display:block;font-size:11px;font-weight:700;letter-spacing:.1em;color:var(--text2);margin-bottom:6px;}
      .fi,.fs{width:100%;padding:14px 16px;background:var(--cream);border:1.5px solid var(--cream3);border-radius:10px;font-family:'Poppins',sans-serif;font-size:14px;color:var(--text);outline:none;transition:all .3s;appearance:none;-webkit-appearance:none;}
      .fi:focus,.fs:focus{border-color:var(--maroon);background:var(--white);box-shadow:0 0 0 4px rgba(123,20,38,.07);}
      .fsub2{width:100%;background:var(--maroon);color:var(--cream);padding:18px;border:none;border-radius:12px;font-family:'Poppins',sans-serif;font-size:14.5px;font-weight:700;letter-spacing:.08em;cursor:none;margin-top:8px;transition:all .4s cubic-bezier(.34,1.56,.64,1);box-shadow:0 6px 28px rgba(123,20,38,.26);position:relative;overflow:hidden;}
      .fsub2::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transition:left .5s;}
      .fsub2:hover{transform:translateY(-3px);box-shadow:0 16px 52px rgba(123,20,38,.38);}
      .fsub2:hover::before{left:100%;}
      .fnote{text-align:center;font-size:12px;color:var(--text3);margin-top:14px;line-height:1.7;}
      .succ{display:none;background:var(--maroon);border-radius:16px;padding:44px;text-align:center;margin-top:18px;}
      .succ h3{font-family:'Poppins',sans-serif;font-size:26px;font-weight:800;color:var(--cream);margin-bottom:10px;}
      .succ p{color:rgba(250,246,239,.72);line-height:1.7;}
      .ee-footer{background:var(--cream2);border-top:1px solid var(--cream3);padding:44px 80px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:18px;}
      .fl2{font-family:'Poppins',sans-serif;font-size:19px;font-weight:700;color:var(--maroon);}
      .fl2 span{color:var(--text);font-weight:400;}
      .fc{font-size:12.5px;color:var(--text3);text-align:center;line-height:1.65;}
      .fr2{font-size:12px;color:var(--text3);text-align:right;}
      .ticker{position:fixed;bottom:26px;right:26px;background:var(--white);border:1px solid var(--cream3);border-radius:20px;padding:16px 22px;box-shadow:0 12px 48px rgba(123,20,38,.15);z-index:500;animation:fu 1s 2s both;cursor:none;transition:all .3s;}
 .fnote{text-align:center;font-size:12px;color:var(--text3);margin-top:14px;line-height:1.7;}
      .succ{display:none;background:var(--maroon);border-radius:16px;padding:44px;text-align:center;margin-top:18px;}
      .succ h3{font-family:'Poppins',sans-serif;font-size:26px;font-weight:800;color:var(--cream);margin-bottom:10px;}
      .succ p{color:rgba(250,246,239,.72);line-height:1.7;}
      .ee-footer{background:var(--cream2);border-top:1px solid var(--cream3);padding:44px 80px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:18px;}
      .fl2{font-family:'Poppins',sans-serif;font-size:19px;font-weight:700;color:var(--maroon);}
      .fl2 span{color:var(--text);font-weight:400;}
      .fc{font-size:12.5px;color:var(--text3);text-align:center;line-height:1.65;}
      .fr2{font-size:12px;color:var(--text3);text-align:right;}
      .ticker{position:fixed;bottom:26px;right:26px;background:var(--white);border:1px solid var(--cream3);border-radius:20px;padding:16px 22px;box-shadow:0 12px 48px rgba(123,20,38,.15);z-index:500;animation:fu 1s 2s both;transition:all .3s;}
-top:18px;}
      .succ h3{font-family:'Poppins',sans-serif;font-size:26px;font-weight:800;color:var(--cream);margin-bottom:10px;}
      .succ p{color:rgba(250,246,239,.72);line-height:1.7;}
      .ee-footer{background:var(--cream2);border-top:1px solid var(--cream3);padding:44px 80px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:18px;}
      .fl2{font-family:'Poppins',sans-serif;font-size:19px;font-weight:700;color:var(--maroon);}
      .fl2 span{color:var(--text);font-weight:400;}
      .fc{font-size:12.5px;color:var(--text3);text-align:center;line-height:1.65;}
      .fr2{font-size:12px;color:var(--text3);text-align:right;}
      .ticker{position:fixed;bottom:26px;right:26px;background:var(--white);border:1px solid var(--cream3);border-radius:20px;padding:16px 22px;box-shadow:0 12px 48px rgba(123,20,38,.15);z-index:500;animation:fu 1s 2s both;transition:all .3s;}
      .ticker:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(123,20,38,.22);}
      .ttop{display:flex;align-items:center;gap:7px;margin-bottom:3px;}
      .tdot{width:7px;height:7px;background:#22c55e;border-radius:50%;animation:pulse 1.5s infinite;}
      .tlive{font-size:9.5px;font-weight:700;letter-spacing:.14em;color:#22c55e;}
      .tnum{font-family:'Poppins',sans-serif;font-size:34px;font-weight:900;color:var(--maroon);line-height:1;}
      .tlbl{font-size:10.5px;color:var(--text3);margin-top:1px;}
      .rev{opacity:0;transform:translateY(38px);transition:opacity .8s ease,transform .8s cubic-bezier(.34,1.56,.64,1);}
      .rev.left{transform:translateX(-38px);}
      .rev.right{transform:translateX(38px);}
      .rev.sc2{transform:scale(.93);}
      .rev.vis{opacity:1!important;transform:translate(0) scale(1)!important;}
      @media(max-width:1024px){
      .ee-nav,.sec,.ee-footer{padding-left:32px;padding-right:32px;}
        .hero{padding:80px 32px 60px;}
        .urg,.urg{padding:0 32px;}
        .sg{grid-template-columns:1fr 1fr;}
        .prob-layout,.res-layout,.wg{grid-template-columns:1fr;}
        .prob-vis{height:320px;}
        .oh,.ob{padding:32px;}
        .fw{padding:36px 28px;}
        footer{flex-direction:column;text-align:center;}
        .fr2{text-align:center;}
      }
      @media(max-width:640px){
        .htitle{font-size:44px;}
        .hbtns{flex-direction:column;}
        .hstats{flex-direction:column;}
        .sg{grid-template-columns:1fr;}
        .metrics{grid-template-columns:1fr 1fr;}
        .oincs{grid-template-columns:1fr;}
        .fr{grid-template-columns:1fr;}
        .ticker{display:none;}
        .urg-inner{flex-wrap:wrap;}
        .ui{min-width:45%;}
      }
    `}</style>
  );
}

