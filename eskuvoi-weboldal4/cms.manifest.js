// CMS manifest: mit szerkeszthet az ügyfél az Ügyfél Adminban (analytics-site).
// Kulcsok véglegesek — átnevezés új mezőt hoz létre, a régi archiválódik (a mentett tartalma a DB-ben marad).
// Tagok (ügyfél e-mailek) a gitignore-olt cms.members.local.json-be mennek, ide SOHA.
// Sync: (admin repo) npx tsx scripts/sync-manifest.mjs <ez a fájl> --print-secret
//
// 2. lépés (2026-10-27): csak site + modulok + SEO. Szövegek / képhelyek: 3. lépés (cms-bekotes-terv.md).

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
        seo(
          "mooira — Egyedi Esküvői Ruhák | Tóth Eszter",
          "Egyedi esküvői ruhák tervezése és készítése Győrben. Tóth Eszter — 2014 óta, 200+ elkészült ruha.",
        ),
      ],
    },
    {
      key: "kollekcio",
      label: "Kollekciók",
      path: "/kollekcio",
      sections: [seo("Kollekciók — Mooira")],
    },
  ],
};

export default manifest;
