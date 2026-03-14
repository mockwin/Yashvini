import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin Allergy Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "Skin allergy treatment in Nandyala by Dr. Sireesha MD. Expert care for urticaria, contact dermatitis, angioedema & food allergies with patch testing and antihistamines.",
  alternates: { canonical: "https://yashvini.in/skin-treatments/skin-allergy" },
};

export default function SkinAllergyPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="skin-allergy"
      h1="Skin Allergy Treatment in Nandyala"
      subtitle="Skin allergies can cause anything from localised rashes to widespread hives and swelling — often appearing unpredictably and significantly disrupting daily life. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, specialises in identifying the cause and providing targeted, lasting relief."
      whatIsTitle="What Are Skin Allergies?"
      whatIsContent={[
        "Skin allergies occur when the immune system overreacts to a substance (allergen) that is harmless to most people. The immune response — involving IgE antibodies, mast cells, and histamine release — produces a range of skin reactions, from mild redness and itch to severe hives, swelling, or blistering. The presentation varies widely depending on the type of allergic reaction and the individual's immune sensitivity.",
        "The most common skin allergies seen in dermatology practice include allergic contact dermatitis (triggered by direct skin contact with an allergen such as nickel, hair dye, or cosmetics), urticaria/hives (raised, itchy wheals that appear suddenly), angioedema (deeper swelling under the skin, often affecting the lips, eyelids, or throat), and food allergy-related skin reactions.",
        "Correctly identifying the responsible allergen is crucial for effective management — and this requires careful clinical history, targeted testing (such as patch testing or skin prick testing), and sometimes a systematic elimination approach. Dr. Sireesha has expertise in this diagnostic process and works with patients to uncover triggers that may have been elusive for years.",
      ]}
      causes={[
        { icon: "💎", cause: "Metal contact (nickel in jewellery, belt buckles, watches)" },
        { icon: "🧴", cause: "Fragrances and preservatives in cosmetics and skincare" },
        { icon: "🌿", cause: "Plant contact (mango sap, latex, certain herbs)" },
        { icon: "🍽️", cause: "Food allergens (shellfish, nuts, milk, eggs, wheat)" },
        { icon: "💊", cause: "Medications (NSAIDs, antibiotics, aspirin)" },
        { icon: "🐝", cause: "Insect stings and bites" },
        { icon: "🧵", cause: "Synthetic fabrics, rubber, and adhesives in clothing or medical devices" },
        { icon: "🌬️", cause: "Airborne allergens (pollen, dust mites, animal dander)" },
      ]}
      symptomsOrTypes={[
        {
          title: "Allergic Contact Dermatitis",
          desc: "An itchy, red, sometimes blistering rash that appears at the site of allergen contact. Classic examples include ear-piercing sites reacting to nickel, or the hairline reacting to hair dye (para-phenylenediamine / PPD). Rash typically develops 24–72 hours after exposure due to the delayed (Type IV) immune response.",
        },
        {
          title: "Urticaria (Hives)",
          desc: "Raised, red or pink, intensely itchy wheals (welts) that appear suddenly anywhere on the body. Individual wheals last less than 24 hours but new ones may continuously appear. Acute urticaria lasts less than 6 weeks; chronic urticaria persists beyond 6 weeks and requires specialist management.",
        },
        {
          title: "Angioedema",
          desc: "Deep swelling under the skin (dermis/subcutis), commonly affecting the lips, eyelids, tongue, and throat. Often accompanies urticaria. Throat swelling can be a medical emergency (anaphylaxis). Patients with angioedema should have a clear action plan including access to emergency medication.",
        },
        {
          title: "Food Allergy-Related Skin Reactions",
          desc: "Food allergens can trigger urticaria, angioedema, eczema flares, and in severe cases, anaphylaxis. Common culprits include shellfish, peanuts, tree nuts, milk, eggs, wheat, and fish. Reactions typically develop within minutes to 2 hours of ingestion.",
        },
        {
          title: "Drug-Induced Skin Allergy",
          desc: "Medications can cause a wide range of skin reactions — from mild morbilliform (measles-like) rashes to severe conditions like Stevens-Johnson Syndrome (SJS) or DRESS syndrome. Any skin rash appearing after starting a new medication should be evaluated urgently by Dr. Sireesha.",
        },
        {
          title: "Chronic Spontaneous Urticaria",
          desc: "Urticaria occurring most days for more than 6 weeks with no identifiable external trigger. Driven by autoimmune mechanisms in many cases. Requires specialist management with second-generation antihistamines and, if needed, omalizumab (biologic therapy).",
        },
      ]}
      treatments={[
        {
          icon: "💊",
          title: "Antihistamines",
          desc: "The cornerstone of urticaria treatment. Second-generation, non-sedating antihistamines (cetirizine, fexofenadine, loratadine, bilastine) are taken daily to suppress histamine-mediated symptoms. For chronic urticaria, doses may be increased up to 4 times the standard dose under Dr. Sireesha's guidance. Older, sedating antihistamines (chlorphenamine) are used for acute flares or nighttime itch.",
        },
        {
          icon: "🔬",
          title: "Patch Testing",
          desc: "The definitive diagnostic test for allergic contact dermatitis. Standardised panels of common allergens are applied to the back under adhesive patches for 48 hours, then read at 48 and 96 hours. Identifies the specific substance(s) causing the allergic reaction so they can be avoided. Dr. Sireesha uses comprehensive European and Indian standard series.",
        },
        {
          icon: "🧴",
          title: "Topical Corticosteroids",
          desc: "Applied to localised areas of contact dermatitis or eczematous allergic reactions to reduce inflammation, redness, and itch. Prescribed in appropriate potencies based on the body site and severity. Used for short courses to manage acute flares.",
        },
        {
          icon: "💉",
          title: "Omalizumab for Chronic Urticaria",
          desc: "A monthly injectable biologic (anti-IgE) that dramatically reduces or eliminates hives in chronic spontaneous urticaria not controlled by antihistamines. Highly effective and well-tolerated. Dr. Sireesha assesses eligibility for omalizumab in patients with refractory chronic urticaria.",
        },
        {
          icon: "🚫",
          title: "Trigger Identification and Avoidance",
          desc: "Identifying and systematically avoiding the responsible allergen is the most effective long-term strategy. Dr. Sireesha provides detailed allergen avoidance counselling, including safe alternatives to identified allergens in cosmetics, jewellery, and food. This is particularly important for contact dermatitis and food allergy.",
        },
        {
          icon: "🏥",
          title: "Emergency Management and Action Plans",
          desc: "Patients with a history of severe allergic reactions or angioedema are provided with an emergency action plan, including when to use oral antihistamines, oral corticosteroids, and when to seek emergency care. Patients at risk of anaphylaxis are educated about the signs and the importance of calling emergency services.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A detailed allergy history: onset, duration, location of rash, potential triggers, occupation, cosmetics, jewellery, diet, and medications.",
            "Photograph acute reactions when possible to aid diagnosis, as hives are fleeting and may not be visible at the clinic visit.",
            "Patch testing appointment scheduled for allergic contact dermatitis — antihistamines and steroids may need to be stopped beforehand.",
            "Blood tests (total IgE, specific allergen IgE, complete blood count, thyroid function) may be ordered as part of the workup for chronic urticaria.",
            "Bring all current skincare, cosmetics, and household products to the appointment for ingredient review.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Antihistamines taken daily as prescribed — not just when symptoms appear, for chronic urticaria management.",
            "Topical corticosteroids applied to affected areas for the prescribed duration; avoid face and sensitive areas unless specifically directed.",
            "Patch test panels worn for 48 hours without wetting the back or exercising excessively.",
            "Omalizumab injections administered monthly in clinic; most patients notice improvement within 1–3 months.",
            "Identified allergens strictly avoided — even trace amounts can trigger reactions in sensitised individuals.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Continue allergen avoidance indefinitely for confirmed contact allergens — sensitisation is typically lifelong.",
            "Keep a symptom diary to track flares, potential triggers, and response to treatment.",
            "Review cosmetics, household products, and food labels for identified allergens with Dr. Sireesha's guidance.",
            "Follow-up appointments to reassess control and adjust antihistamine dose or escalate to biologic therapy if needed.",
            "Carry an emergency antihistamine or oral steroid if prescribed for breakthrough reactions.",
          ],
        },
      ]}
      aftercareTips={[
        "Read labels of all cosmetics, soaps, shampoos, and household products carefully — fragrance, preservatives (parabens, MI/MCI), and dyes are frequent contact allergens.",
        "Choose hypoallergenic, fragrance-free, dye-free products for skincare and laundry.",
        "Avoid wearing costume jewellery containing nickel — opt for surgical steel, titanium, 18-carat gold, or sterling silver pieces.",
        "If you have a food allergy, read all food labels and communicate your allergy clearly when eating outside.",
        "Keep skin well-moisturised with a fragrance-free emollient — a healthy skin barrier is less susceptible to allergic reactions.",
        "Wear cotton gloves when handling cleaning products, dish soap, or chemicals, and rinse hands thoroughly after removing gloves.",
        "Avoid scratching hives — this releases more histamine and worsens the itch. Cool compresses provide temporary relief.",
        "Inform all treating doctors and dentists about your known allergies, especially drug allergies, before any procedures.",
      ]}
      benefits={[
        "Accurate identification of the allergen through patch testing, enabling definitive avoidance rather than trial and error.",
        "Effective suppression of urticaria symptoms with antihistamines and, where needed, biologic therapy.",
        "Improved quality of life — freedom from unpredictable hives, itch, and the anxiety of unidentified triggers.",
        "A clear emergency action plan for patients with a history of severe reactions, providing confidence and safety.",
        "Comprehensive allergy workup including blood tests and patch testing performed by a specialist dermatologist.",
      ]}
      faqs={[
        {
          q: "How do I know if I have a skin allergy or just dry skin?",
          a: "Skin allergies typically present with sudden onset, significant itch, redness, and sometimes wheals (hives) or blisters. The distribution often follows the area of contact with the allergen. Dry skin is generally widespread, feels tight and rough, and improves with moisturiser. If you are unsure, Dr. Sireesha can diagnose the cause accurately.",
        },
        {
          q: "What is patch testing and does it hurt?",
          a: "Patch testing involves applying small amounts of common allergens on adhesive panels to the back, worn for 48 hours. It is painless during application. After removal, a positive reaction appears as a localised redness, raised area, or small blisters at a specific allergen site. The test is read at 48 and 96 hours by Dr. Sireesha.",
        },
        {
          q: "Can stress cause a skin allergy or hives?",
          a: "Yes. Psychological stress is a well-recognised trigger for urticaria flares — it does not cause the allergy itself but can precipitate or worsen hives through neuroimmune mechanisms. Managing stress through relaxation techniques, exercise, and sleep is a useful adjunct to medical management.",
        },
        {
          q: "What is the difference between urticaria and eczema?",
          a: "Urticaria (hives) involves raised, itchy wheals that appear and disappear within 24 hours, moving around the body. Individual wheals do not leave marks. Eczema is a chronic condition with persistent, dry, inflamed, and thickened skin in typical sites. Both can itch intensely, but they are distinct conditions with different causes and treatments.",
        },
        {
          q: "Is it safe to take antihistamines every day for chronic urticaria?",
          a: "Second-generation antihistamines (cetirizine, fexofenadine, loratadine, bilastine) are safe for daily, long-term use. They are non-sedating and well-tolerated. Unlike older antihistamines, they do not significantly affect alertness or driving. Dr. Sireesha will recommend the specific antihistamine and dose appropriate for your situation.",
        },
        {
          q: "Can children develop skin allergies?",
          a: "Yes, skin allergies are common in children. Atopic dermatitis (eczema) is one of the most common childhood conditions. Food allergies causing skin reactions are also prevalent in children. Contact dermatitis can develop at any age, even in toddlers (e.g., from nappy rash products or footwear materials).",
        },
        {
          q: "What is the best treatment for chronic hives?",
          a: "Daily second-generation antihistamines are the first-line treatment. If standard doses are insufficient, the dose can be increased (up to 4x) under Dr. Sireesha's guidance. If antihistamines at higher doses still fail to control symptoms, omalizumab (monthly injection) is highly effective and approved specifically for chronic spontaneous urticaria.",
        },
        {
          q: "Can I be allergic to my own jewellery?",
          a: "Yes, nickel allergy is one of the most common contact allergies worldwide. Nickel is found in most costume jewellery, belt buckles, watch straps, jeans buttons, and some eyeglass frames. Once sensitised, even brief contact triggers a localised, itchy rash. Patch testing confirms the diagnosis, and avoidance of nickel-containing items is the treatment.",
        },
      ]}
      relatedLinks={[
        { label: "Eczema Treatment", href: "/skin-treatments/eczema" },
        { label: "Psoriasis Treatment", href: "/skin-treatments/psoriasis" },
        { label: "Fungal Infection Treatment", href: "/skin-treatments/fungal-infection" },
        { label: "Rosacea Treatment", href: "/skin-treatments/rosacea" },
      ]}
      ctaHeading="Experiencing Skin Allergies or Hives in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. If you experience swelling of the lips, tongue, or throat (angioedema), seek emergency medical care immediately. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a full allergy assessment and personalised management plan."
    />
  );
}
