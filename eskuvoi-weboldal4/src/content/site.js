// Központi tartalom: név, elérhetőség, szekció-szövegek.
// Ezek a CMS alapértékei (cms.manifest.js innen importál) — élesben az admin felülírhatja őket.
// Szabály: ide NE kerüljön "@/..." import, mert a manifest-sync az admin repóból tsx-szel tölti be.

export const BRAND_NAME = 'Mooira'
export const OWNER_NAME = 'Tóth Eszter'
export const CITY_IN = 'Győrben' // ragozva, pl. „… készítése Győrben”

export const CONTACT_EMAIL = 'mooira.info@gmail.com'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

export const PHONE_DISPLAY = '+36 70 513 5869'
export const PHONE_TEL = 'tel:+36705135869'

export const FACEBOOK_URL = 'https://www.facebook.com/mooiramenyasszonyiruha'
export const INSTAGRAM_URL = 'https://www.instagram.com/mooira_couture/'

export const SEO = {
  title: `${BRAND_NAME.toLowerCase()} — Egyedi Esküvői Ruhák | ${OWNER_NAME}`,
  description: `Egyedi esküvői ruhák tervezése és készítése ${CITY_IN}. ${OWNER_NAME} — 2014 óta, 200+ elkészült ruha.`,
}

export const HERO = {
  tagline: `Egyedi esküvői ruhák · ${OWNER_NAME}`,
}

export const COUTURE = {
  label: 'MOOIRA COUTURE',
  title: 'Ruha, ami\nRólad szól.',
  body: [
    'A Mooira esküvői ruhák a menyasszonyról szólnak. Vagyis Rólad.',
    'Arról a különleges érzésről, amikor igazán gyönyörűnek és felszabadultnak érzed magad. Egy ruha, ami könnyed, komfortos, kiemeli a szépséged, nőiességed, és teret ad annak, hogy a nagy napon szabadon átadhasd magad a házasságkötés meghitt pillanatainak.',
    'A Mooira kifinomult, kissé romantikus stílusa személyre szabott tervezéssel találkozik, így minden ruha természetes harmóniába kerül azzal a nővel, aki viseli.',
  ].join('\n\n'),
  image: { src: '/mooira-couture.jpg', alt: 'Menyasszony mooira esküvői ruhában' },
}

export const ABOUT = {
  label: 'ISMERD MEG A TERVEZŐT',
  name: OWNER_NAME,
  body: [
    'Eszternek az álma valósult meg, amikor divattervezői tanulmányait követően 2014-ben megalapította a Mooira-t és esküvői ruhákat kezdett készíteni.',
    'Eszter elhivatottsága és az esküvői ruhák iránti szenvedélye minden egyes kreációját átszövi. A tervező személyesen foglalkozik a menyasszonyokkal a ruhapróbákon és saját kezűleg készíti el az általa és menyasszonyai által megálmodott ruhákat, biztosítva ezzel a maximális odafigyelést és minőséget.',
  ].join('\n\n'),
  cta: 'Időpontot foglalok',
  image: { src: '/eszter.jpg', alt: `${OWNER_NAME}, mooira tervező` },
}

// Főoldal: az „Ismerd meg a tervezőt" helyett (2026-11-16)
export const COUTURE_INTRO = {
  label: 'Kollekció | készítés | bérlés',
  title: 'Mooira couture',
  body: [
    'A Mooira Couture-nál saját tervezésű menyasszonyi ruhákat találsz. A kollekciós darabok közül szabadon választhatsz, felpróbálhatod mindazokat, amelyek megtetszenek, és közben együtt fedezhetjük fel, melyik áll igazán közel hozzád. A bemutatódarabokat bérelheted, megvásárolhatod, vagy kiinduló alapként szolgálhatnak az egyedi ruhakészítéshez.',
  ],
  image: { src: '/kollekcio-keszites-berles.jpg', alt: 'Mooira menyasszonyi ruha csipkés hátrésze, ruhapróba közben' },
}

