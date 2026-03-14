// Medical illustration library for Yashvini Skin & Hair Clinic
// Each SVG uses brand colors: teal #1A6B6B, gold #C9A84C, coral #D45F3C, ivory #FAF8F5

const S = 160; // default viewBox dimension

// ─── Individual Illustrations ──────────────────────────────────────────────

const Acne = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Acne illustration">
    {/* Face */}
    <ellipse cx="80" cy="85" rx="52" ry="62" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Eyes */}
    <ellipse cx="62" cy="78" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="98" cy="78" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="63" cy="79" r="3.5" fill="#2D2D2D"/>
    <circle cx="99" cy="79" r="3.5" fill="#2D2D2D"/>
    {/* Nose */}
    <path d="M80 90 Q75 100 71 102 Q80 106 89 102 Q85 100 80 90Z" fill="#E8A888"/>
    {/* Mouth */}
    <path d="M68 112 Q80 120 92 112" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Pimples - forehead */}
    <circle cx="80" cy="38" r="6" fill="#D45F3C" stroke="#A03020" strokeWidth="1"/>
    <circle cx="80" cy="38" r="2" fill="#8B2010"/>
    {/* Pimple - left cheek */}
    <circle cx="50" cy="92" r="5" fill="#D45F3C" stroke="#A03020" strokeWidth="1"/>
    <circle cx="50" cy="92" r="1.8" fill="#8B2010"/>
    {/* Pimple - right cheek */}
    <circle cx="110" cy="88" r="5" fill="#D45F3C" stroke="#A03020" strokeWidth="1"/>
    <circle cx="110" cy="88" r="1.8" fill="#8B2010"/>
    {/* Pimple - chin */}
    <circle cx="80" cy="130" r="4.5" fill="#D45F3C" stroke="#A03020" strokeWidth="1"/>
    <circle cx="80" cy="130" r="1.5" fill="#8B2010"/>
    {/* Hair */}
    <ellipse cx="80" cy="26" rx="52" ry="18" fill="#3D2B1A"/>
    <path d="M28 36 Q20 55 22 70" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M132 36 Q140 55 138 70" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
  </svg>
);

const HairFall = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hair fall illustration">
    {/* Head */}
    <ellipse cx="80" cy="72" rx="42" ry="50" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Remaining hair on head — sparse */}
    <path d="M46 45 Q50 20 80 18 Q110 20 114 45" stroke="#3D2B1A" strokeWidth="6" strokeLinecap="round" fill="none"/>
    <path d="M55 38 Q56 24 68 22" stroke="#3D2B1A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M105 38 Q104 24 92 22" stroke="#3D2B1A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    {/* Falling hair strands — left */}
    <path d="M42 52 Q22 62 16 80" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M44 63 Q26 72 22 90" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M43 75 Q28 85 26 102" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Falling hair strands — right */}
    <path d="M118 52 Q138 62 144 80" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M116 63 Q134 72 138 90" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M117 75 Q132 85 134 102" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Fallen strands on floor */}
    <path d="M18 138 Q30 133 40 138" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M55 142 Q65 136 75 142" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M92 138 Q103 143 115 138" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M120 144 Q130 138 142 143" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Down arrows */}
    <path d="M25 105 L25 120 M21 116 L25 121 L29 116" stroke="#D45F3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M135 105 L135 120 M131 116 L135 121 L139 116" stroke="#D45F3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const Melasma = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Melasma illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="52" ry="60" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="30" rx="52" ry="22" fill="#3D2B1A"/>
    <path d="M28 40 Q24 60 26 78" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M132 40 Q136 60 134 78" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {/* Melasma patches — forehead (symmetric) */}
    <ellipse cx="66" cy="56" rx="14" ry="9" fill="#8B6344" opacity="0.6"/>
    <ellipse cx="94" cy="56" rx="14" ry="9" fill="#8B6344" opacity="0.6"/>
    {/* Melasma patches — cheeks */}
    <ellipse cx="46" cy="95" rx="13" ry="10" fill="#8B6344" opacity="0.55"/>
    <ellipse cx="114" cy="95" rx="13" ry="10" fill="#8B6344" opacity="0.55"/>
    {/* Eyes */}
    <ellipse cx="62" cy="82" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="98" cy="82" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="63" cy="83" r="3.5" fill="#2D2D2D"/>
    <circle cx="99" cy="83" r="3.5" fill="#2D2D2D"/>
    {/* Nose & Mouth */}
    <path d="M80 94 Q75 104 72 106 Q80 110 88 106 Q85 104 80 94Z" fill="#E8A888"/>
    <path d="M70 118 Q80 126 90 118" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* UV sun indicator */}
    <circle cx="136" cy="24" r="10" fill="#C9A84C" opacity="0.9"/>
    <line x1="136" y1="10" x2="136" y2="6" stroke="#C9A84C" strokeWidth="2"/>
    <line x1="148" y1="16" x2="151" y2="13" stroke="#C9A84C" strokeWidth="2"/>
    <line x1="148" y1="32" x2="151" y2="35" stroke="#C9A84C" strokeWidth="2"/>
    <line x1="124" y1="16" x2="121" y2="13" stroke="#C9A84C" strokeWidth="2"/>
  </svg>
);

