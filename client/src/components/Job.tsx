import { jobs } from "../data/content"

const Job = () => {
    return (
        <section id="jobs" className="job-container">
            <h2>Job History (of brokeness)</h2>
            <div className="jobs">
                {jobs.map(({ title, employer, team, time, description }) =>
                    <div key={title}>
                        <p className="job-title">{title}</p>
                        <div>
                            <span className="job-subtitle">{employer}</span>
                            {team && <span className="job-subtitle"> - {team}</span>}
                        </div>
                        <p className="job-time">{time}</p>
                        <p className="desc">{description}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Job;