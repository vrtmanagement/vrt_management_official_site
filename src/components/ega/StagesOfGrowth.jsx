 "use client";
 
 import React, { useState, useEffect } from 'react';

const StagesOfGrowth = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(3000, window.innerHeight * 3);
      setShowTopArrow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 mb-12 border border-gray-100">
      
      <h2 className="text-3xl font-bold text-red-600 mb-8">
        4. Stages Of Growth (SOG) – Diagnostic Assessment & Feedback
      </h2>

      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Introduction */}
        <div className="space-y-6">
          <p>
            <span className="font-bold">SOG Diagnostic Assessments:</span> The Business Health Scan That Tells You
            Exactly What to Fix, When, and Why
          </p>

          <p>
            Every entrepreneur has a mental model of what is holding their
            business back. Sometimes they are right. More often, they are
            treating the symptoms while the root cause quietly compounds beneath
            the surface. A cash flow problem is rarely just a cash flow problem.
            A hiring struggle is rarely just a hiring struggle. A leadership
            breakdown is rarely just a people issue. The most dangerous gaps in
            a growing business are not the ones you can see; they are the ones
            you don&apos;t yet know to look for. And without an objective,
            data-driven lens, even the most experienced leader is essentially
            navigating growth with an incomplete map.
          </p>

          <p>
            The SOG Diagnostic Assessments replace assumptions with precision.
            This powerful diagnostic suite delivers five detailed, personalized
            feedback reports that provide an objective, comprehensive scan of
            your business across every dimension that determines whether you
            scale successfully or stall. With clinical clarity, these assessments
            identify your company&apos;s exact current growth stage, surface the
            hidden risks building beneath the surface, and pinpoint the specific
            gaps - in leadership, systems, people, and profitability - that are
            quietly limiting your momentum right now. You won&apos;t receive a
            generic overview. You will receive a targeted, actionable roadmap
            tailored to your business, stage, and next move.
          </p>

          <p>
            The difference between entrepreneurs who scale with confidence and
            those who grind through the same frustrations year after year is not
            talent, funding, or market conditions. It is clarity - knowing with
            certainty what needs to change, in what order, and why it matters at
            this precise stage of growth. The SOG Diagnostic Assessments deliver
            that clarity in a way that no consultant&apos;s opinion or gut instinct
            ever can. If you are serious about eliminating blind spots,
            accelerating your path to the next level, and finally having a
            data-driven roadmap that tells you exactly where to focus your
            energy, this assessment will become one of the most valuable tools in
            your entire growth arsenal.
          </p>
        </div>

        {/* What You'll Get */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Five Key Takeaways Participants Can Immediately Implement
          </h3>

          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>Pinpoint Their Exact Stage of Growth</strong>
              <br />
              Participants will gain objective confirmation of where their
              organization currently stands and why certain challenges keep
              recurring.
            </li>
            <li>
              <strong>Identify the Real Bottlenecks Slowing Growth</strong>
              <br />
              The reports highlight whether constraints stem from leadership
              style, systems, delegation, financial discipline, team structure,
              or execution gaps.
            </li>
            <li>
              <strong>Align Leadership to Stage Demands</strong>
              <br />
              Entrepreneurs will understand how their role must evolve, from
              hands-on operator to delegator to strategic leader, and what skills
              to strengthen immediately.
            </li>
            <li>
              <strong>Shift from Reactive to Proactive Growth Planning</strong>
              <br />
              Participants will learn to anticipate predictable stage-related
              pressures instead of constantly &quot;dodging bullets&quot; in crisis mode.
            </li>
            <li>
              <strong>Develop a Clear, Stage-Specific Action Plan</strong>
              <br />
              Leaders will leave with prioritized next steps tailored to their
              growth stage, focusing on people, processes, profit, and
              performance improvements.
            </li>
          </ol>
        </div>

        {/* Why Important */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Why is this important?
          </h3>

          <div className="space-y-4">
            <p>
              Because every stage of growth comes with its own challenges,
              and if you treat them all the same, you’ll keep solving the
              wrong problems.
            </p>

            <p>
              This session gives you the clarity to lead your business with
              precision, adapt to change faster, and unlock the next level
              of sustainable growth.
            </p>
          </div>
        </div>

      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-8 z-50 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 ${
          showTopArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default StagesOfGrowth;