// „Találd meg a tökéletes ruhát" — Vélemények fölött (2026-11-16). Szöveg + kép kódban, CMS-ből nem szerkeszthető.
export const FIND_DRESS = {
  label: 'Amiben jól érzed magad',
  // \u00a0 = nem törhető szóköz → ha tördelni kell, csak „Találd meg / a tökéletes ruhát” módon törjön
  title: 'Találd\u00a0meg a\u00a0tökéletes\u00a0ruhát',
  body: [
    'Az esküvői ruhád megtalálása egy különleges utazás, tele izgalommal, felfedezéssel és apró, örömteli pillanatokkal. Lehet, hogy már pontosan tudod, milyen ruhára vágysz, de az is lehet, hogy még csak keresed azt a fazont, anyagot és stílust, amelyben igazán el tudnád képzelni magad.',
    'Bárhonnan is indulsz, szeretettel várlak. Nem kell kész elképzelésekkel érkezned, hiszen együtt fedezzük fel, mely fazonok, anyagok és részletek állnak hozzád a legközelebb.',
    'Figyelmesen kísérlek végig a választás folyamatán, hogy megtaláljuk azt a ruhát, amelyben megszületik benned az a bizonyos érzés: igen, ez az én ruhám! :)',
  ],
  image: { src: 'https://fwhgroduenrtixzuwpfv.supabase.co/storage/v1/object/public/site-media/d92b02d2-03ae-41ec-b336-661715ac6bf4/gallery/7c583b23-6d67-4c3f-a2dc-7ade914f71f2/199ddfbd-d0dc-4ff5-a16c-053e744a2521.webp', alt: 'Menyasszony Mooira esküvői ruhában' }, // CMS galéria kép (Lehel, 2026-11-16)
  cta: { label: 'Fedezd fel', href: '#kapcsolat' }, // → időpontfoglaló űrlap (2026-11-16)
}

// „Ruhapróba, ami Rólad szól" — a Csomagok (Árak) alatt (2026-11-16).
export const FITTING = {
  title: 'Ruhapróba, ami\u00a0Rólad\u00a0szól',
  body: [
    'Szeretném, ha a ruhapróba nem egy időre szabott feladat, hanem egy kellemes, kötetlen élmény lenne. Hagyom, hogy legyen időd felpróbálni a neked tetsző ruhákat, megismerni a különböző fazonokat, felfedezni, hogy melyik anyagtípust és díszítést érzed leginkább magadénak. Nem siettetlek, és nem kell azonnal döntened.',
    'Találjuk meg együtt a ruhát, amiben meseszépnek érzed magad, és amit legszívesebben soha nem vennél le! :)',
  ],
  image: { src: '/ruhaproba.jpg', alt: 'Mooira esküvői ruha csipkés vállrésze közelről' }, // forrás: forrasok/IMG_1020.JPEG (1800px-re kicsinyítve)
  cta: { label: 'Ruhát próbálok', href: '#kapcsolat' }, // → időpontfoglaló űrlap (2026-11-16)
}

export const COLLECTION = {
  title: 'Mooira pillanatok',
  ctaTitle: '', // üres = csak az alsó sor látszik (Lehel, 2026-11-13)
  ctaSub: 'Összes kép →',
  // amíg az adminban nincs feltöltve a carousel-képhely
  fallbackImages: ['/kollekcio/1.jpg', '/kollekcio/7.jpg' /* 2. kép a CMS galériából (9e30509d…), 2026-11-16 (régi: 2.jpg) */, '/kollekcio/5.jpg', '/kollekcio/4.jpg'].map((src) => ({ src, alt: 'Esküvői ruha' })),
}

// ⚠️ Készítés menete 2026-11-13 óta NINCS az oldalon (Eszter kérése); az Árak szekció marad, de ár nélkül. A manifest még tartalmazza a folyamatot,
// hogy az élő (régi) oldal ne ürüljön ki a következő revalidate-kor → élesítés után: manifestből + innen törölni, sync.
export const PROCESS = {
  title: 'Esküvői ruha készítés menete',
  steps: [
    { num: '01', title: 'Időpontfoglalás', text: 'Vedd fel velünk a kapcsolatot e-mailben vagy telefonon, és egyeztessünk egy számodra megfelelő időpontot! Ha egyedi menyasszonyi ruhát szeretnél, érdemes már az esküvőd előtt 9–12 hónappal felvenned velünk a kapcsolatot, hogy legyen elegendő időnk együtt megálmodni és megalkotni a számodra tökéletes ruhát. Ha ennél kevesebb idő áll rendelkezésedre, akkor se habozz írni nekünk! Keress bátran, és ha lehetőségeink engedik, örömmel segítünk megvalósítani az elképzeléseidet.' },
    { num: '02', title: 'Konzultáció', text: 'Egy személyes találkozás, ahol megismerjük az elképzeléseidet, bemutatódarabokat próbálhatsz fel, és közösen elindulunk a tökéletes fazon és a hozzád illő anyagok kiválasztása felé.' },
    { num: '03', title: 'Próbák', text: 'Az álomruhád megszületéséhez általában 3–4 személyes próbára van szükség, hogy minden részlet tökéletesen illeszkedjen hozzád.' },
  ],
}

