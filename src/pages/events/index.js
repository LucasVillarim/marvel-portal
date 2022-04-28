import style from './style.css';
import { useGlobal } from '../../context/context';

export default function EventsComponent() {
    const { marvelEvents } = useGlobal();

    const mapEvents = () => {
        return marvelEvents.map(marvelEvent => {
            return (
                <div className='event-wrapper'>
                    <img src={marvelEvent.thumbnail?.path + '/portrait_xlarge.jpg'} alt="img comic" />
                    <l3>{marvelEvent?.title}</l3>
                    <ul>
                        <li>
                            <a href={marvelEvent.urls[0]?.url} target="_blank">
                                {
                                marvelEvent.urls[0] 
                                ? 'Details' 
                                : ''
                                }
                            </a>
                        </li>
                        <li>
                            <a href={marvelEvent.urls[1]?.url} target="_blank">
                                {
                                marvelEvent.urls[1] 
                                ? 'Wiki' 
                                : ''
                                }
                            </a>
                        </li>
                        <li>
                            <a href={marvelEvent.urls[2]?.url} target="_blank">
                                {
                                marvelEvent.urls[2] 
                                ? 'Comic' 
                                : ''
                                }
                            </a>
                        </li>
                    </ul>
                </div>
            )
        });
    }

    return (
        <div className="events-container">
            <l1>MARVEL EVENTS</l1>
            {mapEvents()}
        </div>
    )
}