const FungalInfection = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Fungal infection illustration">
    {/* Skin background */}
    <rect x="10" y="10" width="140" height="140" rx="16" fill="#F5C9A0"/>
    {/* Outer ring — active border */}
    <circle cx="80" cy="80" r="55" stroke="#D45F3C" strokeWidth="5" strokeDasharray="8 4"/>
    {/* Mid ring */}
    <circle cx="80" cy="80" r="42" stroke="#E8907A" strokeWidth="3" strokeDasharray="6 3"/>
    {/* Inner ring — clearing centre */}
    <circle cx="80" cy="80" r="28" fill="#F5ECD8" stroke="#C9A84C" strokeWidth="1.5"/>
    {/* Centre label — healed skin */}
    <circle cx="80" cy="80" r="14" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="1"/>
    {/* Scales / spore dots on active border */}
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x = 80 + 55 * Math.cos(rad);
      const y = 80 + 55 * Math.sin(rad);
      return <circle key={i} cx={x} cy={y} r="4" fill="#A03020" opacity="0.7"/>;
    })}
  </svg>
);

const Dandruff = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dandruff illustration">
    {/* Head */}
    <ellipse cx="80" cy="75" rx="44" ry="50" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="1.5"/>
    {/* Hair */}
    <ellipse cx="80" cy="28" rx="44" ry="20" fill="#3D2B1A"/>
    <path d="M36 38 Q30 58 32 74" stroke="#3D2B1A" strokeWidth="9" strokeLinecap="round" fill="none"/>
    <path d="M124 38 Q130 58 128 74" stroke="#3D2B1A" strokeWidth="9" strokeLinecap="round" fill="none"/>
    {/* Flakes falling — various sizes */}
    {[
      {x:28,y:75},{x:22,y:90},{x:32,y:105},{x:18,y:118},
      {x:130,y:70},{x:138,y:85},{x:128,y:100},{x:140,y:115},
      {x:50,y:128},{x:68,y:138},{x:88,y:132},{x:106,y:138}
    ].map((p,i) => (
      <rect key={i} x={p.x-3} y={p.y-2} width={i%3===0?7:5} height={i%3===0?5:3}
        rx="1" fill="white" stroke="#C8D0D0" strokeWidth="0.5"
        transform={`rotate(${i*15} ${p.x} ${p.y})`}
      />
    ))}
    {/* Itchy lines on scalp */}
    <path d="M56 42 Q62 38 68 42" stroke="#D45F3C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M82 38 Q88 34 94 38" stroke="#D45F3C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const Pigmentation = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pigmentation illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="50" ry="60" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="30" rx="50" ry="20" fill="#3D2B1A"/>
    <path d="M30 40 Q26 60 28 76" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M130 40 Q134 60 132 76" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {/* Scattered dark spots - different sizes */}
    <circle cx="55" cy="70" r="5" fill="#6B3A1F" opacity="0.7"/>
    <circle cx="70" cy="60" r="3.5" fill="#6B3A1F" opacity="0.6"/>
    <circle cx="96" cy="65" r="6" fill="#6B3A1F" opacity="0.65"/>
    <circle cx="112" cy="75" r="4" fill="#6B3A1F" opacity="0.6"/>
    <circle cx="50" cy="96" r="4.5" fill="#6B3A1F" opacity="0.7"/>
    <circle cx="107" cy="100" r="5.5" fill="#6B3A1F" opacity="0.65"/>
    <circle cx="80" cy="58" r="3" fill="#6B3A1F" opacity="0.55"/>
    <circle cx="64" cy="112" r="4" fill="#6B3A1F" opacity="0.6"/>
    {/* Eyes */}
    <ellipse cx="63" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="85" r="3.5" fill="#2D2D2D"/>
    <circle cx="98" cy="85" r="3.5" fill="#2D2D2D"/>
    {/* Nose & mouth */}
    <path d="M80 96 Q75 106 72 108 Q80 112 88 108 Q85 106 80 96Z" fill="#E8A888"/>
    <path d="M70 120 Q80 128 90 120" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const Vitiligo = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vitiligo illustration">
    {/* Arm shape */}
    <rect x="38" y="20" width="84" height="120" rx="42" fill="#C8956A"/>
    {/* White depigmented patches */}
    <ellipse cx="68" cy="52" rx="18" ry="22" fill="white" opacity="0.92"/>
    <ellipse cx="100" cy="90" rx="22" ry="16" fill="white" opacity="0.92"/>
    <ellipse cx="72" cy="120" rx="14" ry="12" fill="white" opacity="0.88"/>
    {/* Patch borders — slight lavender tinge */}
    <ellipse cx="68" cy="52" rx="18" ry="22" fill="none" stroke="#E0E8F0" strokeWidth="1.5"/>
    <ellipse cx="100" cy="90" rx="22" ry="16" fill="none" stroke="#E0E8F0" strokeWidth="1.5"/>
    <ellipse cx="72" cy="120" rx="14" ry="12" fill="none" stroke="#E0E8F0" strokeWidth="1.5"/>
    {/* Melanocyte dots in normal skin */}
    <circle cx="56" cy="76" r="2" fill="#8B6344" opacity="0.5"/>
    <circle cx="116" cy="58" r="2" fill="#8B6344" opacity="0.5"/>
    <circle cx="108" cy="118" r="2" fill="#8B6344" opacity="0.5"/>
  </svg>
);

