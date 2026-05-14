import { useState } from 'react';
import { interests } from '../data/content';

const Interests = () => {
  const [active, setActive] = useState(0);
  const interest = interests[active];

  return (
    <section id="interests" className="interests">
      <h2>Interests</h2>

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

      <div className="interests-card">
        <img src={interest.images} alt={interest.title} className="interests-img" />
        <p className="interests-description">{interest.description}</p>
        <p className="interests-favorites-label">Favorites</p>
        <div className="interests-favorites">
          {interest.favorites.map((fav) => (
            <span key={fav} className="interests-tag">{fav}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;