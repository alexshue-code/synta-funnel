import React, { useEffect, useMemo, useRef, useState } from "react";

const ACCENT = "#0158BC";
const BG = "#F7F7F5";

const SYSTEM_IMAGES = {
  reactivation: "/images/clinic-reactivation.png",
  retention: "/images/clinic-retention.png",
  recurring: "/images/clinic-recurring.png",
};

const SOCIAL_IMAGES = {
  medspa: "/images/medspa-bg.png",
  trt: "/images/trt-bg.png",
  dental: "/images/dental-bg.png",
  biohack: "/images/biohack-bg.png",
};

const OUTCOME_IMAGES = {
  primary: "/images/outcome-revenue.png",
  communication: "/images/outcome-communication.png",
  retention: "/images/outcome-retention.png",
};

export default function SyntaRetentionOfferFunnel() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[#111111]" style={{ ["--bg"]: BG }}>
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <ReframeSection />
      <RevenueCalculatorSection />
      <MechanismSection />
      <SocialProofSection />
      <OutcomeSection />
      <AuthoritySection />
      <OnboardingSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
}

function TopBar() {
  return (
    <div className="sticky top-0 z-20 border-b border-black/5 bg-[rgba(247,247,245,0.85)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center">
          <img src="/images/synta-logo-svg-englarged.svg" alt="SYNTA" className="h-16 w-auto" />
        </div>
        <button
          className="rounded-xl px-4 py-2 text-sm font-medium text-white shadow-[0_12px_32px_rgba(1,88,188,0.22)] transition hover:translate-y-[-1px]"
          style={{ background: ACCENT }}
        >
          Book Call
        </button>
      </div>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  animation: `heroFadeUp 0.55s ease ${delay}s both`,
});

