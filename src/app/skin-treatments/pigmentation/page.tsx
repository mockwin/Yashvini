import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pigmentation Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "మొహంపై మచ్చలు చికిత్స (Pigmentation treatment) in Nandyala by Dr. Sireesha MD. Q-switched laser, chemical peels & topical agents for PIH, sun spots, freckles & uneven skin tone in Andhra Pradesh.",
  keywords: ["మొహంపై మచ్చలు చికిత్స", "pigmentation treatment Nandyala", "dark spots treatment Nandyala", "మొహంపై నల్లటి మచ్చలు", "skin brightening Nandyala", "చర్మవ్యాధి నిపుణుడు Nandyala"],
  alternates: { canonical: "https://yashvini.in/skin-treatments/pigmentation" },
};

export default function PigmentationPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="pigmentation"
      h1="Pigmentation Treatment in Nandyala"
      subtitle="Uneven skin tone, dark spots, and patchy pigmentation are among the most common skin concerns for patients in South India. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers safe and effective treatments designed for Indian skin tones."
      whatIsTitle="What Is Skin Pigmentation?"
      whatIsContent={[
        "Skin pigmentation refers to the colouring of the skin, which is determined by the amount and distribution of melanin produced by specialised cells called melanocytes. When melanin production is excessive or uneven — due to sun exposure, inflammation, hormonal changes, or skin injury — it results in areas of hyperpigmentation: patches or spots darker than the surrounding skin.",
        "The most common forms include post-inflammatory hyperpigmentation (PIH), which appears after acne, eczema, or any skin injury; solar lentigines (sun spots or liver spots) caused by cumulative UV exposure; freckles (ephelides), which are small flat spots more common in lighter skin but also seen in Indian patients; and diffuse uneven skin tone caused by chronic sun exposure and ageing.",
        "South Indian skin (Fitzpatrick types IV–V) is particularly prone to hyperpigmentation because melanocytes are highly reactive to any form of trauma or UV stimulation. This makes both treatment and prevention critically important — and also means that treatments must be chosen carefully to avoid triggering further pigmentation.",
      ]}
      causes={[
        { icon: "☀️", cause: "Prolonged or unprotected sun (UV) exposure" },
        { icon: "🔥", cause: "Post-inflammatory hyperpigmentation after acne or injury" },
        { icon: "🧬", cause: "Genetic predisposition (family history of pigmentation)" },
        { icon: "💊", cause: "Hormonal changes (pregnancy, oral contraceptives)" },
        { icon: "🧴", cause: "Use of harsh skin-lightening products or bleaching creams" },
        { icon: "⚗️", cause: "Friction from tight clothing or rough scrubbing" },
        { icon: "🩺", cause: "Certain medications (e.g., doxycycline, amiodarone)" },
        { icon: "🧪", cause: "Contact with photosensitising agents (perfumes, plants)" },
      ]}
      symptomsOrTypes={[
        {
          title: "Post-Inflammatory Hyperpigmentation (PIH)",
          desc: "Dark marks left after acne breakouts, insect bites, eczema, or any skin injury. Very common in South Indian skin. Usually flat and fades over time with proper treatment and sun protection.",
        },
        {
          title: "Solar Lentigines (Sun Spots)",
          desc: "Flat, well-defined brown spots caused by years of cumulative UV exposure. Commonly appear on the face, hands, arms, and décolletage. Respond well to Q-switched laser and IPL.",
        },
        {
          title: "Freckles (Ephelides)",
          desc: "Small, flat brown spots that darken in summer and fade in winter. Genetic in origin but triggered by sun exposure. Can be effectively lightened with laser and topical agents.",
        },
        {
          title: "Uneven Skin Tone / Diffuse Hyperpigmentation",
          desc: "Generalised darkening or patchiness across the face or body due to chronic sun exposure, ageing, or hormonal factors. A combination approach of topical agents, peels, and sun protection works best.",
        },
        {
          title: "Periorbital Hyperpigmentation (Dark Circles)",
          desc: "Darkening of the skin around the eyes, influenced by genetics, thin skin, UV exposure, fatigue, and blood vessel congestion. Treated with topical agents, chemical peels, and Q-switched laser.",
        },
        {
          title: "Melasma",
          desc: "A distinct pattern of facial pigmentation driven by hormonal and UV factors. Covered in detail on a separate page — see the Melasma Treatment page for full information.",
        },
      ]}
      treatments={[
        {
          icon: "💡",
          title: "Q-Switched Nd:YAG Laser",
          desc: "A gold-standard laser for pigmentation that delivers ultra-short pulses of energy specifically absorbed by melanin, shattering pigment particles without damaging surrounding skin. Safe for darker Indian skin tones. Effective for sun spots, freckles, PIH, and tattoo pigment. Multiple sessions are typically needed.",
        },
        {
          icon: "🧴",
          title: "Chemical Peels",
          desc: "Glycolic acid, mandelic acid, lactic acid, and Jessner's solution peels exfoliate pigmented superficial skin layers, revealing fresher, more even-toned skin beneath. A series of peels spaced 2–4 weeks apart is most effective. Mandelic and lactic acid peels are particularly gentle and well-suited for Indian skin.",
        },
        {
          icon: "🌿",
          title: "Topical Lightening Agents",
          desc: "Evidence-based topical agents prescribed by Dr. Sireesha include kojic acid (inhibits tyrosinase enzyme), niacinamide (reduces melanosome transfer), vitamin C (antioxidant that suppresses melanin synthesis), tranexamic acid (blocks UV-induced pigmentation), and azelaic acid. These are often combined for synergistic effect.",
        },
        {
          icon: "🔆",
          title: "Intense Pulsed Light (IPL)",
          desc: "Broadband light energy targets melanin in sun spots and freckles, causing them to darken temporarily before flaking off. Best suited for lighter skin tones or well-defined sun spots. Dr. Sireesha will assess suitability based on your skin type.",
        },
        {
          icon: "🛡️",
          title: "Broad-Spectrum Sunscreen",
          desc: "Sun protection is not optional — it is the cornerstone of all pigmentation treatment. SPF 50+ broad-spectrum sunscreen used daily and reapplied every 2–3 hours prevents existing pigmentation from darkening and new spots from forming. Without this, all other treatments are significantly less effective.",
        },
        {
          icon: "💉",
          title: "Microinjections / Mesotherapy",
          desc: "Skin-brightening cocktails containing vitamin C, glutathione, tranexamic acid, and hyaluronic acid delivered by micro-injections into the superficial skin layer. Provides overall brightening and improved skin radiance over a course of sessions.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A detailed skin assessment with Dr. Sireesha to identify the specific type and depth of pigmentation.",
            "Begin a prescribed preparatory regimen (usually topical agents + sunscreen) for 4–6 weeks before procedures to prime the skin.",
            "Avoid sun exposure and use SPF 50+ rigorously for at least 2 weeks before any laser or peel procedure.",
            "Disclose all medications, including hormonal contraceptives, as these influence pigmentation patterns and treatment planning.",
            "Do not use retinoids or other actives for 5–7 days before chemical peels unless advised otherwise.",
            "Avoid waxing or hair removal in the treatment area for at least a week before the procedure.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Q-switched laser sessions are quick (15–30 minutes) with minimal discomfort; a topical numbing cream may be applied beforehand.",
            "Chemical peels involve application of the peeling solution, a mild tingling or warmth is normal; neutralisation or removal completes the procedure.",
            "IPL sessions take 20–30 minutes; protective goggles are worn throughout.",
            "Treated sun spots may temporarily darken (appear 'bronzed' or darker) immediately after laser — this is expected and resolves as pigment is shed.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Apply SPF 50+ sunscreen without fail, starting from the morning after treatment.",
            "Darkened spots after laser will form micro-crusts and peel off within 7–14 days — do not pick or scrub them.",
            "Mild redness and a warm sensation are normal for 24–48 hours after laser; cool compresses provide relief.",
            "Avoid all active skincare ingredients (retinoids, AHAs, BHAs) for 5–7 days post-procedure.",
            "Moisturise generously with a gentle, fragrance-free moisturiser to support skin barrier recovery.",
            "Results are progressive — most patients see significant improvement after 3–5 sessions spaced 4–6 weeks apart.",
          ],
        },
      ]}
      aftercareTips={[
        "Wear SPF 50+ broad-spectrum sunscreen every single day, including cloudy days and indoors near windows — UV rays penetrate glass.",
        "Wear a wide-brimmed hat and UV-protective clothing when outdoors in Nandyala's sunny climate for additional physical sun protection.",
        "Use prescribed topical lightening agents consistently at night — irregular use significantly reduces efficacy.",
        "Avoid using multiple over-the-counter lightening products simultaneously without medical guidance, as this can cause irritation and worsen pigmentation.",
        "Do not scrub or use harsh exfoliating scrubs on the face — these cause friction-induced PIH in South Indian skin.",
        "Include antioxidant-rich foods in your diet: citrus fruits, tomatoes, leafy greens, and berries support skin health from within.",
        "Keep follow-up appointments with Dr. Sireesha to monitor progress and adjust topical agents as the skin responds.",
        "Be patient — pigmentation treatment is a gradual process; most patients see meaningful results over 3–6 months of consistent treatment.",
      ]}
      benefits={[
        "More even, radiant skin tone that reflects overall skin health.",
        "Reduction in dark spots, sun damage, and post-acne marks.",
        "Treatments are customised for South Indian skin tones to minimise the risk of further pigmentation.",
        "Improved confidence and willingness to go without heavy makeup.",
        "Evidence-based topical regimens provide continued improvement between clinical sessions.",
      ]}
      faqs={[
        {
          q: "What is the best treatment for pigmentation on Indian skin?",
          a: "For Indian skin tones, Q-switched Nd:YAG laser combined with topical agents (tranexamic acid, niacinamide, kojic acid) and daily SPF 50+ sunscreen is one of the most effective and safest approaches. Chemical peels with mandelic or lactic acid are also well-tolerated. Dr. Sireesha tailors the protocol to your specific pigmentation type and skin tone.",
        },
        {
          q: "How long does it take to see results from pigmentation treatment?",
          a: "Topical agents typically show visible improvement in 6–12 weeks with consistent use. Chemical peels show progressive results after a series of 4–6 sessions. Laser treatments may show improvement after each session, with full results visible 4–8 weeks later as the skin sheds pigment. Overall, expect 3–6 months for significant, lasting change.",
        },
        {
          q: "Can pigmentation come back after treatment?",
          a: "Yes, pigmentation can recur if the underlying cause — primarily sun exposure — is not controlled. Strict, lifelong sun protection is essential to maintain results. Some forms, like PIH from acne, will recur if the acne itself is not treated.",
        },
        {
          q: "Is Q-switched laser safe for dark skin?",
          a: "Yes. The Q-switched Nd:YAG laser (1064 nm wavelength) is specifically considered safe for darker Fitzpatrick skin types including South Indian skin. It targets melanin without causing collateral thermal damage. Dr. Sireesha uses appropriate fluence settings and protocols to ensure safety.",
        },
        {
          q: "Does vitamin C cream help with pigmentation?",
          a: "Yes, vitamin C (ascorbic acid) is an evidence-based antioxidant that inhibits tyrosinase, the enzyme responsible for melanin production. It also reduces oxidative stress from UV exposure. For best results, use a stable vitamin C formulation in the morning combined with sunscreen.",
        },
        {
          q: "What causes sudden pigmentation on the face?",
          a: "Sudden pigmentation may be triggered by sun exposure, hormonal changes (pregnancy, starting or stopping contraceptives), new medication, skin allergy or reaction, or a recent inflammatory skin condition. A consultation with Dr. Sireesha is recommended to identify the cause before starting treatment.",
        },
        {
          q: "Is there any downtime with pigmentation treatment?",
          a: "Chemical peels may cause 3–7 days of peeling and mild redness. Q-switched laser can cause temporary darkening of spots and mild swelling for 1–3 days. Many patients return to work the next day. Dr. Sireesha will advise on appropriate downtime based on the specific procedure.",
        },
        {
          q: "Can I use a fairness cream for pigmentation?",
          a: "Over-the-counter fairness creams often contain unlicensed bleaching agents, steroids, or mercury, which can damage the skin and worsen pigmentation long-term. Please avoid these products. Dr. Sireesha prescribes safe, evidence-based topical agents appropriate for your skin type.",
        },
      ]}
      relatedLinks={[
        { label: "Melasma Treatment", href: "/skin-treatments/melasma" },
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
        { label: "Chemical Peels", href: "/skin-treatments/chemical-peels" },
        { label: "Skin Brightening", href: "/skin-treatments/skin-brightening" },
      ]}
      teluguFaqs={[
        {
          q: "మొహంపై నల్లటి మచ్చలు ఎందుకు వస్తాయి?",
          a: "సూర్యరశ్మి, మొటిమల తర్వాత వచ్చే PIH, హార్మోన్ మార్పులు, మరియు చర్మ గాయాల తర్వాత వచ్చే మచ్చలు ప్రధాన కారణాలు. South Indian చర్మంలో మెలనిన్ అధికంగా ఉండటం వలన మచ్చలు తేలికగా వస్తాయి.",
          en: "Sun exposure, post-acne PIH, hormonal changes, and post-injury marks are the main causes. Higher melanin in South Indian skin makes dark spots more common.",
        },
        {
          q: "మొహంపై మచ్చలకు ఏ చికిత్స మంచిది?",
          a: "Q-switched laser, కెమికల్ పీల్స్, మరియు kojic acid/tranexamic acid వంటి topical agents సమ్మేళనం అత్యంత ప్రభావవంతంగా ఉంటుంది. ప్రతిరోజూ SPF 50+ sunscreen వేయడం అత్యంత ముఖ్యం.",
          en: "A combination of Q-switched laser, chemical peels, and topical agents like kojic acid/tranexamic acid is most effective. Daily SPF 50+ sunscreen is essential.",
        },
        {
          q: "Fairness cream వేస్తే మచ్చలు పోతాయా?",
          a: "వద్దు. OTC fairness creams అనేకంటిలో steroids, mercury, లేదా unlicensed bleaching agents ఉంటాయి. ఇవి చర్మాన్ని దీర్ఘకాలంలో నష్టపరుస్తాయి. Dr. Sireesha నిర్ధారించిన safe topical agents మాత్రమే వాడండి.",
          en: "No. Many OTC fairness creams contain steroids, mercury, or unlicensed bleaching agents that damage skin long-term. Only use safe topical agents prescribed by Dr. Sireesha.",
        },
      ]}
      ctaHeading="Concerned About Uneven Skin Tone or Dark Spots in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a personalised assessment and treatment plan."
    />
  );
}
