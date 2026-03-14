import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alopecia Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "Expert alopecia treatment in Nandyala by Dr. Sireesha, MD Dermatology. Treating alopecia areata (autoimmune patchy hair loss) and androgenetic alopecia with intralesional steroids, minoxidil, PRP, and more.",
  alternates: { canonical: "https://yashvini.in/hair-treatments/alopecia" },
};

export default function AlopeciaPage() {
  return (
    <TreatmentPage
      badge="Hair Treatment"
      illustration="alopecia"
      h1="Alopecia Treatment in Nandyala"
      subtitle="Alopecia encompasses several distinct forms of hair loss, each requiring a different treatment strategy. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, provides accurate diagnosis and personalised management for alopecia areata, androgenetic alopecia, and other hair loss conditions."
      whatIsTitle="Understanding Alopecia"
      whatIsContent={[
        "Alopecia is a broad medical term for hair loss, and it is important to understand that not all alopecia is the same. The two most common types seen in clinical practice are alopecia areata — an autoimmune condition characterised by sudden, well-defined round or oval patches of hair loss — and androgenetic alopecia, the genetic pattern of hair loss driven by the hormone DHT (dihydrotestosterone). These two conditions have different causes, presentations, and treatment approaches, and accurate diagnosis is the critical first step.",
        "Alopecia areata occurs when the immune system mistakenly attacks healthy hair follicles, causing hair to fall out in localised patches on the scalp or other hair-bearing areas. It can progress to alopecia totalis (complete scalp hair loss) or alopecia universalis (loss of all body hair) in a minority of cases. While the condition is not painful or infectious, the psychosocial impact — particularly on self-image, confidence, and mental wellbeing — can be significant and deserves attention as part of comprehensive care.",
        "Androgenetic alopecia, commonly known as male or female pattern baldness, is the most prevalent cause of hair loss worldwide. In men, it follows a predictable pattern of temporal recession and crown thinning (Norwood scale). In women, it typically presents as a widening of the central part with preservation of the frontal hairline (Ludwig scale). Both are driven by genetic sensitivity of follicles to DHT, causing progressive miniaturisation of follicles over years. Treatment for androgenetic alopecia is medical and procedural, aimed at slowing progression and stimulating remaining follicles, rather than achieving a cure.",
      ]}
      causes={[
        { icon: "🧬", cause: "Genetic predisposition (androgenetic alopecia)" },
        { icon: "🛡️", cause: "Autoimmune attack on follicles (alopecia areata)" },
        { icon: "⚗️", cause: "DHT-driven follicle miniaturisation" },
        { icon: "😓", cause: "Chronic psychological stress triggering or worsening alopecia areata" },
        { icon: "🦠", cause: "Viral illness or vaccine occasionally triggering alopecia areata flare" },
        { icon: "👨‍👩‍👧", cause: "Family history of baldness or patchy hair loss" },
        { icon: "🩺", cause: "Other autoimmune conditions (thyroid disease, vitiligo) co-existing with alopecia areata" },
        { icon: "🌿", cause: "Scalp microbiome imbalance — a contributing factor under research" },
      ]}
      symptomsOrTypes={[
        {
          title: "Alopecia Areata (Patchy)",
          desc: "Sudden appearance of one or more smooth, round bald patches on the scalp, beard, eyebrows, or eyelashes. The patches are typically skin-coloured and the surrounding skin looks normal. Exclamation-mark hairs (short, tapered hairs at the patch margin) are a characteristic finding on dermoscopy.",
        },
        {
          title: "Alopecia Totalis",
          desc: "Complete loss of scalp hair. A more advanced form of alopecia areata that can develop from multiple expanding patches. Nails may show pitting or ridging. Requires more intensive treatment and carries a variable prognosis.",
        },
        {
          title: "Alopecia Universalis",
          desc: "Loss of all scalp and body hair, including eyebrows and eyelashes. The most severe form of alopecia areata. Treatment with JAK inhibitors (baricitinib) has shown significant promise in clinical trials and is now an approved option in India.",
        },
        {
          title: "Androgenetic Alopecia — Male Pattern",
          desc: "Progressive thinning of hair at the temples and crown following the Norwood-Hamilton classification (Stages I–VII). Hair in these zones gradually miniaturises over years due to DHT sensitivity. Frontal hairline recedes and crown vertex thins.",
        },
        {
          title: "Androgenetic Alopecia — Female Pattern",
          desc: "Diffuse thinning over the crown with a widening central part, classified by the Ludwig scale (Grades I–III). The frontal hairline is usually preserved. Often worsened by hormonal changes, stress, and iron deficiency. PCOS is a common contributing factor in Indian women.",
        },
        {
          title: "Traction Alopecia",
          desc: "Hair loss along the hairline caused by chronic tension from tight hairstyles (tight braids, ponytails, extensions). Common in women. Early intervention with lifestyle change can reverse the loss; long-standing traction can cause permanent follicle damage.",
        },
      ]}
      treatments={[
        {
          icon: "💉",
          title: "Intralesional Corticosteroids (Alopecia Areata)",
          desc: "The gold-standard first-line treatment for patchy alopecia areata. Triamcinolone acetonide is injected directly into the bald patch, suppressing local immune activity. Sessions are repeated every 4–6 weeks. Regrowth is typically seen within 4–8 weeks in responsive patches.",
        },
        {
          icon: "🧴",
          title: "Topical Minoxidil",
          desc: "Applied to the scalp once or twice daily to stimulate hair growth and prolong the anagen phase. Used in both alopecia areata (off-label) and androgenetic alopecia. Available in 2% (standard for women) and 5% (standard for men) formulations.",
        },
        {
          icon: "💊",
          title: "Finasteride / Dutasteride (Androgenetic)",
          desc: "Oral 5-alpha reductase inhibitors that reduce DHT levels systemically. Finasteride (1 mg daily) is first-line for male androgenetic alopecia. Dutasteride is a stronger alternative. Not used in women of childbearing age due to teratogenic risk.",
        },
        {
          icon: "🧪",
          title: "DPCP Immunotherapy (Alopecia Areata)",
          desc: "Diphencyprone (DPCP) applied to the scalp causes a deliberate contact allergy that diverts the immune response away from follicles. Effective in extensive or refractory alopecia areata. Applied weekly with gradually increasing concentrations under clinic supervision.",
        },
        {
          icon: "💊",
          title: "JAK Inhibitors (Baricitinib)",
          desc: "Baricitinib (Olumiant) is an oral JAK1/2 inhibitor approved for severe alopecia areata. It works by blocking the immune signalling pathway that attacks hair follicles. Clinical trials showed significant regrowth in patients with extensive alopecia areata and totalis. Requires monitoring for side effects.",
        },
        {
          icon: "🩸",
          title: "PRP Therapy",
          desc: "Platelet-Rich Plasma injections can be used as an adjunct in both alopecia areata and androgenetic alopecia. Growth factors stimulate follicle activity and may accelerate regrowth alongside primary treatments.",
        },
        {
          icon: "🧬",
          title: "Hair Transplant (Androgenetic)",
          desc: "For patients with stable androgenetic alopecia and adequate donor hair, surgical hair transplantation (FUE or FUT) is a definitive option for restoring hair in balding areas. Dr. Sireesha can advise on candidacy and referral when appropriate.",
        },
        {
          icon: "🩺",
          title: "Psychosocial Support & Counselling",
          desc: "The emotional burden of alopecia — particularly alopecia areata with sudden visible hair loss — can be significant. Addressing anxiety and self-esteem issues is considered an integral part of holistic alopecia care at Yashvini Clinic.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "Dermoscopy and clinical examination to identify the type of alopecia accurately",
            "Blood tests: CBC, thyroid function, ANA, ferritin, Vitamin D, zinc",
            "Photograph thinning/patch areas as a baseline for progress tracking",
            "Discuss treatment goals, timeline, and realistic outcomes with Dr. Sireesha",
            "Disclose all current medications including supplements and herbal products",
          ],
        },
        {
          phase: "During Treatment",
          icon: "💊",
          points: [
            "Intralesional injections are delivered every 4–6 weeks in-clinic",
            "Topical minoxidil and other medications are used at home as prescribed",
            "PRP sessions (if included) are scheduled 4 weeks apart for initial course",
            "Regular review appointments to assess response and adjust treatment",
            "Dermoscopy at follow-ups to evaluate follicle activity beneath the surface",
          ],
        },
        {
          phase: "After & Maintenance",
          icon: "🌱",
          points: [
            "Androgenetic alopecia requires long-term maintenance medication; stopping treatment leads to gradual reversal",
            "Alopecia areata may remit spontaneously; however, recurrence is common and monitoring is advised",
            "Maintain nutritional support: protein, iron, zinc, Vitamin D are key for follicle health",
            "Sun protection for scalp areas with hair loss, especially in Andhra Pradesh's warm climate",
            "Manage stress — a documented trigger for alopecia areata flares",
          ],
        },
      ]}
      aftercareTips={[
        "Apply topical treatments (minoxidil, prescribed lotions) exactly as directed — consistency is more important than frequency of application.",
        "Do not scratch or rub bald patches vigorously; the skin overlying alopecia areata patches is sensitive.",
        "Wear a light breathable cotton scarf or cap to protect the scalp from harsh sun in Nandyala's climate; UV exposure can worsen scalp inflammation.",
        "Avoid tight hairstyles and heat tools (blow dryers, straighteners) which add mechanical and thermal stress to already fragile follicles.",
        "Maintain iron stores with a diet rich in leafy greens, legumes, and lean meat — iron deficiency is a common co-factor for hair loss in South Indian women.",
        "Manage stress through yoga, walking, or meditation; chronic stress is a well-documented trigger for alopecia areata flares.",
        "Do not abruptly stop prescribed oral medications (finasteride, baricitinib) without consulting Dr. Sireesha — sudden discontinuation can accelerate shedding.",
        "Keep all follow-up appointments; treatment response is evaluated and adjusted at each visit to optimise outcomes.",
      ]}
      benefits={[
        "Accurate diagnosis distinguishes alopecia areata from androgenetic alopecia — guiding the right treatment",
        "Intralesional steroids can produce regrowth in patchy alopecia areata within 4–8 weeks",
        "Combination approach (medical + procedural + nutritional) delivers better outcomes than single treatments",
        "JAK inhibitors now offer a new option for severe alopecia areata that was previously difficult to treat",
        "Psychosocial wellbeing is addressed alongside physical hair restoration",
        "Treatments can be tailored for men, women, and adolescents based on age and health profile",
      ]}
      faqs={[
        {
          q: "Can alopecia areata be cured permanently?",
          a: "Alopecia areata is an autoimmune condition with a variable course. Many patients experience complete regrowth after treatment, but the condition can recur — sometimes years later. It is not considered permanently curable in the traditional sense, though long periods of remission are achievable. JAK inhibitors represent the most significant recent advance for severe or refractory cases.",
        },
        {
          q: "Is alopecia areata contagious?",
          a: "No. Alopecia areata is an autoimmune condition — it is not caused by any infection and cannot be transmitted to another person through contact. It arises when the immune system incorrectly targets the body's own hair follicles.",
        },
        {
          q: "What is the difference between alopecia areata and androgenetic alopecia?",
          a: "Alopecia areata is autoimmune and causes sudden, patchy hair loss — it can affect people of any age and can resolve with treatment. Androgenetic alopecia is genetic and hormonal, causing gradual, patterned thinning in men and women. They require very different treatments: steroids and immunotherapy for areata versus minoxidil, finasteride, and PRP for androgenetic.",
        },
        {
          q: "How effective are intralesional steroid injections for alopecia areata?",
          a: "Intralesional triamcinolone is highly effective for localised patchy alopecia areata, with response rates of 60–80% in suitable patients. Regrowth typically appears within 4–8 weeks of the first injection. The treatment is not effective for extensive scalp involvement (alopecia totalis or universalis), where systemic therapies like JAK inhibitors may be needed.",
        },
        {
          q: "Can women take finasteride for hair loss?",
          a: "Finasteride is generally not prescribed to women of childbearing age due to the risk of feminisation of a male foetus if pregnancy occurs. Post-menopausal women may be considered for finasteride in some cases. Dutasteride carries the same restriction. Women with androgenetic alopecia are typically treated with topical minoxidil, spironolactone (an anti-androgen), and PRP.",
        },
        {
          q: "What are JAK inhibitors and are they available for alopecia in India?",
          a: "JAK (Janus kinase) inhibitors are a class of oral medications that block immune signalling pathways responsible for attacking hair follicles in alopecia areata. Baricitinib (brand name Olumiant) has been approved specifically for severe alopecia areata. It is available in India and can be prescribed by a dermatologist following assessment. Regular blood monitoring is required.",
        },
        {
          q: "Will hair grow back on its own with alopecia areata?",
          a: "Mild, single-patch alopecia areata can spontaneously resolve in some patients, particularly children. However, waiting without treatment risks expansion of patches and delays recovery. Treatment significantly improves the speed and completeness of regrowth. Extensive or long-standing patches are less likely to resolve without intervention.",
        },
        {
          q: "Is hair transplant suitable for alopecia areata?",
          a: "Hair transplant is generally not recommended for alopecia areata because the transplanted follicles can also be attacked by the immune system, leading to loss of the transplanted hair. Transplant is more appropriate for stable androgenetic alopecia where the immune system is not the underlying cause. Dr. Sireesha will assess candidacy carefully before recommending surgical options.",
        },
      ]}
      relatedLinks={[
        { label: "Hair Fall Treatment", href: "/hair-treatments/hair-fall-treatment" },
        { label: "PRP Hair Therapy", href: "/hair-treatments/prp-therapy" },
        { label: "Hair Thinning Treatment", href: "/hair-treatments/hair-thinning" },
        { label: "Dandruff Treatment", href: "/hair-treatments/dandruff" },
      ]}
      ctaHeading="Experiencing Hair Loss? Get an Expert Diagnosis in Nandyala"
      disclaimer="Alopecia treatment outcomes vary based on the type, extent, and duration of hair loss as well as individual patient factors. This content is for educational purposes and does not replace a personalised clinical consultation with Dr. Sireesha, MD Dermatology, Yashvini Skin & Hair Clinic, Nandyala."
    />
  );
}
