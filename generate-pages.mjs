// Generates the 8 category pages (rich SEO copy) + TOS, Privacy, and HTML sitemap.
import { readFileSync, writeFileSync } from "node:fs";
const pool = JSON.parse(readFileSync("image-pool.json", "utf8"));
const img = (u, w = 1200, q = 80) => `${u}?auto=format&fit=crop&w=${w}&q=${q}`;
const phone = "(312) 555-0199";
const tel = "+13125550199";

const products = [
  { slug: "toilets", label: "Smart Toilets & Toilets", key: "toilets" },
  { slug: "faucets-and-shower-systems", label: "Faucets & Shower Systems", key: "faucets" },
  { slug: "bathtubs", label: "Bathtubs & Soaking Tubs", key: "bathtubs" },
  { slug: "tile-stone-and-mosaics", label: "Tile, Stone & Mosaics", key: "tile" },
  { slug: "vanities-and-cabinetry", label: "Vanities & Cabinetry", key: "vanities" },
  { slug: "mirrors-and-medicine-cabinets", label: "Mirrors & Medicine Cabinets", key: "mirrors" },
  { slug: "bathroom-lighting", label: "Bathroom Lighting", key: "lighting" },
  { slug: "accessories-and-hardware", label: "Accessories & Hardware", key: "accessories" },
];
const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

// Keyword-focused "installation" labels used in H1/H2/FAQ/Why headings for SEO.
const installLabels = {
  toilets: "Toilet Installation",
  faucets: "Faucet & Shower System Installation",
  bathtubs: "Bathtub Installation",
  tile: "Tile & Stone Installation",
  vanities: "Vanity & Cabinetry Installation",
  mirrors: "Mirror & Medicine Cabinet Installation",
  lighting: "Bathroom Lighting Installation",
  accessories: "Accessory & Hardware Installation",
};

