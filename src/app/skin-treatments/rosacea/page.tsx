import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rosacea Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "Rosacea treatment in Nandyala by Dr. Sireesha MD. Topical metronidazole, azelaic acid, ivermectin, oral doxycycline & IPL laser for facial redness and flushing.",
  alternates: { canonical: "https://yashvini.in/skin-treatments/rosacea" },
};

export default function RosaceaPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="rosacea"
      h1="Rosacea Treatment in Nandyala"
      subtitle="Rosacea is a chronic facial skin condition causing persistent redness, flushing, and visible blood vessels — often mistaken for acne or sunburn. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, provides accurate diagnosis and effective management for all subtypes of rosacea."
      whatIsTitle="What Is Rosacea?"
      whatIsContent={[
        "Rosacea is a chronic inflammatory condition primarily affecting the central face — the cheeks, nose, forehead, and chin. It is characterised by persistent facial redness (erythema), episodes of flushing, visible blood vessels (telangiectasias), and in some patients, inflammatory papules and pustules that can be confused with acne.",
        "The exact cause of rosacea is not fully understood, but it is believed to involve a combination of abnormal neurovascular response (causing flushing and redness), immune dysregulation, and an abnormal response to skin microorganisms such as Demodex mites. Genetic factors play a role — rosacea is more common in people of Celtic and Northern European descent, though it does occur in South Asian and South Indian patients.",
        "Rosacea is a relapsing-remitting condition — periods of relative control are interspersed with flares triggered by specific stimuli. Identifying and avoiding personal triggers, combined with appropriate medical treatment, significantly reduces flare frequency and severity. While rosacea cannot be cured, it can be very effectively managed to maintain a good quality of life.",
      ]}
      causes={[
        { icon: "☀️", cause: "Sun and UV exposure — the most common rosacea trigger" },
        { icon: "🌶️", cause: "Spicy food and hot beverages triggering flushing" },
        { icon: "🍷", cause: "Alcohol, particularly red wine" },
        { icon: "🌡️", cause: "Heat — hot weather, exercise, hot showers, saunas" },
        { icon: "😰", cause: "Emotional stress and anxiety" },
        { icon: "🧴", cause: "Skincare products containing alcohol, fragrance, or harsh ingredients" },
        { icon: "🦠", cause: "Demodex folliculorum mite overpopulation on facial skin" },
        { icon: "🧬", cause: "Genetic predisposition and family history of rosacea" },
      ]}
      symptomsOrTypes={[
        {
          title: "Erythematotelangiectatic Rosacea (Type 1)",
          desc: "Characterised by persistent central facial redness, frequent flushing, and visible blood vessels (telangiectasias). The skin is often sensitive and reactive to skincare products and temperature changes. IPL and vascular laser are particularly effective for this subtype.",
        },
        {
          title: "Papulopustular Rosacea (Type 2)",
          desc: "The form most commonly confused with acne. Presents with persistent central facial redness combined with inflammatory papules and pustules — but notably without comedones (blackheads/whiteheads), which distinguishes it from acne. Responds well to topical and oral treatments.",
        },
        {
          title: "Phymatous Rosacea (Type 3)",
          desc: "The most severe subtype, characterised by skin thickening, irregular surface nodularities, and enlargement of the nose (rhinophyma). More common in men. Requires a combination of medical management and potentially surgical or laser recontouring for advanced rhinophyma.",
        },
        {
          title: "Ocular Rosacea (Type 4)",
          desc: "Affects the eyes and eyelids, causing redness, burning, stinging, dryness, and the sensation of a foreign body in the eye. Blepharitis (eyelid inflammation) is common. Can occur independently of skin involvement. Requires management in conjunction with an ophthalmologist.",
        },
        {
          title: "Flushing",
          desc: "Transient episodes of intense facial redness and warmth lasting minutes to hours, triggered by specific stimuli. Flushing precedes the development of persistent redness in many patients. It can be profoundly distressing and socially limiting.",
        },
        {
          title: "Granulomatous Rosacea",
          desc: "An uncommon variant presenting with brown or yellow firm papules in a non-inflammatory background. Requires biopsy for definitive diagnosis. Responds differently to standard treatments — oral tetracyclines and sometimes isotretinoin are used.",
        },
      ]}
      treatments={[
        {
          icon: "🧴",
          title: "Topical Metronidazole",
          desc: "A first-line topical treatment for rosacea papules and pustules. Metronidazole 0.75% or 1% cream or gel applied once or twice daily reduces inflammatory lesions and maintains remission. Well-tolerated and suitable for long-term use. It works through anti-inflammatory and antioxidant mechanisms.",
        },
        {
          icon: "🌿",
          title: "Topical Azelaic Acid",
          desc: "Azelaic acid 15% gel or 20% cream is effective for both inflammatory lesions and facial redness in rosacea. It has anti-inflammatory and antikeratinising properties and is well-tolerated even by sensitive skin. Can be used in pregnancy. Mild tingling on application is common but usually resolves with continued use.",
        },
        {
          icon: "🔬",
          title: "Topical Ivermectin (Soolantra)",
          desc: "A newer topical treatment that targets Demodex mites, which are found in higher numbers in rosacea-affected skin. Ivermectin 1% cream applied once daily has shown superior efficacy to metronidazole in clinical trials for papulopustular rosacea. Particularly useful when Demodex mite density is elevated.",
        },
        {
          icon: "🩺",
          title: "Topical Brimonidine",
          desc: "An alpha-adrenergic agonist that directly constricts dilated facial blood vessels, providing rapid reduction in redness within 30 minutes of application. It addresses the erythema component directly — an effect not achieved by other topical treatments. Used as needed for social occasions or as daily maintenance.",
        },
        {
          icon: "💊",
          title: "Oral Doxycycline",
          desc: "Oral doxycycline (40 mg modified-release or 100 mg) is used for moderate to severe papulopustular rosacea. It works primarily through anti-inflammatory rather than antibiotic mechanisms. Typically prescribed for 12–16 weeks, with topical maintenance continuing afterwards. Dr. Sireesha selects the appropriate dose to balance efficacy and side effects.",
        },
        {
          icon: "💡",
          title: "IPL and Vascular Laser",
          desc: "Intense Pulsed Light (IPL) or vascular-specific lasers (Nd:YAG, pulse-dye laser) target haemoglobin in dilated blood vessels (telangiectasias) and reduce overall facial redness. Particularly effective for erythematotelangiectatic rosacea and persistent background redness that does not respond to topical agents. A course of 3–5 sessions produces significant improvement.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A detailed consultation with Dr. Sireesha to identify the rosacea subtype(s) and triggers specific to you.",
            "Photograph affected areas to document baseline severity and track improvement.",
            "Review all current skincare and cosmetic products — many commercial products contain ingredients that aggravate rosacea.",
            "Begin a rosacea trigger diary: note foods, beverages, activities, and environmental factors that provoke flushing or flares.",
            "Avoid all potential irritants (alcohol-based toners, fragrances, abrasive scrubs) before and during treatment.",
            "Start using a gentle, fragrance-free SPF 50+ sunscreen daily even before starting prescription treatment.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Apply topical treatments as directed — usually a pea-sized amount to the entire face, avoiding the eyes.",
            "Mild stinging or tingling during initial weeks of azelaic acid or metronidazole use is normal and usually resolves.",
            "Take oral doxycycline with food to reduce the risk of nausea; avoid lying down for 30 minutes after taking it.",
            "IPL/laser sessions last 20–30 minutes; mild redness, warmth, and pinpoint bruising are expected for 1–3 days after.",
            "Monitor for any worsening — if the skin becomes significantly more irritated, contact Dr. Sireesha.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Continue maintenance topical therapy (metronidazole, azelaic acid, or ivermectin) even when the skin has cleared.",
            "Daily SPF 50+ sunscreen application is lifelong — sun exposure is the number one trigger for rosacea relapse.",
            "Maintain the trigger diary and continue to avoid identified personal triggers.",
            "Results from IPL are progressive over 4–6 weeks after each session as blood vessels are reabsorbed.",
            "Schedule follow-up with Dr. Sireesha every 3–6 months to reassess and adjust the management plan.",
          ],
        },
      ]}
      aftercareTips={[
        "Apply SPF 50+ broad-spectrum sunscreen every morning, even on cloudy days — UV exposure is the most consistent rosacea trigger.",
        "Use a gentle, fragrance-free, soap-free cleanser and apply skincare products with clean hands, not with a rough face cloth.",
        "Avoid spicy foods (especially hot chillies, which are common in Telugu cuisine), hot soups, and very hot beverages — these commonly trigger flushing.",
        "Limit alcohol, particularly red wine, which is a potent rosacea trigger. If drinking, choose white wine or spirits and stay well-hydrated.",
        "Exercise in cool environments or early morning to avoid heat-triggered flushing. Cool down quickly after exercise.",
        "Use a physical sunscreen (zinc oxide or titanium dioxide) rather than chemical sunscreen, as chemical sunscreen ingredients sometimes irritate rosacea-prone skin.",
        "Moisturise with a gentle, ceramide-containing, fragrance-free moisturiser — a healthy skin barrier reduces sensitivity and reactivity.",
        "Manage stress with regular relaxation practices — stress is a well-established rosacea trigger that responds to mindfulness, yoga, or regular exercise.",
      ]}
      benefits={[
        "Significant reduction in inflammatory papules and pustules with prescription topical and oral treatments.",
        "Reduction in facial redness and visible blood vessels with IPL or vascular laser.",
        "Personalised trigger identification that empowers patients to reduce flare frequency.",
        "Long-term management strategy that maintains clear skin and prevents progressive worsening.",
        "Improved skin confidence and social comfort — rosacea's emotional impact should not be underestimated.",
      ]}
      faqs={[
        {
          q: "Is rosacea the same as acne?",
          a: "No, rosacea and acne are distinct conditions. Papulopustular rosacea can look similar to acne, but rosacea has persistent redness and flushing as central features and — importantly — has no blackheads or whiteheads (comedones). Rosacea treatment is also different from acne treatment. Misdiagnosis is common, which is why seeing a specialist dermatologist like Dr. Sireesha is important.",
        },
        {
          q: "Can rosacea be cured permanently?",
          a: "Rosacea cannot be permanently cured, but it can be very effectively controlled with the right combination of trigger avoidance and medical treatment. Many patients achieve sustained remission — months or years of clear skin — with consistent maintenance therapy. Without treatment, rosacea tends to progress.",
        },
        {
          q: "Is rosacea common in South Indian or dark skin?",
          a: "Rosacea is traditionally considered more common in people with lighter skin tones. However, it does occur in South Indian and darker-skinned patients, where the redness may be less visible and can be mistaken for other conditions. Flushing, papules, and pustules are still prominent features. Expert diagnosis ensures appropriate treatment in all skin types.",
        },
        {
          q: "What foods should I avoid if I have rosacea?",
          a: "Common dietary triggers include spicy food (hot chillies, curries — relevant in South Indian diet), very hot food and drinks, alcohol (especially red wine), and citrus fruits. However, triggers are highly individual. Keeping a food diary helps identify your personal culprits. Not everyone with rosacea reacts to the same foods.",
        },
        {
          q: "Can stress trigger rosacea?",
          a: "Yes. Emotional stress is one of the most common rosacea triggers, causing flushing and worsening of inflammatory lesions. This is likely related to stress-induced release of neuropeptides that promote vascular dilation and inflammation. Stress management through regular exercise, yoga, meditation, and adequate sleep is an important part of rosacea management.",
        },
        {
          q: "Does sunscreen help with rosacea?",
          a: "Yes — SPF 50+ broad-spectrum sunscreen is one of the most important elements of rosacea management. Sun exposure triggers flushing and worsens redness in almost all rosacea patients. A physical sunscreen containing zinc oxide or titanium dioxide is preferred as it is less likely to irritate sensitive rosacea skin.",
        },
        {
          q: "What is the difference between rosacea and a skin allergy?",
          a: "Rosacea is a chronic inflammatory condition driven by neurovascular and immune factors, presenting with persistent facial redness, flushing, and papules. A skin allergy (contact dermatitis or urticaria) is triggered by specific external substances and typically presents with wheals, blisters, or localised redness. Patch testing and careful examination by Dr. Sireesha help differentiate the two.",
        },
        {
          q: "How many IPL sessions do I need for rosacea?",
          a: "For erythematotelangiectatic rosacea and visible blood vessels, most patients require 3–5 IPL sessions spaced 4–6 weeks apart. Results improve progressively after each session. Maintenance sessions once or twice a year may be needed to sustain results, especially if sun exposure or other triggers continue.",
        },
      ]}
      relatedLinks={[
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
        { label: "Skin Allergy Treatment", href: "/skin-treatments/skin-allergy" },
        { label: "Pigmentation Treatment", href: "/skin-treatments/pigmentation" },
      ]}
      ctaHeading="Struggling with Facial Redness or Rosacea in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for accurate diagnosis and a personalised rosacea management plan."
    />
  );
}