const Eczema = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Eczema illustration">
    {/* Arm */}
    <rect x="42" y="15" width="76" height="130" rx="38" fill="#F0B898"/>
    {/* Inflamed patch — jagged edges */}
    <path d="M55 55 Q48 62 50 72 Q48 80 56 86 Q60 96 70 98 Q82 102 90 96 Q100 90 104 80 Q110 70 106 60 Q102 50 94 48 Q82 44 70 46 Q60 48 55 55Z" fill="#CC4444" opacity="0.75"/>
    {/* Dryness texture lines */}
    <path d="M62 62 Q70 60 78 64" stroke="#A03020" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M64 72 Q72 70 82 73" stroke="#A03020" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M65 82 Q74 80 84 83" stroke="#A03020" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* Scratch marks */}
    <path d="M88 56 Q92 68 90 80" stroke="#8B2010" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M94 60 Q98 72 96 84" stroke="#8B2010" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Itch indicator */}
    <path d="M114 40 Q122 48 118 58 Q126 52 124 64" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="116" cy="38" r="3" fill="#C9A84C"/>
  </svg>
);

const Psoriasis = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Psoriasis illustration">
    {/* Skin patch background */}
    <rect x="15" y="15" width="130" height="130" rx="20" fill="#F0B898"/>
    {/* Plaque area — raised red */}
    <rect x="30" y="30" width="100" height="100" rx="16" fill="#CC4444" opacity="0.6"/>
    {/* Silver-white scale layers */}
    {[
      [35,35,45,18],[55,32,45,18],[75,35,45,18],[95,32,45,18],[115,35,35,18],
      [32,52,50,18],[60,50,50,18],[88,52,42,18],[108,50,38,18],
      [35,69,45,18],[58,68,48,18],[84,69,44,18],[110,68,36,18],
      [32,86,52,18],[62,85,48,18],[90,86,40,18],[112,85,34,18],
      [35,103,46,18],[58,102,50,18],[86,103,42,18],
    ].map(([x,y,w,h],i) => (
      <rect key={i} x={x} y={y} width={w} height={h} rx="3"
        fill="#E8EEF0" stroke="#C8D4D4" strokeWidth="0.5" opacity="0.88"/>
    ))}
  </svg>
);

const PrpTherapy = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PRP therapy illustration">
    {/* Scalp cross-section background */}
    <rect x="10" y="80" width="140" height="70" rx="8" fill="#F5C9A0"/>
    {/* Hair follicles in scalp */}
    {[28,52,76,100,124].map((x,i) => (
      <g key={i}>
        <ellipse cx={x} cy="92" rx="5" ry="7" fill="#D4A870" stroke="#C9A84C" strokeWidth="1"/>
        <path d={`M${x} 85 Q${x-4} 70 ${x-2} 55`} stroke="#3D2B1A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </g>
    ))}
    {/* Growth factor droplets entering follicles */}
    {[28,76,124].map((x,i) => (
      <path key={i} d={`M${x} 78 Q${x-2} 72 ${x} 68 Q${x+2} 72 ${x} 78Z`}
        fill="#C9A84C" opacity="0.9"/>
    ))}
    {/* Syringe */}
    <rect x="95" y="16" width="14" height="44" rx="3" fill="white" stroke="#1A6B6B" strokeWidth="2"/>
    <rect x="97" y="18" width="10" height="28" rx="2" fill="#D4E8F0"/>
    {/* Plunger */}
    <rect x="98" y="18" width="8" height="8" rx="1" fill="#1A6B6B"/>
    {/* Needle */}
    <rect x="101" y="60" width="4" height="16" rx="1" fill="#9BBBC8"/>
    <path d="M101 76 L103 84 L105 76Z" fill="#9BBBC8"/>
    {/* Blood/PRP red tinge in barrel */}
    <rect x="97" y="30" width="10" height="16" rx="1" fill="#E8C0B0" opacity="0.7"/>
    {/* Label */}
    <text x="56" y="152" fontSize="10" fill="#1A6B6B" fontWeight="600">Growth Factors</text>
  </svg>
);

