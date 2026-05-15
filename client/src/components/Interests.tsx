import { useState } from 'react';
import { interests } from '../data/content';
import { GiFluffyWing } from "react-icons/gi";

const Interests = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + interests.length) % interests.length);
  const next = () => setActive((i) => (i + 1) % interests.length);

  const interest = interests[active];

  return (
    <section id="interests" className="interests">
      <h2>Interests</h2>
      <p className="interest-backstory">
        I am just a girl with a series of unhealthy/healthy obsessions. Some of them add to my brokeness (or negate?).
        <br />
        Keep in mind, I am illiterate.
      </p>

      <div className="interests-tabs">
        {interests.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            className={`interests-tab ${i === active ? 'active' : ''}`}
          >
          </button>
        ))}
      </div>

      <div className="interests-carousel">
        <button className="carousel-btn" onClick={prev}><GiFluffyWing className='wing-icon' /></button>

        <div className="interests-card">
          <img src={interest.images} alt={interest.title} className="interests-img" />
          <p className="interests-title">{interest.title}</p>
          <p className="interests-description">{interest.description}</p>
          <p className="interests-favorites-label">Favorites</p>
          <div className="interests-favorites">
            {interest.favorites.map((fav) => (
              <span key={fav} className="interests-tag">{fav}</span>
            ))}
          </div>
        </div>

        <button className="carousel-btn" onClick={next}><GiFluffyWing className='wing-icon' style={{ transform: "scaleX(-1)" }} /></button>
      </div>
    </section>
  );
};

export default Interests;