const content = {
  toilets: {
    title: "Smart Toilets & Modern Toilets", eyebrow: "Fixtures",
    metaTitle: "Smart Toilet & Toilet Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Expert smart toilet, wall-hung, and high-efficiency toilet installation in Chicago. Premium TOTO, Duravit & Kallista fixtures. Free estimates — call (312) 555-0199.",
    brands: ["TOTO", "Duravit", "Kallista"],
    heroLine: "From sleek one-piece designs to fully featured smart toilets — expertly selected and installed for Chicago homes.",
    overview: [
      "Choosing the right toilet is about far more than function — it shapes the comfort, hygiene, and style of your entire bathroom. As a trusted <a href=\"index.html\">Chicago bathroom remodeling</a> team, we help homeowners select and professionally install toilets that fit their space, budget, and design vision, from sleek one-piece models to fully featured smart toilets with bidet washing and heated seats.",
      "Our installers handle every detail: setting a proper seal, leveling and anchoring the bowl, connecting the supply line, and verifying a quiet, leak-free, rock-solid fit. Whether you're replacing a single toilet or finishing a complete master bath, we make sure the result is clean, efficient, and built to last.",
      "We regularly install premium fixtures from TOTO, Duravit, and Kallista, and coordinate them with your <a href=\"faucets-and-shower-systems.html\">faucets</a>, <a href=\"vanities-and-cabinetry.html\">vanities</a>, and <a href=\"accessories-and-hardware.html\">finishing hardware</a> for a cohesive Chicago bathroom.",
    ],
    options: [
      ["One-piece & two-piece toilets", "Classic, easy-to-clean designs in a range of heights and profiles."],
      ["Wall-hung toilets", "In-wall carrier systems with concealed tanks that save space and simplify cleaning."],
      ["Smart & bidet toilets", "Heated seats, warm-water cleansing, auto lids, and night lights for everyday spa comfort."],
      ["Comfort-height & ADA", "Taller bowls and accessible configurations for easier, safer use."],
      ["High-efficiency models", "Dual-flush and WaterSense toilets that cut water use without sacrificing performance."],
      ["Skirted, easy-clean designs", "Concealed trapways and smooth surfaces that wipe clean in seconds."],
    ],
    why: [
      "<strong>Clean, code-compliant installation</strong> with proper seals and secure anchoring.",
      "<strong>Honest fixture guidance</strong> matched to your budget and water use.",
      "<strong>Coordinated finishes</strong> across your whole bathroom.",
      "<strong>Old-fixture removal and haul-away</strong> included.",
    ],
    features: [
      { h: "Smart & Bidet Toilets", p: "Heated seats, warm-water cleansing, automatic lids, and night lights — spa comfort built into everyday routines." },
      { h: "Wall-Hung & Space-Saving", p: "Wall-mounted bowls with concealed tanks free up floor space and make cleaning effortless in powder rooms and compact baths." },
    ],
    faq: [
      ["How much does it cost to install a new toilet in Chicago?", "A straightforward replacement typically runs a few hundred dollars plus the fixture, while wall-hung and smart toilets cost more due to in-wall carriers, electrical, and added plumbing. We always provide a clear, fixed-price quote before any work begins."],
      ["Are smart toilets worth it?", "For many homeowners, yes. Heated seats, warm-water bidet washing, automatic lids, and self-cleaning features add real daily comfort and hygiene. We'll help you weigh the features against your budget."],
      ["What is a wall-hung toilet?", "It's a wall-mounted bowl with the tank concealed inside the wall. It frees up floor space, makes cleaning easier, and gives a modern, minimalist look — ideal for powder rooms and contemporary baths."],
      ["Do you remove and dispose of my old toilet?", "Yes. Removal, haul-away, and clean installation of the new fixture are all included in our service."],
      ["Can you install a toilet as part of a full remodel?", "Absolutely. We handle complete bathroom remodels — plumbing, tile, vanities, lighting, and fixtures — so your new toilet is one coordinated piece of the finished room."],
    ],
    related: ["faucets-and-shower-systems", "vanities-and-cabinetry", "accessories-and-hardware"],
  },
  faucets: {
    title: "Faucets & Shower Systems", eyebrow: "Fixtures",
    metaTitle: "Faucet & Shower System Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Designer faucets and custom shower systems installed in Chicago — rainfall heads, body jets, and thermostatic valves from Dornbracht, Gessi & Waterworks. Free estimates.",
    brands: ["Dornbracht", "Gessi", "Waterworks"],
    heroLine: "Designer faucets and custom shower systems, engineered and installed for everyday luxury in Chicago bathrooms.",
    overview: [
      "Faucets and shower systems are where everyday luxury lives. The right tapware feels substantial in the hand, delivers a perfect stream, and ties the whole room together. Our <a href=\"index.html\">Chicago bathroom remodeling</a> team designs and installs designer faucets, custom shower systems, and spa-grade valves built around how you actually use your bathroom.",
      "A modern shower system is more than a showerhead. We engineer rainfall heads, handheld sprays, body jets, and thermostatic or pressure-balancing valves so your water stays at a safe, steady temperature — then finish it all in the metal and style you love.",
      "We work with world-class makers including Dornbracht, Gessi, and Waterworks, and coordinate finishes across your <a href=\"accessories-and-hardware.html\">hardware</a>, <a href=\"vanities-and-cabinetry.html\">vanities</a>, and <a href=\"bathtubs.html\">tub fillers</a> for a seamless result.",
    ],
    options: [
      ["Single-hole & widespread faucets", "Deck-mounted faucets in every style, from minimalist to traditional."],
      ["Wall-mounted faucets", "Clean, space-saving tapware mounted above vessel and integrated sinks."],
      ["Rainfall & multi-function heads", "Overhead rain showers and adjustable sprays for a true spa feel."],
      ["Body jets & custom systems", "Multi-outlet showers with handhelds and sprays on precise controls."],
      ["Thermostatic & pressure-balancing valves", "Safe, steady water temperature every time you shower."],
      ["Designer finishes", "Polished and brushed nickel, chrome, matte black, and warm brass."],
    ],
    why: [
      "<strong>Proper valve and rough-in work</strong> for safe, consistent temperature.",
      "<strong>Leak-free connections</strong> and waterproofing done right.",
      "<strong>Coordinated finishes</strong> throughout the bathroom.",
      "<strong>Licensed, bonded & insured</strong> Chicago installers.",
    ],
    features: [
      { h: "Custom Shower Systems", p: "Rainfall heads, hand showers, and body jets on precise thermostatic controls for a true spa experience." },
      { h: "Designer Faucets", p: "Single-hole, widespread, and wall-mounted faucets in polished, brushed, matte-black, and warm-metal finishes." },
    ],
    faq: [
      ["How much does a custom shower system cost?", "It depends on the valve, the number of outlets (rainfall, handheld, body jets), and the finish. A simple upgrade is modest; a multi-function spa shower is a larger investment. We quote a fixed price after reviewing your plumbing."],
      ["What's the difference between thermostatic and pressure-balancing valves?", "Pressure-balancing valves keep temperature steady when water is used elsewhere in the home; thermostatic valves let you set an exact temperature and run multiple outlets at once. We'll recommend the right one for your setup."],
      ["Can I mix metal finishes?", "Yes, tastefully. Many designs pair a warm-metal faucet with complementary hardware. We help you coordinate finishes so the look is intentional rather than mismatched."],
      ["Do you move plumbing for a new faucet or shower layout?", "Yes. We can relocate supply lines and valves as part of a remodel, handling the rough-in, waterproofing, and finish work to code."],
      ["How long does a shower system installation take?", "A simple fixture swap can be same-day; a new custom system within a remodel is part of the overall one-to-four-week project timeline."],
    ],
    related: ["bathtubs", "tile-stone-and-mosaics", "accessories-and-hardware"],
  },
  bathtubs: {
    title: "Bathtubs & Soaking Tubs", eyebrow: "Fixtures",
    metaTitle: "Freestanding Bathtub & Soaking Tub Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Freestanding soaking tubs, air baths, and tub-to-shower conversions installed in Chicago. Premium Victoria + Albert, MTI Baths & BainUltra tubs. Free estimates.",
    brands: ["Victoria + Albert", "MTI Baths", "BainUltra"],
    heroLine: "Sculptural freestanding tubs and therapeutic soaking baths, expertly installed across Chicagoland.",
    overview: [
      "Few features transform a bathroom like a beautiful freestanding tub. Whether you want a deep soaker to unwind in or a therapeutic air bath, our <a href=\"index.html\">Chicago bathroom remodeling</a> team helps you choose and install the perfect tub — then builds the surrounding space to match.",
      "Tubs are heavier and more plumbing-dependent than they look. We handle floor-support considerations, drain and overflow placement, filler installation, and leak-proof connections so your tub performs beautifully for years to come.",
      "We love tubs from Victoria + Albert, MTI Baths, and BainUltra, finished with statement <a href=\"faucets-and-shower-systems.html\">tub fillers</a> and surrounded by custom <a href=\"tile-stone-and-mosaics.html\">tile and stone</a>.",
    ],
    options: [
      ["Freestanding soaking tubs", "Sculptural centerpieces in acrylic and stone composite."],
      ["Alcove & drop-in tubs", "Space-efficient tubs built into a surround or deck."],
      ["Air & hydrotherapy baths", "Warm-air jets and chromotherapy for spa-grade relaxation."],
      ["Tub-to-shower conversions", "Swap a dated tub for a sleek, accessible walk-in shower."],
      ["Freestanding & deck fillers", "Floor-mounted and deck-mounted fillers for clean lines."],
      ["Floor reinforcement", "Structural prep so heavy tubs are installed safely and solidly."],
    ],
    why: [
      "<strong>Expert handling</strong> of weight, support, and drainage.",
      "<strong>Precise filler and drain placement</strong> for clean lines.",
      "<strong>Watertight, waterproofed</strong> installation.",
      "<strong>Licensed, bonded & insured</strong> Chicago remodelers.",
    ],
    features: [
      { h: "Freestanding Soaking Tubs", p: "Stone-composite and acrylic tubs with clean silhouettes that become the centerpiece of the room." },
      { h: "Air & Hydrotherapy Baths", p: "Warm-air jets and chromotherapy lighting for therapeutic, spa-grade relaxation at home." },
    ],
    faq: [
      ["How much does freestanding tub installation cost in Chicago?", "The tub itself ranges widely by brand and material; installation adds plumbing for the filler and drain plus any floor prep. We provide one fixed-price quote covering both the fixture and the labor."],
      ["Will my floor support a freestanding tub?", "A filled stone or cast tub is heavy. We assess your floor structure and reinforce it if needed so the installation is safe and solid for the long term."],
      ["Should I choose a soaking tub or an air bath?", "A soaking tub is about deep, quiet immersion; an air bath adds warm-air jets and often chromotherapy for therapeutic relaxation. We'll match the choice to how you like to unwind."],
      ["Can you convert my tub to a walk-in shower?", "Yes — tub-to-shower conversions (and the reverse) are among our most common requests. We handle the plumbing, waterproofing, tile, and glass."],
      ["Where should the tub filler go?", "Freestanding floor-mounted and deck-mounted fillers each have advantages. We place it for the best look and ergonomics based on your tub and layout."],
    ],
    related: ["faucets-and-shower-systems", "tile-stone-and-mosaics", "bathroom-lighting"],
  },
  tile: {
    title: "Tile, Stone & Mosaics", eyebrow: "Surfaces",
    metaTitle: "Bathroom Tile, Natural Stone & Mosaic Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Marble, porcelain, natural stone, and handcrafted mosaic tile installed in Chicago bathrooms — curbless showers and heated floors. Ann Sacks, Artistic Tile & Bisazza.",
    brands: ["Ann Sacks", "Artistic Tile", "Bisazza"],
    heroLine: "Marble, stone, and handcrafted mosaics — flawlessly laid and waterproofed by Chicago's tile specialists.",
    overview: [
      "Tile and stone define the character of a bathroom more than any other surface. From book-matched marble to handmade glass mosaics, the right materials — installed correctly — create a space that feels custom and lasts for decades. Our <a href=\"index.html\">Chicago bathroom remodeling</a> installers are meticulous about layout, waterproofing, and crisp, consistent grout lines.",
      "Great tile work starts behind the wall. We build proper waterproofing and substrate, plan layouts so cuts land in the right places, and set each piece level and true. The result is a shower, floor, or feature wall that is as durable as it is beautiful.",
      "We source from Ann Sacks, Artistic Tile, and Bisazza, and coordinate your surfaces with <a href=\"vanities-and-cabinetry.html\">vanities</a>, <a href=\"bathtubs.html\">tubs</a>, and <a href=\"faucets-and-shower-systems.html\">shower systems</a> for a unified design.",
    ],
    options: [
      ["Porcelain & ceramic tile", "Durable, low-maintenance tile in endless styles and formats."],
      ["Natural stone", "Marble, limestone, and quartzite for timeless, high-end character."],
      ["Glass & stone mosaics", "Handcrafted accents for feature walls, niches, and floors."],
      ["Large-format & slabs", "Fewer grout lines for a seamless, contemporary look."],
      ["Heated tile floors", "Electric radiant warmth underfoot — perfect for Chicago winters."],
      ["Curbless showers & niches", "Barrier-free, waterproofed showers with built-in storage."],
    ],
    why: [
      "<strong>Proper waterproofing and substrate</strong> for results that last.",
      "<strong>Meticulous layout</strong> and grout detailing.",
      "<strong>Sealing and care guidance</strong> for natural stone.",
      "<strong>Licensed, bonded & insured</strong> Chicago tile pros.",
    ],
    features: [
      { h: "Natural Stone & Marble", p: "Honed and polished marble, limestone, and quartzite — sealed and set for lasting beauty." },
      { h: "Handcrafted Mosaics", p: "Glass, stone, and metal mosaics for feature walls, shower niches, and statement floors." },
    ],
    faq: [
      ["How much does bathroom tile installation cost in Chicago?", "Cost depends on the material, square footage, and complexity — mosaics and natural stone take more labor than standard tile. We provide a detailed, fixed-price quote after reviewing your project."],
      ["Is natural stone or porcelain better for a bathroom?", "Porcelain is extremely durable and low-maintenance; natural stone offers unmatched beauty but needs periodic sealing and gentle care. We'll help you choose based on your lifestyle and upkeep preferences."],
      ["What is a curbless shower?", "A barrier-free shower with no step to enter — sleek, modern, and excellent for accessibility. It requires careful floor sloping and waterproofing, which we specialize in."],
      ["Can you add a heated floor?", "Yes. Electric radiant heat under tile is a popular upgrade for Chicago winters, and we install it as part of the tile work."],
      ["How do you prevent leaks and mold?", "With proper waterproofing membranes, correct slope, quality setting materials, and sealed penetrations — the fundamentals that cut-rate installs often skip."],
    ],
    related: ["bathtubs", "vanities-and-cabinetry", "bathroom-lighting"],
  },
  vanities: {
    title: "Vanities & Cabinetry", eyebrow: "Cabinetry",
    metaTitle: "Bathroom Vanity & Cabinetry Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Floating and furniture-style bathroom vanities installed in Chicago with custom countertops and smart storage. Robern, Waterworks & Duravit. Free estimates.",
    brands: ["Robern", "Waterworks", "Duravit"],
    heroLine: "Floating and furniture-style vanities with the storage and finishes your Chicago bathroom deserves.",
    overview: [
      "A vanity is the hardest-working piece of furniture in your bathroom — it has to deliver storage, support your sink and faucet, and anchor the room's style. Our <a href=\"index.html\">Chicago bathroom remodeling</a> team designs and installs floating and furniture-style vanities with the storage and finishes that fit your space.",
      "We handle it all: securing cabinetry to the wall, integrating sinks and countertops, connecting plumbing, and dialing in soft-close drawers and smart organization. Floating vanities get precise blocking and leveling for a clean, solid, modern look.",
      "We specify cabinetry from Robern, Waterworks, and Duravit, coordinated with your <a href=\"mirrors-and-medicine-cabinets.html\">mirrors</a>, <a href=\"faucets-and-shower-systems.html\">faucets</a>, and <a href=\"bathroom-lighting.html\">lighting</a>.",
    ],
    options: [
      ["Floating vanities", "Wall-mounted cabinetry that feels light and modern and maximizes floor space."],
      ["Furniture-style vanities", "Freestanding pieces that bring warmth and character."],
      ["Single & double sinks", "Configurations tailored to your space and routine."],
      ["Integrated & undermount sinks", "Seamless, easy-to-clean sink and counter combinations."],
      ["Custom countertops", "Quartz, marble, and natural stone cut to fit."],
      ["Smart storage", "Soft-close drawers, organizers, and built-in outlets."],
    ],
    why: [
      "<strong>Secure, level installation</strong> — especially for floating units.",
      "<strong>Clean plumbing</strong> and countertop integration.",
      "<strong>Storage planned</strong> around your daily routine.",
      "<strong>Licensed, bonded & insured</strong> Chicago remodelers.",
    ],
    features: [
      { h: "Floating Vanities", p: "Wall-mounted cabinetry that feels light and modern while maximizing usable floor space." },
      { h: "Custom Storage", p: "Drawer organizers, outlets, and integrated sinks engineered around your daily routine." },
    ],
    faq: [
      ["What's the advantage of a floating vanity?", "It frees up visual floor space, makes cleaning easier, and gives a modern, high-end look. It does require solid wall blocking, which we install as part of the job."],
      ["Should I get a single or double vanity?", "Double sinks are great for shared primary baths if you have the width; a single vanity with more counter and storage often works better in tighter spaces. We'll plan the best fit for your room."],
      ["What countertop is best for a bathroom?", "Quartz is durable and low-maintenance; natural marble and stone are stunning but need sealing. We'll match the surface to your style and how much upkeep you want."],
      ["Can you reuse my existing plumbing?", "Often yes, but new vanities sometimes shift the sink location. We adjust supply and drain lines as needed for a clean, correct result."],
      ["Do you offer custom vanities?", "We offer premium stock and semi-custom cabinetry, and can coordinate custom solutions for unusual or oversized spaces."],
    ],
    related: ["mirrors-and-medicine-cabinets", "faucets-and-shower-systems", "bathroom-lighting"],
  },
  mirrors: {
    title: "Mirrors & Medicine Cabinets", eyebrow: "Cabinetry",
    metaTitle: "Backlit Mirrors & Medicine Cabinet Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "LED backlit mirrors, anti-fog mirrors, and recessed medicine cabinets installed in Chicago bathrooms. Robern, Waterworks & Duravit. Free estimates — (312) 555-0199.",
    brands: ["Robern", "Waterworks", "Duravit"],
    heroLine: "Backlit mirrors and smart medicine cabinets that add light, space, and storage to Chicago bathrooms.",
    overview: [
      "The right mirror does double duty: it makes a bathroom feel larger and brighter, and it's essential for daily grooming. Our <a href=\"index.html\">Chicago bathroom remodeling</a> team installs backlit LED mirrors, framed statement mirrors, and feature-rich medicine cabinets that add storage and flattering light.",
      "Beyond looks, we handle the practical details — wiring for backlit and defogging mirrors, recessing medicine cabinets into the wall, and positioning everything at the right height for your vanity and lighting plan.",
      "Our go-to makers include Robern, Waterworks, and Duravit, coordinated with your <a href=\"vanities-and-cabinetry.html\">vanity</a> and <a href=\"bathroom-lighting.html\">lighting</a>.",
    ],
    options: [
      ["Backlit LED mirrors", "Even, flattering light with dimming built in."],
      ["Anti-fog mirrors", "Integrated defoggers keep the glass clear after a shower."],
      ["Framed & frameless mirrors", "Statement pieces to match any style."],
      ["Recessed medicine cabinets", "Flush, built-in storage that disappears into the wall."],
      ["Lit cabinets with outlets", "Interior lighting, outlets, and USB charging."],
      ["Custom sizes", "Single and double-vanity configurations."],
    ],
    why: [
      "<strong>Proper electrical</strong> for lit and defogging mirrors.",
      "<strong>Clean recessed</strong> medicine-cabinet installs.",
      "<strong>Positioning coordinated</strong> with vanity and lighting.",
      "<strong>Licensed, bonded & insured</strong> Chicago team.",
    ],
    features: [
      { h: "Backlit LED Mirrors", p: "Even, flattering light with integrated defoggers and dimming for the perfect ambiance." },
      { h: "Smart Medicine Cabinets", p: "Concealed storage with interior lighting, outlets, and USB charging built in." },
    ],
    faq: [
      ["Are backlit LED mirrors worth it?", "They provide even, shadow-free light that's ideal for grooming and makeup, plus a modern glow. Many include dimming and anti-fog — a popular, high-impact upgrade for Chicago bathrooms."],
      ["Can a medicine cabinet be recessed into the wall?", "Yes, when the wall cavity allows. Recessed cabinets sit flush for a built-in look; we verify framing, plumbing, and wiring before cutting in."],
      ["Do lighted mirrors need an electrician?", "They require a proper power connection, which we handle to code as part of the installation."],
      ["What size mirror do I need?", "Generally a bit narrower than your vanity and centered over the sink. For double vanities, two mirrors or one wide unit both work — we'll advise on the best look."],
      ["Can you add outlets inside a medicine cabinet?", "Many models offer interior outlets and USB charging to keep the counter clutter-free, and we can install them."],
    ],
    related: ["vanities-and-cabinetry", "bathroom-lighting", "accessories-and-hardware"],
  },
  lighting: {
    title: "Bathroom Lighting", eyebrow: "Lighting",
    metaTitle: "Bathroom Lighting Design & Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Layered bathroom lighting designed and installed in Chicago — vanity sconces, recessed, pendants, and dimmers. Visual Comfort & Co., Waterworks & Robern. Free estimates.",
    brands: ["Visual Comfort & Co.", "Waterworks", "Robern"],
    heroLine: "Layered, dimmable bathroom lighting designed and installed to transform your Chicago bath into a spa.",
    overview: [
      "Lighting is the difference between a bathroom that merely functions and one that feels like a spa. Great bathroom lighting is layered — task light for grooming, ambient light for comfort, and accent light for mood — all on dimmers. Our <a href=\"index.html\">Chicago bathroom remodeling</a> team designs and installs complete lighting plans.",
      "We position sconces and vanity lighting to eliminate shadows, add dimmable recessed fixtures for even ambient light, and layer in pendants or cove lighting for warmth and drama. Everything is installed to code by licensed professionals.",
      "We love fixtures from Visual Comfort & Co., Waterworks, and Robern, coordinated with your <a href=\"mirrors-and-medicine-cabinets.html\">mirrors</a> and <a href=\"vanities-and-cabinetry.html\">vanity</a>.",
    ],
    options: [
      ["Vanity sconces & bars", "Flattering, shadow-free light right where you need it."],
      ["Recessed lighting", "Even, discreet ambient light throughout the room."],
      ["Pendants & decorative fixtures", "Statement pieces that add warmth and personality."],
      ["Backlit mirror integration", "Seamless lit mirrors as part of the plan."],
      ["Dimmers & smart controls", "Set any mood and save energy."],
      ["Damp/wet-rated fixtures", "Safe lighting for showers and tub areas."],
    ],
    why: [
      "<strong>Layered design</strong> for task, ambient, and accent light.",
      "<strong>Code-compliant</strong> damp/wet-rated fixtures where needed.",
      "<strong>Dimming and controls</strong> for any mood.",
      "<strong>Licensed, bonded & insured</strong> Chicago installers.",
    ],
    features: [
      { h: "Vanity & Task Lighting", p: "Sconces and backlit mirrors positioned to eliminate shadows for grooming and makeup." },
      { h: "Ambient & Accent", p: "Dimmable recessed lighting, pendants, and cove lighting to layer warmth and drama." },
    ],
    faq: [
      ["How should bathroom lighting be layered?", "Combine task lighting at the mirror, ambient recessed or ceiling light, and optional accent lighting — all dimmable. This flatters grooming and sets a relaxing mood."],
      ["Where should vanity lighting go?", "Sconces on either side of the mirror at roughly eye level give the most flattering, shadow-free light. Over-mirror fixtures and backlit mirrors also work well."],
      ["Can you put lights in the shower?", "Yes — using damp- or wet-rated recessed fixtures rated for the location and installed to code."],
      ["Do you install dimmers and smart controls?", "Absolutely. Dimmers are one of the highest-impact, lowest-cost upgrades, and we can add smart lighting controls too."],
      ["Will new lighting require new wiring?", "Sometimes. Adding sconces or relocating fixtures may require new runs and boxes, which we handle as licensed professionals."],
    ],
    related: ["mirrors-and-medicine-cabinets", "vanities-and-cabinetry", "tile-stone-and-mosaics"],
  },
  accessories: {
    title: "Accessories & Finishing Hardware", eyebrow: "Hardware",
    metaTitle: "Bathroom Accessory & Hardware Installation in Chicago | Bathroom Remodeling Chicago",
    metaDesc: "Coordinated towel bars, hooks, pulls, and finishing hardware installed in Chicago bathrooms. Designer finishes from Waterworks, Kallista & Gessi. Free estimates.",
    brands: ["Waterworks", "Kallista", "Gessi"],
    heroLine: "Coordinated towel bars, hooks, and finishing hardware that make your Chicago bathroom feel complete.",
    overview: [
      "Finishing hardware is the jewelry of the bathroom — the towel bars, hooks, pulls, and fittings that make a space feel tailored and complete. Our <a href=\"index.html\">Chicago bathroom remodeling</a> team coordinates accessories across consistent finishes so every detail looks intentional.",
      "It sounds simple, but placement and secure mounting matter: towel bars and grab-friendly fixtures need solid blocking, and finishes should match across your faucets, lighting, and cabinetry. We handle the details that elevate the whole room.",
      "We specify hardware from Waterworks, Kallista, and Gessi to match your <a href=\"faucets-and-shower-systems.html\">faucets</a> and <a href=\"vanities-and-cabinetry.html\">cabinetry</a>.",
    ],
    options: [
      ["Towel bars, rings & hooks", "Everyday essentials in coordinated finishes."],
      ["Robe & valet hooks", "Convenient, stylish storage for towels and robes."],
      ["Cabinet & drawer pulls", "The finishing touch on your vanity and cabinetry."],
      ["Paper holders & shelves", "Functional accessories that match the room."],
      ["Coordinated finishes", "Nickel, chrome, matte black, and warm brass."],
      ["Grab bars & accessibility", "Designer grab bars mounted into solid blocking."],
    ],
    why: [
      "<strong>Secure mounting</strong> with proper wall blocking.",
      "<strong>Finishes coordinated</strong> across the whole bathroom.",
      "<strong>Thoughtful placement</strong> for daily use.",
      "<strong>Licensed, bonded & insured</strong> Chicago remodelers.",
    ],
    features: [
      { h: "Coordinated Finishes", p: "Polished nickel, matte black, unlacquered brass, and more — matched across every fitting." },
      { h: "Everyday Details", p: "Towel bars, rings, hooks, paper holders, and cabinet pulls selected for form and function." },
    ],
    faq: [
      ["Why does finishing hardware matter so much?", "It's what your hands touch every day and what ties the design together. Coordinated, well-placed hardware makes a bathroom feel custom and complete."],
      ["Should all my hardware match?", "Finishes should coordinate — faucets, lighting, and accessories in complementary metals. Styles can vary slightly, but a consistent finish palette looks most intentional."],
      ["Can you install grab bars that look good?", "Yes. Modern grab bars come in designer finishes and can double as towel bars, mounted into solid blocking for safety."],
      ["Do towel bars need special mounting?", "They need secure anchoring — ideally into blocking or studs — so they don't pull loose over time. We ensure a solid install."],
      ["Can you match new hardware to my existing fixtures?", "We'll coordinate new hardware to your faucets and finishes, or refresh everything for a cohesive, updated look."],
    ],
    related: ["faucets-and-shower-systems", "vanities-and-cabinetry", "mirrors-and-medicine-cabinets"],
  },
};

