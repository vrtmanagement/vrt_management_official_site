 "use client";

import React, { useEffect, useRef } from "react";
import {
  EEWomenHero,
  EEWomenUrgency,
  EEWomenProblem,
  EEWomenSteps,
  EEWomenResults,
  EEWomenWhom,
  EEWomenOffer,
  EEWomenApplication,
  EEWomenTicker,
} from "@/components/ee-for-women/sections";

export default function EEForWomenPage() {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const cur = scope.querySelector("#cur");
    const curR = scope.querySelector("#curR");
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

    const hoverTargets = scope.querySelectorAll(
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

    const hero = scope.querySelector(".hero");
    const hgrid = scope.querySelector("#hgrid");
    const htitle = scope.querySelector(".htitle");
    const eyebrow = scope.querySelector(".eyebrow");
    const onHeroMove = (e) => {
      if (!hero || !hgrid || !htitle) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      hgrid.style.transform = `translate(${x * 0.28}px,${y * 0.28}px)`;
      htitle.style.transform = `translate(${x * 0.07}px,${y * 0.07}px)`;
    };
    if (hero) hero.addEventListener("mousemove", onHeroMove);

    const onScroll = () => {
      if (!hero || !eyebrow) return;
      const threshold = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > threshold) {
        eyebrow.classList.add("eyebrow-fixed");
      } else {
        eyebrow.classList.remove("eyebrow-fixed");
      }
    };
    window.addEventListener("scroll", onScroll);

    function tilt3d(sel, rxVal = 16, ryVal = 16, tz = 10) {
      scope.querySelectorAll(sel).forEach((el) => {
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

    scope.querySelectorAll(".pc").forEach((card) => {
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

    const oc = scope.querySelector(".ocard");
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

    scope.querySelectorAll(".rev").forEach((el) => {
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

    const metrics = scope.querySelector(".metrics");
    if (metrics) metricsObserver.observe(metrics);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameId);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      if (hero) hero.removeEventListener("mousemove", onHeroMove);
      window.removeEventListener("scroll", onScroll);
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
      <main ref={scopeRef}>
        <style jsx global>{`
          /*
           * Scoped styles for EE-for-women page ONLY.
           * This replaces the previous EEWomenStyles (which was global and
           * affected the main site header/footer after hydration).
           */
          .ee-women-scope {
            --maroon: #c80506;
            --maroon-deep: #8e0304;
            --maroon-light: #f9271e;
            --maroon-pale: rgba(200, 5, 6, 0.07);
            --gold: #c49a3c;
            --gold-light: #e2bd6a;
            --cream: #faf6ef;
            --cream2: #f3ede0;
            --cream3: #ebe3d0;
            --cream4: #ded4bc;
            --white: #ffffff;
            --text: #1c0a0e;
            --text2: #4a2830;
            --text3: #8a6b6e;
            background: var(--cream);
            color: var(--text);
            font-family: "Poppins", sans-serif;
            overflow-x: hidden;
            cursor: auto;
            position: relative;
            z-index: 0;
          }

          .ee-women-scope *,
          .ee-women-scope *::before,
          .ee-women-scope *::after {
            box-sizing: border-box;
          }

          .ee-women-scope .cursor,
          .ee-women-scope .cursor-ring {
            display: none;
          }

          .ee-women-scope .orb {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            filter: blur(90px);
            z-index: 0;
          }
          .ee-women-scope .orb1 {
            width: 500px;
            height: 500px;
            background: rgba(200, 5, 6, 0.06);
            top: -80px;
            right: -80px;
            animation: ee_orbf 14s ease-in-out infinite;
          }
          .ee-women-scope .orb2 {
            width: 380px;
            height: 380px;
            background: rgba(196, 154, 60, 0.05);
            bottom: 100px;
            left: -80px;
            animation: ee_orbf 18s ease-in-out infinite reverse;
          }
          .ee-women-scope .orb3 {
            width: 280px;
            height: 280px;
            background: rgba(200, 5, 6, 0.04);
            top: 45%;
            left: 45%;
            animation: ee_orbf 10s ease-in-out infinite;
          }

          @keyframes ee_orbf {
            0%,
            100% {
              transform: translate(0, 0);
            }
            33% {
              transform: translate(30px, -30px);
            }
            66% {
              transform: translate(-20px, 20px);
            }
          }

          @keyframes ee_fu {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ee_pulse {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.5);
            }
          }

          /* hero + common elements (used by sections.jsx classNames) */
          .ee-women-scope .hero-grid {
            position: absolute;
            inset: 0;
            background-size: 60px 60px;
            transition: transform 0.1s;
          }
          .ee-women-scope .hero-grid::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
              ellipse 75% 65% at 50% 50%,
              transparent 35%,
              var(--cream) 100%
            );
          }
          .ee-women-scope .eyebrow {
            animation: ee_fu 1s 0.1s both;
          }
          .ee-women-scope .edot {
            animation: ee_pulse 2s infinite;
          }
          .ee-women-scope .htitle,
          .ee-women-scope .hsub,
          .ee-women-scope .hbtns,
          .ee-women-scope .hstats {
            animation: ee_fu 1s 0.25s both;
          }
          .ee-women-scope .btnp {
            background: var(--maroon);
            color: var(--cream);
            padding: 18px 44px;
            border-radius: 6px;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.08em;
            
            text-decoration: none;
            display: inline-block;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 8px 32px rgba(200, 5, 6, 0.3);
            position: relative;
            overflow: hidden;
            cursor: none;
          }
          .ee-women-scope .btnp::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.15) 0%,
              transparent 55%
            );
          }
          .ee-women-scope .btnp:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 20px 60px rgba(200, 5, 6, 0.4);
          }
          .ee-women-scope .btng {
            color: var(--text2);
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            opacity: 0.65;
            transition: opacity 0.3s;
          }
          .ee-women-scope .btng:hover {
            opacity: 1;
          }

          /* Section heading system used by EEWomenProblem/Steps/Application */
          .ee-women-scope .sec {
            padding: 108px 80px;
            position: relative;
          }
          @media (max-width: 768px) {
            .ee-women-scope .sec {
              padding: 84px 16px;
            }
          }
          .ee-women-scope .si {
            max-width: 1240px;
            margin: 0 auto;
          }
          .ee-women-scope .tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.22em;
            
            color: var(--maroon);
            margin-bottom: 18px;
          }
          .ee-women-scope .tag::before {
            content: "";
            width: 22px;
            height: 2px;
            background: var(--maroon);
            border-radius: 2px;
          }
          .ee-women-scope .h2 {
            font-family: "Poppins", sans-serif;
            font-size: clamp(30px, 4vw, 52px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--text);
          }
          .ee-women-scope .h2 em {
            font-style: italic;
            color: var(--maroon);
          }

          /* Problem section basic layout (so heading block looks right) */
          .ee-women-scope .prob-sec {
            background: var(--cream2);
          }
          .ee-women-scope .prob-layout {
            display: grid;
            grid-template-columns: 1fr 1.15fr;
            gap: 80px;
            align-items: center;
            margin-top: 60px;
          }
          @media (max-width: 980px) {
            .ee-women-scope .prob-layout {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
          /* Center section headings/labels */
          .ee-women-scope .prob-sec .tag {
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .ee-women-scope .prob-sec .h2 {
            text-align: center;
          }

          .ee-women-scope .steps-sec .tag,
          .ee-women-scope .res-sec .tag,
          .ee-women-scope .whom-sec .tag,
          .ee-women-scope .off-sec .tag,
          .ee-women-scope .form-sec .tag {
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .ee-women-scope .steps-sec .h2,
          .ee-women-scope .res-sec .h2,
          .ee-women-scope .whom-sec .h2,
          .ee-women-scope .off-sec .h2,
          .ee-women-scope .form-sec .h2 {
            text-align: center;
          }

          /* Steps section headline spacing + grid */
          .ee-women-scope .steps-sec {
            background: var(--cream);
          }
          .ee-women-scope .sg {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
            margin-top: 60px;
            perspective: 1200px;
          }
          @media (max-width: 1024px) {
            .ee-women-scope .sg {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 640px) {
            .ee-women-scope .sg {
              grid-template-columns: 1fr;
            }
          }

          /* Application section headline centering helpers */
          .ee-women-scope .form-sec {
            background: var(--cream2);
          }

          /* Results section (metrics + impact list) */
          .ee-women-scope .res-sec {
            background: var(--cream2);
          }
          .ee-women-scope .res-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 72px;
            align-items: flex-start;
            margin-top: 60px;
          }
          @media (max-width: 1024px) {
            .ee-women-scope .res-layout {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
          .ee-women-scope .metrics {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .ee-women-scope .mc {
            background: var(--white);
            border-radius: 20px;
            padding: 34px 26px;
            border: 1px solid var(--cream3);
            box-shadow: 0 4px 20px rgba(28, 10, 14, 0.06);
            text-align: center;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            cursor: none;
          }
          .ee-women-scope .mc:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 24px 72px rgba(200, 5, 6, 0.15);
            border-color: rgba(200, 5, 6, 0.15);
          }
          .ee-women-scope .mc:nth-child(2),
          .ee-women-scope .mc:nth-child(4) {
            transform: translateY(20px);
          }
          .ee-women-scope .mc:nth-child(2):hover,
          .ee-women-scope .mc:nth-child(4):hover {
            transform: translateY(12px) scale(1.02);
          }
          .ee-women-scope .mn {
            font-family: "Poppins", sans-serif;
            font-size: 52px;
            font-weight: 900;
            color: var(--maroon);
            line-height: 1;
          }
          .ee-women-scope .ml {
            font-size: 12.5px;
            color: var(--text3);
            margin-top: 7px;
            line-height: 1.55;
          }
          .ee-women-scope .res-r {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .ee-women-scope .rp {
            display: flex;
            gap: 18px;
            align-items: flex-start;
            padding: 24px 26px;
            background: var(--white);
            border-radius: 14px;
            border: 1px solid var(--cream3);
            transition: all 0.3s;
          }
          .ee-women-scope .rp:hover {
            border-color: rgba(200, 5, 6, 0.2);
            box-shadow: 0 8px 32px rgba(200, 5, 6, 0.1);
            transform: translateX(8px);
          }
          .ee-women-scope .rdot {
            width: 9px;
            height: 9px;
            background: var(--maroon);
            border-radius: 50%;
            margin-top: 7px;
            flex-shrink: 0;
          }
          .ee-women-scope .rtit {
            font-family: "Poppins", sans-serif;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .ee-women-scope .rbod {
            font-size: 13.5px;
            color: var(--text3);
            line-height: 1.7;
          }

          /* Problem visuals + points */
          .ee-women-scope .prob-vis {
            position: relative;
            height: 460px;
            perspective: 900px;
          }
          @media (max-width: 980px) {
            .ee-women-scope .prob-vis {
              height: 320px;
            }
          }
          .ee-women-scope .pc {
            position: absolute;
            background: var(--white);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 12px 48px rgba(28, 10, 14, 0.1);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .ee-women-scope .pc-main {
            width: 290px;
            top: 65px;
            left: 30px;
            transform: rotate(-3deg);
            z-index: 3;
            border-left: 4px solid var(--maroon);
          }
          .ee-women-scope .pc-main:hover {
            transform: rotate(0deg) scale(1.05) translateZ(30px);
          }
          .ee-women-scope .pc-f1 {
            width: 215px;
            top: 15px;
            right: 15px;
            transform: rotate(5deg);
            z-index: 2;
            background: var(--maroon);
          }
          .ee-women-scope .pc-f1:hover {
            transform: rotate(0deg) scale(1.05) translateY(-10px);
          }
          .ee-women-scope .pc-f2 {
            width: 195px;
            bottom: 10px;
            right: 55px;
            transform: rotate(-2.5deg);
            z-index: 1;
            background: var(--cream3);
            border: 1px solid var(--cream4);
          }
          .ee-women-scope .pc-f2:hover {
            transform: rotate(0deg) translateY(-10px);
          }
          .ee-women-scope .pcn {
            font-family: "Poppins", sans-serif;
            font-size: 50px;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 8px;
          }
          .ee-women-scope .pc-main .pcn {
            color: var(--maroon);
          }
          .ee-women-scope .pc-f1 .pcn {
            color: var(--gold-light);
          }
          .ee-women-scope .pc-f2 .pcn {
            color: var(--text2);
            font-size: 36px;
          }
          .ee-women-scope .pct {
            font-size: 15.5px;
            line-height: 1.65;
          }
          .ee-women-scope .pc-f1 .pct {
            color: rgba(250, 246, 239, 0.82);
          }
          .ee-women-scope .pc-f2 .pct {
            color: var(--text3);
          }
          .ee-women-scope .prob-pts {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }
          .ee-women-scope .pi {
            background: var(--white);
            border-radius: 16px;
            padding: 26px 30px;
            border: 1px solid var(--cream3);
            display: flex;
            gap: 18px;
            align-items: flex-start;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .ee-women-scope .pi:hover {
            transform: translateX(10px) translateY(-4px);
            box-shadow: -6px 16px 48px rgba(200, 5, 6, 0.12);
            border-color: rgba(200, 5, 6, 0.2);
          }
          .ee-women-scope .pico {
            width: 42px;
            height: 42px;
            background: var(--maroon-pale);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
          }
          .ee-women-scope .pit {
            font-family: "Poppins", sans-serif;
            font-size: 17.5px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .ee-women-scope .pib {
            font-size: 15.5px;
            color: var(--text3);
            line-height: 1.75;
          }

          /* Step cards */
          .ee-women-scope .stc {
            background: var(--white);
            border-radius: 24px;
            padding: 38px 26px;
            border: 1px solid var(--cream3);
            box-shadow: 0 4px 24px rgba(28, 10, 14, 0.05);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-style: preserve-3d;
            position: relative;
            overflow: hidden;
          }
          .ee-women-scope .stc::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--maroon), var(--gold));
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s;
          }
          .ee-women-scope .stc:hover {
            transform: translateY(-14px) rotateX(4deg) rotateY(-2deg);
            box-shadow: 0 36px 80px rgba(200, 5, 6, 0.17);
          }
          .ee-women-scope .stc:hover::before {
            transform: scaleX(1);
          }
          .ee-women-scope .stn {
            font-family: "Poppins", sans-serif;
            font-size: 62px;
            font-weight: 900;
            color: var(--cream2);
            line-height: 1;
            position: absolute;
            top: 14px;
            right: 18px;
            transition: color 0.3s;
          }
          .ee-women-scope .stc:hover .stn {
            color: rgba(200, 5, 6, 0.07);
          }
          .ee-women-scope .stemi {
            font-size: 34px;
            display: block;
            margin-bottom: 14px;
          }
          .ee-women-scope .sttit {
            font-family: "Poppins", sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 10px;
            line-height: 1.3;
          }
          .ee-women-scope .stbod {
            font-size: 16px;
            color: var(--text3);
            line-height: 1.85;
          }
          .ee-women-scope .stpill {
            display: inline-block;
            background: var(--maroon-pale);
            color: var(--maroon);
            font-size: 15px;
            font-weight: 700;
            padding: 5px 10px;
            border-radius: 100px;
            margin-top: 16px;
          }

          /* Application form cards + inputs */
          .ee-women-scope .fw {
            max-width: 660px;
            margin: 52px auto 0;
            background: var(--white);
            border-radius: 28px;
            padding: 56px;
            border: 1px solid var(--cream3);
            box-shadow: 0 16px 80px rgba(28, 10, 14, 0.07);
            transition: box-shadow 0.4s;
          }
          .ee-women-scope .fw:hover {
            box-shadow: 0 24px 100px rgba(200, 5, 6, 0.1);
          }
          .ee-women-scope .ftit {
            font-family: "Poppins", sans-serif;
            font-size: 30px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 8px;
          }
          .ee-women-scope .ftit em {
            font-style: italic;
            color: var(--maroon);
          }
          .ee-women-scope .fsub {
            text-align: center;
            color: var(--text3);
            font-size: 15px;
            margin-bottom: 36px;
            line-height: 1.6;
          }
          .ee-women-scope .fr {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          @media (max-width: 640px) {
            .ee-women-scope .fr {
              grid-template-columns: 1fr;
            }
          }
          .ee-women-scope .fg {
            margin-bottom: 12px;
          }
          .ee-women-scope .fl {
            display: block;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.1em;
            
            color: var(--text2);
            margin-bottom: 6px;
          }
          .ee-women-scope .fi,
          .ee-women-scope .fs {
            width: 100%;
            padding: 14px 16px;
            background: var(--cream);
            border: 1.5px solid var(--cream3);
            border-radius: 10px;
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            color: var(--text);
            outline: none;
            transition: all 0.3s;
            appearance: none;
            -webkit-appearance: none;
          }
          .ee-women-scope .fi:focus,
          .ee-women-scope .fs:focus {
            border-color: var(--maroon);
            background: var(--white);
            box-shadow: 0 0 0 4px rgba(200, 5, 6, 0.07);
          }
          .ee-women-scope .fnote {
            text-align: center;
            font-size: 12px;
            color: var(--text3);
            margin-top: 14px;
            line-height: 1.7;
          }

          .ee-women-scope .fsub2 {
            width: 100%;
            background: var(--maroon);
            color: var(--cream);
            padding: 18px;
            border: none;
            border-radius: 12px;
            font-family: "Poppins", sans-serif;
            font-size: 14.5px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            cursor: none;
            margin-top: 8px;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 6px 28px rgba(200, 5, 6, 0.26);
            position: relative;
            overflow: hidden;
          }
          .ee-women-scope .fsub2::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.12),
              transparent
            );
            transition: left 0.5s;
          }
          .ee-women-scope .fsub2:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 52px rgba(200, 5, 6, 0.38);
          }
          .ee-women-scope .fsub2:hover::before {
            left: 100%;
          }

          /* Whom (Eligibility) cards + hover */
          .ee-women-scope .whom-sec {
            background: var(--cream);
          }
          .ee-women-scope .wg {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-top: 60px;
          }
          @media (max-width: 1024px) {
            .ee-women-scope .wg {
              grid-template-columns: 1fr;
            }
          }
          .ee-women-scope .wc {
            border-radius: 24px;
            padding: 46px 42px;
            border: 1px solid var(--cream3);
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-style: preserve-3d;
          }
          .ee-women-scope .wc.yes {
            background: var(--white);
            box-shadow: 0 8px 40px rgba(200, 5, 6, 0.08);
          }
          .ee-women-scope .wc.no {
            background: var(--cream2);
          }
          .ee-women-scope .wc:hover {
            transform: translateY(-8px) rotateX(2deg);
            box-shadow: 0 28px 80px rgba(200, 5, 6, 0.13);
          }
          .ee-women-scope .wh {
            font-family: "Poppins", sans-serif;
            font-size: 21px;
            font-weight: 800;
            margin-bottom: 28px;
          }
          .ee-women-scope .wc.yes .wh {
            color: var(--maroon);
          }
          .ee-women-scope .wc.no .wh {
            color: var(--text3);
          }
          .ee-women-scope .wl {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .ee-women-scope .wr {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 14.5px;
            line-height: 1.6;
          }
          .ee-women-scope .wc.yes .wr {
            color: var(--text2);
          }
          .ee-women-scope .wc.no .wr {
            color: var(--text3);
          }
          .ee-women-scope .wck {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            flex-shrink: 0;
            margin-top: 2px;
          }
          .ee-women-scope .wc.yes .wck {
            background: var(--maroon);
            color: white;
          }
          .ee-women-scope .wc.no .wck {
            background: var(--cream3);
            color: var(--text3);
          }

          /* Offer card + hover */
          .ee-women-scope .off-sec {
            background: var(--cream2);
          }
          .ee-women-scope .ocard {
            background: var(--white);
            border-radius: 32px;
            border: 1px solid var(--cream3);
            box-shadow: 0 24px 100px rgba(200, 5, 6, 0.11);
            overflow: hidden;
            margin-top: 52px;
            max-width: 880px;
            margin-left: auto;
            margin-right: auto;
            transition: all 0.4s;
            transform-style: preserve-3d;
          }
          .ee-women-scope .ocard:hover {
            transform: translateY(-6px);
            box-shadow: 0 40px 120px rgba(200, 5, 6, 0.17);
          }
          .ee-women-scope .oh {
            background: var(--maroon);
            padding: 40px 52px;
            position: relative;
            overflow: hidden;
          }
          .ee-women-scope .oh::before {
            content: "";
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(255, 255, 255, 0.02) 20px,
              rgba(255, 255, 255, 0.02) 21px
            );
          }
          .ee-women-scope .oh-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            z-index: 1;
          }
          .ee-women-scope .opold {
            font-family: "Poppins", sans-serif;
            font-size: 20px;
            color: rgba(250, 246, 239, 0.38);
            text-decoration: line-through;
            font-weight: 700;
            margin-bottom: 4px;
          }
          .ee-women-scope .opnew {
            font-family: "Poppins", sans-serif;
            font-size: 68px;
            font-weight: 900;
            color: var(--gold-light);
            line-height: 1;
          }
          .ee-women-scope .opnl {
            font-size: 11px;
            color: rgba(250, 246, 239, 0.45);
            letter-spacing: 0.12em;
            
            margin-top: 4px;
          }
          .ee-women-scope .obadge {
            background: var(--gold);
            color: var(--text);
            padding: 10px 20px;
            border-radius: 100px;
            font-size: 11.5px;
            font-weight: 700;
            letter-spacing: 0.06em;
            
          }
          .ee-women-scope .ob {
            padding: 46px 52px;
          }
          .ee-women-scope .oincs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 36px;
          }
          @media (max-width: 640px) {
            .ee-women-scope .oincs {
              grid-template-columns: 1fr;
            }
          }
          .ee-women-scope .oi {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 16px;
            color: var(--text2);
            padding: 13px 16px;
            background: var(--cream);
            border-radius: 10px;
            border: 1px solid var(--cream3);
            transition: all 0.3s;
          }
          .ee-women-scope .oi:hover {
            background: var(--white);
            border-color: rgba(123, 20, 38, 0.2);
            transform: translateX(4px);
          }
          .ee-women-scope .oi::before {
            content: "✦";
            color: var(--gold);
            font-size: 10px;
            flex-shrink: 0;
          }
          .ee-women-scope .owarn {
            background: rgba(200, 5, 6, 0.06);
            border: 1px solid rgba(200, 5, 6, 0.14);
            border-radius: 12px;
            padding: 16px 22px;
            font-size: 13px;
            color: var(--text2);
            text-align: center;
            margin-bottom: 28px;
            line-height: 1.65;
          }
          .ee-women-scope .owarn strong {
            color: var(--maroon);
          }
          .ee-women-scope .obtn {
            display: block;
            width: 100%;
            background: var(--maroon);
            color: var(--cream);
            padding: 19px;
            border: none;
            border-radius: 12px;
            font-family: "Poppins", sans-serif;
            font-size: 14.5px;
            font-weight: 700;
            letter-spacing: 0.08em;
            
            text-align: center;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 8px 32px rgba(200, 5, 6, 0.28);
            position: relative;
            overflow: hidden;
          }
          .ee-women-scope .obtn::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 50%);
          }
          .ee-women-scope .obtn:hover {
            transform: translateY(-3px) scale(1.01);
            box-shadow: 0 20px 60px rgba(200, 5, 6, 0.4);
          }

          /* Responsive offer paddings */
          @media (max-width: 1024px) {
            .ee-women-scope .oh,
            .ee-women-scope .ob {
              padding: 32px;
            }
            .ee-women-scope .fw {
              padding: 36px 28px;
            }
          }

          /* Sticky badge: "VRT 18th Anniversary · Limited to 18 Women" */
          /* Sticky badge: becomes fixed when we add .eyebrow-fixed class */
          .ee-women-scope .eyebrow-fixed {
            position: fixed;
            top: 92px; /* below main site header */
            right: 24px;
            margin: 0;
            z-index: 300;
            box-shadow: 0 10px 40px rgba(28, 10, 14, 0.1);
          }
          @media (max-width: 640px) {
            .ee-women-scope .eyebrow-fixed {
              top: 84px;
              right: 12px;
              left: 12px;
              justify-content: center;
            }
          }

          /* Responsive padding parity with original */
          @media (max-width: 1024px) {
            .ee-women-scope .sec {
              padding-left: 32px;
              padding-right: 32px;
            }
            .ee-women-scope .hero {
              padding: 80px 32px 60px;
            }
          }

          .ee-women-scope .btnp,
          .ee-women-scope .obtn,
          .ee-women-scope .fsub2 {
            cursor: pointer;
          }

          .ee-women-scope .ticker {
            position: fixed;
            bottom: 26px;
            right: 26px;
            z-index: 500;
            transition: all 0.3s;
          }

          .ee-women-scope .rev {
            opacity: 0;
            transform: translateY(38px);
            transition:
              opacity 0.8s ease,
              transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .ee-women-scope .rev.left {
            transform: translateX(-38px);
          }
          .ee-women-scope .rev.right {
            transform: translateX(38px);
          }
          .ee-women-scope .rev.sc2 {
            transform: scale(0.93);
          }
          .ee-women-scope .rev.vis {
            opacity: 1 !important;
            transform: translate(0) scale(1) !important;
          }
        `}</style>

        <div className="ee-women-scope min-h-screen bg-[#FAF6EF]">
          <div className="cursor" id="cur" />
          <div className="cursor-ring" id="curR" />
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />

          <EEWomenHero />
          <EEWomenUrgency />
          <EEWomenProblem />
          <EEWomenSteps />
          <EEWomenResults />
          <EEWomenWhom />
          <EEWomenOffer />
          <EEWomenApplication />
          <EEWomenTicker />
        </div>
      </main>
    </>
  );
}
