// CMS manifest: mit szerkeszthet az ügyfél az Ügyfél Adminban (analytics-site).
// Alapértékek: src/content/site.js. Kulcsok véglegesek — átnevezés új mezőt hoz létre, a régi archiválódik
// (a mentett tartalma a DB-ben marad).
// Tagok (ügyfél e-mailek) a gitignore-olt cms.members.local.json-be mennek, ide SOHA.
// Sync: (admin repo) npx tsx scripts/sync-manifest.mjs <ez a fájl> --print-secret

import {
  ABOUT,
  COLLECTION,
  CONTACT,
  CONTACT_EMAIL,
  COUTURE,
  FACEBOOK_URL,
  HERO,
  INSTAGRAM_URL,
  KOLLEKCIO_PAGE,
  PHONE_DISPLAY,
  PRICING,
  PROCESS,
  SEO,
  TESTIMONIALS,
} from "./src/content/site.js";

const text = (key, label, def, maxLength = 90) => ({ key, label, type: "text", maxLength, default: def });
const area = (key, label, def, maxLength = 600, extra = {}) => ({ key, label, type: "textarea", maxLength, default: def, ...extra });
const rich = (key, label, def) => ({ key, label, type: "richtext", default: def });
const it = (key, label, type = "text", extra = {}) => ({ key, label, type, ...extra });

const seo = (title, description) => ({
  key: "seo",
  label: "Google-megjelenés",
  fields: [
    { key: "title", label: "Oldal címe (Google, böngészőfül)", type: "text", maxLength: 70, hidden: true, default: title },
    ...(description !== undefined
      ? [{ key: "description", label: "Leírás (Google találati lista)", type: "textarea", maxLength: 160, hidden: true, default: description }]
      : []),
  ],
});