function head(title, desc, canonical, ogImg, extraLd = "") {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImg}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
${extraLd}
</head>
<body>`;
}

function header(active) {
  const menu = products.map((p) => `            <a href="${p.slug}.html"${p.slug === active ? ' aria-current="page"' : ""}>${p.label}</a>`).join("\n");
  return `  <div class="topbar">
    <div class="container topbar__inner">
      <span class="topbar__item">★★★★★ Rated 4.9/5 by 180+ Chicago homeowners</span>
      <span class="topbar__item topbar__item--right">Licensed · Bonded · Insured in Illinois</span>
    </div>
  </div>
  <header class="header" id="header">
    <div class="container header__inner">
      <a href="index.html" class="brand">
        <span class="brand__mark">B</span>
        <span class="brand__text">Bathroom Remodeling <strong>Chicago</strong></span>
      </a>
      <nav class="nav" id="nav">
        <a href="index.html#services">Services</a>
        <span class="nav__group">
          <a href="index.html#shop">Products</a>
          <span class="nav__menu">
${menu}
          </span>
        </span>
        <a href="index.html#gallery">Gallery</a>
        <a href="index.html#reviews">Reviews</a>
        <a href="index.html#contact">Contact</a>
      </nav>
      <div class="header__cta">
        <a href="tel:${tel}" class="phone-link">
          <span class="phone-link__label">Call for a Free Quote</span>
          <span class="phone-link__number">${phone}</span>
        </a>
        <a href="index.html#contact" class="btn btn--primary btn--sm">Free Estimate</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </div>
  </header>`;
}

function footer() {
  const prodLinks = products.map((p) => `        <a href="${p.slug}.html">${p.label}</a>`).join("\n");
  return `  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__col">
        <a href="index.html" class="brand brand--light">
          <span class="brand__mark">B</span>
          <span class="brand__text">Bathroom Remodeling <strong>Chicago</strong></span>
        </a>
        <p>Chicago's trusted bathroom remodeling and renovation experts. Licensed, bonded &amp; insured.</p>
      </div>
      <div class="footer__col">
        <h4>Products</h4>
