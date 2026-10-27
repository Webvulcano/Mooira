import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, PHONE_DISPLAY } from '@/content/site'

// Elérhetőségek a CMS-ből (home.contact_info.*), üres mezőnél a content/site.js alapértéke.
// + a Kapcsolat szekció szövegei (home.contact.*) — a szekció minden oldalon ott van.
export function siteInfoFromCms(cms) {
  const email = cms.text('home.contact_info.email').trim() || CONTACT_EMAIL
  const phone = cms.text('home.contact_info.phone').trim() || PHONE_DISPLAY
  return {
    email,
    mailto: `mailto:${email}`,
    phone,
    tel: `tel:${phone.replace(/[^\d+]/g, '')}`,
    facebook: cms.text('home.contact_info.facebook') || FACEBOOK_URL,
    instagram: cms.text('home.contact_info.instagram') || INSTAGRAM_URL,
    contact: {
      title: cms.text('home.contact.title'),
      successTitle: cms.text('home.contact.success_title'),
      successText: cms.text('home.contact.success_text'),
      successSign: cms.text('home.contact.success_sign'),
    },
  }
}
