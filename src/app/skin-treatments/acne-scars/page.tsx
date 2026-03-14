import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acne Scar Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "Advanced acne scar treatment in Nandyala by Dr. Sireesha MD. Microneedling, fractional laser, TCA CROSS & chemical peels for ice-pick, boxcar & rolling scars.",
  alternates: { canonical: "https://yashvini.in/skin-treatments/acne-scars" },
};

export default function AcneScarsPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="acne-scars"
      h1="Acne Scar Treatment in Nandyala"
      subtitle="Acne scars can linger long after breakouts resolve, affecting your confidence and skin texture. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers evidence-based treatments tailored to your scar type and skin tone."
      whatIsTitle="What Are Acne Scars?"
      whatIsContent={[
        "Acne scars are permanent textural changes and indentations left on the skin after severe or repeated acne lesions heal. When a pimple, cyst, or nodule damages the deeper layers of skin, the body attempts repair — but this repair process is often imperfect, leaving behind depressions, raised tissue, or discolouration.",
        "There are several distinct scar types. Ice-pick scars are narrow, deep pits that look as though the skin was pierced with a sharp instrument. Boxcar scars have broad, well-defined edges with a box-like depression. Rolling scars create a wave-like, undulating texture caused by fibrous bands tethering the skin. Hypertrophic and keloid scars are raised, thickened areas of excess collagen more common on the chest, back, and jawline.",
        "Post-inflammatory hyperpigmentation (PIH) — the dark marks left after a pimple — is technically not a scar but is frequently treated alongside true scars. It is particularly prominent in Fitzpatrick skin types IV–VI, which are common in South Indian patients. A correct diagnosis of scar type is essential before choosing treatment, and Dr. Sireesha performs a thorough assessment at every consultation.",
      ]}
      causes={[
        { icon: "🦠", cause: "Severe inflammatory acne (cysts and nodules)" },
        { icon: "✋", cause: "Picking, squeezing, or popping pimples" },
        { icon: "⏳", cause: "Delayed or inadequate acne treatment" },
        { icon: "🧬", cause: "Genetic predisposition to abnormal wound healing" },
        { icon: "🩸", cause: "Deep dermal damage from acne lesions" },
        { icon: "☀️", cause: "Sun exposure darkening post-acne marks" },
        { icon: "🧴", cause: "Use of harsh or comedogenic skincare products" },
        { icon: "🍽️", cause: "High glycaemic diet aggravating acne severity" },
      ]}
      symptomsOrTypes={[
        {
          title: "Ice-Pick Scars",
          desc: "Deep, narrow pits extending into the dermis. They are the most difficult to treat and are best addressed with TCA CROSS (chemical reconstruction of skin scars) technique.",
        },
        {
          title: "Boxcar Scars",
          desc: "Broad, round or oval depressions with sharp, defined vertical edges. Respond well to fractional laser resurfacing and subcision.",
        },
        {
          title: "Rolling Scars",
          desc: "Shallow, wide depressions with sloping edges giving a wave-like appearance. Caused by fibrous tethering beneath the skin; subcision and microneedling are highly effective.",
        },
        {
          title: "Hypertrophic Scars",
          desc: "Raised, firm scars that remain within the original wound boundary. Treated with intralesional corticosteroid injections, silicone sheets, and fractional laser.",
        },
        {
          title: "Keloid Scars",
          desc: "Raised scars that grow beyond the original wound area. More common in darker skin tones. Require combination therapy including steroid injections and careful laser use.",
        },
        {
          title: "Post-Inflammatory Hyperpigmentation",
          desc: "Flat, dark marks remaining after acne. Not true scars but very common in South Indian skin. Respond to chemical peels, topical brighteners, and sun protection.",
        },
      ]}
      treatments={[
        {
          icon: "🪡",
          title: "Microneedling (Collagen Induction Therapy)",
          desc: "Fine needles create controlled micro-injuries that stimulate collagen and elastin production. Highly effective for rolling and boxcar scars. Safe for all skin tones including darker Indian skin. Multiple sessions spaced 4–6 weeks apart deliver progressive improvement.",
        },
        {
          icon: "💡",
          title: "Fractional Laser Resurfacing",
          desc: "Fractional CO2 or erbium laser targets microscopic columns of skin, prompting new collagen formation and skin remodelling. Effective for moderate to deep atrophic scars. Dr. Sireesha uses settings appropriate for South Indian skin to minimise PIH risk.",
        },
        {
          icon: "🧪",
          title: "TCA CROSS for Ice-Pick Scars",
          desc: "High-concentration trichloroacetic acid (TCA) is precisely applied to the base of ice-pick scars using a sharp applicator. The controlled chemical injury stimulates collagen to fill the scar from within — this is one of the most targeted and effective treatments for this scar subtype.",
        },
        {
          icon: "🔪",
          title: "Subcision",
          desc: "A minimally invasive procedure in which a needle is inserted beneath rolling and tethered scars to cut the fibrous bands pulling the skin down. This releases the depression and promotes natural collagen deposition. Often combined with filler or microneedling for optimal results.",
        },
        {
          icon: "🧴",
          title: "Chemical Peels",
          desc: "Glycolic acid, salicylic acid, Jessner's, and TCA peels exfoliate damaged skin layers, improve skin texture, and reduce post-acne pigmentation. Peels are tailored to the patient's skin type and scar severity.",
        },
        {
          icon: "💉",
          title: "Dermal Fillers",
          desc: "Hyaluronic acid fillers are injected beneath depressed scars to immediately elevate them, providing instant improvement in skin texture. Best for isolated, well-defined scars. Results are temporary but can be combined with other modalities for longer-lasting correction.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "Attend a full consultation with Dr. Sireesha for scar type assessment and skin tone evaluation.",
            "Disclose all medications, including isotretinoin (must be stopped 6–12 months before laser/microneedling).",
            "Begin a pre-treatment skincare regimen with sunscreen SPF 50+ for at least 2–4 weeks.",
            "If PIH is a concern, a preparatory bleaching cream may be prescribed 4 weeks before procedures.",
            "Avoid waxing, threading near the treatment area, and any active breakouts should be controlled first.",
            "Stay well hydrated and avoid alcohol or blood-thinning supplements 48 hours before the procedure.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "A topical anaesthetic cream is applied 30–45 minutes before procedures to ensure comfort.",
            "Treatment duration varies: microneedling 30–45 min, fractional laser 20–30 min, TCA CROSS 15–20 min.",
            "You may feel warmth, tingling, or mild pressure — severe pain is not expected.",
            "Protective eyewear is provided for laser procedures.",
            "A cooling device or ice pack is used immediately after laser to reduce heat and discomfort.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Redness, mild swelling, and pinpoint bleeding are normal for 24–72 hours after microneedling or laser.",
            "Apply prescribed healing ointment or moisturiser as directed — do not pick or scratch the skin.",
            "Strict sun avoidance is essential for at least 2 weeks; use SPF 50+ every 2–3 hours outdoors.",
            "Avoid makeup for 24–48 hours post-procedure; gentle cleansing only with lukewarm water.",
            "Expect peeling or flaking at days 3–7 after chemical peels — do not forcibly remove peeling skin.",
            "Results improve progressively over 3–6 months as collagen remodels; multiple sessions are usually needed.",
          ],
        },
      ]}
      aftercareTips={[
        "Apply SPF 50+ broad-spectrum sunscreen every morning and reapply every 2–3 hours when outdoors — UV exposure is the single biggest factor that worsens acne scars and PIH.",
        "Keep the skin well-moisturised with a fragrance-free, non-comedogenic moisturiser to support the healing barrier.",
        "Do not use active ingredients (retinoids, AHAs, BHAs, vitamin C) for at least 5–7 days after any procedure unless specifically instructed by Dr. Sireesha.",
        "Drink at least 2–3 litres of water daily to support skin healing and collagen production.",
        "Avoid strenuous exercise, steam rooms, and direct heat for 48 hours post-treatment to prevent excessive inflammation.",
        "Sleep with your head slightly elevated for the first 2 nights to reduce swelling after deeper procedures.",
        "Do not attempt to extract, squeeze, or touch any crust or scab that forms after treatment — let it fall off naturally.",
        "Attend all follow-up appointments so Dr. Sireesha can monitor your progress and adjust the treatment plan.",
      ]}
      benefits={[
        "Visible improvement in skin texture and reduction in scar depth after a course of treatments.",
        "Boosted self-confidence with smoother, more even-toned skin.",
        "Treatments are tailored to Indian skin tones to minimise the risk of post-inflammatory hyperpigmentation.",
        "Combination protocols address multiple scar types simultaneously for comprehensive results.",
        "Minimally invasive options available with little to no downtime for busy patients.",
      ]}
      faqs={[
        {
          q: "Can acne scars be completely removed?",
          a: "Complete removal is rarely possible, but significant improvement — often 50–80% reduction in scar depth and visibility — is achievable with the right combination of treatments. Ice-pick scars are the most challenging; TCA CROSS gives excellent results over multiple sessions. Dr. Sireesha will give you a realistic outcome assessment at your consultation.",
        },
        {
          q: "How many sessions of microneedling do I need for acne scars?",
          a: "Most patients require 4–6 sessions spaced 4–6 weeks apart for meaningful improvement. The exact number depends on scar depth and severity. Results continue to improve for up to 6 months after the final session as collagen matures.",
        },
        {
          q: "Is acne scar treatment safe for dark Indian skin?",
          a: "Yes, with the right technique and settings. Dr. Sireesha is experienced in treating Fitzpatrick skin types IV–VI (common in South India). Microneedling and TCA CROSS are particularly safe for darker skin. Fractional laser settings are carefully adjusted to prevent hyperpigmentation.",
        },
        {
          q: "What is the difference between acne scars and dark spots?",
          a: "Dark spots (post-inflammatory hyperpigmentation) are flat areas of discolouration — not true scars. They fade with time, sun protection, and topical agents. True acne scars involve a change in skin texture or structure and require procedural treatments.",
        },
        {
          q: "How much does acne scar treatment cost in Nandyala?",
          a: "Treatment cost depends on the type and number of sessions required. Dr. Sireesha provides a personalised treatment plan with transparent pricing at your initial consultation at Yashvini Skin & Hair Clinic, Nandyala.",
        },
        {
          q: "Can I treat acne scars at home?",
          a: "Over-the-counter retinoids, niacinamide, and AHAs can mildly improve superficial marks, but deep atrophic scars require clinical procedures. Home treatments also carry risks of irritation and PIH if used incorrectly on South Indian skin.",
        },
        {
          q: "Is there any downtime after acne scar treatment?",
          a: "Downtime varies by procedure. Microneedling causes redness for 24–48 hours. Fractional CO2 laser may result in 3–5 days of downtime with peeling and swelling. Chemical peels involve 5–7 days of peeling. TCA CROSS causes small scabs for about a week.",
        },
        {
          q: "Should I stop acne treatment before getting scar treatment?",
          a: "Active acne must be controlled before treating scars, or new lesions will create new scars. If you are on isotretinoin, you must complete the course and wait 6–12 months before undergoing laser treatments. Dr. Sireesha will sequence your treatment plan appropriately.",
        },
      ]}
      relatedLinks={[
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
        { label: "Chemical Peels", href: "/skin-treatments/chemical-peels" },
        { label: "Microneedling", href: "/skin-treatments/microneedling" },
        { label: "Skin Brightening", href: "/skin-treatments/skin-brightening" },
        { label: "Scar Treatment", href: "/skin-treatments/scar-treatment" },
      ]}
      ctaHeading="Struggling with Acne Scars in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a personalised assessment and treatment plan."
    />
  );
}
