import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wart Removal in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "Wart removal in Nandyala by Dr. Sireesha MD. Safe and effective removal with cryotherapy, electrocautery, salicylic acid & laser for common, plantar & flat warts.",
  alternates: { canonical: "https://yashvini.in/skin-treatments/warts" },
};

export default function WartsPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="warts"
      h1="Wart Removal in Nandyala"
      subtitle="Warts are common, contagious viral skin growths caused by HPV that can appear anywhere on the body and are often stubborn to treat without proper care. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers safe and effective wart removal procedures tailored to the wart type and location."
      whatIsTitle="What Are Warts?"
      whatIsContent={[
        "Warts are benign (non-cancerous) skin growths caused by infection with the Human Papillomavirus (HPV). There are more than 100 subtypes of HPV, and different subtypes cause warts in different locations. When HPV enters the skin through a minor cut or abrasion, it causes the superficial skin cells to proliferate rapidly, forming a rough, raised growth on the skin surface.",
        "Warts are common across all age groups but are especially prevalent in children and young adults. They are contagious — spread through direct skin contact with an infected person or by touching contaminated surfaces (such as floors of communal showers or swimming pools). The immune system plays a key role in wart resolution: some warts disappear spontaneously when immunity overcomes the virus, while others persist for years without treatment.",
        "While most warts are harmless, they can cause discomfort (especially plantar warts on weight-bearing surfaces), embarrassment, and can spread to other body sites or to other individuals. In immunocompromised patients (those with HIV, organ transplants, or on immunosuppressive medication), warts can be widespread, resistant to treatment, and require specialist management.",
      ]}
      causes={[
        { icon: "🦠", cause: "Direct infection with Human Papillomavirus (HPV)" },
        { icon: "👐", cause: "Direct skin-to-skin contact with an infected person" },
        { icon: "🏊", cause: "Walking barefoot in communal pools, changing rooms, or public showers" },
        { icon: "✂️", cause: "Minor skin cuts or abrasions allowing HPV entry" },
        { icon: "🧒", cause: "Children and young adults most susceptible due to developing immunity" },
        { icon: "🩺", cause: "Immunosuppression (HIV, organ transplant, long-term steroids) increasing risk" },
        { icon: "🤝", cause: "Touching another person's wart or sharing personal items" },
        { icon: "💅", cause: "Nail biting, cuticle picking spreading periungual warts" },
      ]}
      symptomsOrTypes={[
        {
          title: "Common Warts (Verruca Vulgaris)",
          desc: "Rough, raised, greyish-white or skin-coloured growths with a cauliflower-like surface. Most commonly found on the hands, fingers, and around the nails. The characteristic 'black dots' within them are thrombosed capillaries. Respond well to cryotherapy and electrocautery.",
        },
        {
          title: "Plantar Warts (Verruca Plantaris)",
          desc: "Warts on the soles of the feet, pushed inward by body weight to create a flat or slightly depressed surface with a hard, thickened surface. Can be very painful with standing and walking. Often have visible black dots. Treated with cryotherapy, salicylic acid, and electrocautery.",
        },
        {
          title: "Flat Warts (Verruca Plana)",
          desc: "Small, smooth, flat-topped warts that are skin-coloured or slightly yellowish. Tend to appear in large numbers on the face, neck, forehead, and legs. Common in children. Can be spread by shaving. Treated with topical agents, gentle electrocautery, or retinoid creams.",
        },
        {
          title: "Filiform Warts",
          desc: "Long, narrow, finger-like projections growing out of the skin, typically on the face, particularly around the eyelids, lips, and nose. Grow rapidly and can be quite prominent. Respond excellently to scissor excision or electrocautery.",
        },
        {
          title: "Periungual Warts",
          desc: "Warts growing around and under the fingernails or toenails. Can disrupt nail growth and be difficult to treat due to their location. More common in nail biters. Require targeted cryotherapy or electrocautery.",
        },
        {
          title: "Mosaic Warts",
          desc: "Clusters of multiple plantar warts that have merged together, forming a mosaic-like pattern on the sole of the foot. More extensive and require more aggressive or repeated treatment.",
        },
      ]}
      treatments={[
        {
          icon: "❄️",
          title: "Cryotherapy (Liquid Nitrogen)",
          desc: "The most widely used treatment for warts. Liquid nitrogen at -196°C is applied to the wart with a spray gun or cotton-tipped applicator, freezing and destroying the infected tissue. Causes a blister to form that resolves over 1–2 weeks, taking the wart tissue with it. Multiple sessions spaced 2–3 weeks apart are typically needed. Effective for common, plantar, and periungual warts.",
        },
        {
          icon: "🧪",
          title: "Salicylic Acid",
          desc: "A keratolytic agent that gradually dissolves the hardened wart tissue. Applied daily to the wart after soaking and filing. Available as a solution, gel, or plaster. Best for plantar and common warts. Requires patient commitment and several weeks of treatment. Often used in combination with cryotherapy for faster results.",
        },
        {
          icon: "⚡",
          title: "Electrocautery",
          desc: "The wart tissue is destroyed using an electrical current. Performed under local anaesthesia. Highly effective and suitable for filiform, periungual, and resistant common warts. Produces immediate clearance in most cases. May require a single session; larger or multiple warts may need repeat treatment.",
        },
        {
          icon: "💡",
          title: "Laser Ablation",
          desc: "CO2 laser precisely vaporises wart tissue with excellent precision and minimal damage to surrounding skin. Particularly useful for extensive, multiple, or resistant warts, and for warts in delicate areas (face, genitals). Performed under local anaesthesia. Results in complete ablation in most cases.",
        },
        {
          icon: "🔪",
          title: "Surgical Excision",
          desc: "Surgical cutting of the wart under local anaesthesia. Reserved for large, solitary, or resistant warts. Complete removal reduces recurrence compared to other modalities. The resultant wound heals within 1–2 weeks. Histopathological examination of the excised tissue confirms the diagnosis.",
        },
        {
          icon: "🧴",
          title: "Immunotherapy and Topical Agents",
          desc: "For extensive or resistant warts, intralesional immunotherapy (bleomycin or Candida antigen injections) stimulates the immune system to eliminate HPV-infected cells. Topical imiquimod (an immune modulator) is used for flat and genital warts. These approaches are particularly valuable in immunocompromised patients.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A clinical examination by Dr. Sireesha to confirm the diagnosis and identify the wart type and location.",
            "Exclude other conditions that may look like warts — corns, calluses, molluscum contagiosum, or seborrhoeic keratoses.",
            "Discuss the most appropriate treatment modality based on wart type, location, number, and patient preference.",
            "Topical anaesthetic cream may be prescribed for application before cryotherapy or electrocautery sessions.",
            "Soak plantar warts in warm water for 10–15 minutes and file gently with an emery board before cryotherapy to improve penetration.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Cryotherapy causes a stinging or burning sensation during and immediately after application — typically well-tolerated.",
            "A white, frozen area forms during cryotherapy, followed by redness and blister formation over the next 24–48 hours.",
            "Electrocautery and laser are performed under local anaesthetic injection — the procedure itself is painless.",
            "The treated area will be tender for a few days after electrocautery or laser; standard analgesics are adequate.",
            "Some wart types (particularly plantar) require multiple sessions at regular intervals.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Keep the treated area clean and dry; apply antiseptic as directed and cover with a sterile dressing for the first 2–3 days.",
            "Do not puncture or rupture the blister that forms after cryotherapy — allow it to resolve naturally.",
            "Keep plantar wart treatment sites covered with a dressing when walking to protect the healing area.",
            "Return for follow-up as scheduled — most warts require multiple sessions for complete clearance.",
            "Avoid touching other body areas or other people with the treated site until healed to prevent spread.",
            "Report any signs of infection (increasing redness, warmth, pus) promptly.",
          ],
        },
      ]}
      aftercareTips={[
        "Wear flip-flops or protective footwear in communal showers, swimming pools, and gym changing rooms to prevent reinfection.",
        "Do not share towels, socks, shoes, or nail clippers with other people — these items can transmit HPV.",
        "Avoid picking at, cutting, or shaving over warts — this can spread the virus to other areas of your skin.",
        "Keep the skin on your hands and feet well-moisturised — cracks and minor abrasions are entry points for HPV.",
        "Do not bite nails or pick at cuticles — this habit promotes periungual wart development and spread.",
        "Cover any warts on the hands with a waterproof plaster when in the swimming pool or gym to prevent contaminating surfaces.",
        "Wash hands thoroughly with soap and water after touching a wart or the treated site.",
        "Boost general immunity through a balanced diet, regular exercise, adequate sleep, and stress management — a healthy immune system helps resolve HPV infection more effectively.",
      ]}
      benefits={[
        "Effective, swift wart removal with minimal scarring when treated by a trained dermatologist.",
        "Multiple treatment modalities available to match the wart type, location, and patient's needs.",
        "Reduced risk of spread to other body sites or to other individuals.",
        "Prompt treatment prevents warts from enlarging or becoming more numerous.",
        "Accurate diagnosis ensures correct treatment — avoiding confusion with calluses, molluscum, or other skin lesions.",
      ]}
      faqs={[
        {
          q: "Will warts go away on their own without treatment?",
          a: "Some warts — particularly in children with strong immune responses — do resolve spontaneously within 1–2 years. However, many warts persist and can spread. Treatment is advisable when warts are painful (plantar warts), cosmetically distressing (facial warts), spreading, or when the patient is immunocompromised.",
        },
        {
          q: "How many cryotherapy sessions do I need to remove a wart?",
          a: "Most warts require 3–6 cryotherapy sessions spaced 2–3 weeks apart for complete clearance. Plantar warts and periungual warts tend to be more resistant and may need more sessions. Larger warts may require a combination approach (salicylic acid between sessions, electrocautery) for faster resolution.",
        },
        {
          q: "Is wart removal painful?",
          a: "Cryotherapy causes a stinging sensation during and after treatment, which usually settles within a few minutes. Electrocautery and laser are performed under local anaesthesia, making the procedure painless. Post-procedure tenderness is managed with standard analgesics. Plantar wart treatment can be temporarily uncomfortable due to the walking surface.",
        },
        {
          q: "Can warts come back after treatment?",
          a: "Yes, warts can recur after treatment because the HPV virus may remain in surrounding skin even after the visible wart is removed. Recurrence rates vary by treatment method. Maintaining hygiene precautions, avoiding reinfection sources, and treating any new warts early helps prevent recurrence.",
        },
        {
          q: "Are warts contagious?",
          a: "Yes, warts caused by HPV are contagious. They spread through direct skin contact with an infected person or with contaminated surfaces. People with cuts, abrasions, or compromised skin barriers are most susceptible. Avoid direct contact with others' warts and do not share personal items such as towels or footwear.",
        },
        {
          q: "Can I treat warts at home with over-the-counter products?",
          a: "Over-the-counter salicylic acid preparations (solutions, gels, plasters) can be effective for common and plantar warts in motivated patients. However, they require consistent daily use for 8–12 weeks and careful filing of dead tissue. Home treatment is less effective for resistant warts, facial or periungual warts, and in immunocompromised patients. Clinical treatment is generally faster and more reliable.",
        },
        {
          q: "What is the difference between a wart and a corn?",
          a: "Both are hard, rough areas on the skin — but they have different causes and features. Corns are caused by pressure and friction (not HPV) and have a smooth, defined central core. They do not have black dots and are not contagious. Warts caused by HPV often have black dots (thrombosed capillaries) and may have a rough, irregular surface. Dr. Sireesha can confirm the diagnosis.",
        },
        {
          q: "Do warts affect internal organs?",
          a: "Common skin warts (caused by HPV types 1, 2, 4) are superficial infections that do not affect internal organs. Different HPV types are responsible for genital warts and cervical cancer risk — these are unrelated to common skin warts. Genital warts require separate specialist assessment and management.",
        },
      ]}
      relatedLinks={[
        { label: "Skin Tag Removal", href: "/skin-treatments/skin-tags" },
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
        { label: "Fungal Infection Treatment", href: "/skin-treatments/fungal-infection" },
      ]}
      ctaHeading="Looking for Wart Removal in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for accurate diagnosis and appropriate wart removal treatment."
    />
  );
}
