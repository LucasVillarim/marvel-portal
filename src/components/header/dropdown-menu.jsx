import { Link, useNavigate } from 'react-router-dom';
import { useGlobal } from '../../context/context';
import style from './dropdown-style.css';

export default function DropdownMenu() {
    const { marvelHeroes, marvelComics, marvelEvents, marvelCreators, imageUrlComplement } = useGlobal();
    const navigate = useNavigate();

    const handleRoute = (content) => {
        navigate('/marvelContent', { state: content });
    }

    const generateMenuOption = (content) => {
        // Generates a random number, so we can have some different things appearing in screen
        const numberList = [];
        while (numberList.length < 6) {
            let randomNumber = Math.floor(Math.random() * 20) + 1;
            if (numberList.indexOf(randomNumber) === -1) numberList.push(randomNumber);
        }

        const cards = numberList.map(number => {
            return (
                <li key={number}>
                    <div className="card-body">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={content[number]?.thumbnail?.path + imageUrlComplement} />
                            </div>
                            <div className="card-back">
                                <a className='white-link' href={content[number]?.urls[0].url}>Details</a>
                            </div>
                        </div>
                    </div>
                    <h3 className='card-subtitle'>{content[number]?.name || content[number]?.fullName || content[number]?.title}</h3>
                </li>
            )
        })

        return cards;
    }

    const handleListComponent = (content) => {
        switch (content) {
            case 'heroes':
                return generateMenuOption(marvelHeroes);
            case 'comics':
                return generateMenuOption(marvelComics);
            case 'events':
                return generateMenuOption(marvelEvents);
            case 'creators':
                return generateMenuOption(marvelCreators);
            default:
                break;
        }
    }

    return (
        <>
            {/* Heroes Menu Option */}
            <div className='btn-wrapper margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('heroes')}>Heroes</a>
            </div>
            <div className='heroes-content'>
                <h1>Most famous</h1>
                <ul>
                    {handleListComponent('heroes')}
                </ul>
            </div>

            {/* Creators Menu Option */}
            <div className='btn-wrapper margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('creators')}>Creators</a>
            </div>
            <div className='heroes-content'>
                <h1>Legends</h1>
                <ul>
                    {handleListComponent('creators')}
                </ul>
            </div>

            {/* Comics Menu Option */}
            <div className='btn-wrapper--comics margin-16 padding-rl-20'>
                <a className='menu-link nav--link' onClick={() => handleRoute('comics')}>Comics</a>
            </div>
            <div className='comics-content'>
                <h1>Trending</h1>
                <ul>
                    {handleListComponent('comics')}
                </ul>
            </div>

            {/* Events Menu Option */}
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