function HeroSection() {
  const [headlineHovered, setHeadlineHovered] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <BackgroundArcs />
      <div className="mx-auto max-w-5xl text-center">

        <div style={fadeUp(0)}>
          <Eyebrow>For Aesthetic & Wellness Clinics</Eyebrow>
        </div>

        <h1
          className="mx-auto mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-7xl lg:text-[88px]"
          style={fadeUp(0.08)}
          onMouseEnter={() => setHeadlineHovered(true)}
          onMouseLeave={() => setHeadlineHovered(false)}
        >
          Add{" "}
          <span style={{ color: headlineHovered ? "#2B7FFF" : ACCENT, transition: "color 0.4s ease" }}>
            $30K+
          </span>{" "}
          From Patients You Already Have
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black/62 md:text-xl md:leading-8" style={fadeUp(0.16)}>
          We install the systems that re-engage inactive patients, fix missed follow-up, and turn it into booked revenue.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-black/62 md:text-xl md:leading-8" style={fadeUp(0.16)}>
          — Add $30K+ in 90 days, or we keep working until you do.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton>Check If You Qualify</PrimaryButton>
          <a
            href="#revenue-calculator"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              borderRadius: "0.75rem",
              boxShadow: ctaHovered
                ? "0 0 0 3px rgba(0,85,254,0.10), 0 8px 28px rgba(0,85,254,0.13)"
                : "none",
              transition: "box-shadow 0.2s ease",
            }}
          >
            <SecondaryButton>Calculate Your Lost Revenue</SecondaryButton>
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-[28px] border border-black/6 bg-white/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur md:grid-cols-3 md:p-5">
          <HeroStat value="No New Leads Needed" label="You're already sitting on untapped revenue inside your patient base" />
          <HeroStat value="Live in 14 Days" label="We plug into your existing systems and start reactivating patients within days" />
          <HeroStat value="$30K+ Additional Revenue" label="From patients you're not currently converting or following up with" />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const bullets = [
    "Patients come in once and never hear from you again.",
    "Follow-up is inconsistent.",
    "Promotions are one-off.",
    "There's no real system bringing people back.",
  ];

  const issues = [
    {
      title: "Inactive patients",
      text: "Thousands of past patients sitting untouched for months — sometimes years.",
    },
    {
      title: "Missed follow-up",
      text: "Leads and patients fall through the cracks with no system to recover them.",
    },
    {
      title: "No retention system",
      text: "No memberships, no loyalty loops, no structured reason to come back.",
    },
    {
      title: "Revenue left behind",
      text: "One-time visits instead of predictable, recurring revenue from the same patients.",
    },
  ];

  return (
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            {/* Left column */}
            <div>
              <Eyebrow>In the real world</Eyebrow>
              <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                You don't have a lead problem
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-black/62 md:text-lg">
                Most clinics are great at generating demand — but the money is lost in what happens after.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                {bullets.map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <div className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
                    <p className="text-base leading-7 text-black/62">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col rounded-[28px] border border-black/7 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              {issues.map((issue, i) => (
                <ProblemIssueBlock
                  key={issue.title}
                  issue={issue}
                  index={i}
                  total={issues.length}
                  isHovered={hoveredIndex === i}
                  isDimmed={hoveredIndex !== null && hoveredIndex !== i}
                  onHover={() => setHoveredIndex(i)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
  );
}

function ProblemIssueBlock({ issue, index, total, isHovered, isDimmed, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex items-start gap-4 px-6 py-6 md:px-8"
      style={{
        borderLeft: `3px solid rgba(0, 85, 254, ${isHovered ? 1 : 0})`,
        background: isHovered ? "rgba(0, 85, 254, 0.03)" : "transparent",
        borderBottom: index < total - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
        transform: isHovered ? "translateY(-1px)" : "translateY(0)",
        opacity: isDimmed ? 0.72 : 1,
        transition: "all 0.2s ease",
      }}
    >
      <div
        className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold"
        style={{
          color: isHovered ? "#0055FE" : "rgba(0,0,0,0.35)",
          borderColor: isHovered ? "#0055FE" : "rgba(0,0,0,0.10)",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "all 0.2s ease",
        }}
      >
        {index + 1}
      </div>
      <div>
        <div
          className="text-base tracking-[-0.02em] text-black md:text-lg"
          style={{ fontWeight: isHovered ? 700 : 600, transition: "font-weight 0.2s ease" }}
        >
          {issue.title}
        </div>
        <p className="mt-1 text-sm leading-6 text-black/55">{issue.text}</p>
      </div>
    </div>
  );
}

function ReframeSection() {
  return (
    <section className="px-6 py-20 text-center md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl rounded-[34px] border border-black/7 bg-white px-8 py-14 shadow-[0_18px_50px_rgba(0,0,0,0.045)] md:px-14 md:py-16">
        <Eyebrow centered>The shift</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
          You don't need <span style={{ color: ACCENT }}>more leads.</span><br className="hidden md:block" />You need to monetize the patients you <span style={{ color: ACCENT }}>already have.</span>
        </h2>
      </div>
    </section>
  );
}

function MechanismSection() {
  const [active, setActive] = useState("reactivation");

  const content = {
    reactivation: {
      title: "Reactivation System",
      body: "Recover lost revenue by reactivating patients who haven't been back in months — automatically.",
      media: SYSTEM_IMAGES.reactivation,
      bullets: ["Lapsed patient campaigns", "SMS + email sequences", "Offer timing logic"],
      metric: "$18,420 Recovered in 90 Days",
      metricSub: "Reactivation System"
    },
    retention: {
      title: "Retention system",
      body: "Increase visit frequency through post-visit flows, loyalty systems, and structured rebooking.",
      media: SYSTEM_IMAGES.retention,
      bullets: ["Post-visit automation", "Rebooking prompts", "Loyalty + membership"],
      metric: "$9,840 Recovered in 90 Days",
      metricSub: "Patient Follow-Up System"
    },
    recurring: {
      title: "Recurring revenue system",
      body: "Introduce memberships, packages, and backend offers that create predictable monthly revenue.",
      media: SYSTEM_IMAGES.recurring,
      bullets: ["Membership setup", "Package offers", "Subscription flows"],
      metric: "$12,300 Monthly",
      metricSub: "Recurring Revenue Active"
    }
  };

  const current = content[active];

  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Eyebrow centered>The system</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
            A system built to recover the revenue you're already losing.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-black/62 md:text-lg">
            Not more tools. Not more dashboards. Systems that run inside your clinic and bring patients back — automatically.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <img src={current.media} alt="clinic system" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),transparent_60%)]" />

            <div className="absolute bottom-6 left-6">
              <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.15)] backdrop-blur">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
                  <div className="text-sm font-medium text-black/60">{current.metricSub}</div>
                </div>
                <div className="mt-1 text-lg font-semibold tracking-[-0.02em] text-black">{current.metric}</div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 max-w-xs text-right text-white">
              <div className="text-xl font-semibold tracking-[-0.03em]">{current.title}</div>
              <p className="mt-1 text-xs leading-5 text-white/80">{current.body}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <SystemSelector
              active={active === "reactivation"}
              onClick={() => setActive("reactivation")}
              onHover={() => setActive("reactivation")}
              title="Reactivation System"
              desc="Bring inactive patients back automatically with targeted outreach and timed follow-up."
            />
            <SystemSelector
              active={active === "retention"}
              onClick={() => setActive("retention")}
              onHover={() => setActive("retention")}
              title="Retention System"
              desc="Turn one-time visits into repeat bookings through structured follow-up and rebooking flows."
            />
            <SystemSelector
              active={active === "recurring"}
              onClick={() => setActive("recurring")}
              onHover={() => setActive("recurring")}
              title="Recurring Revenue System"
              desc="Introduce predictable, recurring revenue through memberships, loyalty, and ongoing care plans."
            />

            <div className="mt-4 rounded-2xl border border-black/8 bg-[#FAFAF8] p-5">
              <div className="text-sm font-medium text-black/50">Built into this system</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.bullets.map((b) => (
                  <Tag key={b} outlinedAccent>{b}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2">
          <PrimaryButton>See How This Would Work in Your Clinic</PrimaryButton>
          <p className="text-xs text-black/38">Based on your current patient flow and missed follow-up</p>
        </div>
      </div>
    </section>
  );
}