const manifest = {
  site: {
    slug: "mooira",
    name: "Mooira",
    // saját domain még nincs → domain-átállásnál ide az új URL + sync
    url: "https://mooira.vercel.app",
    revalidatePath: "/api/revalidate",
  },
  locales: [{ code: "hu", label: "Magyar" }],
  members: [],
  analytics: {
    vercel: {
      projectId: "prj_fF0W8fnPwcJuth468zwZuyjEIWtN",
      teamId: "team_3e4PonEWGDktxZ3jN5cVjuN8",
      // Valódi konverziók (src/lib/analytics.js eseménynevei); a többi esemény = érdeklődés.
      conversions: ["Telefonhívás", "Email", "Űrlapküldés"],
    },
  },
  // Kollekciók oldal (/kollekcio) = galéria modul, egy közös lista (1 kategória).
  // maxWidth 1000: 3 oszlop × ~400 px, retinán 2× (ugyanaz, mint a kézi WebP-konverzió).
  gallery: {
    label: "Kollekciók",
    maxWidth: 1000,
    aspect: "2/3",
    links: [],
  },
  reviews: { label: "Vélemények" },
  pages: [
    {
      key: "home",
      label: "Főoldal",
      path: "/",
      sections: [
        seo(SEO.title, SEO.description),
        {
          // Minden oldalon (menü, kapcsolat, lábléc) ezek jelennek meg.
          key: "contact_info",
          label: "Elérhetőségek",
          fields: [
            text("email", "E-mail", CONTACT_EMAIL, 80),
            text("phone", "Telefonszám", PHONE_DISPLAY, 30),
            { key: "facebook", label: "Facebook link", type: "url", default: FACEBOOK_URL },
            { key: "instagram", label: "Instagram link", type: "url", default: INSTAGRAM_URL },
          ],
        },
        {
          key: "hero",
          label: "Nyitó rész",
          fields: [text("tagline", "Felirat a logó alatt", HERO.tagline, 60)],
        },
        {
          key: "couture",
          label: "Mooira Couture",
          fields: [
            text("label", "Felirat a cím felett", COUTURE.label, 40),
            area("title", "Cím (soronként egy sor)", COUTURE.title, 80, { lines: true }),
            rich("body", "Szöveg", COUTURE.body),
          ],
          images: [
            {
              key: "image",
              label: "Kép",
              maxWidth: 1200,
              default: { src: COUTURE.image.src, alt: COUTURE.image.alt },
            },
          ],
        },
        {
          key: "about",
          label: "Bemutatkozás",
          fields: [
            text("label", "Felirat a cím felett", ABOUT.label, 40),
            text("name", "Név", ABOUT.name, 40),
            rich("body", "Szöveg", ABOUT.body),
            text("cta", "Gomb felirata", ABOUT.cta, 30),
          ],
          images: [
            {
              key: "image",
              label: "Portré",
              maxWidth: 1200,
              default: { src: ABOUT.image.src, alt: ABOUT.image.alt },
            },
          ],
        },
        {
          key: "collection",
          label: "Kollekció (főoldali képsor)",
          fields: [
            text("title", "Cím", COLLECTION.title, 60),
            text("cta_title", "Utolsó kártya — felirat", COLLECTION.ctaTitle, 40),
            text("cta_sub", "Utolsó kártya — alsó sor", COLLECTION.ctaSub, 30),
          ],
          images: [
            {
              key: "carousel",
              label: "Képsor",
              help: "A főoldalon lapozható képek (a teljes lista a Kollekciók menüben van).",
              kind: "gallery",
              maxItems: 8,
              maxWidth: 1000,
              aspect: "3/4",
            },
          ],
        },
        {
          key: "process",
          label: "Ruhakészítés menete",
          fields: [
            text("title", "Cím", PROCESS.title, 60),
            {
              key: "steps",
              label: "Lépések",
              type: "list",
              itemFields: [
                it("num", "Sorszám", "text", { maxLength: 4 }),
                it("title", "Lépés", "text", { maxLength: 40 }),
                it("text", "Leírás", "textarea", { maxLength: 700 }),
              ],
              default: PROCESS.steps,
            },
          ],
        },
        {
          key: "testimonials",
          label: "Vélemények",
          fields: [text("title", "Cím", TESTIMONIALS.title, 40)],
        },
        {
          key: "pricing",
          label: "Árak",
          fields: [
            area("title", "Cím (soronként egy sor)", PRICING.title, 100, { lines: true }),
            {
              key: "cards",
              label: "Kártyák",
              type: "list",
              itemFields: [
                it("type", "Felirat", "text", { maxLength: 30 }),
                it("title", "Cím", "text", { maxLength: 60 }),
                it("desc", "Leírás", "textarea", { maxLength: 300 }),
                it("price", "Ár", "text", { maxLength: 20 }),
                it("note", "Ár melletti megjegyzés", "text", { maxLength: 40 }),
                it("highlight", "Kiemelt", "text", { maxLength: 4, hidden: true }),
              ],
              default: PRICING.cards,
            },
          ],
        },
        {
          key: "contact",
          label: "Kapcsolat",
          fields: [
            text("title", "Cím", CONTACT.title, 40),
            text("success_title", "Köszönő üzenet — cím", CONTACT.successTitle, 40),
            area("success_text", "Köszönő üzenet — szöveg", CONTACT.successText, 300),
            text("success_sign", "Köszönő üzenet — aláírás", CONTACT.successSign, 30),
          ],
        },
      ],
    },
    {
      key: "kollekcio",
      label: "Kollekciók",
      path: "/kollekcio",
      sections: [
        seo(KOLLEKCIO_PAGE.seoTitle),
        {
          key: "head",
          label: "Fejléc",
          fields: [
            text("title", "Cím", KOLLEKCIO_PAGE.title, 40),
            area("subtitle", "Alcím", KOLLEKCIO_PAGE.subtitle, 200),
          ],
        },
      ],
    },
  ],
};

export default manifest;
