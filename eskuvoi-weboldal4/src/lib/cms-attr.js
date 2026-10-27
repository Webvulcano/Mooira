// A vizuális szerkesztő data-cms attribútumai kliens komponensekhez (a getCms() accessor függvényei
// nem adhatók át szerverről kliensre). Ugyanaz, mint a kit cms.attr()-ja.
export function cmsAttr(key, i, f) {
  return {
    'data-cms': key,
    ...(i != null ? { 'data-cms-i': String(i) } : {}),
    ...(f ? { 'data-cms-f': f } : {}),
  }
}
