import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vitiligo Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "విటిలిగో తెల్ల మచ్చలు చికిత్స (Vitiligo treatment) in Nandyala by Dr. Sireesha MD. NB-UVB phototherapy, topical tacrolimus, JAK inhibitors & melanocyte transplantation for depigmentation patches in Andhra Pradesh.",
  keywords: ["విటిలిగో చికిత్స", "vitiligo treatment Nandyala", "తెల్ల మచ్చలు చికిత్స", "white patches skin Nandyala", "చర్మవ్యాధి నిపుణుడు Nandyala", "NB-UVB phototherapy Nandyala"],
  alternates: { canonical: "https://yashvini.in/skin-treatments/vitiligo" },
};

export default function VitiligoPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="vitiligo"
      h1="Vitiligo Treatment in Nandyala"
      subtitle="Vitiligo causes white patches of depigmentation that carry significant emotional and social impact — particularly in South Indian society where skin tone is deeply personal. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers the latest evidence-based treatments to restore pigmentation and improve confidence."
      whatIsTitle="What Is Vitiligo?"
      whatIsContent={[
        "Vitiligo is a chronic autoimmune condition in which the immune system attacks and destroys melanocytes — the cells responsible for producing skin pigment (melanin). The result is well-defined, white or depigmented patches that can appear anywhere on the body, but most commonly affect the face, hands, feet, and areas around body orifices. The condition affects approximately 1–2% of the world's population and occurs across all skin types.",
        "Vitiligo can be classified as non-segmental (symmetrical patches on both sides of the body — the most common form) or segmental (patches on one side of the body, following a dermatomal pattern, typically more stable and faster spreading). Understanding the type is crucial for treatment planning. Associated autoimmune conditions — particularly thyroid disease (Hashimoto's thyroiditis, Graves' disease), type 1 diabetes, and alopecia areata — are more common in vitiligo patients and require screening.",
        "In South Indian society, where skin tone carries considerable personal and matrimonial significance, vitiligo can cause profound psychosocial distress — affecting self-esteem, relationships, and career. Early treatment offers the best chance of achieving repigmentation before melanocyte stem cells are permanently lost. Dr. Sireesha takes both the medical and emotional dimensions of vitiligo seriously, and provides compassionate, expert care.",
      ]}
      causes={[
        { icon: "🦠", cause: "Autoimmune destruction of melanocytes by T-lymphocytes" },
        { icon: "🧬", cause: "Genetic predisposition — family history of vitiligo or other autoimmune disease" },
        { icon: "😰", cause: "Psychological stress triggering or accelerating onset" },
        { icon: "🩹", cause: "Koebner phenomenon — vitiligo developing at sites of skin injury or friction" },
        { icon: "☀️", cause: "Sunburn triggering new patches in predisposed individuals" },
        { icon: "🔬", cause: "Oxidative stress damaging melanocytes" },
        { icon: "🩺", cause: "Associated autoimmune conditions: thyroid disease, type 1 diabetes" },
        { icon: "🧪", cause: "Chemical exposure — contact with phenolic compounds in some occupations" },
      ]}
      symptomsOrTypes={[
        {
          title: "Non-Segmental Vitiligo (Generalised)",
          desc: "The most common form. Symmetrical white patches that tend to progressively enlarge and may involve large areas over time. Commonly affects hands, wrists, knees, elbows, face, and periorificial areas (around the mouth, eyes, and genitalia). May be associated with thyroid disease.",
        },
        {
          title: "Segmental Vitiligo",
          desc: "White patches confined to one side of the body, often following a nerve distribution (dermatomal). Tends to spread rapidly during the initial phase, then stabilise. Less associated with autoimmune conditions. Responds particularly well to melanocyte transplantation once stable.",
        },
        {
          title: "Focal Vitiligo",
          desc: "One or a few isolated white patches in one area, without a segmental distribution. May represent early generalised vitiligo or remain localised.",
        },
        {
          title: "Universal Vitiligo",
          desc: "Near-complete or complete depigmentation of the body surface. Rare. May warrant consideration of complete depigmentation therapy for cosmetic consistency.",
        },
        {
          title: "Mucosal Vitiligo",
          desc: "Depigmentation of the lips, oral mucosa, or genital mucosa. More resistant to repigmentation treatments than skin vitiligo.",
        },
        {
          title: "Acrofacial Vitiligo",
          desc: "Patches around the extremities (fingers, toes) and face. Very common pattern in Indian patients. Fingertip vitiligo (digits) is particularly challenging to repigment.",
        },
      ]}
      treatments={[
        {
          icon: "🔆",
          title: "NB-UVB Phototherapy (First-Line for Widespread Vitiligo)",
          desc: "Narrowband UVB (311 nm) phototherapy is the gold-standard treatment for widespread vitiligo. It works by stimulating residual melanocyte stem cells in hair follicles to proliferate and repigment the skin, while also modulating the autoimmune attack. Sessions are conducted 2–3 times per week. A minimum of 48–72 sessions is usually needed for full repigmentation assessment. Best results are seen on the face and trunk; acral areas (hands, feet) respond less well.",
        },
        {
          icon: "🧴",
          title: "Topical Tacrolimus and Calcineurin Inhibitors",
          desc: "Topical tacrolimus (0.1%) and pimecrolimus are non-steroidal agents that suppress the autoimmune attack on melanocytes. Particularly effective for small patches on the face, neck, and genitals where potent steroids are not appropriate. Can be combined with phototherapy for enhanced results. Used twice daily on affected patches.",
        },
        {
          icon: "💉",
          title: "JAK Inhibitors (Ruxolitinib / Tofacitinib)",
          desc: "A breakthrough in vitiligo treatment. Topical ruxolitinib (1.5% cream) — approved by the FDA for vitiligo — works by blocking JAK-STAT inflammatory signalling that drives melanocyte destruction. Achieves significant facial and body repigmentation in clinical trials. Oral JAK inhibitors (tofacitinib) are also used for extensive vitiligo under careful monitoring. Available at Yashvini Skin & Hair Clinic under Dr. Sireesha's supervision.",
        },
        {
          icon: "🏥",
          title: "Melanocyte Transplantation (Surgical Repigmentation)",
          desc: "For stable vitiligo (no new patches for 1–2 years), surgical options offer excellent results. The mini punch grafting and split-thickness skin grafting techniques, as well as non-cultured epidermal cell suspension transplantation (ReCell), transplant melanocytes from unaffected donor skin to depigmented patches. Best suited for segmental and focal vitiligo. Produces uniform, natural-looking repigmentation.",
        },
        {
          icon: "💊",
          title: "Topical and Oral Corticosteroids",
          desc: "Topical corticosteroids (mid-to-high potency) are used for localised, active vitiligo to halt progression and stimulate repigmentation. Oral corticosteroids (mini-pulse therapy) may be prescribed for rapidly spreading vitiligo to arrest disease activity. Careful monitoring is essential due to long-term side effect risks.",
        },
        {
          icon: "🎨",
          title: "Camouflage and Psychosocial Support",
          desc: "Dermatological-grade camouflage products provide instant cosmetic improvement and are particularly valuable for visible areas (face, hands). Self-tanning preparations can help blend patches on the body. Dr. Sireesha also addresses the psychosocial impact of vitiligo and can refer for psychological support where needed, recognising the significant distress vitiligo causes in South Indian patients.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A thorough clinical examination by Dr. Sireesha to determine vitiligo type, extent (VASI score), activity (stable vs. progressive), and identify any associated autoimmune conditions.",
            "Wood's lamp examination to clearly delineate patches and assess completeness of depigmentation.",
            "Baseline blood tests: thyroid function (TSH, T3, T4, thyroid antibodies), fasting blood glucose, complete blood count.",
            "Photographic documentation of all patches to track treatment response over time.",
            "Manage expectations: repigmentation is achievable but gradual — early treatment gives the best results.",
            "Discuss the emotional impact of vitiligo and available psychological support resources.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Phototherapy sessions attended as scheduled 2–3 times per week; consistency is critical — missing sessions significantly reduces efficacy.",
            "Topical agents applied to patches as prescribed, morning and evening or as directed.",
            "Repigmentation begins as small 'perifollicular' dots of pigment within patches — this is a positive sign of treatment working.",
            "Report any new white patches or rapid spread immediately — treatment adjustment may be needed.",
            "Eye protection (UV-blocking goggles) worn during all phototherapy sessions.",
            "Sun protection applied on non-phototherapy days to prevent burns in depigmented skin.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Repigmented areas should be protected from sun exposure to maintain the new pigmentation.",
            "Continue maintenance topical therapy (tacrolimus or ruxolitinib) as directed to prevent recurrence.",
            "Monitor thyroid function and other associated conditions annually.",
            "New patches may appear despite treatment in active disease — prompt reporting allows timely treatment adjustment.",
            "Stable repigmented areas from surgical procedures need protection from sun and trauma.",
            "Long-term follow-up with Dr. Sireesha every 3–6 months is recommended for ongoing monitoring.",
          ],
        },
      ]}
      aftercareTips={[
        "Protect depigmented skin rigorously with SPF 50+ broad-spectrum sunscreen — white patches completely lack melanin and burn very easily, increasing the risk of skin damage.",
        "Wear protective clothing (full sleeves, hats, UV-protective fabrics) when outdoors in Nandyala's intense sunlight.",
        "Apply topical treatments consistently as prescribed — even patches that look stable should be treated to maintain melanocyte activity.",
        "Manage stress through yoga, regular exercise, adequate sleep, and hobbies — psychological stress is associated with vitiligo activity.",
        "Have your thyroid function checked as advised — uncontrolled thyroid disease can hinder vitiligo treatment response.",
        "Use dermatological camouflage products for social occasions if needed — these are a safe and effective way to improve appearance confidence while awaiting repigmentation.",
        "Avoid friction and trauma to depigmented skin — the Koebner phenomenon can create new patches at sites of repeated rubbing.",
        "Seek early treatment if new patches appear — vitiligo is most treatable in the active, early phase before melanocytes are permanently lost.",
      ]}
      benefits={[
        "Significant repigmentation achievable, especially on the face and trunk, with NB-UVB phototherapy and JAK inhibitors.",
        "The latest JAK inhibitor therapy (topical ruxolitinib) provides a new and highly effective option for facial vitiligo.",
        "Surgical melanocyte transplantation for stable vitiligo can achieve complete and lasting repigmentation.",
        "Early treatment prevents extensive spread and preserves melanocyte stem cell populations for better outcomes.",
        "Comprehensive approach addresses the psychosocial impact of vitiligo alongside the clinical treatment.",
      ]}
      faqs={[
        {
          q: "Is vitiligo contagious?",
          a: "No, vitiligo is absolutely not contagious. It is an autoimmune condition — the body's own immune system attacks its melanocytes. It cannot be transmitted through skin contact, sharing clothes, or any form of casual contact. This is an important message to share with family and community members.",
        },
        {
          q: "Can vitiligo be cured permanently?",
          a: "Vitiligo cannot currently be permanently cured. However, it can be very effectively treated — significant repigmentation is achievable with NB-UVB phototherapy, topical ruxolitinib, and surgical procedures. Early treatment offers the best outcomes. The goal is to achieve and maintain maximum repigmentation while controlling disease activity.",
        },
        {
          q: "Why does vitiligo carry such significant stigma in South India?",
          a: "In South Indian culture, skin tone has deep personal, matrimonial, and social significance. Vitiligo patches — particularly on visible areas — can affect marriage prospects, employment, and social inclusion. Misconceptions about contagiousness persist in many communities. Dr. Sireesha addresses both the medical condition and the psychosocial dimensions, and can provide support resources.",
        },
        {
          q: "What is the best treatment for vitiligo in Nandyala?",
          a: "For widespread vitiligo, NB-UVB phototherapy combined with topical tacrolimus or ruxolitinib (JAK inhibitor) is the first-line evidence-based treatment. For localised, stable vitiligo, surgical melanocyte transplantation offers excellent repigmentation. The best treatment depends on the type, extent, and activity of your vitiligo — Dr. Sireesha will create a personalised plan.",
        },
        {
          q: "How long does vitiligo treatment take?",
          a: "Repigmentation is a gradual process. Phototherapy requires at least 48–72 sessions (4–6 months of 2–3 sessions per week) before results can be fully assessed. Topical ruxolitinib showed significant facial repigmentation at 24 weeks in clinical trials. Results continue to improve with continued treatment. Patience and consistency are essential.",
        },
        {
          q: "Is vitiligo linked to thyroid disease?",
          a: "Yes. There is a well-established association between vitiligo and autoimmune thyroid disease (Hashimoto's thyroiditis and Graves' disease). All vitiligo patients should have thyroid function tests (TSH, free T4, and thyroid antibodies) performed. Uncontrolled thyroid disease can affect the skin and may reduce response to vitiligo treatment.",
        },
        {
          q: "Can vitiligo spread to the whole body?",
          a: "In some patients — particularly those with rapidly progressive non-segmental vitiligo — patches can spread extensively. However, most patients do not develop universal vitiligo. Early treatment with NB-UVB phototherapy and, if needed, oral pulse steroids can arrest rapid progression. Segmental vitiligo typically spreads quickly then stabilises.",
        },
        {
          q: "What is topical ruxolitinib and is it available in India?",
          a: "Ruxolitinib (Opzelura) is a topical JAK inhibitor approved for non-segmental vitiligo in adults and adolescents. It has shown remarkable results, particularly for facial vitiligo, in clinical trials. It is available at Yashvini Skin & Hair Clinic and is prescribed by Dr. Sireesha after an assessment of suitability. This represents one of the most significant advances in vitiligo treatment in decades.",
        },
      ]}
      relatedLinks={[
        { label: "Psoriasis Treatment", href: "/skin-treatments/psoriasis" },
        { label: "Eczema Treatment", href: "/skin-treatments/eczema" },
        { label: "Skin Allergy Treatment", href: "/skin-treatments/skin-allergy" },
        { label: "Pigmentation Treatment", href: "/skin-treatments/pigmentation" },
      ]}
      teluguFaqs={[
        {
          q: "విటిలిగో (తెల్ల మచ్చలు) అంటువ్యాధా?",
          a: "కాదు. విటిలిగో అంటువ్యాధి కాదు. ఇది autoimmune వ్యాధి — శరీరం తానే తన melanocytes ను నష్టపరుచుకుంటుంది. స్పర్శ ద్వారా లేదా ఏ విధంగాను వ్యాపించదు. కుటుంబ సభ్యులకు ఈ విషయం చెప్పడం అవసరం.",
          en: "No. Vitiligo is not contagious. It is an autoimmune disease — the body's own immune system destroys its melanocytes. It cannot spread through touch or any other means. It is important to share this with family members.",
        },
        {
          q: "విటిలిగో చికిత్స Nandyala లో అందుబాటులో ఉందా?",
          a: "అవును. Yashvini Skin & Hair Clinic లో Dr. Sireesha NB-UVB phototherapy, topical ruxolitinib (JAK inhibitor), మరియు surgical melanocyte transplantation వంటి అత్యాధునిక చికిత్సలు అందిస్తారు. ముందుగా చికిత్స మొదలుపెట్టడం మంచి ఫలితాలు ఇస్తుంది.",
          en: "Yes. At Yashvini Skin & Hair Clinic, Dr. Sireesha offers the latest treatments including NB-UVB phototherapy, topical ruxolitinib (JAK inhibitor), and surgical melanocyte transplantation. Early treatment gives better results.",
        },
        {
          q: "విటిలిగో చికిత్సకు ఎంత సమయం పడుతుంది?",
          a: "Phototherapy కనీసం 48–72 sessions (4–6 నెలలు) అవసరం. Topical ruxolitinib 24 వారాలలో facial repigmentation చూపిస్తుంది. ఓర్పు మరియు నిరంతర చికిత్స అవసరం.",
          en: "Phototherapy requires at least 48–72 sessions (4–6 months). Topical ruxolitinib shows facial repigmentation at 24 weeks. Patience and consistent treatment are essential.",
        },
      ]}
      ctaHeading="Seeking Vitiligo Treatment in Nandyala? Start Early for Best Results."
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Vitiligo requires individualised treatment and long-term management. Results vary depending on extent, duration, and location of patches. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a comprehensive evaluation and personalised treatment plan."
    />
  );
}
