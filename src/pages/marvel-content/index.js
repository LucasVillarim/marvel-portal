import { useGlobal } from '../../context/context';
import { useLocation } from 'react-router-dom';
import style from './style.css';

export default function MarvelContentComponent() {
    const { marvelEvents, marvelComics, marvelHeroes, marvelCreators } = useGlobal();
    const {state} = useLocation();

    const handleContentToMap = () => {
      switch (state) {
          case 'heroes':
              return mapContent(marvelHeroes);
          case 'comics':
              return mapContent(marvelComics);
          case 'events':
              return mapContent(marvelEvents);
          case 'creators':
              return mapContent(marvelCreators);
          default:
              break;
      }
    }

    // Dynamically maps the content passed
    const mapContent = (contentToMap) => {
        return contentToMap.map(marvelContent => {
            return (
                <div key={marvelContent.id} className='event-wrapper'>
                    <img src={marvelContent.thumbnail?.path + '/portrait_xlarge.jpg'} alt="img comic" />
                    <h3>{marvelContent?.title || marvelContent?.fullName}</h3>
                    <ul>
                        <li>
                            <a href={marvelContent.urls[0]?.url} target="_blank">
                                {
                                marvelContent.urls[0] 
                                ? 'Details' 
                                : ''
                                }
                            </a>
                        </li>
                        <li>
                            <a href={marvelContent.urls[1]?.url} target="_blank">
                                {
                                marvelContent.urls[1] 
                                ? 'Wiki' 
                                : ''
                                }
                            </a>
                        </li>
                        <li>
                            <a href={marvelContent.urls[2]?.url} target="_blank">
                                {
                                marvelContent.urls[2] 
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
            <h1>MARVEL {state.toUpperCase()}</h1>
            {handleContentToMap()}
        </div>
    )
}