const ChemicalPeels = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Chemical peel illustration">
    {/* Side face profile */}
    <path d="M90 20 Q130 30 134 80 Q136 120 110 148 Q88 158 72 148 Q55 136 52 110 Q48 80 58 55 Q68 30 90 20Z" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Skin layers — peeling away from chin/cheek area */}
    {/* Layer 3 (deepest - dermis) */}
    <path d="M58 100 Q56 118 62 136 Q70 150 90 154" stroke="#E8907A" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.4"/>
    {/* Layer 2 */}
    <path d="M56 96 Q54 115 60 134 Q68 150 88 155" stroke="#F5C9A0" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* Layer 1 — peeling off */}
    <path d="M54 92 Q42 108 38 128 Q36 145 48 152" stroke="#FAF8F5" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="6 3"/>
    {/* Peeling curl at top */}
    <path d="M58 92 Q46 82 42 90 Q38 100 50 104" stroke="#FAF8F5" strokeWidth="3" strokeLinecap="round" fill="none"/>
    {/* Eye */}
    <ellipse cx="110" cy="72" rx="8" ry="6" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="109" cy="72" r="3.5" fill="#2D2D2D"/>
    {/* Nose */}
    <circle cx="124" cy="100" r="4" fill="#E8A888"/>
    {/* Brightening glow lines */}
    <path d="M35 40 L28 34" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M30 55 L22 52" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M32 70 L24 70" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SkinAllergy = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Skin allergy illustration">
    {/* Arm/skin background */}
    <rect x="20" y="20" width="120" height="120" rx="18" fill="#F0B898"/>
    {/* Hive bumps — urticaria wheals */}
    {[
      {cx:50,cy:50,rx:18,ry:12},
      {cx:90,cy:42,rx:22,ry:13},
      {cx:125,cy:58,rx:16,ry:11},
      {cx:42,cy:88,rx:20,ry:12},
      {cx:84,cy:82,rx:26,ry:14},
      {cx:128,cy:95,rx:18,ry:12},
      {cx:56,cy:122,rx:22,ry:13},
      {cx:106,cy:128,rx:20,ry:12},
    ].map((w,i) => (
      <g key={i}>
        <ellipse cx={w.cx} cy={w.cy} rx={w.rx} ry={w.ry} fill="#E87878" opacity="0.7"/>
        <ellipse cx={w.cx} cy={w.cy} rx={w.rx} ry={w.ry} fill="none" stroke="#CC4444" strokeWidth="1" opacity="0.5"/>
        <ellipse cx={w.cx} cy={w.cy} rx={w.rx*0.45} ry={w.ry*0.45} fill="#F5C0C0" opacity="0.6"/>
      </g>
    ))}
  </svg>
);

const Rosacea = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rosacea illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="52" ry="62" fill="#F5D0B5" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="28" rx="52" ry="22" fill="#6B4C2A"/>
    <path d="M28 38 Q24 58 26 76" stroke="#6B4C2A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M132 38 Q136 58 134 76" stroke="#6B4C2A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {/* Rosacea flush — cheeks & nose bridge */}
    <ellipse cx="50" cy="96" rx="20" ry="18" fill="#E06060" opacity="0.45"/>
    <ellipse cx="110" cy="96" rx="20" ry="18" fill="#E06060" opacity="0.45"/>
    <ellipse cx="80" cy="100" rx="18" ry="14" fill="#E06060" opacity="0.35"/>
    {/* Telangiectasia — tiny vessels */}
    <path d="M42 90 Q47 94 44 100" stroke="#C84040" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M56 88 Q60 95 58 102" stroke="#C84040" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M104 88 Q108 95 106 102" stroke="#C84040" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M118 92 Q114 97 116 103" stroke="#C84040" strokeWidth="1" fill="none" opacity="0.5"/>
    {/* Eyes */}
    <ellipse cx="63" cy="82" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="82" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="83" r="3.5" fill="#2D2D2D"/>
    <circle cx="98" cy="83" r="3.5" fill="#2D2D2D"/>
    {/* Nose */}
    <path d="M80 94 Q75 104 72 106 Q80 110 88 106 Q85 104 80 94Z" fill="#D09090"/>
    {/* Mouth */}
    <path d="M70 120 Q80 128 90 120" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const AcneScars = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Acne scars illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="52" ry="62" fill="#F0B898" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="28" rx="52" ry="22" fill="#3D2B1A"/>
    <path d="M28 38 Q24 58 26 76" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    <path d="M132 38 Q136 58 134 76" stroke="#3D2B1A" strokeWidth="8" strokeLinecap="round" fill="none"/>
    {/* Ice-pick scars — deep depressions */}
    <circle cx="58" cy="74" r="5" fill="#C87A50" stroke="#A05030" strokeWidth="1"/>
    <circle cx="70" cy="68" r="4" fill="#C87A50" stroke="#A05030" strokeWidth="1"/>
    <circle cx="96" cy="72" r="5.5" fill="#C87A50" stroke="#A05030" strokeWidth="1"/>
    <circle cx="108" cy="80" r="4" fill="#C87A50" stroke="#A05030" strokeWidth="1"/>
    {/* Boxcar scars — flat-bottomed */}
    <rect x="52" y="96" width="12" height="8" rx="1" fill="#C87A50" stroke="#A05030" strokeWidth="1"/>
    <rect x="96" y="94" width="14" height="10" rx="1" fill="#C87A50" stroke="#A05030" strokeWidth="1"/>
    {/* Rolling scars — wavy texture */}
    <path d="M62 108 Q70 104 78 108 Q86 112 94 108" stroke="#A05030" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Eyes */}
    <ellipse cx="63" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="85" r="3.5" fill="#2D2D2D"/>
    <circle cx="98" cy="85" r="3.5" fill="#2D2D2D"/>
    {/* Nose & Mouth */}
    <path d="M80 96 Q75 106 72 108 Q80 112 88 108 Q85 106 80 96Z" fill="#E8A888"/>
    <path d="M70 122 Q80 130 90 122" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const Warts = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Warts illustration">
    {/* Hand / skin background */}
    <rect x="20" y="30" width="120" height="100" rx="16" fill="#F5C9A0"/>
    {/* Finger suggestions */}
    <rect x="35" y="10" width="24" height="50" rx="12" fill="#F0B898" stroke="#C9A84C" strokeWidth="1"/>
    <rect x="68" y="6" width="24" height="54" rx="12" fill="#F0B898" stroke="#C9A84C" strokeWidth="1"/>
    <rect x="101" y="10" width="24" height="50" rx="12" fill="#F0B898" stroke="#C9A84C" strokeWidth="1"/>
    {/* Warts — rough dome shapes */}
    <circle cx="47" cy="24" r="10" fill="#8B7355"/>
    <circle cx="47" cy="24" r="10" fill="none" stroke="#6B5335" strokeWidth="1"/>
    {/* Texture dots on wart */}
    <circle cx="44" cy="21" r="1.5" fill="#6B5335"/>
    <circle cx="50" cy="21" r="1.5" fill="#6B5335"/>
    <circle cx="47" cy="27" r="1.5" fill="#6B5335"/>
    {/* Second wart */}
    <circle cx="80" cy="18" r="9" fill="#8B7355" stroke="#6B5335" strokeWidth="1"/>
    <circle cx="77" cy="15" r="1.5" fill="#6B5335"/>
    <circle cx="83" cy="15" r="1.5" fill="#6B5335"/>
    <circle cx="80" cy="22" r="1.5" fill="#6B5335"/>
    {/* Third wart — small */}
    <circle cx="113" cy="22" r="7" fill="#8B7355" stroke="#6B5335" strokeWidth="1"/>
    <circle cx="111" cy="19" r="1" fill="#6B5335"/>
    <circle cx="115" cy="19" r="1" fill="#6B5335"/>
    <circle cx="113" cy="25" r="1" fill="#6B5335"/>
    {/* HPV label callout */}
    <path d="M47 14 Q47 8 38 6" stroke="#1A6B6B" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/>
    <text x="10" y="6" fontSize="8" fill="#1A6B6B" fontWeight="600">HPV</text>
  </svg>
);

