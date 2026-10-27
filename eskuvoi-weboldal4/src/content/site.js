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
  cta: 'Kollekciók',
  image: { src: '/eszter.jpg', alt: `${OWNER_NAME}, mooira tervező` },
}

export const COLLECTION = {
  title: 'Jelenlegi kollekció',
  ctaTitle: 'Tovább a kollekcióhoz',
  ctaSub: 'Összes ruha →',
  // amíg az adminban nincs feltöltve a carousel-képhely
  fallbackImages: ['/kollekcio/1.jpg', '/kollekcio/2.jpg', '/kollekcio/5.jpg', '/kollekcio/4.jpg'].map((src) => ({ src, alt: 'Esküvői ruha' })),
}

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
}

export const CONTACT = {
  title: 'Lépjünk kapcsolatba',
  successTitle: 'Örülök, hogy írtál!',
  successText: 'Elolvasom az elképzelésed, és 1–2 napon belül személyesen keresni foglak, hogy megbeszéljük a részleteket.',
  successSign: '— Eszter',
}

export const KOLLEKCIO_PAGE = {
  seoTitle: `Kollekciók — ${BRAND_NAME}`,
  title: 'Kollekciók',
  subtitle: 'Nézd meg, milyen ruhák születtek eddig — aztán mondd el, a Tiéd milyen legyen.',
}
