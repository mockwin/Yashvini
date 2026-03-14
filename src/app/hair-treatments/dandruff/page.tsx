import TreatmentPage from "@/components/TreatmentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dandruff Treatment in Nandyala | Yashvini Skin & Hair Clinic",
  description:
    "చుండ్రు చికిత్స (Dandruff treatment) in Nandyala by Dr. Sireesha MD Dermatology. తల చర్మం దురద (itchy scalp) and seborrheic dermatitis treated with medicated shampoos, antifungals & personalised scalp care.",
  keywords: ["చుండ్రు చికిత్స", "dandruff treatment Nandyala", "తల చర్మం దురద", "చుండ్రు Nandyala", "scalp treatment Nandyala"],
  alternates: { canonical: "https://yashvini.in/hair-treatments/dandruff" },
};

export default function DandruffPage() {
  return (
    <TreatmentPage
      badge="Hair Treatment"
      illustration="dandruff"
      h1="Dandruff Treatment in Nandyala"
      subtitle="Dandruff is one of the most prevalent scalp conditions in Andhra Pradesh, worsened by heat and humidity. Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala, offers medically supervised treatment to eliminate flaking, relieve scalp itch, and prevent recurrence."
      whatIsTitle="Understanding Dandruff & Seborrheic Dermatitis"
      whatIsContent={[
        "Dandruff (pityriasis capitis) is a common, non-contagious scalp condition characterised by excessive flaking of skin from the scalp, often accompanied by mild itching. It affects approximately 50% of the global adult population and is particularly common in South India due to the warm, humid climate that promotes yeast overgrowth on the scalp. The underlying cause is not dry skin, as commonly believed — dandruff is actually associated with an oily scalp and the overgrowth of a naturally occurring yeast called Malassezia (formerly Pityrosporum).",
        "Malassezia feeds on the sebum (natural oil) secreted by the scalp, converting it into oleic acid. In genetically susceptible individuals, oleic acid triggers an inflammatory response in the scalp skin, accelerating the rate of skin cell turnover. Instead of shedding imperceptibly, scalp skin cells clump together and fall as visible white or yellowish flakes. Seborrheic dermatitis is the more severe form of the same spectrum — it causes red, scaly, greasy patches on the scalp, hairline, eyebrows, sides of the nose, and behind the ears, and requires more targeted treatment.",
        "It is important to understand that dandruff is a chronic, relapsing condition — it can be effectively controlled but rarely eliminated permanently with a single course of treatment. A dermatologist-guided maintenance regimen is key to keeping it under control, particularly in a climate like Nandyala's where heat and humidity accelerate Malassezia overgrowth. Self-medication with non-medicated shampoos often provides only temporary cosmetic relief without addressing the underlying yeast and inflammation.",
      ]}
      causes={[
        { icon: "🦠", cause: "Malassezia yeast overgrowth on an oily scalp" },
        { icon: "🌡️", cause: "Hot and humid climate of Andhra Pradesh accelerating yeast growth" },
        { icon: "🧬", cause: "Genetic susceptibility to scalp inflammation" },
        { icon: "🛁", cause: "Infrequent or incorrect hair washing technique" },
        { icon: "🧴", cause: "Comedogenic hair oils (coconut, sesame) applied heavily to the scalp" },
        { icon: "😓", cause: "Stress and fatigue — well-documented triggers for seborrheic dermatitis flares" },
        { icon: "🍕", cause: "Diet high in sugar and refined carbohydrates feeding yeast overgrowth" },
        { icon: "⚗️", cause: "Hormonal fluctuations affecting sebum production" },
        { icon: "🩺", cause: "Neurological conditions (Parkinson's disease) associated with severe seborrheic dermatitis" },
        { icon: "💊", cause: "Certain medications (lithium, immunosuppressants) can trigger or worsen dandruff" },
      ]}
      symptomsOrTypes={[
        {
          title: "Simple Dandruff (Pityriasis Capitis)",
          desc: "White to grey, fine, dry flakes visible on the scalp and falling onto the shoulders. Mild to moderate itching, especially in humid weather or after sweating. The scalp is typically oily. No significant redness or inflammation. Responds well to anti-dandruff shampoos used consistently.",
        },
        {
          title: "Seborrheic Dermatitis — Scalp",
          desc: "A more severe, inflammatory form characterised by greasy, yellowish-white scales adherent to the scalp skin, along with redness and more intense itching. May extend to the hairline, behind the ears, and the nape of the neck. Often requires topical corticosteroid scalp lotions in addition to antifungal shampoos.",
        },
        {
          title: "Seborrheic Dermatitis — Facial",
          desc: "Involves the eyebrows, sides of the nose (nasolabial folds), and beard area in men. Presents as redness with greasy scales. Often occurs concurrently with scalp seborrheic dermatitis. Requires separate gentle antifungal creams or low-potency steroid creams for the face.",
        },
        {
          title: "Dandruff With Scalp Folliculitis",
          desc: "Bacterial superinfection of hair follicles can occur in severe dandruff cases, causing painful, pus-filled pimples on the scalp. This requires antibiotic treatment alongside antifungal therapy and should be distinguished from the primary dandruff condition.",
        },
        {
          title: "Dandruff-Triggered Hair Fall",
          desc: "Chronic scalp inflammation from uncontrolled dandruff or seborrheic dermatitis can weaken hair follicles and contribute to increased hair fall. Treating the underlying dandruff often leads to improvement in hair fall as the scalp inflammation resolves.",
        },
      ]}
      treatments={[
        {
          icon: "🧴",
          title: "Ketoconazole Shampoo",
          desc: "A prescription-strength antifungal shampoo (1% or 2%) that directly targets Malassezia yeast. Used 2–3 times per week initially, then once weekly for maintenance. One of the most effective first-line treatments for moderate to severe dandruff and seborrheic dermatitis.",
        },
        {
          icon: "⚗️",
          title: "Zinc Pyrithione Shampoo",
          desc: "Available over-the-counter (e.g., Head & Shoulders). Has antifungal and antibacterial properties. Suitable for mild dandruff and as a maintenance option after initial treatment with prescription shampoos.",
        },
        {
          icon: "🔬",
          title: "Selenium Sulfide Shampoo",
          desc: "Reduces Malassezia overgrowth and slows scalp cell turnover. Particularly useful for oily scalps and moderate dandruff. Applied twice weekly for 2 weeks, then once weekly. May cause mild discolouration of light-coloured or chemically treated hair.",
        },
        {
          icon: "🌿",
          title: "Ciclopirox Shampoo",
          desc: "A broad-spectrum antifungal shampoo with anti-inflammatory properties. Effective for seborrheic dermatitis and resistant dandruff. Less likely to cause hair discolouration than selenium sulfide.",
        },
        {
          icon: "🧪",
          title: "Topical Corticosteroid Scalp Lotions",
          desc: "Prescribed for scalp seborrheic dermatitis with significant inflammation and itching. Fluocinolone acetonide scalp solution or betamethasone valerate lotion may be used for short courses to reduce redness and itch. Not for long-term unsupervised use.",
        },
        {
          icon: "🌊",
          title: "Coal Tar Shampoo",
          desc: "Slows the rate of scalp skin cell division, reducing flaking. Has antifungal properties as well. Particularly helpful in thick, adherent scale. Less cosmetically acceptable due to smell, but effective for stubborn dandruff.",
        },
      ]}
      phases={[
        {
          phase: "Initial Treatment Phase",
          icon: "🧴",
          points: [
            "Use prescribed medicated shampoo 2–3 times per week for the first 4–6 weeks",
            "Leave the shampoo on the scalp for 3–5 minutes before rinsing thoroughly",
            "Apply topical corticosteroid lotion (if prescribed) to actively inflamed, itchy areas",
            "Avoid heavy oils or hair masks on the scalp during the treatment phase",
            "Wash hair with lukewarm (not hot) water — hot water stimulates sebum production",
          ],
        },
        {
          phase: "Maintenance Phase",
          icon: "🔄",
          points: [
            "After initial control, reduce medicated shampoo to once weekly for maintenance",
            "Alternate with a mild, sulphate-free regular shampoo on other wash days",
            "Continue monitoring scalp condition — increase frequency if flares recur",
            "Avoid sudden complete discontinuation of antifungal shampoo as relapse is common",
            "Return to clinic if scale returns, worsens, or spreads to the face or body",
          ],
        },
        {
          phase: "Long-Term Control",
          icon: "🌱",
          points: [
            "Dandruff is typically a lifelong condition requiring periodic maintenance",
            "Identify personal triggers (stress, diet, hot weather) and manage them proactively",
            "Light scalp massage during shampooing loosens scale without scratching",
            "Protect the scalp from excessive sun exposure in Nandyala's climate",
            "Annual review with Dr. Sireesha to assess scalp health and adjust regimen",
          ],
        },
      ]}
      aftercareTips={[
        "Wash your hair at least twice a week during active dandruff — under-washing allows scale and sebum to accumulate, worsening flaking.",
        "Leave medicated shampoo in contact with the scalp for at least 3–5 minutes before rinsing; washing it off immediately greatly reduces its effectiveness.",
        "Reduce or eliminate the use of heavy coconut or sesame oil applied directly to the scalp — these feed Malassezia yeast and can worsen dandruff in susceptible individuals.",
        "Use a separate, clean comb or brush; old combs can harbour fungal spores and reinfect a treated scalp.",
        "Manage stress through regular exercise, adequate sleep, and relaxation techniques — stress is a well-known trigger for seborrheic dermatitis flares.",
        "Reduce intake of sugary foods, refined carbohydrates, and alcohol, which are associated with yeast overgrowth.",
        "Do not scratch the scalp vigorously with fingernails — use a soft scalp massager or the pads of your fingers to loosen scale during shampooing.",
        "If dandruff spreads to the eyebrows, beard, or sides of the nose, inform Dr. Sireesha — a separate topical antifungal cream will be needed for these facial areas.",
        "Rinse hair products (conditioners, serums) thoroughly from the scalp to prevent product build-up that can worsen flaking.",
        "Wear breathable headwear when outdoors; synthetic caps in Andhra Pradesh's heat trap moisture and promote scalp sweating, which worsens Malassezia overgrowth.",
      ]}
      faqs={[
        {
          q: "Is dandruff caused by dry scalp?",
          a: "This is a common misconception. Dandruff is actually more associated with an oily scalp rather than a dry one. The true cause is overgrowth of a yeast called Malassezia, which thrives in sebum-rich (oily) scalp environments. Dry scalp does cause flaking, but the flakes are typically smaller and finer, and the scalp feels tight — this is different from dandruff and responds to moisturising shampoos rather than antifungal treatments.",
        },
        {
          q: "Can dandruff cause permanent hair loss?",
          a: "Dandruff itself does not typically cause permanent hair loss. However, the scalp inflammation associated with severe or long-standing seborrheic dermatitis can weaken follicles and contribute to temporary increased shedding. Effective control of dandruff usually resolves the associated hair fall. If hair loss persists after dandruff is treated, evaluation for other causes (androgenetic alopecia, nutritional deficiency) is recommended.",
        },
        {
          q: "How long does it take to treat dandruff?",
          a: "With appropriate medicated shampoos used consistently, most patients see significant improvement in flaking and itching within 2–4 weeks. However, dandruff is a chronic condition — complete elimination is rarely permanent. Most dermatologists recommend a maintenance regimen (once-weekly medicated shampoo) after the initial treatment phase to prevent relapse.",
        },
        {
          q: "Which shampoo is best for dandruff in Nandyala's climate?",
          a: "In Nandyala's hot, humid climate, ketoconazole shampoo (1–2%) is often the most effective prescription option because it directly targets the Malassezia yeast that thrives in these conditions. Zinc pyrithione shampoos are a good over-the-counter maintenance option. The best shampoo for you depends on the severity of your dandruff, hair type, and any co-existing scalp conditions — Dr. Sireesha can recommend the most appropriate one at a consultation.",
        },
        {
          q: "Can I use coconut oil if I have dandruff?",
          a: "This is a common dilemma in India where coconut oil is a traditional hair care staple. While coconut oil has some mild antifungal properties, its application directly to the scalp creates an oily environment that can feed Malassezia yeast and worsen dandruff in many individuals. If you wish to use oil, apply it to the hair lengths only and rinse thoroughly — avoid leaving oil on the scalp overnight during active dandruff.",
        },
        {
          q: "Is dandruff contagious?",
          a: "No. Dandruff is not contagious. It results from the scalp's inflammatory response to Malassezia yeast — a fungus that is naturally present on all human scalps. Not everyone develops dandruff despite carrying this yeast; it is individual scalp sensitivity, genetics, and sebum production that determine who develops the condition.",
        },
        {
          q: "What is the difference between dandruff and psoriasis of the scalp?",
          a: "Both conditions cause scalp scaling, but they are distinct. Dandruff produces fine, soft, greasy scales and responds to antifungal shampoos. Scalp psoriasis produces thick, silvery-white plaques with a well-defined edge, and may extend beyond the hairline onto the forehead, ears, and back of the neck. Psoriasis does not respond to antifungal shampoos and requires medicated treatments like topical corticosteroids, vitamin D analogues, and sometimes phototherapy. A dermatologist can distinguish the two on examination.",
        },
        {
          q: "Does diet affect dandruff?",
          a: "There is evidence that a diet high in sugar, refined carbohydrates, and certain dairy products can promote yeast overgrowth and worsen dandruff in susceptible individuals. Conversely, a diet rich in zinc, B vitamins (especially biotin and B6), and omega-3 fatty acids may support scalp health. Probiotic-rich foods may also help by modulating the gut-skin microbiome axis. However, dietary changes alone are unlikely to replace medicated shampoo treatment for active dandruff.",
        },
      ]}
      relatedLinks={[
        { label: "Hair Fall Treatment", href: "/hair-treatments/hair-fall-treatment" },
        { label: "Alopecia Treatment", href: "/hair-treatments/alopecia" },
        { label: "Hair Thinning Treatment", href: "/hair-treatments/hair-thinning" },
        { label: "Skin Rejuvenation", href: "/cosmetology/skin-rejuvenation" },
      ]}
      ctaHeading="Struggling with Dandruff? Get Expert Scalp Care in Nandyala"
      disclaimer="Dandruff is a chronic condition that can be effectively managed but may recur. Treatment response varies between individuals. This content is for informational purposes only and does not replace a personalised consultation with Dr. Sireesha, MD Dermatology, Yashvini Skin & Hair Clinic, Nandyala."
      teluguFaqs={[
        {
          q: "చుండ్రు ఎందుకు వస్తుంది?",
          a: "చుండ్రు ప్రధానంగా Malassezia అనే ఫంగస్ వల్ల వస్తుంది. నూనె గ్రంథుల అధిక సక్రియత, చెమట, మరియు వ్యక్తిగత రోగ నిరోధక శక్తి కూడా కారణాలు. చుండ్రు శుభ్రత లేమి వల్ల మాత్రమే రాదు.",
          en: "Dandruff primarily comes from a fungus called Malassezia. Overactive oil glands, sweating, and individual immunity are also factors. Dandruff is not caused only by lack of hygiene.",
        },
        {
          q: "చుండ్రుకు ఏ షాంపూ మంచిది?",
          a: "Ketoconazole 2% లేదా zinc pyrithione ఉన్న మెడికేటెడ్ షాంపూలు చుండ్రుకు అత్యంత ప్రభావవంతంగా ఉంటాయి. మీ తల చర్మ రకానికి తగిన షాంపూను చర్మవ్యాధి నిపుణుడు సూచిస్తారు.",
          en: "Medicated shampoos containing ketoconazole 2% or zinc pyrithione are most effective for dandruff. A dermatologist will recommend the appropriate shampoo for your scalp type.",
        },
        {
          q: "చుండ్రు జుట్టు రాలుటకు దారి తీస్తుందా?",
          a: "తీవ్రమైన చుండ్రు మరియు అనుబంధ తల చర్మ మంట జుట్టు రాలుటకు కారణం అవుతాయి. చుండ్రు సమర్థంగా చికిత్స చేయడం వల్ల జుట్టు రాలుట తగ్గుతుంది.",
          en: "Severe dandruff and associated scalp inflammation can cause hair fall. Effectively treating dandruff can reduce hair fall.",
        },
      ]}
    />
  );
}
