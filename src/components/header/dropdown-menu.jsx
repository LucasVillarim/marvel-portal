import { Link, useNavigate } from 'react-router-dom';
import { useGlobal } from '../../context/context';
import style from './dropdown-style.css';

export default function DropdownMenu() {
    const { marvelHeroes, marvelComics, marvelEvents, marvelCreators } = useGlobal();

    const navigate = useNavigate();

    const handleRoute = (content) => {
        navigate('/marvelContent', { state: content });
    }

    const generateMenuOptionHtml = (content) => {

        const numberList = [];
        while (numberList.length < 6) {
            let randomNumber = Math.floor(Math.random() * 20) + 1;
            if (numberList.indexOf(randomNumber) === -1) numberList.push(randomNumber);
        }
        console.log(numberList);

        const cards = numberList.map(number => {
            return (
                <li>
                    <div className="card-body">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={content[number]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                            </div>
                            <div className="card-back">
                                <a className='white-link' href={content[number]?.urls[0].url}>Details</a>
                            </div>
                        </div>
                    </div>
                    <h3>{content[number]?.name || content[number]?.firstName}</h3>
                </li>
            )
        })

        return cards;
    }

    const handleListComponent = (content) => {
        switch (content) {
            case 'heroes':
                return generateMenuOptionHtml(marvelHeroes);
            case 'comics':
                return generateMenuOptionHtml(marvelComics);
            case 'events':
                return generateMenuOptionHtml(marvelEvents);
            case 'creators':
                return generateMenuOptionHtml(marvelCreators);
            default:
                break;
        }
    }

    return (
        <>
            <div className='btn-wrapper margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('heroes')}>Heroes</a>
            </div>
            <div className='heroes-content'>
                <h1>Most famous</h1>
                <ul>
                    {handleListComponent('heroes')}
                </ul>
            </div>

            <div className='btn-wrapper margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('heroes')}>Creators</a>
            </div>
            <div className='heroes-content'>
                <h1>Legends</h1>
                <ul>
                    {handleListComponent('creators')}
                </ul>
            </div>

            <div className='btn-wrapper--comics margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('comics')}>Comics</a>
            </div>
            <div className='comics-content'>
                <h1>Trending</h1>
                <ul>
                    {handleListComponent('comics')}
                </ul>
            </div>

            <div className='btn-wrapper--events margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('events')}>Events</a>
            </div>
            <div className='events-content'>
                <h1>Soon</h1>
                <ul>
                    {handleListComponent('events')}
                </ul>
            </div>
            <Link to="/members" className='members-btn menu-link nav--link'>Members</Link>
        </>
    );

}