export const TESTIMONIALS = {
  title: 'Vélemények',
  // amíg az adminban (Vélemények menü) nincs egy sem — 4. lépésben ezek kerülnek importálásra
  fallback: [
    { quote: 'A ruha egyszerűen varázslatos volt. Imádtam minden benne töltött percet. Igazi hercegnőnek éreztem magam benne. A násznép is áradozott róla, milyen szép. Csodát alkottál. Nagyon köszönöm neked!', cite: 'Fanni' },
    { quote: 'Szeretném még egyszer megköszönni, hogy elkészítetted az menyasszonyi ruhámat. Mindenki szerint csodaszép volt, és én is nagyon jól éreztem magam benne a nagy napunkon. ', cite: 'Noémi' },
    { quote: 'Tényleg nem lehetek elég hálás, hogy egy ilyen lényeges résszel hozzájárultál az esküvőnkhöz, és nagyon köszönöm a rám szánt időt és kedvességet az első találkozástól kezdve.', cite: 'Dóra' },
    { quote: 'Hálásan köszönöm a gyönyörű menyasszonyi ruhámat! ❤️❤️ Fantasztikus és gyönyörű volt,  imádtam és mindenki más is odáig volt érte.', cite: 'Dalma' },
    { quote: 'Egyszerűen meseszépnek éreztem magam és mindenki agyon dicsérte, hogy na ez igazán én vagyok ez a ruha, és én is ezt gondolom.', cite: 'Dóra' },
    { quote: 'Nagyon köszönöm mégegyszer a csodálatos ruhát 🥰 Gyönyörűnek éreztem magam benn egész nap. Szuperül bírta a terepet és a rengeteg táncot is.😁', cite: 'Adri' },
  ],
}

export const PRICING = {
  title: 'Válaszd a számodra\nmegfelelő megoldást.',
  // highlight: "igen" → kiemelt kártya (adminban rejtett mező)
  cards: [
    { type: 'Egyedi tervezés', title: 'Egyedi ruhakészítés', desc: 'Az elképzelésedből kiindulva megtervezzük és elkészítem a méretedre az esküvői ruhád.', price: '420 000 Ft', note: '-tól · anyaggal együtt', highlight: '' },
    { type: 'Kollekcióból', title: 'Kollekcióból méretre készítés', desc: 'Válassz menyasszonyi ruhát a kollekcióból, és elkészítem a méretedre. (34–42-es méretig készítek esküvői ruhákat.)', price: '390 000 Ft', note: '-tól · anyaggal együtt', highlight: 'igen' },
    { type: 'Bérlés', title: 'Esküvői ruha bérlés', desc: 'Bérelj esküvői ruhát a kollekcióból! A kollekció bemutató darabjai 36–38-as méretűek. Ha jó a méret, béreld!', price: '290 000 Ft', note: '-tól', highlight: '' },
  ],
  // kártyánként 1 kép, sorrendben (Lehel választása, 2026-11-16) — adminban cserélhető (Árak → Képek)
  // 2. kép: IMG_4673 (fekvő, csipke + gyűrűs kezek; Lehel cseréje 2026-11-16)
  images: [
    // 1. kép: gyöngygombos csipkés hát (a CMS galériából, Lehel cseréje 2026-11-16)
    { src: '/megoldasok/1.jpg', width: 1000, height: 1500, alt: 'Mooira esküvői ruha gyöngygombos csipkés háta' },
    // 2. kép: flitteres felsőrészes ruha, fehér fal előtt (a CMS galériából; 2026-11-16 a 3. helyről a 2.-ra cserélve)
    { src: '/megoldasok/3.jpg', width: 1000, height: 1500, alt: 'Menyasszony flitteres felsőrészes Mooira ruhában' },
    // 3. kép: csipkés felsőrész + gyűrűs kezek (Lehel: 2. és 3. kép csere, 2026-11-16)
    { src: '/megoldasok/2.jpg', width: 2100, height: 1400, alt: 'Mooira esküvői ruha csipkés felsőrésze' },
  ],
}