${prodLinks}
      </div>
      <div class="footer__col">
        <h4>Company</h4>
        <a href="index.html#services">Services</a>
        <a href="index.html#gallery">Gallery</a>
        <a href="index.html#process">Our Process</a>
        <a href="index.html#reviews">Reviews</a>
        <a href="index.html#faq">FAQ</a>
        <a href="sitemap.html">Sitemap</a>
      </div>
      <div class="footer__col">
        <h4>Contact</h4>
        <a href="tel:${tel}">${phone}</a>
        <a href="mailto:hello@bathroomremodelingchicago.com">hello@bathroomremodelingchicago.com</a>
        <p>Serving Chicago &amp; surrounding suburbs</p>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <span>© <span id="year"></span> Bathroom Remodeling Chicago. All rights reserved.</span>
        <span class="footer__legal">
          <a href="privacy.html">Privacy Policy</a>
          <a href="tos.html">Terms of Service</a>
          <a href="sitemap.html">Sitemap</a>
        </span>
      </div>
    </div>
  </footer>
  <a href="tel:${tel}" class="mobile-call">📞 Call for a Free Quote</a>
  <script src="gallery.js"></script>
</body>
</html>
`;
}

function leadFormBlock(projectValue) {
  return `<form class="quote-card" data-lead novalidate>
          <h3>Request a Free Quote</h3>
          <p class="quote-card__sub">Get a response within 24 hours.</p>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="hidden" name="project" value="${projectValue}" />
          <button type="submit" class="btn btn--primary btn--block">Get My Free Quote</button>
          <p class="quote-card__fine">No obligation. Your info is never sold.</p>
        </form>`;
}

function categoryPage(slug) {
  const p = bySlug[slug];
  const c = content[p.key];
  const il = installLabels[p.key];
  const imgs = pool[p.key];
  // Assign each on-page slot a unique image so nothing repeats across hero / features / why / gallery.
  const heroImg = imgs[0];
  const featImgs = [imgs[1], imgs[2]];
  const whyImg = imgs[3];
  const galleryImgs = imgs.slice(4);
  const canonical = `https://bathroomremodelingchicago.com/${p.slug}.html`;

  const brandChips = c.brands.map((b) => `<span class="brand-chip">${b}</span>`).join("\n        ");
  const overview = c.overview.map((x) => `        <p>${x}</p>`).join("\n");
  const options = c.options.map(([s, t]) => `        <li><strong>${s}.</strong> ${t}</li>`).join("\n");
  const why = c.why.map((x) => `          <li>${x}</li>`).join("\n");
  const masonry = galleryImgs.map((u) => `        <a class="masonry__item" data-full="${img(u, 1600, 85)}"><img src="${img(u, 800, 80)}" alt="${c.title} — luxury bathroom detail in Chicago" loading="lazy" /></a>`).join("\n");
  const features = c.features.map((f, i) => {
    const rev = i % 2 === 1 ? " feature--rev" : "";
    return `      <div class="feature${rev}">
        <div class="feature__media"><img src="${img(featImgs[i], 900, 80)}" alt="${f.h} — ${c.title}" loading="lazy" /></div>
        <div class="feature__content">
          <h2>${f.h}</h2>
          <p>${f.p}</p>
          <a href="index.html#contact" class="btn btn--primary" style="margin-top:18px">Get a Free Estimate</a>
        </div>
      </div>`;
  }).join("\n");
  const faqItems = c.faq.map(([q, a]) => `        <details class="faq__item"><summary>${q}</summary><p>${a}</p></details>`).join("\n");
  const related = c.related.map((rs) => {
    const rp = bySlug[rs];
    const thumb = pool[rp.key][0];
    return `        <a class="related__card" href="${rp.slug}.html">
          <img class="related__thumb" src="${img(thumb, 200, 70)}" alt="${rp.label}" loading="lazy" />
          <div><h4>${rp.label}</h4><span>Explore →</span></div>
        </a>`;
  }).join("\n");

  const ld = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bathroomremodelingchicago.com/" },
      { "@type": "ListItem", "position": 2, "name": c.title, "item": canonical },
    ]},
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": c.faq.map(([q, a]) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) },
  ];
  const extraLd = ld.map((o) => `  <script type="application/ld+json">\n  ${JSON.stringify(o)}\n  </script>`).join("\n");

  return `${head(c.metaTitle, c.metaDesc, canonical, img(heroImg, 1200, 80), extraLd)}
${header(slug)}

  <section class="subhero">
    <div class="subhero__bg" style="background-image:url('${img(heroImg, 1920, 80)}')"></div>
    <div class="container subhero__inner">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span>${c.title}</nav>
      <p class="eyebrow">${c.eyebrow}</p>
      <h1>${il} in Chicago</h1>
      <p>${c.heroLine}</p>
      <div class="subhero__actions">
        <a href="index.html#contact" class="btn btn--primary btn--lg">Get My Free Estimate</a>
        <a href="tel:${tel}" class="btn btn--ghost btn--lg">Call ${phone}</a>
      </div>
    </div>
  </section>

  <section class="brandbar">
    <div class="container brandbar__inner">
      <span class="brandbar__label">We install premium brands including</span>
      ${brandChips}
    </div>
  </section>

  <section class="section">
    <div class="container container--narrow prose">
      <h2>Professional ${il} in Chicago</h2>
${overview}
    </div>
    <div class="container" style="margin-top:36px">
${features}
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section__head">
        <p class="eyebrow">What We Offer</p>
        <h2>${c.title} We Design &amp; Install</h2>
        <p class="section__lead">Every option below is available as a standalone upgrade or as part of a complete Chicago bathroom remodel.</p>
      </div>
      <ul class="offer-grid">
${options}
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head">
        <p class="eyebrow">Inspiration</p>
        <h2>${c.title} Gallery</h2>
        <p class="section__lead">A selection of looks we can design and install for your Chicago bathroom. Click any image to view it larger.</p>
      </div>
      <div class="masonry">
${masonry}
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container why">
      <div class="why__media"><img src="${img(whyImg, 900, 80)}" alt="Why Chicago homeowners choose us for ${c.title.toLowerCase()}" loading="lazy" /></div>
      <div class="why__content">
        <p class="eyebrow">Why Choose Us</p>
        <h2>Why Choose Us for ${il} in Chicago</h2>
        <ul class="ticks">
${why}
        </ul>
        <a href="index.html#contact" class="btn btn--primary">Start Your Project</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container container--narrow">
      <div class="section__head">
        <p class="eyebrow">Questions</p>
        <h2>${il} FAQ</h2>
      </div>
      <div class="faq">
${faqItems}
      </div>
    </div>
  </section>

  <section class="leadband">
    <div class="container leadband__inner">
      <div>
        <p class="eyebrow" style="color:#fff">Start Your Project</p>
        <h2>Ready to upgrade your ${c.title.toLowerCase()}?</h2>
        <p>Tell us about your bathroom and we'll put together a free, fixed-price estimate — no obligation, response within 24 hours.</p>
      </div>
      <div class="leadband__form">
        ${leadFormBlock(c.title)}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head"><p class="eyebrow">Keep Exploring</p><h2>Related Products</h2></div>
      <div class="related">
${related}
      </div>
    </div>
  </section>

${footer()}`;
}

