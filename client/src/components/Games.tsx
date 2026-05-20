import { useState } from "react";
import { games } from '../data/content'
import { GiFluffyWing } from "react-icons/gi";


const Games = () => {
    const [active, setActive] = useState(0);

    const prev = () => setActive((i) => (i - 1 + games.length) % games.length);
    const next = () => setActive((i) => (i + 1) % games.length);

    const game = games[active];

    return (
        <section id="games" className="interests">
            <h2>Games</h2>

            <p className="interest-backstory">
                Games are how I get by mentally. <br /> Some of these games though... do not exactly help.
            </p>

            <div className="interests-tabs">
                {games.map((item, i) => (
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
                    <img src={game.image} alt={game.title} className="interests-img" />
                    <p className="interests-title">{game.title}</p>
                    <p className="interests-description">{game.description}</p>
                    <p className="interests-tags-label">Tags</p>
                    <div className="interests-tags">
                        {game.tags.map((fav) => (
                            <span key={fav} className="interests-tag">{fav}</span>
                        ))}
                    </div>
                </div>

                <button className="carousel-btn" onClick={next}><GiFluffyWing className='wing-icon' style={{ transform: "scaleX(-1)" }} /></button>
            </div>
        </section>
    );

};

export default Games;