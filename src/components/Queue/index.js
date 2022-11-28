import './index.css';
import Entry from '../Entry';

const Queue = (props) => {
  const { queue, onEntryRemove } = props;

  let minutesWasted = 0;
  for (let i = 0; i < queue.length; i += 1) {
    minutesWasted += queue[i].duration
  }

  return (
    <div className="Queue">
      <h2>Queue</h2>
      <h3>{minutesWasted}</h3>
      <p>seconds of your life are about to be wasted.</p>
      <div className="entries">
        {queue.map((entry, i) => (
          <Entry key={i} index={i} entry={entry} onEntryRemove={onEntryRemove} />
        ))}
      </div>
    </div>
  );
};

export default Queue;