export const CONTACT = {
  title: 'Lépjünk kapcsolatba',
  // Eszter eredeti mondatai szó szerint, a kivett „Készítés menete” 01. lépéséből
  intro: 'Ha egyedi menyasszonyi ruhát szeretnél, érdemes már az esküvőd előtt 9–12 hónappal felvenned velünk a kapcsolatot, hogy legyen elegendő időnk együtt megálmodni és megalkotni a számodra tökéletes ruhát. Ha ennél kevesebb idő áll rendelkezésedre, akkor se habozz írni nekünk! Keress bátran, és ha lehetőségeink engedik, örömmel segítünk megvalósítani az elképzeléseidet.',
  // köszönő popup (sikeres űrlapküldés után)
  successTitle: 'Örülök, hogy itt vagy!',
  successText: 'Hamarosan felveszem Veled a kapcsolatot.',
  successSign: '— Eszter',
}

// /pillanatok oldal (korábban /kollekcio — a CMS-kulcs „kollekcio” maradt, hogy ne archiválódjon)
// /rolunk oldal (Eszter „Menüpont kifejtése”, 2026-11) — szövegek SZÓ SZERINT Eszteréi, csak elírásjavítással.
// Képek: Lehel választása (forrasok/uj ruhak, 2026-11-13) → public/rolunk/; az adminban cserélhetők.
export const ROLUNK_PAGE = {
  seoTitle: `Rólunk — ${BRAND_NAME}`,
  label: 'A MÁRKA MÖGÖTT',
  title: 'Mooira couture\nRuha, ami Rólad szól',
  intro: 'A Mooira esküvői ruhák a menyasszonyról szólnak. Arról a különleges érzésről, amikor igazán gyönyörűnek és felszabadultnak érzed magad. Egy ruha, ami kiemeli a szépséged, és teret enged annak, hogy a nagy napon szabadon átadhasd magad a házasságkötés meghitt pillanatainak.',
  wideImage: { src: '/rolunk/nagy.jpg', alt: 'A Mooira szalon menyasszonyi ruhákkal' },
  style: 'A Mooira kifinomult, kissé romantikus stílusa személyre szabott tervezéssel találkozik, így minden ruha természetes harmóniába kerül azzal a nővel, aki viseli.',
  trio: ['/rolunk/1.jpg', '/rolunk/3.jpg', '/rolunk/2.jpg'].map((src) => ({ src, alt: 'Mooira esküvői ruha' })),
  designerLabel: 'Ismerd meg a tervezőt',
  designerTitle: `${OWNER_NAME}, a Mooira Couture tervezője`,
  designerBody: [
    'Eszternek az álma valósult meg, amikor divattervezői tanulmányait követően 2014-ben megalapította a Mooira-t és esküvői ruhákat kezdett készíteni. Elhivatottsága és az esküvői ruhák iránti szenvedélye minden egyes kreációját átszövi.',
    'A tervező személyesen foglalkozik a menyasszonyokkal a ruhapróbákon és saját kezűleg készíti el az általa és menyasszonyai által megálmodott ruhákat, biztosítva ezzel a maximális odafigyelést és minőséget.',
  ].join('\n\n'),
  cta: 'Időpontot foglalok',
  portrait: { src: '/eszter.jpg', alt: `${OWNER_NAME}, a Mooira Couture tervezője` },
}

export const KOLLEKCIO_PAGE = {
  seoTitle: `Mooira pillanatok — ${BRAND_NAME}`,
  title: 'Mooira pillanatok',
  subtitle: 'Kis betekintés fotózások és valódi menyasszonyok különleges pillanataiba',
}