function SystemSelector({ active, onClick, onHover, title, desc }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition duration-200"
      style={{
        borderColor: active ? "rgba(1,88,188,0.35)" : "rgba(0,0,0,0.08)",
        background: active ? "rgba(1,88,188,0.06)" : "white",
        boxShadow: active ? "0 10px 30px rgba(1,88,188,0.08)" : "0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <div>
        <div className="text-base font-semibold text-black">{title}</div>
        <div className="text-sm text-black/55">{desc}</div>
      </div>
      <div className="h-3 w-3 rounded-full transition-colors" style={{ background: active ? ACCENT : "rgba(0,0,0,0.2)" }} />
    </button>
  );
}

function RevenueCalculatorSection() {
  return <SyntaRevenueCalculator />;
}

function OutcomeSection() {
  const outcomeCards = {
    primary: {
      image: OUTCOME_IMAGES.primary,
      metric: "+$10K–$20K",
      title: "Additional monthly revenue",
      body: "Recovered through database monetization, reactivation, and recurring patient systems.",
    },
    communication: {
      image: OUTCOME_IMAGES.communication,
      metric: "No missed follow-up",
      title: "Cleaner patient communication",
      body: "Automated backend flows reduce manual drop-off and help staff stay consistent.",
    },
    retention: {
      image: OUTCOME_IMAGES.retention,
      metric: "Higher retention",
      title: "More repeat revenue",
      body: "Memberships, loyalty, and better rebooking logic keep patients coming back.",
    },
  };

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>What this looks like</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
              Outcomes your clinic can actually feel.
            </h2>
            <p className="mt-3 max-w-xl whitespace-nowrap text-sm leading-6 text-black/62 md:text-base">
              Cleaner backend systems create visible revenue outcomes without touching ad spend.
            </p>
          </div>
          <div className="hidden md:block">
            <PrimaryButton>Apply this system to your clinic</PrimaryButton>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <OutcomeMediaCard
            image={outcomeCards.primary.image}
            metric={outcomeCards.primary.metric}
            title={outcomeCards.primary.title}
            body={outcomeCards.primary.body}
            large
          />

          <div className="grid gap-4">
            <OutcomeMediaCard
              image={outcomeCards.communication.image}
              metric={outcomeCards.communication.metric}
              title={outcomeCards.communication.title}
              body={outcomeCards.communication.body}
            />
            <OutcomeMediaCard
              image={outcomeCards.retention.image}
              metric={outcomeCards.retention.metric}
              title={outcomeCards.retention.title}
              body={outcomeCards.retention.body}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const items = [
    {
      clinic: "Velour Aesthetics",
      revenue: "$36,840",
      quote: "Reactivation filled two weeks of bookings from patients we already had.",
      owner: "Dr. Melissa Grant",
      role: "Owner",
      image: SOCIAL_IMAGES.medspa,
    },
    {
      clinic: "Elevate Hormone Clinic",
      revenue: "$44,260",
      quote: "Follow-up and subscriptions brought back consistent monthly revenue without ads.",
      owner: "Jason Miller",
      role: "Owner",
      image: SOCIAL_IMAGES.trt,
    },
    {
      clinic: "Luxe Smile Studio",
      revenue: "$33,720",
      quote: "Targeted campaigns filled our schedule and created unexpected upsell revenue.",
      owner: "Dr. Anthony Reyes",
      role: "Owner",
      image: SOCIAL_IMAGES.dental,
    },
    {
      clinic: "Nova Biohacking Lab",
      revenue: "$46,980",
      quote: "Membership rollout gave us predictable revenue and reactivated lost clients.",
      owner: "Sarah Kim",
      role: "Founder",
      image: SOCIAL_IMAGES.biohack,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-black/7 bg-[#F7F7F5] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.045)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col">
            <div className="max-w-xl">
              <Eyebrow>Clinic results</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                What clinic owners are seeing.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {items.map((item, index) => (
                <button
                  key={item.clinic}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="rounded-[28px] border bg-white p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:translate-y-[-2px] hover:shadow-[0_14px_34px_rgba(1,88,188,0.10)]"
                  style={{
                    borderColor: index === activeIndex ? "rgba(1,88,188,0.22)" : "rgba(0,0,0,0.08)",
                    background: index === activeIndex ? "rgba(255,255,255,0.98)" : "white",
                  }}
                  onMouseEnter={(e) => {
                    if (index !== activeIndex) e.currentTarget.style.borderColor = "rgba(1,88,188,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    if (index !== activeIndex) e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                  }}
                >
                  <div className="mb-3 flex items-center gap-1 text-[#0158BC]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className="text-lg font-semibold tracking-[-0.03em] text-black">{item.clinic}</div>
                  <p className="mt-3 text-sm leading-6 text-black/68">{item.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.06] text-sm font-semibold text-black/65">
                      {item.owner.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black">{item.owner}</div>
                      <div className="text-sm text-black/48">{item.role}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] min-h-[560px] border border-black/8 bg-white shadow-[0_16px_42px_rgba(0,0,0,0.05)]">
            <img
              src={activeItem.image}
              alt={activeItem.clinic}
              className="absolute inset-0 h-full w-full object-cover transition duration-500"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),rgba(0,0,0,0.12)_45%,transparent)]" />

            <div className="absolute inset-x-5 bottom-5 rounded-[26px] border border-white/20 bg-[rgba(255,255,255,0.16)] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl md:inset-x-6 md:bottom-6 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-white/80">90-day recovered revenue</div>
                  <div className="mt-2 text-4xl font-semibold leading-none tracking-[-0.05em] md:text-5xl">
                    {activeItem.revenue}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75">
                  {activeItem.clinic}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">{activeItem.owner}</div>
                  <div className="text-sm text-white/70">{activeItem.role}</div>
                </div>
                <div className="rounded-[18px] border border-white/20 bg-[rgba(255,255,255,0.12)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/78 backdrop-blur">
                  SYNTA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { label: "Compliance-first" },
    { label: "Built for regulated services" },
    { label: "Repeat-revenue focused" },
    { label: "Built by operators" },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20 text-center md:px-10 md:py-24"
      style={{ background: "linear-gradient(180deg, #F6F6F3 0%, #F2F2EF 100%)" }}
    >
      <div className="mx-auto max-w-4xl">

        {/* Top content */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Eyebrow centered>Built for clinics</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
            We only work with aesthetic and wellness clinics.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/62 md:text-lg">
            Everything is built around retention, follow-up, and real clinic operations — not generic marketing systems.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-12 h-px max-w-2xl bg-black/[0.07]" />

        {/* Trust strip */}
        <div className="mx-auto mt-0 grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <TrustStripItem key={item.label} label={item.label} index={i} visible={visible} />
          ))}
        </div>

        {/* Divider */}
        <div className="mx-auto h-px max-w-2xl bg-black/[0.07]" />

        {/* Anchor line */}
        <p
          className="mx-auto mt-8 max-w-lg text-sm leading-6 text-black/38 italic"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.55s",
          }}
        >
          Built to operate where compliance, patient experience, and revenue all matter.
        </p>
      </div>
    </section>
  );
}

function TrustStripItem({ label, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2 px-4 py-8"
      style={{
        opacity: !visible ? 0 : 1,
        transform: !visible ? "translateY(8px)" : "scale(1.02)" && hovered ? "scale(1.02)" : "scale(1)",
        transition: "opacity 0.5s ease, transform 0.25s ease",
        transitionDelay: !visible ? "0s" : `${0.32 + index * 0.07}s`,
        cursor: "default",
      }}
    >
      <div
        className="h-2 w-2 rounded-full"
        style={{
          background: hovered ? ACCENT : "rgba(1,88,188,0.45)",
          transform: hovered ? "scale(1.3)" : "scale(1)",
          transition: "all 0.25s ease",
        }}
      />
      <span
        className="text-sm font-semibold tracking-[-0.01em]"
        style={{
          color: hovered ? ACCENT : "rgba(0,0,0,0.65)",
          transition: "color 0.25s ease",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function OnboardingSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Getting started</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl">
            We handle the build. You stay focused on patients.
          </h2>
          <p className="mt-5 text-base leading-7 text-black/62 md:text-lg">
            We collect what we need once, connect your systems, and run everything end-to-end.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <OnboardingStepCard
            step="Step 1"
            title="We gather your data"
            body="Export your patient list (CSV), basic offer info, and access to messaging tools."
            tags={["CSV export", "POS / CRM access", "Messaging channels"]}
          />
          <OnboardingStepCard
            step="Step 2"
            title="We build + launch"
            body="Segmentation, offers, sequences, and memberships are built and deployed for you."
            tags={["Campaigns", "Automations", "Memberships"]}
          />
          <OnboardingStepCard
            step="Step 3"
            title="We manage it monthly"
            body="Ongoing optimization, follow-ups, and reporting. Fully hands-off for your team."
            tags={["$1.8K/mo management", "Optimization", "Reporting"]}
          />
        </div>

        <div className="mt-8 rounded-[28px] border border-black/8 bg-[#FAFAF8] p-6 md:p-7">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-lg font-semibold tracking-[-0.03em] text-black">Want this owned in-house?</div>
              <p className="mt-2 text-sm leading-6 text-black/62 md:text-base">
                We can install the same systems inside your clinic as a branded, owned stack to reduce software and agent costs.
              </p>
            </div>
            <div className="flex gap-3">
              <SecondaryButton>Visit our main website</SecondaryButton>
              <PrimaryButton>Schedule call</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OnboardingStepCard({ step, title, body, tags }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-[28px] border border-black/7 bg-white p-5 shadow-[0_14px_40px_rgba(0,0,0,0.045)] transition duration-300 hover:translate-y-[-2px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-sm font-semibold text-black/50">{step}</div>
      <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-black">{title}</div>
      <p className="mt-3 text-sm leading-6 text-black/62">{body}</p>
      <div className="mt-4 flex flex-nowrap gap-2 overflow-hidden">
        {tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium transition duration-300"
            style={{
              background: "rgba(0,0,0,0.05)",
              color: "rgba(0,0,0,0.58)",
              borderColor: hovered ? "rgba(1,88,188,0.28)" : "rgba(0,0,0,0.04)",
              boxShadow: hovered ? "0 0 0 1px rgba(1,88,188,0.08) inset" : "none",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GuaranteeSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-[rgba(1,88,188,0.16)] bg-[rgba(1,88,188,0.045)] px-10 py-14 text-center shadow-[0_20px_60px_rgba(1,88,188,0.10)] md:px-16 md:py-16">
        <Eyebrow centered>Our Guarantee</Eyebrow>
        <h2 className="mt-4 text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[52px]">
          Generate <span style={{ color: ACCENT }}>$30K+</span> in new revenue in 90 days — or we keep working until you do.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-black/65 md:text-lg">
          Built for qualified clinics with an existing database, consistent service delivery, and backend growth opportunity.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryButton>Book your strategy call</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="px-6 pb-24 pt-12 text-center md:px-10 md:pb-28">
      <div className="mx-auto max-w-4xl">
        <Eyebrow centered>Next step</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
          See what's already hiding inside your clinic.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/62 md:text-lg">
          Book a strategy call and we'll show you where the retention and recurring revenue opportunity actually lives.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton>Book your strategy call</PrimaryButton>
          <SecondaryButton>Review the offer</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function SyntaRevenueCalculator() {
  const clinicTypes = {
    aesthetics: {
      label: "Aesthetic / Med Spa",
      databaseDefault: 2500,
      reachableDefault: 65,
      reactivationDefault: 4,
      valueDefault: 527,
      note: "Uses a conservative realized revenue per reactivated patient default.",
    },
    wellness: {
      label: "Wellness / Hormone / TRT",
      databaseDefault: 1800,
      reachableDefault: 60,
      reactivationDefault: 4,
      valueDefault: 199,
      note: "Uses a conservative monthly member value default.",
    },
  };

  const [clinicType, setClinicType] = useState("aesthetics");
  const [databaseSize, setDatabaseSize] = useState(clinicTypes.aesthetics.databaseDefault);
  const [reachablePct, setReachablePct] = useState(clinicTypes.aesthetics.reachableDefault);
  const [reactivationPct, setReactivationPct] = useState(clinicTypes.aesthetics.reactivationDefault);
  const [valuePerPatient, setValuePerPatient] = useState(clinicTypes.aesthetics.valueDefault);

  const setPreset = (type) => {
    setClinicType(type);
    setDatabaseSize(clinicTypes[type].databaseDefault);
    setReachablePct(clinicTypes[type].reachableDefault);
    setReactivationPct(clinicTypes[type].reactivationDefault);
    setValuePerPatient(clinicTypes[type].valueDefault);
  };

  const metrics = useMemo(() => {
    const reachablePatients = Math.round((Number(databaseSize) || 0) * ((Number(reachablePct) || 0) / 100));
    const reactivatedPatients = Math.round(reachablePatients * ((Number(reactivationPct) || 0) / 100));
    const monthlyRevenue = Math.round(reactivatedPatients * (Number(valuePerPatient) || 0));
    const ninetyDayRevenue = monthlyRevenue * 3;
    const annualRevenue = monthlyRevenue * 12;
    return { reachablePatients, reactivatedPatients, monthlyRevenue, ninetyDayRevenue, annualRevenue };
  }, [databaseSize, reachablePct, reactivationPct, valuePerPatient]);

  const formatCurrency = (n) => {
    if (!n) return "$0";
    if (n >= 1000000) {
      const millions = n / 1000000;
      return `$${millions.toFixed(2).replace(/\.00$/, "")}M`;
    }
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  };

  return (
    <section id="revenue-calculator" className="w-full bg-[#F3F3F0] px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Revenue estimator</Eyebrow>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-6xl">
                See what your existing patient database could be worth.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/65 md:text-lg">
                A simple backend revenue model for wellness and aesthetic clinics. No ads. No new lead generation. Just revenue hiding inside the database you already built.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ModeButton
                active={clinicType === "aesthetics"}
                onClick={() => setPreset("aesthetics")}
                title="Aesthetic / Med Spa"
                body="Botox, injectables, skin, laser, body contouring"
              />
              <ModeButton
                active={clinicType === "wellness"}
                onClick={() => setPreset("wellness")}
                title="Wellness / Hormone"
                body="TRT, hormone, IV, longevity, weight loss"
              />
            </div>

            <div className="mt-5 rounded-3xl border border-black/8 bg-white p-5 shadow-[0_16px_50px_rgba(0,0,0,0.05)] md:p-6">
              <div className="mb-4 text-sm font-medium text-black/50">How this estimate works</div>
              <div className="grid gap-3 text-sm text-black/70">
                <div className="rounded-2xl bg-black/[0.03] px-4 py-3">
                  <span className="font-semibold text-black">Database size</span> × <span className="font-semibold text-black">reachable %</span> = reachable patients
                </div>
                <div className="rounded-2xl bg-black/[0.03] px-4 py-3">
                  Reachable patients × <span className="font-semibold text-black">reactivation %</span> = reactivated patients
                </div>
                <div className="rounded-2xl bg-black/[0.03] px-4 py-3">
                  Reactivated patients × <span className="font-semibold text-black">average value</span> = monthly revenue opportunity
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-[420px] lg:min-h-[100%]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(1,88,188,0.08),transparent_38%)]" />
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/calculator-video-poster.png"
            >
              <source src="/videos/database-revenue.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.34),transparent_55%)]" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 md:bottom-8 md:left-8 md:right-8">
              <div className="w-fit rounded-full bg-white/92 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-black/55 backdrop-blur">
                Database monetization
              </div>
              <div className="max-w-lg text-2xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-4xl">
                Show the revenue hiding inside your patient list before you ever touch ad spend.
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag primary>Existing database only</Tag>
                <Tag>Conservative defaults</Tag>
                <Tag>No new leads</Tag>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-[28px] border border-black/8 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-7">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Patient database size" value={databaseSize} setValue={setDatabaseSize} min={250} max={50000} step={250} suffix=" patients" />
            <Field label="Reachable patients" value={reachablePct} setValue={setReachablePct} min={5} max={100} step={1} suffix="%" />
            <Field label="Reactivation rate" value={reactivationPct} setValue={setReactivationPct} min={1} max={30} step={1} suffix="%" />
            <Field
              label={clinicType === "wellness" ? "Monthly patient value" : "Avg. realized revenue / patient"}
              value={valuePerPatient}
              setValue={setValuePerPatient}
              min={50}
              max={5000}
              step={25}
              prefix="$"
            />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <MetricCard label="30-Day Opportunity" value={formatCurrency(metrics.monthlyRevenue)} primary />
            <MetricCard label="90-Day Opportunity" value={formatCurrency(metrics.ninetyDayRevenue)} />
            <MetricCard label="Annualized Opportunity" value={formatCurrency(metrics.annualRevenue)} />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <MiniStat label="Reachable Patients" value={metrics.reachablePatients.toLocaleString()} />
            <MiniStat label="Reactivated Patients / Month" value={metrics.reactivatedPatients.toLocaleString()} />
          </div>

          <div className="mt-6 rounded-3xl border border-black/8 bg-[#FAFAF8] p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Tag primary>SYNTA model</Tag>
              <Tag>No ad spend assumed</Tag>
              <Tag>Database only</Tag>
              <Tag>Conservative defaults</Tag>
            </div>
            <p className="mt-4 text-sm leading-6 text-black/65">
              This estimate is based on better reactivation, retention, and recurring revenue systems inside your existing patient database. It is not a promise of results and should be used as a directional planning tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, setValue, min, max, step, prefix = "", suffix = "" }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-[#FCFCFB] p-4">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-black/60">{label}</label>
        <div className="rounded-full border border-black/8 bg-white px-3 py-1 text-sm font-semibold text-black">
          {prefix}{Number(value).toLocaleString()}{suffix}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-4 w-full"
        style={{ accentColor: ACCENT }}
      />
      <div className="mt-2 flex justify-between text-xs text-black/35">
        <span>{prefix}{Number(min).toLocaleString()}{suffix}</span>
        <span>{prefix}{Number(max).toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-black/6 bg-white p-5 text-left overflow-hidden">
      <div className="truncate text-base font-semibold tracking-[-0.02em] text-black">{value}</div>
      <div className="mt-1 text-xs leading-5 text-black/50">{label}</div>
    </div>
  );
}

function ProblemCard({ title, body }) {
  return (
    <div className="rounded-[24px] border border-black/7 bg-white p-6 shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
      <div className="text-xl font-semibold tracking-[-0.03em] text-black">{title}</div>
      <p className="mt-3 text-sm leading-6 text-black/62 md:text-base">{body}</p>
    </div>
  );
}

function ModeButton({ active, onClick, title, body }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl border px-4 py-4 text-left transition"
      style={{
        borderColor: active ? ACCENT : "rgba(0,0,0,0.08)",
        background: active ? "rgba(1,88,188,0.06)" : "white",
        boxShadow: active ? "0 10px 30px rgba(1,88,188,0.10)" : "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      <div className="text-sm font-semibold text-black">{title}</div>
      <div className="mt-1 text-sm leading-6 text-black/55">{body}</div>
    </button>
  );
}

function MetricCard({ label, value, primary = false }) {
  return (
    <div
      className="min-w-0 rounded-3xl border p-3 md:p-4"
      style={{
        background: primary ? "rgba(1,88,188,0.04)" : "#FCFCFB",
        borderColor: primary ? "rgba(1,88,188,0.18)" : "rgba(0,0,0,0.08)",
      }}
    >
      <div className="text-sm font-semibold leading-5" style={{ color: ACCENT }}>
        {label}
      </div>
      <div
        className="mt-2 min-w-0 break-words font-semibold leading-none tracking-[-0.05em] text-black [font-variant-numeric:tabular-nums]"
        style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.4rem)" }}
      >
        {value}
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/8 bg-white p-3">
      <div className="text-sm text-black/45">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-black">{value}</div>
    </div>
  );
}

function OutcomeMediaCard({ image, metric, title, body, large = false }) {
  const highlightWord = (text) => {
    const wordsToUnderline = ["follow-up", "retention", "appointments", "revenue"];
    let result = text;
    wordsToUnderline.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      result = result.replace(regex, `<span style="text-decoration:underline">$1</span>`);
    });
    return result;
  };

  if (!large) {
    return (
      <div
        className="relative overflow-hidden rounded-[28px] min-h-[205px] shadow-[0_16px_42px_rgba(1,88,188,0.06)]"
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, rgba(1,88,188,0.04) 60%, rgba(1,88,188,0.08) 100%)",
          border: "1px solid rgba(1,88,188,0.12)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(1,88,188,0.07),transparent_65%)]" />
        <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
          <div className="max-w-md">
            <div className="text-xl md:text-2xl font-semibold leading-[0.95] tracking-[-0.04em]" style={{ color: ACCENT }}>
              {metric}
            </div>
            <div
              className="mt-2 text-base md:text-lg font-semibold leading-[1.05] tracking-[-0.03em] text-black"
              dangerouslySetInnerHTML={{ __html: highlightWord(title) }}
            />
            <p
              className="mt-2 max-w-sm text-[12px] md:text-sm leading-5 text-black/55"
              dangerouslySetInnerHTML={{ __html: highlightWord(body) }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_16px_42px_rgba(0,0,0,0.05)] min-h-[430px]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.2)_50%,transparent)]" />
      <div className="relative z-10 flex h-full flex-col justify-end p-4 md:p-5">
        <div className="rounded-[22px] border border-white/20 bg-[rgba(255,255,255,0.14)] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl md:p-6">
          <div className="text-3xl md:text-5xl font-semibold leading-[0.95] tracking-[-0.04em]">
            <span style={{ color: ACCENT }}>{metric}</span>
          </div>
          <div
            className="mt-2 text-xl md:text-2xl font-semibold leading-[1.05] tracking-[-0.03em] text-white"
            dangerouslySetInnerHTML={{ __html: highlightWord(title) }}
          />
          <p
            className="mt-2 max-w-sm text-xs md:text-sm leading-5 text-white/85"
            dangerouslySetInnerHTML={{ __html: highlightWord(body) }}
          />
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ children, centered = false }) {
  return (
    <div className={`inline-flex rounded-full border border-black/8 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-black/45 ${centered ? "mx-auto" : ""}`}>
      {children}
    </div>
  );
}

function Tag({ children, primary = false, outlinedAccent = false }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-medium"
      style={{
        background: primary ? ACCENT : outlinedAccent ? "transparent" : "rgba(0,0,0,0.05)",
        color: primary ? "white" : outlinedAccent ? ACCENT : "rgba(0,0,0,0.58)",
        border: outlinedAccent ? `1px solid ${ACCENT}` : "none",
      }}
    >
      {children}
    </span>
  );
}

function PrimaryButton({ children }) {
  return (
    <button className="rounded-xl px-6 py-3 text-sm font-medium text-white shadow-[0_14px_36px_rgba(1,88,188,0.22)] transition hover:translate-y-[-1px]" style={{ background: ACCENT }}>
      {children}
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button className="rounded-xl border border-black/8 bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition hover:translate-y-[-1px]">
      {children}
    </button>
  );
}

function BackgroundArcs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      <div className="absolute left-[-18%] top-[-12%] h-[140%] w-[58%] rounded-full border border-black/5" />
      <div className="absolute left-[-6%] top-[-10%] h-[135%] w-[52%] rounded-full border border-black/5" />
      <div className="absolute right-[-18%] top-[-12%] h-[140%] w-[58%] rounded-full border border-black/5" />
      <div className="absolute right-[-6%] top-[-10%] h-[135%] w-[52%] rounded-full border border-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(1,88,188,0.06),transparent_35%)]" />
    </div>
  );
}