// ---------- Legal + sitemap pages ----------
const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function legalPage(slug, title, metaDesc, bodyHtml) {
  const canonical = `https://bathroomremodelingchicago.com/${slug}.html`;
  return `${head(title + " | Bathroom Remodeling Chicago", metaDesc, canonical, img(pool.hero[0], 1200, 80))}
${header("")}
  <main class="legal">
    <div class="container container--narrow">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span>${title}</nav>
      <h1>${title}</h1>
      <p class="legal__updated">Last updated: ${today}</p>
${bodyHtml}
    </div>
  </main>
${footer()}`;
}

const privacyBody = `
      <p>Bathroom Remodeling Chicago ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect through our website, how we use it, and the choices you have. By using this website you agree to this policy.</p>
      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> When you submit a quote or contact form, we collect your name, phone number, email address, and any project details you share.</li>
        <li><strong>Automatically collected data:</strong> Standard technical data such as IP address, browser type, and pages visited may be collected to operate and improve the site.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide estimates and services.</li>
        <li>To communicate with you about your project.</li>
        <li>To improve our website and services.</li>
      </ul>
      <h2>How We Share Information</h2>
      <p>We do <strong>not</strong> sell your personal information. We share it only with service providers who help us operate the business (for example, our email delivery provider) and only as needed to respond to you, or when required by law.</p>
      <h2>Data Retention</h2>
      <p>We retain inquiry information for as long as needed to respond to you and for legitimate business or legal purposes.</p>
      <h2>Your Choices</h2>
      <p>You may request that we update or delete your information, or ask us to stop contacting you, at any time by emailing <a href="mailto:hello@bathroomremodelingchicago.com">hello@bathroomremodelingchicago.com</a>.</p>
      <h2>Third-Party Links</h2>
      <p>Our site may link to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>
      <h2>Children's Privacy</h2>
      <p>Our website is not directed to children under 13, and we do not knowingly collect information from them.</p>
      <h2>Changes to This Policy</h2>
      <p>We may update this policy from time to time. Changes are effective when posted on this page.</p>
      <h2>Contact Us</h2>
      <p>Questions about this policy? Contact us at <a href="mailto:hello@bathroomremodelingchicago.com">hello@bathroomremodelingchicago.com</a> or ${phone}.</p>
      <p style="font-size:0.85rem;margin-top:24px"><em>This policy is provided as a general template and does not constitute legal advice. Please have it reviewed by a qualified attorney before relying on it.</em></p>`;