const SkinTags = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Skin tags illustration">
    {/* Neck / skin background */}
    <rect x="30" y="50" width="100" height="90" rx="16" fill="#F5C9A0"/>
    {/* Skin tag 1 — large */}
    <path d="M62 50 Q58 32 62 22 Q66 16 70 22 Q72 30 68 50Z" fill="#D4956A" stroke="#B07040" strokeWidth="1.5"/>
    <ellipse cx="66" cy="18" rx="8" ry="7" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    {/* Skin tag 2 — medium */}
    <path d="M90 50 Q87 36 90 28 Q93 22 96 28 Q97 36 94 50Z" fill="#D4956A" stroke="#B07040" strokeWidth="1.5"/>
    <ellipse cx="93" cy="24" rx="6" ry="6" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    {/* Skin tag 3 — small side */}
    <path d="M118 68 Q126 58 130 56 Q134 58 132 64 Q130 70 120 74Z" fill="#D4956A" stroke="#B07040" strokeWidth="1.5"/>
    <ellipse cx="133" cy="56" rx="5" ry="5" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    {/* Skin fold texture */}
    <path d="M40 90 Q80 85 120 90" stroke="#E8A888" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M35 110 Q80 105 125 110" stroke="#E8A888" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
  </svg>
);

const Alopecia = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Alopecia illustration">
    {/* Head top view */}
    <circle cx="80" cy="80" r="62" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair around the perimeter */}
    <circle cx="80" cy="80" r="62" fill="none" stroke="#3D2B1A" strokeWidth="16" strokeDasharray="4 2"/>
    {/* Hairless bald patch — circular */}
    <circle cx="80" cy="80" r="36" fill="#F5C9A0"/>
    <circle cx="80" cy="80" r="36" fill="none" stroke="#E8907A" strokeWidth="2" strokeDasharray="5 3"/>
    {/* Sparse regrowth dots inside patch */}
    <circle cx="68" cy="72" r="2" fill="#3D2B1A" opacity="0.4"/>
    <circle cx="88" cy="76" r="2" fill="#3D2B1A" opacity="0.4"/>
    <circle cx="74" cy="88" r="2" fill="#3D2B1A" opacity="0.4"/>
    {/* Autoimmune indicator — circular arrows */}
    <path d="M80 46 Q100 46 108 60" stroke="#D45F3C" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M106 58 L110 63 L114 57" stroke="#D45F3C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HairThinning = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hair thinning illustration">
    {/* Side head profile */}
    <path d="M70 20 Q110 22 122 60 Q130 90 118 130 Q104 148 80 150 Q58 150 48 130 Q38 108 42 80 Q46 52 70 20Z" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Dense hair on sides and back */}
    <path d="M70 20 Q50 26 42 44" stroke="#3D2B1A" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M42 56 Q38 72 40 88" stroke="#3D2B1A" strokeWidth="5" strokeLinecap="round" fill="none"/>
    {/* Sparse/thin hair on top — crown */}
    <path d="M78 22 Q86 18 96 22" stroke="#3D2B1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M84 26 Q92 20 104 26" stroke="#3D2B1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M80 32 Q90 26 106 32" stroke="#3D2B1A" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3"/>
    <path d="M76 40 Q88 34 108 38" stroke="#3D2B1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45"/>
    {/* Visible scalp at crown */}
    <ellipse cx="95" cy="38" rx="16" ry="10" fill="#F5C9A0" opacity="0.5"/>
    {/* Eye */}
    <ellipse cx="108" cy="78" rx="8" ry="7" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="107" cy="78" r="3.5" fill="#2D2D2D"/>
  </svg>
);

