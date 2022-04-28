import style from './style.css';
import { useGlobal } from '../../context/context';


export default function ComicsComponent() {
    const { marvelComics } = useGlobal();

    const mapComics = () => {
        return marvelComics.map(marvelComic => {
            return (
                <div className='comic-wrapper'>
                    <img src={marvelComic.thumbnail.path + '/portrait_xlarge.jpg'} alt="img comic" />
                    <l3>{marvelComic.title}</l3>
                    <ul>
                        <li>
                            <a href={marvelComic.urls[0]?.url} target="_blank">
                                {
                                marvelComic.urls[0] 
                                ? 'Details' 
                                : ''
                                }
                            </a>
                        </li>
                        <li>
                            <a href={marvelComic.urls[1]?.url} target="_blank">
                                {
                                marvelComic.urls[1] 
                                ? 'Wiki' 
                                : ''
                                }
                            </a>
                        </li>
                        <li>
                            <a href={marvelComic.urls[2]?.url} target="_blank">
                                {
                                marvelComic.urls[2] 
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
        <div className="comics-container">
            {mapComics()}
        </div>
    )
}