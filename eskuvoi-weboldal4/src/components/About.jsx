import { useRef } from 'react'
import { useReveal } from './useReveal'

export default function About() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section section--pale" id="bemutatkozas" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-photos reveal">
            <img
              className="about-photo-main"
              src="http://mooira.hu/wp-content/uploads/2015/01/6-Szett-III-05.jpg"
              alt="Tóth Eszter, mooira tervező"
            />
            <img
              className="about-photo-inset"
              src="http://mooira.hu/wp-content/uploads/2016/10/IMG_1016.jpg"
              alt="mooira műhely"
            />
          </div>
          <div className="about-text reveal">
            <h2 className="about-name" style={{ textAlign: 'center' }}>
              Eszter vagyok,<br />és imádok<br />
              <em>esküvői ruhákat</em><br />tervezni.
            </h2>
            <p>2014 óta tervezek és készítek egyedi esküvői ruhákat Győrben. Minden egyes darabot én álmodok meg és én készítek el — a legnagyobb odafigyeléssel, hogy igazán egyedi és tökéletes legyen.</p>
            <p>Fontos nekem, hogy te is különleges élményként éld meg ezt az időszakot. Személyesen kísérlek végig minden lépésen — az első konzultációtól az utolsó próbáig —, hogy a ruha tökéletesen illeszkedjen a személyiségedhez.</p>
            {/*<div className="about-stats">
              <div>
                <span className="stat-num">10+</span>
                <span className="stat-label">Év tapasztalat</span>
              </div>
              <div>
                <span className="stat-num">200+</span>
                <span className="stat-label">Elkészült ruha</span>
              </div>
              <div>
                <span className="stat-num">100%</span>
                <span className="stat-label">Elégedett menyasszony</span>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
