import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fungal Skin Infection Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "ఫంగల్ ఇన్ఫెక్షన్ చికిత్స (Fungal skin infection treatment) in Nandyala by Dr. Sireesha MD. Expert care for tinea, ringworm & tinea incognito caused by steroid-antifungal cream misuse.",
  keywords: ["ఫంగల్ ఇన్ఫెక్షన్ చికిత్స", "fungal infection treatment Nandyala", "గజ్జల దురద చికిత్స", "ringworm treatment Nandyala", "చర్మవ్యాధి నిపుణుడు Nandyala"],
  alternates: { canonical: "https://yashvini.in/skin-treatments/fungal-infection" },
};

export default function FungalInfectionPage() {
  return (
    <TreatmentPage
      badge="Skin Treatment"
      illustration="fungal-infection"
      h1="Fungal Skin Infection Treatment in Nandyala"
      subtitle="Fungal skin infections are extremely common in South India due to the warm, humid climate — and Nandyala is no exception. Dr. Sireesha at Yashvini Skin & Hair Clinic provides accurate diagnosis and effective treatment, including management of the growing problem of steroid-modified fungal infections."
      whatIsTitle="What Are Fungal Skin Infections?"
      whatIsContent={[
        "Fungal skin infections are caused by dermatophytes, yeasts, or moulds that colonise and infect the skin, hair, or nails. Dermatophytes (such as Trichophyton rubrum and Trichophyton mentagrophytes) are responsible for the most common infections collectively known as 'tinea' or 'ringworm' — despite having nothing to do with worms. They thrive in warm, moist environments and feed on keratin, the protein found in skin, hair, and nails.",
        "South India's hot and humid climate creates ideal conditions for fungal infections, making them disproportionately prevalent in this region. Nandyala's patients frequently present with tinea corporis (body ringworm), tinea cruris (jock itch), tinea pedis (athlete's foot), and tinea versicolor — often with a history of prolonged symptoms due to delayed or incorrect treatment.",
        "A particularly important and growing public health problem in India is the misuse of over-the-counter combination creams containing antifungals, steroids, and antibiotics (such as clotrimazole + betamethasone). These creams suppress the visible symptoms without curing the infection, leading to 'tinea incognito' — a modified, atypical presentation that is harder to diagnose and treat. Dr. Sireesha identifies and manages these complicated cases, which are increasingly common in Nandyala.",
      ]}
      causes={[
        { icon: "🌡️", cause: "Hot and humid South Indian climate promoting fungal growth" },
        { icon: "💧", cause: "Excessive sweating without prompt cleansing and drying" },
        { icon: "🧢", cause: "Wearing tight, synthetic, non-breathable clothing" },
        { icon: "👟", cause: "Sharing shoes, socks, towels, or clothing with infected individuals" },
        { icon: "🏊", cause: "Walking barefoot in communal showers, pools, or public areas" },
        { icon: "🐾", cause: "Contact with infected animals (cattle, dogs, cats)" },
        { icon: "🩺", cause: "Immunosuppression (diabetes, HIV, steroid use) increasing susceptibility" },
        { icon: "🧴", cause: "Misuse of steroid-antifungal combination creams causing tinea incognito" },
        { icon: "💊", cause: "Prolonged antibiotic use altering skin microbiome" },
      ]}
      symptomsOrTypes={[
        {
          title: "Tinea Corporis (Ringworm / Body Ringworm)",
          desc: "Ring-shaped, scaly, itchy patches on the body with a raised, active border and clearer centre. The classic 'ring' appearance may be absent in tinea incognito due to steroid cream use. Can spread rapidly without correct treatment.",
        },
        {
          title: "Tinea Cruris (Jock Itch)",
          desc: "Fungal infection of the groin, inner thighs, and buttocks. Presents as a red, itchy, scaly rash with a defined edge. Very common in South Indian men due to heat and sweat. Wearing loose, breathable cotton underwear is an important part of prevention.",
        },
        {
          title: "Tinea Pedis (Athlete's Foot)",
          desc: "Affects the spaces between the toes and the soles of the feet. Causes itching, burning, scaling, and sometimes blisters. The most common dermatophyte infection globally. Can lead to secondary bacterial infection if untreated.",
        },
        {
          title: "Tinea Versicolor (Pityriasis Versicolor)",
          desc: "Caused by Malassezia yeast (not a dermatophyte). Presents as hypo- or hyperpigmented patches on the trunk, neck, and upper arms. The patches are more visible after tanning, which is common in South Indian patients. Tends to recur in hot, humid weather.",
        },
        {
          title: "Onychomycosis (Nail Fungal Infection)",
          desc: "Fungal infection of fingernails or toenails causing thickening, yellowing, crumbling, and separation of the nail from the bed. Difficult to treat and requires long courses of oral antifungals. More common in toenails and in patients with diabetes.",
        },
        {
          title: "Tinea Incognito (Steroid-Modified Tinea)",
          desc: "A modified fungal infection caused by prolonged use of steroid-containing creams (often purchased without prescription). The steroids suppress visible inflammation, making the rash look less 'typical' while allowing the fungus to spread and become resistant. Increasingly common in India and requires careful diagnosis and longer treatment courses.",
        },
      ]}
      treatments={[
        {
          icon: "🧴",
          title: "Topical Antifungals",
          desc: "First-line treatment for uncomplicated superficial fungal infections. Clotrimazole (1%), luliconazole (1%), and terbinafine (1%) creams are applied directly to the affected area. Luliconazole and terbinafine have superior efficacy and shorter treatment courses. Topical treatments must be applied for the full recommended duration (usually 2–4 weeks) even if symptoms resolve early to prevent relapse.",
        },
        {
          icon: "💊",
          title: "Oral Antifungals",
          desc: "Required for extensive, resistant, or nail infections. Terbinafine (250 mg daily) is highly effective for dermatophyte infections. Itraconazole is used for nail infections and tinea versicolor. Fluconazole is effective for Candida and tinea versicolor. Duration varies: 2–4 weeks for tinea corporis/cruris, 6 weeks for fingernail, and 12 weeks for toenail onychomycosis. Liver function monitoring may be needed.",
        },
        {
          icon: "🔬",
          title: "Management of Tinea Incognito",
          desc: "Tinea incognito requires immediate cessation of all steroid-containing creams. As the steroid effect wears off, the rash may initially appear worse — patients must be counselled about this. A course of appropriate oral antifungals combined with a plain (non-steroidal) topical antifungal is prescribed. Treatment is often longer than for standard infections.",
        },
        {
          icon: "🌿",
          title: "Medicated Shampoos for Tinea Versicolor",
          desc: "Ketoconazole 2% or selenium sulphide shampoos applied to the affected areas for 10–15 minutes before washing off are effective for tinea versicolor. Used 2–3 times per week during the treatment phase. Maintenance use once weekly during hot months helps prevent recurrence.",
        },
        {
          icon: "🛡️",
          title: "Prevention and Hygiene Measures",
          desc: "Treating fungal infections without addressing hygiene leads to relapse. Dr. Sireesha provides guidance on keeping affected areas clean and dry, wearing breathable footwear, not sharing personal items, and appropriate footwear in public spaces.",
        },
        {
          icon: "🩺",
          title: "Underlying Condition Management",
          desc: "Patients with recurrent or extensive fungal infections are screened for diabetes mellitus and immune deficiency, as uncontrolled blood sugar is a major risk factor. Optimising blood glucose control is essential for successful treatment and prevention of recurrence.",
        },
      ]}
      phases={[
        {
          phase: "Before Treatment",
          icon: "📋",
          points: [
            "A clinical examination by Dr. Sireesha to identify the type and extent of infection, and whether tinea incognito is present.",
            "A skin scraping (KOH mount or fungal culture) may be performed to confirm the diagnosis, especially in atypical presentations.",
            "Disclose all topical creams currently in use — including any combination creams purchased without prescription.",
            "Blood glucose check if recurrent or extensive fungal infections suggest underlying diabetes.",
            "Review personal hygiene habits and identify contributing factors (tight clothing, shared footwear, high-sweat lifestyle).",
          ],
        },
        {
          phase: "During Treatment",
          icon: "⚙️",
          points: [
            "Apply topical antifungals as directed — a thin layer covering the lesion and 2 cm beyond its edge, twice daily.",
            "Continue topical treatment for the full prescribed course even if the rash appears to have resolved.",
            "Take oral antifungals with food to improve absorption and reduce gastrointestinal side effects.",
            "Avoid all steroid-containing creams on the affected area during and after treatment.",
            "For tinea pedis and nail infections, keep feet dry, wear moisture-wicking socks, and change socks daily.",
          ],
        },
        {
          phase: "After Treatment",
          icon: "🌿",
          points: [
            "Complete the full course of treatment — premature stopping is the most common cause of relapse and resistance.",
            "Maintain hygiene practices: keep skin folds dry, use antifungal dusting powder in susceptible areas during hot months.",
            "For tinea versicolor, plan for maintenance therapy during summer months as the condition tends to recur.",
            "Wash and change clothing, towels, and socks that may be harbouring fungal spores.",
            "Follow up with Dr. Sireesha if the rash returns or does not fully resolve to rule out resistant infection.",
          ],
        },
      ]}
      aftercareTips={[
        "Keep all skin folds — groin, armpits, between toes, and under the breasts — clean and dry throughout the day, especially in Nandyala's humid climate.",
        "Wear loose, cotton, breathable clothing and underwear; avoid tight synthetic fabrics that trap heat and moisture.",
        "Change into dry clothes immediately after exercise or periods of heavy sweating — do not remain in damp clothing.",
        "Use a fresh towel daily and do not share towels, clothing, combs, or footwear with others.",
        "Wear footwear (flip-flops or sandals) in communal showers, swimming pools, and public changing areas.",
        "Use an antifungal dusting powder on susceptible areas (groin, feet) during hot and humid months as prevention.",
        "Never purchase or use cream without a prescription — many combination creams (antifungal + steroid) available over the counter cause tinea incognito and should be avoided entirely.",
        "If you have diabetes, maintain good blood glucose control — uncontrolled diabetes is the single biggest risk factor for recurrent and resistant fungal infections.",
      ]}
      benefits={[
        "Accurate identification of infection type, including tinea incognito, for targeted and effective treatment.",
        "Rapid symptom relief with appropriate antifungal therapy.",
        "Prevention of spread to family members and contacts through proper diagnosis and treatment.",
        "Long-term resolution when the full treatment course is completed and hygiene measures are followed.",
        "Screening for underlying conditions (e.g., diabetes) that may be driving recurrent infections.",
      ]}
      faqs={[
        {
          q: "Why do fungal infections keep coming back despite treatment?",
          a: "Recurrence is usually due to incomplete treatment (stopping the cream when symptoms improve rather than completing the course), continued use of steroid-containing combination creams, failure to address hygiene factors, re-infection from a shared source (footwear, towels), or an underlying condition like diabetes. Dr. Sireesha will identify the specific reason for recurrence and address it.",
        },
        {
          q: "What is tinea incognito and why is it so common in India?",
          a: "Tinea incognito is a fungal infection that has been modified by inappropriate use of steroid-containing creams. The steroid suppresses the visible inflammation and itch temporarily, giving the impression of improvement — while the fungus continues to spread underneath. In India, combination creams are widely available without prescription and are frequently self-prescribed, making tinea incognito very common. It requires cessation of the steroid cream and a longer course of appropriate antifungals.",
        },
        {
          q: "Is ringworm caused by a worm?",
          a: "No — ringworm has nothing to do with worms. It is a fungal infection caused by dermatophytes. The name comes from the ring-shaped appearance of the rash. It is caused by the same type of fungi responsible for athlete's foot and jock itch.",
        },
        {
          q: "How long does fungal infection treatment take?",
          a: "For tinea corporis and cruris, 2–4 weeks of topical antifungal is usually sufficient if started early. Nail fungal infections (onychomycosis) require 6–12 weeks of oral antifungals. Tinea incognito or resistant infections need longer courses. Completing the full prescribed duration is essential to prevent relapse.",
        },
        {
          q: "Can fungal infections spread from person to person?",
          a: "Yes, dermatophyte infections are contagious. They can spread through direct skin-to-skin contact with an infected person, or indirectly through shared towels, clothing, footwear, or surfaces (like communal shower floors). Prompt treatment and good hygiene prevent spread within households.",
        },
        {
          q: "Is it safe to use antifungal creams during pregnancy?",
          a: "Some topical antifungals (such as clotrimazole) are considered safe during pregnancy. Oral antifungals, however, should be avoided during the first trimester. Dr. Sireesha will recommend the safest and most appropriate option for pregnant patients.",
        },
        {
          q: "Can I get a fungal infection from my pet?",
          a: "Yes. Tinea corporis (ringworm) can be transmitted from infected cats, dogs, and cattle. If a pet has patchy hair loss or skin scaling, they should be assessed by a veterinarian. Family members who develop a skin rash after contact with an animal should consult Dr. Sireesha for assessment.",
        },
        {
          q: "Does diet affect fungal skin infections?",
          a: "For cutaneous (skin) fungal infections, diet is not a major factor — though high blood sugar in diabetes significantly increases susceptibility. A balanced diet that maintains healthy immunity is beneficial. Claims that anti-Candida diets cure skin fungal infections are not supported by clinical evidence for superficial infections.",
        },
      ]}
      relatedLinks={[
        { label: "Skin Allergy Treatment", href: "/skin-treatments/skin-allergy" },
        { label: "Eczema Treatment", href: "/skin-treatments/eczema" },
        { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
      ]}
      ctaHeading="Dealing with a Fungal Skin Infection in Nandyala?"
      disclaimer="This page is for informational purposes only and does not constitute medical advice. Please do not self-treat with over-the-counter combination creams. Consult Dr. Sireesha at Yashvini Skin & Hair Clinic for an accurate diagnosis and appropriate treatment."
      teluguFaqs={[
        {
          q: "ఫంగల్ ఇన్ఫెక్షన్ ఎందుకు వస్తుంది?",
          a: "వేడి, తేమ వాతావరణం, చెమట, నూలు కాని బట్టలు, షేర్ చేసిన టవల్స్ మరియు బలహీనమైన రోగ నిరోధక శక్తి ఫంగల్ ఇన్ఫెక్షన్ కి కారణాలు. చర్మం మడతల్లో (గజ్జలు, చంకలు) ఎక్కువగా వస్తుంది.",
          en: "Hot, humid weather, sweating, non-cotton clothing, shared towels and weak immunity cause fungal infections. Most common in skin folds like the groin and armpits.",
        },
        {
          q: "ఫంగల్ ఇన్ఫెక్షన్ కి స్టెరాయిడ్ క్రీమ్ వేయవచ్చా?",
          a: "వద్దు! స్టెరాయిడ్ క్రీమ్ ఫంగల్ ఇన్ఫెక్షన్ ని మరింత తీవ్రం చేస్తుంది. చర్మవ్యాధి నిపుణుడి సలహా లేకుండా ఎంతో మందికి లభించే కాంబినేషన్ స్టెరాయిడ్-యాంటీఫంగల్ క్రీమ్ వాడకండి.",
          en: "No! Steroid cream makes fungal infections worse. Do not use over-the-counter combination steroid-antifungal creams without a dermatologist's advice.",
        },
        {
          q: "ఫంగల్ ఇన్ఫెక్షన్ మళ్ళీ మళ్ళీ వస్తూ ఉంటే ఏం చేయాలి?",
          a: "పూర్తి కోర్సు చికిత్స పూర్తి చేయడం, శుభ్రత పాటించడం, మరియు చెమటను అరికట్టడం అవసరం. మధుమేహం ఉన్నవారికి రక్తంలో చక్కెర నియంత్రణ కూడా ముఖ్యం. పదే పదే వస్తే చర్మవ్యాధి నిపుణుడిని కలవండి.",
          en: "Complete the full treatment course, maintain hygiene, and control sweating. Blood sugar control is also important for diabetic patients. If recurring, see a dermatologist.",
        },
      ]}
    />
  );
}