const TelogenEffluvium = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Telogen effluvium illustration">
    {/* Head */}
    <ellipse cx="80" cy="74" rx="44" ry="52" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair — visible but diffuse/thin */}
    <path d="M44 46 Q46 22 80 18 Q114 22 116 46" stroke="#3D2B1A" strokeWidth="4" strokeLinecap="round" fill="none"/>
    {/* Many strands falling in all directions */}
    {[
      ["M36 52 Q18 48 12 36"],["M38 64 Q20 62 14 52"],["M38 76 Q20 78 14 70"],
      ["M40 88 Q24 95 20 108"],["M44 100 Q30 112 28 128"],
      ["M124 52 Q142 48 148 36"],["M122 64 Q140 62 146 52"],["M122 76 Q140 78 146 70"],
      ["M120 88 Q136 95 140 108"],["M116 100 Q130 112 132 128"],
      ["M58 20 Q54 8 48 4"],["M70 18 Q68 6 64 2"],["M80 18 Q80 6 80 2"],
      ["M90 18 Q92 6 96 2"],["M102 20 Q106 8 112 4"],
    ].map((d,i) => (
      <path key={i} d={d[0]} stroke="#3D2B1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.65"/>
    ))}
    {/* Stress symbol */}
    <text x="62" y="76" fontSize="22" textAnchor="middle">⚡</text>
    {/* Eyes */}
    <ellipse cx="63" cy="84" rx="6" ry="7" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="84" rx="6" ry="7" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="85" r="3" fill="#2D2D2D"/>
    <circle cx="98" cy="85" r="3" fill="#2D2D2D"/>
  </svg>
);

const Microneedling = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microneedling illustration">
    {/* Skin cross-section */}
    {/* Epidermis */}
    <rect x="10" y="60" width="140" height="30" rx="0" fill="#F5C9A0"/>
    {/* Dermis */}
    <rect x="10" y="90" width="140" height="50" rx="0" fill="#F0A878"/>
    <text x="118" y="108" fontSize="8" fill="#8B4A20" opacity="0.6">Dermis</text>
    {/* Skin surface top edge */}
    <path d="M10 60 Q30 56 50 60 Q70 64 90 60 Q110 56 130 60 Q145 63 150 60" stroke="#E8A878" strokeWidth="1.5" fill="none"/>
    {/* Array of micro-needles — 5 needles */}
    {[28,52,76,100,124].map((x,i) => (
      <g key={i}>
        {/* Needle shaft */}
        <rect x={x-2} y="12" width="4" height="52" rx="1" fill="#9BBBC8" stroke="#6A9AB0" strokeWidth="0.5"/>
        {/* Needle tip */}
        <path d={`M${x-2} 64 L${x} 72 L${x+2} 64Z`} fill="#6A9AB0"/>
        {/* Collagen stimulus at needle tip */}
        <circle cx={x} cy="80" r="5" fill="#C9A84C" opacity="0.4"/>
        {/* Handle top */}
        <rect x={x-5} y="8" width="10" height="6" rx="2" fill="#1A6B6B"/>
      </g>
    ))}
    {/* Collagen fibers in dermis */}
    <path d="M14 106 Q40 100 66 106 Q92 112 118 106 Q134 102 146 106" stroke="#E8A878" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M14 120 Q40 114 66 120 Q92 126 118 120 Q134 116 146 120" stroke="#E8A878" strokeWidth="1.5" fill="none" opacity="0.5"/>
  </svg>
);