const tosBody = `
      <p>These Terms of Service ("Terms") govern your use of the Bathroom Remodeling Chicago website. By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the site.</p>
      <h2>Use of the Website</h2>
      <p>You may use this website for lawful purposes only. You agree not to misuse the site, interfere with its operation, or attempt to access it in an unauthorized manner.</p>
      <h2>No Guarantee of Services</h2>
      <p>Content on this website — including descriptions of products, brands, services, pricing ranges, and timelines — is for general informational purposes only and does not constitute a binding offer. All project scopes, prices, and schedules are confirmed only in a written estimate or signed agreement.</p>
      <h2>Brand References</h2>
      <p>Brand names and trademarks referenced on this site (such as fixture and material manufacturers) are the property of their respective owners. References are for informational purposes to describe products we may supply or install and do not imply endorsement, affiliation, or authorized-dealer status unless expressly stated.</p>
      <h2>Intellectual Property</h2>
      <p>The content, design, and layout of this website are owned by or licensed to us and are protected by applicable laws. You may not reproduce or redistribute site content without permission.</p>
      <h2>Estimates &amp; Communications</h2>
      <p>Submitting a form requests that we contact you; it does not create a contract for services. Any services are governed by a separate written agreement.</p>
      <h2>Limitation of Liability</h2>
      <p>The website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any damages arising from your use of the website.</p>
      <h2>Governing Law</h2>
      <p>These Terms are governed by the laws of the State of Illinois, without regard to conflict-of-law principles.</p>
      <h2>Changes to These Terms</h2>
      <p>We may update these Terms at any time. Continued use of the site after changes are posted constitutes acceptance of the updated Terms.</p>
      <h2>Contact Us</h2>
      <p>Questions about these Terms? Contact us at <a href="mailto:hello@bathroomremodelingchicago.com">hello@bathroomremodelingchicago.com</a> or ${phone}.</p>
      <p style="font-size:0.85rem;margin-top:24px"><em>These terms are provided as a general template and do not constitute legal advice. Please have them reviewed by a qualified attorney before relying on them.</em></p>`;

