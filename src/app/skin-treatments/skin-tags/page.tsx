import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin Tag Removal in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "Skin tag removal in Nandyala by Dr. Sireesha MD. Safe removal with electrocautery, cryotherapy & scissor excision under local anaesthesia. Quick, effective results.",
  alternates: { canonical: "https://yashvini.in/skin-treatments/skin-tags" },
};

export default function SkinTagsPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="skin-tags"
      h1="Skin Tag Removal in Nandyala"
      subtitle="Skin tags are soft, benign skin growths that develop in skin folds and friction areas — common, harmless, but often cosmetically bothersome or physically irritating. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers safe, quick, and effective removal procedures."
      whatIsTitle="What Are Skin Tags?"
      whatIsContent={[
        "Skin tags (medically known as acrochordons or fibroepithelial polyps) are small, soft, flesh-coloured or slightly brownish growths that hang off the skin on a thin stalk (peduncle). They are entirely benign — not cancerous and not pre-cancerous — and are composed of loose collagen fibres, fat cells, and blood vessels covered by the epidermis.",
        "Skin tags are among the most common benign skin growths seen in adults. They most frequently appear in areas of skin-to-skin friction and in skin folds: the neck, armpits, groin, under the breasts, and around the eyelids. They tend to grow slowly and persist indefinitely without removal. While they are not medically harmful, they frequently catch on clothing or jewellery, cause irritation or bleeding, and many patients find them cosmetically distressing.",
        "The development of multiple skin tags is associated with metabolic risk factors including overweight and obesity, insulin resistance, and type 2 diabetes. Multiple skin tags appearing in middle-aged adults can be a subtle clinical sign warranting a blood glucose and insulin check. Dr. Sireesha incorporates this assessment into the management of patients presenting with numerous skin tags.",
      ]}
      causes={[
        { icon: "⚖️", cause: "Overweight and obesity — increased skin-to-skin friction" },
        { icon: "🩸", cause: "Insulin resistance and type 2 diabetes" },
        { icon: "🤰", cause: "Pregnancy — hormonal changes promote skin tag development" },
        { icon: "🧬", cause: "Genetic predisposition — skin tags often run in families" },
        { icon: "👕", cause: "Friction from clothing, jewellery, and skin folds" },
        { icon: "📈", cause: "Increasing age — skin tags become more common after 40" },
        { icon: "💊", cause: "Elevated insulin levels stimulating skin cell growth" },
        { icon: "🌡️", cause: "Hormonal changes affecting skin tissue growth" },
      ]}
      symptomsOrTypes={[
        {
          title: "Classic Skin Tags (Acrochordons)",
          desc: "Small, soft, flesh-coloured to brownish pedunculated growths, 2–5 mm in size, hanging on a thin stalk. Found in skin folds and friction areas. Soft to touch and painless unless irritated.",
        },
        {
          title: "Larger Pedunculated Tags",
          desc: "Some skin tags grow larger (up to 1–2 cm) and hang on a more prominent stalk. These are more likely to twist on their stalk, cutting off their blood supply (thrombosis), causing them to darken, become painful, and eventually fall off — though this is not a reliable or recommended method of removal.",
        },
        {
          title: "Neck and Axillary Tags",
          desc: "The neck and armpits are the most common locations. Neck tags frequently catch on necklaces and collar tags; axillary tags are irritated by arm movement and clothing. These are among the most commonly removed skin tags.",
        },
        {
          title: "Eyelid Tags",
          desc: "Tags on the upper and lower eyelids are particularly delicate and require careful removal to avoid trauma to the eye. Electrocautery at very low settings or scissor excision is appropriate for periocular tags.",
        },
        {
          title: "Groin and Inframammary Tags",
          desc: "Common in overweight patients where there is skin-on-skin friction. These may become inflamed or infected from repeated friction and require removal.",
        },
        {
          title: "Multiple Skin Tags",
          desc: "Patients presenting with numerous (20+) skin tags should be evaluated for insulin resistance and metabolic syndrome. Multiple skin tags in certain patterns (such as around the neck) can be a sign of acanthosis nigricans and associated insulin resistance.",
        },
      ]}
      treatments={[
        {
          icon: "⚡",
          title: "Electrocautery",
          desc: "The most commonly used and highly effective method for skin tag removal. After application of local anaesthetic cream or injection, an electrical current is applied via a fine probe to cauterise (burn) the base of the tag, severing it cleanly. Results in immediate removal with minimal bleeding. The small treated site heals within 1–2 weeks. Suitable for tags of all sizes and in most locations.",
        },
        {
          icon: "❄️",
          title: "Cryotherapy (Liquid Nitrogen)",
          desc: "Liquid nitrogen is applied to the skin tag, freezing and destroying the tissue. The tag shrivels and falls off within 1–2 weeks. Particularly useful for smaller tags. Multiple sessions may be needed for larger tags. Some temporary redness or darkening of the treated area may occur — usually resolves completely.",
        },
        {
          icon: "✂️",
          title: "Scissor Excision Under Local Anaesthesia",
          desc: "Fine surgical scissors or a scalpel are used to cut the skin tag at its stalk under local anaesthetic injection. This results in immediate and complete removal with virtually no recurrence at that specific site. The method of choice for larger tags, multiple tags, and tags in delicate locations such as around the eyelids. The tiny wound heals quickly and leaves a minimal or invisible mark.",
        },
        {
          icon: "🔬",
          title: "Histopathology for Uncertain Lesions",
          desc: "If a lesion thought to be a skin tag is atypical in appearance (irregular colour, rapid growth, bleeding, hardness), Dr. Sireesha will send the excised tissue for histopathological examination to exclude other diagnoses. This is an important step when there is any clinical uncertainty.",
        },
        {
          icon: "🩺",
          title: "Metabolic Screening",
          desc: "For patients with multiple skin tags, Dr. Sireesha includes blood glucose, fasting insulin, and lipid profile screening to identify underlying insulin resistance or diabetes. Addressing these metabolic factors reduces the likelihood of new skin tags developing.",
        },
        {
          icon: "🧴",
          title: "Post-Removal Wound Care",
          desc: "After removal, Dr. Sireesha provides specific wound care instructions including antiseptic application, dressing for the first 24–48 hours, and moisturising to promote healing. The treated sites heal quickly and with minimal visible change to the skin.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A clinical examination by Dr. Sireesha to confirm the diagnosis and assess each tag's size, location, and number.",
            "Any lesion with atypical features (unusual colour, irregular border, rapid growth) is assessed carefully before removal and may be sent for histopathology.",
            "Discuss the preferred removal method, number of tags to be treated per session, and expected recovery.",
            "A topical anaesthetic cream (EMLA) may be prescribed for application 45–60 minutes before the procedure for patients who prefer it.",
            "No special preparation is needed for most skin tag removal procedures — patients can eat and drink normally beforehand.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Local anaesthetic (lidocaine injection) is administered if scissor excision or electrocautery of larger tags is planned.",
            "For small tags, topical anaesthetic cream or a brief cryotherapy application provides adequate pain control.",
            "Each tag is removed individually; multiple tags can often be treated in a single session.",
            "The procedure is quick — removal of 5–10 tags typically takes 15–20 minutes.",
            "Minimal bleeding occurs; electrocautery simultaneously seals small blood vessels.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Apply the prescribed antiseptic or healing ointment to treated sites for 3–5 days.",
            "Cover larger removal sites with a sterile dressing for the first 24–48 hours.",
            "Do not submerge treated areas in water (swimming, long baths) for the first 48 hours.",
            "Small scabs will form and fall off naturally within 7–14 days — do not pick or scratch them.",
            "Apply SPF 50+ sunscreen to healed sites to prevent post-inflammatory darkening.",
            "New skin tags may develop at other sites over time due to ongoing friction or metabolic factors — these can be treated at follow-up appointments.",
          ],
        },
      ]}
      aftercareTips={[
        "Keep treated sites clean and dry; apply a small amount of prescribed antiseptic or petroleum jelly and cover with a plaster for the first few days.",
        "Avoid tight jewellery, necklaces, or clothing rubbing against treated neck or axillary sites until healing is complete.",
        "Apply SPF 50+ sunscreen to any treated areas on the neck or face once healed to prevent darkening of the treatment site.",
        "Maintain a healthy body weight — reducing skin-to-skin friction at skin folds significantly decreases the likelihood of new skin tags developing.",
        "Wear loose, breathable cotton clothing in areas prone to skin tags (neck, axillae, groin) to minimise friction.",
        "If you have been identified as having insulin resistance or diabetes, follow your prescribed management plan — controlling blood sugar reduces new skin tag formation.",
        "Do not attempt to remove skin tags at home by tying a thread around the stalk — this can cause pain, infection, bleeding, and incomplete removal.",
        "Attend follow-up if you notice new tags, or if any treated site develops prolonged redness, discharge, or fails to heal normally.",
      ]}
      benefits={[
        "Immediate, complete removal with minimal discomfort in a single or few clinic sessions.",
        "No significant downtime — most patients return to daily activities the same day.",
        "Relief from irritation, snagging on clothing and jewellery, and cosmetic improvement.",
        "Metabolic health screening identifies underlying insulin resistance that may be driving tag formation.",
        "Expert assessment ensures accurate diagnosis, ruling out any atypical lesions requiring further evaluation.",
      ]}
      faqs={[
        {
          q: "Are skin tags dangerous or can they become cancerous?",
          a: "Skin tags (acrochordons) are entirely benign and do not become cancerous. They are non-malignant overgrowths of normal skin tissue. However, if a lesion looks unusual — irregular colour, rapid growth, bleeding, or hardness — it should be assessed by Dr. Sireesha to confirm it is truly a skin tag and not something else.",
        },
        {
          q: "Can I remove a skin tag at home?",
          a: "Home removal is not recommended. Attempting to cut or tie off skin tags at home can cause pain, significant bleeding, infection, and scarring. Professional removal by Dr. Sireesha is safe, quick, virtually painless with local anaesthesia, and heals cleanly. The procedure takes only minutes and the results are immediate.",
        },
        {
          q: "Do skin tags grow back after removal?",
          a: "Once a skin tag is properly removed, it does not regrow at that exact site. However, new skin tags may develop at other skin fold areas over time due to ongoing friction, weight gain, or metabolic factors like insulin resistance. Addressing these underlying factors reduces the likelihood of new tags.",
        },
        {
          q: "Why do I keep getting new skin tags?",
          a: "Multiple or recurring skin tags suggest ongoing contributing factors: overweight (increased skin friction), insulin resistance or diabetes (elevated insulin stimulates skin cell growth), and hormonal changes (pregnancy, ageing). Dr. Sireesha can screen for insulin resistance and provide guidance on metabolic risk factors to reduce new tag formation.",
        },
        {
          q: "Is skin tag removal painful?",
          a: "With appropriate anaesthesia, skin tag removal is essentially painless. Topical anaesthetic cream applied before the procedure numbs small tags. Local anaesthetic injection is used for larger tags or scissor excision. After the procedure, mild tenderness or stinging at the site settles within a day or two and is managed with standard analgesics.",
        },
        {
          q: "How long does skin tag removal take?",
          a: "Removing a single small skin tag takes 2–5 minutes. Multiple tags (5–10) can be treated in a single 15–20 minute appointment. The entire process including preparation and wound care is completed within 30 minutes for most patients. You can return to normal activities immediately after.",
        },
        {
          q: "Will skin tag removal leave a scar?",
          a: "When performed by a trained dermatologist, skin tag removal leaves minimal to no visible scarring. Small tags removed by electrocautery or cryotherapy typically leave a tiny, fading pink spot that blends with surrounding skin within weeks. Scissor excision may leave a very small, flat scar, particularly for larger tags.",
        },
        {
          q: "Are skin tags related to diabetes?",
          a: "Yes, there is an association between multiple skin tags and insulin resistance, which is a precursor to type 2 diabetes. Elevated insulin levels are thought to stimulate skin cell growth, leading to skin tag formation. Patients with numerous skin tags — especially in the neck region alongside darkened, velvety skin (acanthosis nigricans) — should be screened for insulin resistance and blood glucose abnormalities.",
        },
      ]}
      relatedLinks={[
        { label: "Wart Removal", href: "/skin-treatments/warts" },
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
        { label: "Scar Treatment", href: "/skin-treatments/scar-treatment" },
      ]}
      ctaHeading="Want Skin Tags Removed Safely in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Any atypical skin lesion should be assessed by a qualified dermatologist before removal. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a clinical examination and appropriate removal procedure."
    />
  );
}