const Hydrafacial = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="HydraFacial illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="50" ry="60" fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="30" rx="50" ry="22" fill="#3D2B1A"/>
    {/* HydraFacial vortex spiral on cheek */}
    <path d="M58 88 Q62 78 72 76 Q82 74 86 82 Q90 90 84 96 Q78 102 70 98 Q64 94 62 88Z"
      stroke="#2D9B9B" strokeWidth="2.5" fill="none" opacity="0.8"/>
    <path d="M66 88 Q68 82 74 80 Q80 80 82 86 Q84 92 80 94 Q75 96 70 93Z"
      stroke="#1A6B6B" strokeWidth="2" fill="none" opacity="0.7"/>
    <circle cx="76" cy="88" r="3" fill="#1A6B6B" opacity="0.6"/>
    {/* Water droplets — hydration */}
    <path d="M110 42 Q113 36 116 42 Q116 48 113 48 Q110 48 110 42Z" fill="#2D9B9B" opacity="0.7"/>
    <path d="M122 55 Q125 49 128 55 Q128 61 125 61 Q122 61 122 55Z" fill="#2D9B9B" opacity="0.5"/>
    <path d="M128 38 Q130 33 132 38 Q132 43 130 43 Q128 43 128 38Z" fill="#2D9B9B" opacity="0.4"/>
    {/* Glow lines */}
    <path d="M28 62 L20 56" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 78 L16 76" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M28 94 L20 96" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Eyes */}
    <ellipse cx="63" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="85" r="3.5" fill="#2D2D2D"/>
    <circle cx="98" cy="85" r="3.5" fill="#2D2D2D"/>
    {/* Nose & mouth */}
    <path d="M80 96 Q75 106 72 108 Q80 112 88 108 Q85 106 80 96Z" fill="#E8A888"/>
    <path d="M70 120 Q80 128 90 120" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const SkinBrightening = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Skin brightening illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="50" ry="60" fill="#F5D4A8" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="30" rx="50" ry="22" fill="#3D2B1A"/>
    {/* Radiating glow lines */}
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => {
      const rad = (deg * Math.PI) / 180;
      const r1 = 62, r2 = 78;
      const x1 = 80 + r1 * Math.cos(rad), y1 = 88 + r1 * Math.sin(rad);
      const x2 = 80 + r2 * Math.cos(rad), y2 = 88 + r2 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#C9A84C" strokeWidth={i%3===0?2:1.5} strokeLinecap="round" opacity="0.7"/>;
    })}
    {/* Star burst at center face */}
    <circle cx="80" cy="88" r="10" fill="#C9A84C" opacity="0.2"/>
    <circle cx="80" cy="88" r="6" fill="#C9A84C" opacity="0.3"/>
    {/* Eyes */}
    <ellipse cx="63" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="85" r="3.5" fill="#2D2D2D"/>
    <circle cx="98" cy="85" r="3.5" fill="#2D2D2D"/>
    {/* Nose & smile */}
    <path d="M80 96 Q75 106 72 108 Q80 112 88 108 Q85 106 80 96Z" fill="#E8A888"/>
    <path d="M68 120 Q80 130 92 120" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const AntiAging = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Anti-aging illustration">
    {/* Side-by-side before/after face panels */}
    {/* Divider */}
    <line x1="80" y1="10" x2="80" y2="150" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 3"/>
    <text x="38" y="158" fontSize="9" fill="#6B6B6B">Before</text>
    <text x="92" y="158" fontSize="9" fill="#1A6B6B" fontWeight="600">After</text>
    {/* BEFORE — left face with wrinkles */}
    <ellipse cx="42" cy="86" rx="32" ry="42" fill="#F0B080"/>
    {/* Forehead wrinkles */}
    <path d="M24 64 Q30 62 36 64" stroke="#B07040" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M22 70 Q32 68 42 70" stroke="#B07040" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Crow's feet */}
    <path d="M66 78 Q72 75 74 80 Q72 85 66 85" stroke="#B07040" strokeWidth="1.2" fill="none"/>
    {/* Nasolabial fold */}
    <path d="M50 96 Q54 106 52 118" stroke="#B07040" strokeWidth="1.5" fill="none"/>
    <path d="M36 96 Q32 106 34 118" stroke="#B07040" strokeWidth="1.5" fill="none"/>
    {/* Eye before */}
    <ellipse cx="54" cy="80" rx="7" ry="6" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="54" cy="80" r="3" fill="#2D2D2D"/>
    {/* AFTER — right face smooth */}
    <ellipse cx="118" cy="86" rx="32" ry="42" fill="#F5D4A8"/>
    {/* Smooth contour lines — subtle */}
    <path d="M102 68 Q110 66 118 68" stroke="#E8C090" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
    {/* Lift arrows */}
    <path d="M92 90 L96 82 M93 82 L96 82 L96 86" stroke="#1A6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M144 90 L140 82 M143 82 L140 82 L140 86" stroke="#1A6B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Eye after — brighter */}
    <ellipse cx="106" cy="80" rx="7" ry="6" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="106" cy="80" r="3" fill="#2D2D2D"/>
    <circle cx="107" cy="79" r="1" fill="white"/>
    {/* Glow */}
    <circle cx="118" cy="86" r="28" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3"/>
  </svg>
);

const ScarTreatment = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Scar treatment illustration">
    {/* Skin patch — split before/after */}
    <rect x="10" y="30" width="140" height="100" rx="18" fill="#F5C9A0"/>
    {/* Dividing line */}
    <line x1="80" y1="30" x2="80" y2="130" stroke="#C9A84C" strokeWidth="2.5" strokeDasharray="5 3"/>
    <text x="24" y="148" fontSize="9" fill="#6B6B6B">Before</text>
    <text x="88" y="148" fontSize="9" fill="#1A6B6B" fontWeight="600">After</text>
    {/* Before — left: textured scars */}
    <circle cx="32" cy="58" r="7" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    <circle cx="52" cy="72" r="5.5" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    <circle cx="36" cy="90" r="6" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    <circle cx="58" cy="104" r="5" fill="#C87A50" stroke="#A05030" strokeWidth="1.5"/>
    <path d="M26 76 Q40 72 56 78" stroke="#A05030" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M28 96 Q44 92 58 96" stroke="#A05030" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* After — right: smooth skin */}
    <rect x="82" y="35" width="64" height="90" rx="10" fill="#F5D4B0" opacity="0.8"/>
    {/* Smooth contour lines */}
    <path d="M86 65 Q112 62 140 65" stroke="#E8C090" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M86 85 Q112 82 140 85" stroke="#E8C090" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M86 105 Q112 102 140 105" stroke="#E8C090" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
    {/* Star — improved */}
    <path d="M111 55 L114 63 L122 63 L116 68 L118 76 L111 71 L104 76 L106 68 L100 63 L108 63Z"
      fill="#C9A84C" opacity="0.5"/>
  </svg>
);