function sitemapPage() {
  const canonical = "https://bathroomremodelingchicago.com/sitemap.html";
  const prodLinks = products.map((p) => `          <li><a href="${p.slug}.html">${p.label}</a></li>`).join("\n");
  const body = `
  <main class="section">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span>Sitemap</nav>
      <div class="section__head" style="margin-bottom:34px">
        <p class="eyebrow">Sitemap</p>
        <h2>Explore the Site</h2>
        <p class="section__lead">Everything on bathroomremodelingchicago.com, organized for easy browsing.</p>
      </div>
      <div class="sitemap-cols">
        <div>
          <h3>Main Pages</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#gallery">Gallery</a></li>
            <li><a href="index.html#process">Our Process</a></li>
            <li><a href="index.html#reviews">Reviews</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
            <li><a href="index.html#contact">Contact / Free Estimate</a></li>
          </ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>
${prodLinks}
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="tos.html">Terms of Service</a></li>
            <li><a href="sitemap.xml">XML Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
  </main>`;
  return `${head("Sitemap | Bathroom Remodeling Chicago", "Browse all pages on bathroomremodelingchicago.com — services, product categories, and company information.", canonical, img(pool.hero[0], 1200, 80))}
${header("")}
${body}
${footer()}`;
}

// ---------- Write files ----------
for (const p of products) { writeFileSync(`${p.slug}.html`, categoryPage(p.slug)); console.log("wrote", `${p.slug}.html`); }
writeFileSync("privacy.html", legalPage("privacy", "Privacy Policy", "Privacy Policy for Bathroom Remodeling Chicago — what information we collect, how we use it, and your choices.", privacyBody));
writeFileSync("tos.html", legalPage("tos", "Terms of Service", "Terms of Service for the Bathroom Remodeling Chicago website.", tosBody));
writeFileSync("sitemap.html", sitemapPage());
console.log("wrote privacy.html, tos.html, sitemap.html");
console.log("done");
