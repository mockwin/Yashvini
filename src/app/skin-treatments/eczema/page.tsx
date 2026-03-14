import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eczema Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "ఎగ్జిమా చికిత్స (Eczema treatment) in Nandyala by Dr. Sireesha MD. చర్మం దురద మరియు దద్దుర్లు (itchy skin rash). Moisturiser therapy, topical corticosteroids, dupilumab & phototherapy for lasting relief.",
  keywords: ["ఎగ్జిమా చికిత్స", "eczema treatment Nandyala", "atopic dermatitis Nandyala", "చర్మం దురద చికిత్స", "skin rash treatment Nandyala", "చర్మవ్యాధి నిపుణుడు Nandyala"],
  alternates: { canonical: "https://yashvini.in/skin-treatments/eczema" },
};

export default function EczemaPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="eczema"
      h1="Eczema Treatment in Nandyala"
      subtitle="Eczema is a chronic inflammatory skin condition that causes intense itching, dryness, and rashes that significantly impact quality of life. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, provides personalised, evidence-based management to control symptoms and reduce flare-ups."
      whatIsTitle="What Is Eczema?"
      whatIsContent={[
        "Eczema is an umbrella term for a group of conditions that cause the skin to become inflamed, itchy, dry, and cracked. The most common form is atopic dermatitis, which is part of the 'atopic triad' alongside asthma and allergic rhinitis. It is a chronic condition with periods of remission interrupted by flares, often triggered by environmental factors or stress.",
        "Contact dermatitis is another common form — it occurs when the skin reacts to a specific substance. Allergic contact dermatitis involves an immune response to an allergen (such as nickel, fragrances, or rubber), while irritant contact dermatitis results from direct damage by harsh substances like soaps, detergents, or chemicals.",
        "The fundamental problem in atopic dermatitis is a defective skin barrier — genetic mutations (particularly in the filaggrin gene) lead to a skin that cannot retain moisture effectively and is more permeable to allergens and irritants. This triggers an immune response that drives the characteristic itch-scratch cycle. Breaking this cycle with appropriate treatment is central to management.",
      ]}
      causes={[
        { icon: "🧬", cause: "Genetic filaggrin gene mutations causing impaired skin barrier" },
        { icon: "🤧", cause: "Atopic family history (asthma, hay fever, eczema)" },
        { icon: "🐛", cause: "House dust mite exposure in bedding and upholstery" },
        { icon: "🌿", cause: "Pollen, pet dander, and mould in the environment" },
        { icon: "🧴", cause: "Soaps, detergents, and harsh skin products stripping the skin barrier" },
        { icon: "🍽️", cause: "Certain food triggers (milk, eggs, nuts in some children)" },
        { icon: "🌡️", cause: "Extreme temperatures — heat and sweat worsen eczema" },
        { icon: "😰", cause: "Psychological stress triggering or worsening flares" },
        { icon: "🧵", cause: "Rough or synthetic fabrics (wool, polyester) irritating sensitive skin" },
      ]}
      symptomsOrTypes={[
        {
          title: "Atopic Dermatitis",
          desc: "The most common form of eczema. Characterised by intensely itchy, dry, inflamed skin. In children, it typically affects the face, scalp, and elbow/knee creases. In adults, it tends to affect the hands, eyelids, neck, and flexural areas. A chronic condition requiring long-term management.",
        },
        {
          title: "Contact Dermatitis",
          desc: "Skin inflammation triggered by contact with a specific substance. Allergic contact dermatitis (e.g., to nickel in jewellery, or fragrance in cosmetics) involves a delayed immune response. Irritant contact dermatitis (e.g., from frequent hand washing or household chemicals) is more common.",
        },
        {
          title: "Dyshidrotic Eczema",
          desc: "Small, intensely itchy blisters on the palms, fingers, and soles. Often triggered by stress, sweating, or contact with metals. More common in adults and can be quite debilitating.",
        },
        {
          title: "Nummular Eczema",
          desc: "Coin-shaped patches of irritated skin, often oozing or crusted. Tends to be more common in older adults and in drier climates or winter months. Can be confused with ringworm.",
        },
        {
          title: "Seborrhoeic Dermatitis",
          desc: "Affects oily areas: scalp, face (around nose and eyebrows), chest. Involves a yeast (Malassezia) component in addition to inflammation. Characterised by yellowish, greasy scales. Very common in South India's warm, humid climate.",
        },
        {
          title: "Stasis Dermatitis",
          desc: "Eczema of the lower legs associated with poor venous circulation. Common in older patients and those with varicose veins. Presents as redness, scaling, and itching, and can lead to ulceration if not managed.",
        },
      ]}
      treatments={[
        {
          icon: "🧴",
          title: "Emollient / Moisturiser Therapy",
          desc: "The foundation of eczema management. Regular application of thick, fragrance-free emollients (creams, ointments) repairs the impaired skin barrier, reduces water loss, and prevents flares. Moisturisers should be applied liberally 2–3 times daily and immediately after bathing. Dr. Sireesha recommends specific formulations suited to the severity of your eczema and climate.",
        },
        {
          icon: "💊",
          title: "Topical Corticosteroids",
          desc: "The mainstay of anti-inflammatory treatment for eczema flares. Applied to affected areas during flares to reduce redness, swelling, and itch. Available in different potencies — mild formulations for the face and body folds, stronger preparations for thickened or resistant areas. Dr. Sireesha prescribes the appropriate potency and duration to avoid side effects.",
        },
        {
          icon: "🌿",
          title: "Calcineurin Inhibitors (Tacrolimus & Pimecrolimus)",
          desc: "Non-steroidal anti-inflammatory topicals that are especially useful for sensitive areas (face, eyelids, genitals) where prolonged steroid use is not appropriate. Also used for maintenance therapy between flares to proactively prevent them. Safe for long-term use under medical supervision.",
        },
        {
          icon: "💉",
          title: "Dupilumab (Biologic Therapy)",
          desc: "A targeted biologic injection (anti-IL-4/IL-13) approved for moderate-to-severe atopic dermatitis not adequately controlled by topical treatments. Dupilumab dramatically reduces itch, skin inflammation, and frequency of flares. Administered as a subcutaneous injection every 2 weeks. Dr. Sireesha assesses eligibility and manages biologic therapy.",
        },
        {
          icon: "🔆",
          title: "NB-UVB Phototherapy",
          desc: "Narrowband UVB light therapy is effective for widespread eczema that is not adequately controlled by topicals. It works by modulating the immune response in the skin. Sessions are conducted 2–3 times per week in clinic. A course of 20–30 sessions typically produces significant improvement.",
        },
        {
          icon: "🚫",
          title: "Trigger Identification and Avoidance",
          desc: "Identifying and avoiding personal triggers is as important as any medication. Dr. Sireesha helps identify triggers through patch testing (for contact dermatitis), dietary review, and environmental assessment. Common measures: dust mite-proof bedding covers, fragrance-free products, cotton clothing, and temperature regulation.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A detailed history of flare triggers, previous treatments, family history of atopy, and impact on daily life.",
            "Patch testing may be arranged to identify contact allergens if contact dermatitis is suspected.",
            "Photograph affected areas to document severity and monitor progress.",
            "Review all current skincare products — many commercial products contain fragrances and preservatives that worsen eczema.",
            "Discuss any concurrent asthma, hay fever, or food allergies as part of the atopic picture.",
            "Set expectations: eczema is managed, not cured — the goal is prolonged remission with minimal flares.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Apply emollient first, then topical corticosteroid on affected areas during flares — the 'wet wrapping' technique may be used for severe flares.",
            "Oral antihistamines may be prescribed for itching, particularly sedating ones at night to allow sleep.",
            "Antibiotics (topical or oral) may be prescribed if there is evidence of secondary bacterial infection (yellow crusting, weeping, increased warmth).",
            "Phototherapy sessions are attended as scheduled — regularity is key to achieving and maintaining results.",
            "Dupilumab injections are given as per the prescribed schedule; improvement is typically seen within 4–16 weeks.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Continue emollient use daily even during remission — this is maintenance therapy, not optional.",
            "Use calcineurin inhibitors proactively on previously affected areas 2–3 times per week to prevent new flares.",
            "Avoid identified triggers rigorously — environmental control is ongoing.",
            "Follow up with Dr. Sireesha every 1–3 months to assess control and adjust the treatment plan.",
            "Recognise early signs of a flare (increased dryness, itching) and initiate topical steroids promptly to prevent escalation.",
            "Monitor mental health — chronic eczema significantly impacts wellbeing; address sleep disturbance and anxiety with Dr. Sireesha.",
          ],
        },
      ]}
      aftercareTips={[
        "Moisturise at least twice daily with a thick, fragrance-free emollient — immediately after bathing ('soak and seal') is the most effective time.",
        "Use lukewarm (not hot) water for baths and showers, and limit bathing time to 5–10 minutes to prevent skin drying.",
        "Switch to gentle, fragrance-free, soap-free cleansers for skin and laundry — harsh soaps and detergents are a common eczema trigger.",
        "Wear loose, breathable cotton clothing; avoid wool and synthetic fabrics directly against the skin.",
        "Use dust mite-proof covers on pillows and mattresses, and wash bedding in hot water (60°C) weekly.",
        "Keep nails short and clean to reduce damage from scratching; consider cotton gloves at night for children.",
        "Avoid prolonged outdoor exposure during high-heat periods in Nandyala — sweat is a common eczema trigger.",
        "Do not stop prescribed medications without consulting Dr. Sireesha — abrupt steroid withdrawal can cause rebound flares.",
      ]}
      benefits={[
        "Significant reduction in the frequency and severity of eczema flares with a structured management plan.",
        "Relief from the chronic itch-scratch cycle that disrupts sleep and daily activities.",
        "Targeted biologic therapy available for severe cases where conventional treatments are insufficient.",
        "Improved quality of life — better sleep, reduced anxiety, and greater freedom in daily activities.",
        "Personalised trigger identification reduces unnecessary exposure and prevents flares proactively.",
      ]}
      faqs={[
        {
          q: "Is eczema contagious?",
          a: "No, eczema is not contagious. It cannot be spread from person to person through touch, sharing towels, or any form of contact. It is an immune and genetic condition, not an infection.",
        },
        {
          q: "Can eczema be cured permanently?",
          a: "Eczema is a chronic condition without a permanent cure. However, many children with atopic dermatitis improve significantly or go into full remission by adulthood. With appropriate management, most patients can achieve long periods of clear skin and minimal flares. Dr. Sireesha's goal is to keep your eczema well-controlled.",
        },
        {
          q: "What foods should I avoid if I have eczema?",
          a: "Food triggers are highly individual and are more relevant in young children with severe atopic dermatitis. Common foods associated with eczema flares include dairy, eggs, peanuts, tree nuts, wheat, soy, and fish. However, elimination diets should only be undertaken under medical supervision — self-imposed restrictions can lead to nutritional deficiencies.",
        },
        {
          q: "Is steroid cream safe for eczema?",
          a: "Topical corticosteroids are safe when used correctly under medical guidance. The correct potency, applied to the right area, for the appropriate duration, is safe and very effective. Dr. Sireesha prescribes specific formulations and provides clear instructions to avoid side effects such as skin thinning.",
        },
        {
          q: "What is dupilumab and who is it suitable for?",
          a: "Dupilumab (Dupixent) is an injectable biologic medication that blocks the key inflammatory pathways (IL-4 and IL-13) driving atopic dermatitis. It is suitable for adults and adolescents with moderate-to-severe eczema that is not adequately controlled by topical treatments. Dr. Sireesha assesses eligibility and manages the treatment.",
        },
        {
          q: "Why does eczema itch worse at night?",
          a: "Itching is typically worse at night because skin temperature rises in bed, natural cortisol levels are lower (reducing the body's anti-inflammatory effect), and there are fewer distractions. Keeping the bedroom cool, using cotton bed sheets, and applying moisturiser before bed can help manage nocturnal itch.",
        },
        {
          q: "Can eczema affect the eyes?",
          a: "Yes. Atopic dermatitis frequently affects the eyelids, causing redness, swelling, scaling, and intense itch. Prolonged eye involvement is associated with an increased risk of cataracts and keratoconus. Eye involvement should be assessed and treated carefully — Dr. Sireesha uses non-steroidal calcineurin inhibitors for the delicate eye area.",
        },
        {
          q: "Is there a link between eczema and allergies?",
          a: "Yes. Eczema is part of the 'atopic march' — a progression that often begins with eczema in infancy, followed by food allergies, asthma, and allergic rhinitis in childhood. The impaired skin barrier in eczema allows allergens to penetrate and sensitise the immune system. Treating eczema early and effectively may reduce the development of subsequent allergic conditions.",
        },
      ]}
      relatedLinks={[
        { label: "Skin Allergy Treatment", href: "/skin-treatments/skin-allergy" },
        { label: "Psoriasis Treatment", href: "/skin-treatments/psoriasis" },
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
      ]}
      teluguFaqs={[
        {
          q: "ఎగ్జిమా అంటువ్యాధా?",
          a: "కాదు. ఎగ్జిమా అంటువ్యాధి కాదు. ఇది immune మరియు genetic వ్యాధి. స్పర్శ ద్వారా వ్యాపించదు. పిల్లలు మరియు పెద్దలు ఇద్దరికీ వస్తుంది.",
          en: "No. Eczema is not contagious. It is an immune and genetic condition. It cannot spread through touch. It affects both children and adults.",
        },
        {
          q: "ఎగ్జిమాకు Nandyala లో ఏ చికిత్స అందుబాటులో ఉంది?",
          a: "Dr. Sireesha emollient therapy, topical corticosteroids, calcineurin inhibitors, మరియు తీవ్రమైన cases కు dupilumab biologic therapy అందిస్తారు. NB-UVB phototherapy కూడా అందుబాటులో ఉంది.",
          en: "Dr. Sireesha offers emollient therapy, topical corticosteroids, calcineurin inhibitors, and for severe cases, dupilumab biologic therapy. NB-UVB phototherapy is also available.",
        },
        {
          q: "ఎగ్జిమా వేడి వాతావరణంలో ఎందుకు తీవ్రమవుతుంది?",
          a: "వేడి మరియు చెమట ఎగ్జిమాను trigger చేస్తాయి. Nandyala వాతావరణంలో చెమట మరియు తేమ అధికంగా ఉండటం వలన ఎగ్జిమా flares తరచుగా వస్తాయి. Cotton బట్టలు, చల్లని స్నానం, మరియు moisturizer వాడటం సహాయపడతాయి.",
          en: "Heat and sweat trigger eczema. In Nandyala's climate, high sweat and humidity cause frequent flares. Cotton clothing, cool baths, and moisturiser use are helpful.",
        },
      ]}
      ctaHeading="Living with Eczema in Nandyala? Let Us Help."
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Eczema is a chronic condition requiring personalised management. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a thorough evaluation and tailored treatment plan."
    />
  );
}