const SkinRejuvenation = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Skin rejuvenation illustration">
    {/* Face */}
    <ellipse cx="80" cy="88" rx="50" ry="60" fill="#F5D4A8" stroke="#C9A84C" strokeWidth="2"/>
    {/* Hair */}
    <ellipse cx="80" cy="30" rx="50" ry="22" fill="#3D2B1A"/>
    {/* Glow rings */}
    <circle cx="80" cy="88" r="56" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.25"/>
    <circle cx="80" cy="88" r="65" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.15"/>
    <circle cx="80" cy="88" r="74" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.08"/>
    {/* Sparkle points */}
    {[[32,44],[128,44],[18,88],[142,88],[42,138],[118,138]].map(([x,y],i) => (
      <path key={i}
        d={`M${x} ${y-6} L${x} ${y+6} M${x-6} ${y} L${x+6} ${y} M${x-4} ${y-4} L${x+4} ${y+4} M${x-4} ${y+4} L${x+4} ${y-4}`}
        stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    ))}
    {/* Eyes — bright */}
    <ellipse cx="63" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <ellipse cx="97" cy="84" rx="7" ry="8" fill="white" stroke="#2D2D2D" strokeWidth="1.5"/>
    <circle cx="64" cy="85" r="3.5" fill="#2D2D2D"/>
    <circle cx="98" cy="85" r="3.5" fill="#2D2D2D"/>
    <circle cx="65" cy="84" r="1.2" fill="white"/>
    <circle cx="99" cy="84" r="1.2" fill="white"/>
    {/* Smile */}
    <path d="M66 118 Q80 130 94 118" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const LaserHairRemoval = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Laser hair removal illustration">
    {/* Skin surface */}
    <rect x="10" y="80" width="140" height="70" rx="10" fill="#F5C9A0"/>
    {/* Hair follicles with shafts */}
    {[28,52,76,100,124].map((x,i) => (
      <g key={i}>
        {/* Follicle bulb */}
        <ellipse cx={x} cy="116" rx="7" ry="9" fill="#8B6344" stroke="#6B4324" strokeWidth="1"/>
        {/* Hair shaft — most crossed out */}
        {i !== 2 ? (
          <>
            <line x1={x} y1="107" x2={x-3} y2="85" stroke="#3D2B1A" strokeWidth="2.5" strokeLinecap="round"/>
            {/* X mark — destroyed */}
            <line x1={x-8} y1="98" x2={x+8} y2="108" stroke="#D45F3C" strokeWidth="2" strokeLinecap="round"/>
            <line x1={x-8} y1="108" x2={x+8} y2="98" stroke="#D45F3C" strokeWidth="2" strokeLinecap="round"/>
          </>
        ) : (
          <line x1={x} y1="107" x2={x-3} y2="85" stroke="#3D2B1A" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
        )}
      </g>
    ))}
    {/* Laser handpiece */}
    <rect x="58" y="18" width="44" height="28" rx="8" fill="#1A6B6B"/>
    <rect x="66" y="24" width="28" height="8" rx="3" fill="#2D9B9B"/>
    {/* Laser beam */}
    <path d="M80 46 L80 80" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round"/>
    {/* Beam spread */}
    <path d="M80 46 L68 80" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M80 46 L92 80" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    {/* Flash dot */}
    <circle cx="80" cy="80" r="6" fill="#C9A84C" opacity="0.6"/>
    <circle cx="80" cy="80" r="3" fill="white" opacity="0.8"/>
  </svg>
);

// ─── Generic fallback ──────────────────────────────────────────────────────

const GenericSkin = () => (
  <svg viewBox={`0 0 ${S} ${S}`} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dermatology illustration">
    <circle cx="80" cy="80" r="60" fill="#1A6B6B" opacity="0.1" stroke="#1A6B6B" strokeWidth="2"/>
    <path d="M60 58 Q80 42 100 58 Q114 72 110 90 Q106 112 80 118 Q54 112 50 90 Q46 72 60 58Z"
      fill="#F5C9A0" stroke="#C9A84C" strokeWidth="2"/>
    <circle cx="80" cy="80" r="12" fill="#C9A84C" opacity="0.3"/>
    <path d="M80 68 L80 92 M68 80 L92 80" stroke="#1A6B6B" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// ─── Map & Export ──────────────────────────────────────────────────────────

const illustrations: Record<string, React.FC> = {
  acne: Acne,
  "hair-fall": HairFall,
  melasma: Melasma,
  "fungal-infection": FungalInfection,
  dandruff: Dandruff,
  pigmentation: Pigmentation,
  vitiligo: Vitiligo,
  eczema: Eczema,
  psoriasis: Psoriasis,
  "prp-therapy": PrpTherapy,
  "chemical-peels": ChemicalPeels,
  "skin-allergy": SkinAllergy,
  rosacea: Rosacea,
  "acne-scars": AcneScars,
  warts: Warts,
  "skin-tags": SkinTags,
  alopecia: Alopecia,
  "hair-thinning": HairThinning,
  "telogen-effluvium": TelogenEffluvium,
  microneedling: Microneedling,
  hydrafacial: Hydrafacial,
  "skin-brightening": SkinBrightening,
  "anti-aging": AntiAging,
  "scar-treatment": ScarTreatment,
  "skin-rejuvenation": SkinRejuvenation,
  "laser-hair-removal": LaserHairRemoval,
};

interface Props {
  type: string;
  size?: number;
  className?: string;
}

export default function TreatmentIllustration({ type, size = 160, className }: Props) {
  const Illustration = illustrations[type] ?? GenericSkin;
  return (
    <div
      className={className}
      style={{ width: size, height: size, flexShrink: 0 }}
      aria-hidden="false"
    >
      <Illustration />
    </div>
  );
}
