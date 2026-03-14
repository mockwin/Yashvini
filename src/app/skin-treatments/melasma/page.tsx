import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melasma Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "మెలాస్మా చికిత్స (Melasma treatment) in Nandyala by Dr. Sireesha MD. మొహంపై నల్లటి మచ్చలు (dark face patches) treated with triple combination cream, tranexamic acid, chemical peels & laser for South Indian skin.",
  keywords: ["మెలాస్మా చికిత్స", "melasma treatment Nandyala", "మొహంపై మచ్చలు చికిత్స", "melasma Nandyala", "చర్మవ్యాధి నిపుణుడు Nandyala"],
  alternates: { canonical: "https://yashvini.in/skin-treatments/melasma" },
};

export default function MelasmaPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="melasma"
      h1="Melasma Treatment in Nandyala"
      subtitle="Melasma is one of the most challenging skin conditions for South Indian women — triggered by hormones and worsened by Andhra Pradesh's intense sun. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers a comprehensive management approach to significantly lighten melasma and prevent its return."
      whatIsTitle="What Is Melasma?"
      whatIsContent={[
        "Melasma is a chronic condition characterised by symmetrical, brown to grey-brown patches of hyperpigmentation that appear primarily on the face — most commonly the cheeks, forehead, upper lip, nose, and chin. It occurs when melanocytes (pigment-producing cells) become overactive and produce excess melanin in specific areas.",
        "Melasma is driven by two main triggers: hormonal stimulation (particularly oestrogen and progesterone) and ultraviolet (UV) radiation. This is why it is so prevalent in women of reproductive age, particularly during pregnancy (when it is called the 'mask of pregnancy' or chloasma), while on oral contraceptives, or during hormonal therapy. Men can also develop melasma, though it is far less common.",
        "South Indian patients are particularly affected due to darker skin tones (Fitzpatrick IV–V), high year-round UV index, and hormonal influences. Melasma is a manageable condition — but it is important to understand that it is not curable. Treatment aims to significantly lighten the patches and keep them under control with ongoing maintenance. Without strict sun protection, melasma will recur regardless of the treatment used.",
      ]}
      causes={[
        { icon: "🤰", cause: "Pregnancy (chloasma / 'mask of pregnancy')" },
        { icon: "💊", cause: "Oral contraceptive pills and hormonal therapies" },
        { icon: "☀️", cause: "UV and visible light exposure (worsens all melasma)" },
        { icon: "🧬", cause: "Genetic predisposition (family history of melasma)" },
        { icon: "🌡️", cause: "Heat exposure — including cooking over an open flame" },
        { icon: "📱", cause: "Blue light from screens and indoor LED lighting" },
        { icon: "🧴", cause: "Phototoxic or irritating cosmetics and skincare products" },
        { icon: "🧪", cause: "Thyroid dysfunction (associated hormonal imbalance)" },
      ]}
      symptomsOrTypes={[
        {
          title: "Epidermal Melasma",
          desc: "Pigmentation confined to the superficial (epidermal) layer of skin. Appears well-defined and brown under Wood's lamp examination. Responds best to topical lightening agents and chemical peels.",
        },
        {
          title: "Dermal Melasma",
          desc: "Pigmentation located deeper in the dermis. Appears grey-blue or ashy. More resistant to topical treatments; laser should be used cautiously as it can trigger worsening in some cases.",
        },
        {
          title: "Mixed Melasma",
          desc: "The most common type — pigmentation exists at both epidermal and dermal levels. A combination treatment approach addressing both layers gives the best results.",
        },
        {
          title: "Centrofacial Pattern",
          desc: "Patches on the forehead, nose, cheeks, upper lip, and chin. The most common distribution in South Indian women.",
        },
        {
          title: "Malar Pattern",
          desc: "Patches confined to the cheeks and nose. Often less extensive than centrofacial melasma.",
        },
        {
          title: "Mandibular Pattern",
          desc: "Patches along the jawline. Frequently associated with hormonal influences and is the most resistant pattern to treat.",
        },
      ]}
      treatments={[
        {
          icon: "🧴",
          title: "Triple Combination Cream (Gold Standard Topical)",
          desc: "The most evidence-based topical treatment for melasma combines three agents: hydroquinone (depigmenting), tretinoin (accelerates cell turnover), and a mild topical corticosteroid (reduces inflammation). Prescribed and monitored by Dr. Sireesha — never purchased over the counter. Used for limited periods to avoid side effects including ochronosis with prolonged hydroquinone use.",
        },
        {
          icon: "🌿",
          title: "Tranexamic Acid (Oral and Topical)",
          desc: "Tranexamic acid is a newer, highly effective option for melasma that works by blocking the interaction between keratinocytes and melanocytes. Oral tranexamic acid (250 mg twice daily) has strong evidence for significant melasma lightening. Topical formulations are also available. It is safe, well-tolerated, and suitable as a long-term maintenance agent.",
        },
        {
          icon: "🧪",
          title: "Chemical Peels",
          desc: "Superficial to medium-depth peels using glycolic acid (20–50%), lactic acid, mandelic acid, or Jessner's solution exfoliate pigmented layers and improve melasma. Must always be preceded and followed by topical pre- and post-treatment regimens. A series of 6–8 sessions is typical. Peels must be performed carefully in darker skin to avoid rebound pigmentation.",
        },
        {
          icon: "💡",
          title: "Q-Switched Nd:YAG Laser (Low Fluence Toning)",
          desc: "Low-fluence Q-switched laser (laser toning) can target dermal and mixed melasma when used carefully. The laser is used at sub-ablative settings to gradually reduce pigment without causing inflammation. Multiple sessions are needed. Dr. Sireesha uses this modality judiciously — aggressive laser settings can paradoxically worsen melasma.",
        },
        {
          icon: "🌿",
          title: "Adjunctive Topical Agents",
          desc: "Kojic acid, niacinamide, azelaic acid, vitamin C, and arbutin are used in conjunction with or as alternatives to hydroquinone. These agents inhibit melanin synthesis through different mechanisms and are incorporated into maintenance regimens to sustain results.",
        },
        {
          icon: "🛡️",
          title: "Strict Photoprotection (Non-Negotiable)",
          desc: "Broad-spectrum sunscreen SPF 50+ with PA+++ rating (covering UVA, UVB, and ideally visible light/iron oxide-containing formulas) must be applied every morning and reapplied every 2 hours. Without this, no treatment will hold. Physical sunscreens (zinc oxide, titanium dioxide) are particularly effective for melasma patients.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A thorough consultation with Dr. Sireesha, including Wood's lamp examination to determine melasma depth (epidermal vs. dermal vs. mixed).",
            "Discuss hormonal status — pregnancy, contraceptive use, or plans to conceive affect the treatment plan significantly.",
            "Begin SPF 50+ broad-spectrum sunscreen immediately — even before starting any other treatment.",
            "Start a preparatory regimen (usually a gentle topical brightener + sunscreen) 4 weeks before any peel or laser procedure to prime the skin.",
            "Disclose all medications, supplements, and over-the-counter skin products currently in use.",
            "Set realistic expectations: melasma can be significantly lightened and controlled, but it requires ongoing management.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Topical regimens are self-applied at home as prescribed — consistency is the most important factor for success.",
            "Chemical peel sessions are performed in clinic every 2–4 weeks; mild tingling during application is normal.",
            "Laser toning sessions are 20–30 minutes; treated areas may appear slightly red for a few hours afterwards.",
            "Oral tranexamic acid is taken daily as prescribed; Dr. Sireesha monitors response and adjusts dose as needed.",
            "Progress photographs are taken at each visit to objectively assess improvement.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Sunscreen application must be maintained religiously — every day, year-round, without exception.",
            "After a course of triple combination cream, a maintenance regimen of tranexamic acid, niacinamide, and kojic acid continues to prevent relapse.",
            "Avoid heat-generating activities during peak treatment periods — even cooking over a gas stove can worsen melasma.",
            "Do not discontinue treatment abruptly; taper off prescription agents under Dr. Sireesha's supervision.",
            "Expect some degree of fluctuation with seasons and hormonal changes — summer typically worsens melasma.",
            "Long-term maintenance visits every 3–6 months allow Dr. Sireesha to adjust the regimen as needed.",
          ],
        },
      ]}
      aftercareTips={[
        "Apply SPF 50+ broad-spectrum sunscreen with PA+++ (preferably containing iron oxides to block visible light) every morning without fail — this is the most important step in melasma management.",
        "Reapply sunscreen every 2 hours when outdoors, and after sweating or swimming.",
        "Wear a wide-brimmed hat and sunglasses when outdoors, especially between 10 am and 4 pm in Nandyala's climate.",
        "Use topical agents consistently at night as prescribed — skipping applications significantly reduces effectiveness.",
        "Avoid known heat triggers: steam rooms, saunas, very hot showers, and prolonged cooking over open flames.",
        "If you are on oral contraceptives and have melasma, discuss alternative contraceptive options with your gynaecologist, as hormonal changes may help the melasma.",
        "Monitor thyroid function as advised — thyroid imbalances are associated with melasma and can hinder treatment response.",
        "Do not use any whitening products, bleaching creams, or steroid creams purchased without a prescription — these often contain harmful unlicensed ingredients.",
      ]}
      benefits={[
        "Significant lightening of melasma patches with a structured, evidence-based treatment plan.",
        "Improved skin confidence — especially meaningful in the South Indian social context where skin tone carries significant personal and social weight.",
        "Safe treatment protocols designed for Fitzpatrick IV–V skin types reduce the risk of post-treatment pigmentation.",
        "Long-term maintenance strategies that help keep melasma under control even after the active treatment course.",
        "Holistic management including hormonal and lifestyle factors for more durable results.",
      ]}
      faqs={[
        {
          q: "Can melasma be permanently cured?",
          a: "Melasma cannot be permanently cured because it is a chronic, relapsing condition driven by ongoing hormonal and UV stimulation. However, it can be very effectively managed. With the right treatment, most patients achieve significant lightening. Maintenance with sun protection and topical agents is needed to prevent recurrence.",
        },
        {
          q: "Why is melasma so common in South Indian women?",
          a: "South Indian women are particularly susceptible due to a combination of darker skin tones (higher baseline melanocyte activity), year-round high UV index, hormonal factors (common use of oral contraceptives, multiple pregnancies), and heat exposure. All these factors together make melasma very prevalent and more challenging to treat in this population.",
        },
        {
          q: "Is laser safe for melasma?",
          a: "Laser must be used very carefully for melasma. Aggressive or high-fluence laser can trigger inflammation and paradoxically worsen melasma — a phenomenon known as post-inflammatory hyperpigmentation. Dr. Sireesha uses low-fluence Q-switched laser toning when appropriate, always combined with strict topical and sun protection protocols.",
        },
        {
          q: "Will melasma go away after pregnancy?",
          a: "Melasma triggered by pregnancy (chloasma) often fades partially or fully after delivery and the return of normal hormonal levels — especially if you breastfeed, which maintains elevated prolactin. However, in many women it does not fully resolve, and it can be worsened by subsequent sun exposure. Treatment can be initiated safely after delivery and breastfeeding.",
        },
        {
          q: "Does sunscreen alone treat melasma?",
          a: "Sunscreen alone is not sufficient to treat existing melasma, but it is absolutely essential to prevent worsening and to allow other treatments to work. Without daily SPF 50+ sunscreen, any improvement from topical agents or procedures will be quickly reversed.",
        },
        {
          q: "How long does melasma treatment take to show results?",
          a: "With a consistent topical regimen (triple combination cream or equivalent), most patients see visible lightening within 8–12 weeks. Chemical peels and laser toning show progressive improvement over a series of sessions. Full results are typically appreciated at 4–6 months. Maintenance is lifelong.",
        },
        {
          q: "Is it safe to use hydroquinone for melasma?",
          a: "Hydroquinone is a highly effective, evidence-based depigmenting agent when used under medical supervision. It should be used for limited periods (typically no longer than 3–6 months continuously) and is not suitable for pregnant or breastfeeding women. Dr. Sireesha monitors for any side effects and adjusts the regimen accordingly.",
        },
        {
          q: "Can melasma affect men as well?",
          a: "Yes, though it is far less common. When men develop melasma, it is often associated with sun exposure, genetic predisposition, and sometimes endocrine imbalances. Treatment principles are the same as for women, with a focus on sun protection and topical lightening agents.",
        },
      ]}
      relatedLinks={[
        { label: "Pigmentation Treatment", href: "/skin-treatments/pigmentation" },
        { label: "Chemical Peels", href: "/skin-treatments/chemical-peels" },
        { label: "Skin Brightening", href: "/skin-treatments/skin-brightening" },
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
      ]}
      ctaHeading="Struggling with Melasma in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Melasma is a chronic condition requiring long-term management. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a personalised evaluation and treatment plan."
      teluguFaqs={[
        {
          q: "మొహంపై నల్లటి మచ్చలు ఎందుకు వస్తాయి?",
          a: "మొహంపై చీకటి మచ్చలు మెలాస్మా వల్ల రావచ్చు. హార్మోన్ మార్పులు (గర్భం, గర్భ నిరోధక మాత్రలు), సూర్యరశ్మి బహిర్గతం, మరియు జన్యు కారకాలు ప్రధాన కారణాలు.",
          en: "Dark patches on the face can be due to melasma. Hormonal changes (pregnancy, birth control pills), sun exposure, and genetic factors are the main causes.",
        },
        {
          q: "మెలాస్మాకు ఫెయిర్నెస్ క్రీమ్ సహాయపడుతుందా?",
          a: "కాదు. అనేక ఫెయిర్నెస్ క్రీమ్ లలో స్టెరాయిడ్లు ఉంటాయి, ఇవి మొదట్లో మచ్చలు తగ్గినట్టు కనిపించినా, తర్వాత మరింత తీవ్రంగా మారతాయి. వైద్యపరంగా నిర్దేశించిన ట్రీట్మెంట్ మాత్రమే సురక్షితంగా మరియు ప్రభావవంతంగా ఉంటుంది.",
          en: "No. Many fairness creams contain steroids that may initially seem to reduce patches but worsen them over time. Only medically prescribed treatment is safe and effective.",
        },
        {
          q: "మెలాస్మా చికిత్స ఎంత కాలం పడుతుంది?",
          a: "మెలాస్మా చికిత్స ఒక నెల పని కాదు. 3–6 నెలల నిరంతర చికిత్స, మరియు సూర్యరశ్మి నుంచి రక్షణ అవసరం. మెలాస్మా మళ్ళీ వచ్చే అవకాశం ఉంది కాబట్టి నిర్వహణ చికిత్స అవసరమవుతుంది.",
          en: "Melasma treatment is not a one-month affair. 3–6 months of continuous treatment and sun protection are needed. Since melasma can recur, maintenance treatment is required.",
        },
      ]}
    />
  );
}
