import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psoriasis Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "సోరియాసిస్ చికిత్స (Psoriasis treatment) in Nandyala by Dr. Sireesha MD. చర్మంపై తెల్లటి పొలుసులు (scaly skin plaques). Topical therapy, NB-UVB phototherapy, methotrexate & biologics for plaque, scalp and nail psoriasis.",
  keywords: ["సోరియాసిస్ చికిత్స", "psoriasis treatment Nandyala", "చర్మం పొలుసులు చికిత్స", "scalp psoriasis Nandyala", "NB-UVB phototherapy Nandyala", "చర్మవ్యాధి నిపుణుడు Nandyala"],
  alternates: { canonical: "https://yashvini.in/skin-treatments/psoriasis" },
};

export default function PsoriasisPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="psoriasis"
      h1="Psoriasis Treatment in Nandyala"
      subtitle="Psoriasis is a chronic autoimmune skin condition causing thick, scaly plaques that can be both physically uncomfortable and emotionally distressing. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers a full range of treatments from topical therapy to advanced biologics."
      whatIsTitle="What Is Psoriasis?"
      whatIsContent={[
        "Psoriasis is a chronic, immune-mediated inflammatory disease in which an overactive immune system accelerates the skin cell lifecycle. Normal skin cells take about 28–30 days to mature and shed; in psoriasis, this cycle is compressed to just 3–5 days. The result is a build-up of skin cells on the surface, forming thick, red, silvery-scaled plaques.",
        "Psoriasis affects approximately 2–3% of the world's population and can develop at any age, though it most commonly appears between 15–35 years. It is a systemic condition — the same inflammatory process that affects the skin can involve the joints (psoriatic arthritis), eyes, and cardiovascular system. This makes comprehensive assessment and treatment important beyond just skin clearance.",
        "Although the exact cause is not fully understood, psoriasis is clearly linked to genetic susceptibility combined with environmental triggers. It is not contagious. In South Indian patients, the condition can present with less silvery scaling (due to skin tone), making diagnosis important to differentiate from other conditions like seborrhoeic dermatitis or fungal infections.",
      ]}
      causes={[
        { icon: "🧬", cause: "Genetic predisposition (family history of psoriasis)" },
        { icon: "🦠", cause: "Streptococcal throat infection triggering guttate psoriasis" },
        { icon: "💊", cause: "Certain medications (lithium, beta-blockers, antimalarials)" },
        { icon: "😰", cause: "Psychological stress worsening or triggering flares" },
        { icon: "🍺", cause: "Alcohol consumption exacerbating psoriasis" },
        { icon: "🚬", cause: "Smoking increasing psoriasis severity and cardiovascular risk" },
        { icon: "🩹", cause: "Skin injury triggering plaques (Koebner phenomenon)" },
        { icon: "🌞", cause: "Sunburn — though moderate sun can also improve psoriasis" },
      ]}
      symptomsOrTypes={[
        {
          title: "Plaque Psoriasis (Psoriasis Vulgaris)",
          desc: "The most common form, accounting for about 80% of cases. Raised, inflamed, red-to-pink patches covered with silvery-white scales. Appear on elbows, knees, scalp, and lower back. Can be itchy and sometimes painful.",
        },
        {
          title: "Scalp Psoriasis",
          desc: "Affects the scalp in many psoriasis patients, ranging from mild flaking (mistaken for dandruff) to thick, crusted plaques covering the entire scalp. Can extend to the forehead, neck, and ears. Causes significant distress and social embarrassment.",
        },
        {
          title: "Nail Psoriasis",
          desc: "Affects fingernails and toenails in up to 50% of psoriasis patients. Presents as pitting (small depressions), onycholysis (nail separating from the bed), yellowing, thickening, and crumbling of the nail. Associated with a higher risk of psoriatic arthritis.",
        },
        {
          title: "Guttate Psoriasis",
          desc: "Small, drop-shaped lesions appearing suddenly, often after a streptococcal throat infection. More common in children and young adults. Many cases resolve spontaneously; others progress to plaque psoriasis.",
        },
        {
          title: "Psoriatic Arthritis",
          desc: "An inflammatory arthritis occurring in up to 30% of psoriasis patients. Causes joint pain, stiffness, swelling, and can lead to joint damage if untreated. Joint involvement may appear before, with, or after skin disease. Requires rheumatological input.",
        },
        {
          title: "Inverse / Flexural Psoriasis",
          desc: "Affects skin folds — axillae (armpits), groin, under the breasts, and buttocks. Presents as smooth, red, inflamed patches without the typical scaling due to friction and moisture. Common in overweight patients and can be confused with fungal infection.",
        },
      ]}
      treatments={[
        {
          icon: "🧴",
          title: "Topical Treatments",
          desc: "First-line therapy for mild to moderate psoriasis. Topical corticosteroids reduce inflammation and scaling. Vitamin D analogues (calcipotriol) slow skin cell growth and are especially effective when combined with a corticosteroid. Coal tar preparations reduce scaling and itching. Salicylic acid keratolytics help remove thick scale to improve absorption of other treatments.",
        },
        {
          icon: "🔆",
          title: "NB-UVB Phototherapy",
          desc: "Narrowband UVB (311 nm) is the gold-standard phototherapy for moderate to severe psoriasis. It works by slowing the rapid skin cell turnover and modulating the immune response. Sessions are 2–3 times per week in clinic. A full course of 30–36 sessions produces excellent clearance. Particularly useful for widespread plaque and guttate psoriasis. Safe in pregnancy and for children.",
        },
        {
          icon: "💊",
          title: "Systemic Therapy: Methotrexate",
          desc: "An oral or injectable immunosuppressant used for moderate to severe psoriasis. Highly effective, especially for psoriatic arthritis. Requires regular liver function tests and blood counts. Contraindicated in pregnancy — reliable contraception is essential. Dr. Sireesha monitors patients closely on methotrexate.",
        },
        {
          icon: "🔬",
          title: "Systemic Therapy: Cyclosporine",
          desc: "A potent immunosuppressant that rapidly clears severe psoriasis. Used for short-term control of very severe or erythrodermic psoriasis. Requires monitoring of blood pressure and kidney function. Not suitable for long-term use.",
        },
        {
          icon: "💉",
          title: "Biologic Therapy",
          desc: "Targeted injectable medications that block specific immune proteins (TNF-α, IL-17, IL-23) driving psoriasis. Examples include adalimumab, secukinumab, ixekizumab, and risankizumab. Biologics achieve clear or almost-clear skin in the majority of patients and dramatically improve quality of life. Suitable for moderate-to-severe psoriasis not controlled by other treatments. Dr. Sireesha assesses eligibility carefully.",
        },
        {
          icon: "🌿",
          title: "Emollients and Scalp Treatments",
          desc: "Regular moisturiser use reduces scaling, reduces itch, and decreases the need for anti-inflammatory treatments. Scalp psoriasis is treated with medicated shampoos (coal tar, ketoconazole, salicylic acid), scalp solutions (clobetasol), and scalp phototherapy. Consistent emollient use is foundational to all psoriasis management.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A thorough clinical assessment by Dr. Sireesha to determine psoriasis type, extent (BSA %), and severity (PASI score).",
            "Screening for psoriatic arthritis — joint symptoms must be identified and addressed early to prevent joint damage.",
            "Baseline blood tests (full blood count, liver function, renal function, hepatitis B/C serology) before starting systemic therapy.",
            "Review of all current medications — some can trigger or worsen psoriasis.",
            "Assessment of comorbidities: obesity, hypertension, diabetes, and cardiovascular disease are more common in psoriasis patients.",
            "Discussion of lifestyle factors: alcohol reduction and smoking cessation significantly improve treatment response.",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Topical treatments applied as directed — applying to plaques only, not normal skin; use measuring tools (fingertip unit) for correct quantities.",
            "Phototherapy sessions attended as scheduled; missing sessions reduces efficacy. Protect eyes and genitals with appropriate shields during NB-UVB.",
            "Methotrexate or cyclosporine monitoring blood tests at regular intervals as directed.",
            "Biologic injections administered as per schedule; injection site rotation minimises discomfort.",
            "Report any new infections (especially respiratory), as these may need to be managed before continuing immunosuppressive therapy.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Maintain emollient use daily even during remission to protect the skin barrier and reduce flare risk.",
            "Continue to attend monitoring appointments for systemic treatments — regular blood tests are not optional.",
            "Moderate sun exposure (15–20 minutes daily, avoiding sunburn) can help maintain remission.",
            "Manage lifestyle triggers: reduce stress, limit alcohol, maintain a healthy weight.",
            "Report any new joint pains or swelling promptly — psoriatic arthritis can develop at any time.",
            "Understand that psoriasis may relapse — a plan for managing future flares should be in place with Dr. Sireesha.",
          ],
        },
      ]}
      aftercareTips={[
        "Moisturise affected skin liberally at least twice daily with a thick, fragrance-free emollient — this reduces scaling and itch significantly.",
        "Take short, lukewarm baths or showers rather than long, hot ones; add bath oils or colloidal oatmeal to bathwater for soothing relief.",
        "Avoid scratching or picking at plaques — this can trigger the Koebner phenomenon (new plaques appearing at sites of injury).",
        "Identify and manage stress through yoga, meditation, regular exercise, or counselling — stress is one of the most common psoriasis flare triggers.",
        "Limit or eliminate alcohol, which not only triggers flares but also reduces the efficacy of treatments like methotrexate.",
        "Eat a balanced, anti-inflammatory diet rich in oily fish, fruits, vegetables, and whole grains. Obesity worsens psoriasis severity.",
        "Protect skin from injury — use gloves for manual work, protect elbows and knees when gardening or doing physical work.",
        "Take all medications as prescribed and attend all follow-up appointments — psoriasis management requires consistent monitoring and dose adjustments.",
      ]}
      benefits={[
        "Significant skin clearance achievable with modern treatments, including clear or near-clear skin with biologic therapy.",
        "Dramatic improvement in quality of life — relief from itch, scaling, and the social and emotional burden of visible skin disease.",
        "Joint protection through early identification and treatment of psoriatic arthritis.",
        "Access to the full range of treatments from topical to advanced biologics, guided by Dr. Sireesha.",
        "Ongoing monitoring and long-term management relationship to keep psoriasis under control.",
      ]}
      faqs={[
        {
          q: "Is psoriasis contagious?",
          a: "No, psoriasis is absolutely not contagious. It cannot be spread through skin contact, sharing utensils, or any other means. It is an autoimmune condition driven by the patient's own immune system. Educating family, friends, and colleagues about this helps reduce stigma.",
        },
        {
          q: "Can psoriasis affect the joints?",
          a: "Yes. Up to 30% of people with psoriasis develop psoriatic arthritis, an inflammatory arthritis that can cause joint pain, swelling, stiffness, and long-term joint damage if untreated. Any joint symptoms should be reported to Dr. Sireesha immediately for appropriate assessment and management.",
        },
        {
          q: "Is there a permanent cure for psoriasis?",
          a: "Currently, there is no permanent cure for psoriasis. It is a lifelong condition that can be very effectively controlled with treatment. Many patients achieve sustained remission — months to years of clear skin — with modern biologics and phototherapy. The goal is to keep the disease well-controlled with minimal impact on daily life.",
        },
        {
          q: "What is the best treatment for psoriasis in Nandyala?",
          a: "The best treatment depends on the type and severity of your psoriasis. Mild psoriasis responds well to topical treatments and emollients. Moderate-to-severe psoriasis is treated with NB-UVB phototherapy, systemic agents like methotrexate, or biologic injections. Dr. Sireesha will create a personalised treatment plan based on your specific situation.",
        },
        {
          q: "Does diet affect psoriasis?",
          a: "While no single diet cures psoriasis, diet influences disease severity. Obesity significantly worsens psoriasis and reduces treatment response. An anti-inflammatory diet (Mediterranean-style), limiting processed foods, sugar, alcohol, and red meat, while including oily fish, fruits, and vegetables, can help. Weight loss in overweight patients consistently improves psoriasis.",
        },
        {
          q: "Is sunlight good or bad for psoriasis?",
          a: "Moderate, controlled sun exposure (15–20 minutes daily without burning) is beneficial for most psoriasis patients, as UV light slows the rapid skin cell turnover driving psoriasis. This is the basis for phototherapy. However, sunburn can trigger a flare (Koebner phenomenon) and must be avoided.",
        },
        {
          q: "Can I use steroid cream for psoriasis long-term?",
          a: "Topical corticosteroids should not be used continuously in the same area for extended periods, as this can cause skin thinning, stretch marks, and rebound worsening on withdrawal. Dr. Sireesha prescribes steroids for defined courses and combines them with vitamin D analogues or rotates with steroid-sparing agents for safer long-term management.",
        },
        {
          q: "What are biologics for psoriasis and are they safe?",
          a: "Biologics are injectable medications that target specific proteins in the immune system (such as TNF-alpha, IL-17, or IL-23) that drive psoriasis inflammation. They are highly effective, achieving clear or almost-clear skin in the majority of patients. They have a well-established safety profile when monitored appropriately. Dr. Sireesha reviews eligibility and manages biologic therapy comprehensively.",
        },
      ]}
      relatedLinks={[
        { label: "Eczema Treatment", href: "/skin-treatments/eczema" },
        { label: "Vitiligo Treatment", href: "/skin-treatments/vitiligo" },
        { label: "Skin Allergy Treatment", href: "/skin-treatments/skin-allergy" },
        { label: "Dandruff Treatment", href: "/hair-treatments/dandruff" },
      ]}
      teluguFaqs={[
        {
          q: "సోరియాసిస్ అంటువ్యాధా?",
          a: "కాదు. సోరియాసిస్ అంటువ్యాధి కాదు. ఇది autoimmune వ్యాధి. స్పర్శ, మాట్లాడటం, లేదా ఏ విధంగాను వ్యాపించదు. చాలా మంది ఈ విషయంలో అపోహలు కలిగి ఉంటారు — ఈ విషయం అందరికి తెలియజేయడం అవసరం.",
          en: "No. Psoriasis is not contagious. It is an autoimmune disease. It cannot spread through touch, talking, or any other means. Many people have misconceptions about this — spreading awareness is important.",
        },
        {
          q: "సోరియాసిస్ కు NB-UVB చికిత్స ప్రభావవంతంగా ఉంటుందా?",
          a: "అవును. NB-UVB phototherapy moderate to severe psoriasis కు gold-standard చికిత్స. Nandyala లో Yashvini Skin & Hair Clinic లో Dr. Sireesha ఈ చికిత్స అందిస్తారు. 30–36 sessions తర్వాత గొప్ప ఫలితాలు కనిపిస్తాయి.",
          en: "Yes. NB-UVB phototherapy is the gold-standard treatment for moderate to severe psoriasis. Dr. Sireesha provides this treatment at Yashvini Skin & Hair Clinic in Nandyala. Excellent results appear after 30–36 sessions.",
        },
        {
          q: "సోరియాసిస్ తో జీవించడం ఎంత కష్టం?",
          a: "సోరియాసిస్ చర్మ వ్యాధి మాత్రమే కాదు — joints, eyes, మరియు మానసిక ఆరోగ్యాన్ని కూడా ప్రభావితం చేస్తుంది. సరైన చికిత్సతో జీవన నాణ్యత గణనీయంగా మెరుగుపడుతుంది.",
          en: "Psoriasis is not just a skin disease — it can affect joints, eyes, and mental health too. With proper treatment, quality of life improves significantly.",
        },
      ]}
      ctaHeading="Struggling with Psoriasis in Nandyala? We Can Help."
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Psoriasis is a chronic condition that requires personalised, long-term management. Results vary between individuals. Please consult Dr. Sireesha at Yashvini Skin & Hair Clinic for a comprehensive evaluation and treatment plan."
    />
  );
}
