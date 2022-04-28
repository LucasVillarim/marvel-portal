import { Link } from 'react-router-dom';
import { useGlobal } from '../../context/context';
import style from './dropdown-style.css';

export default function DropdownMenu() {
    const { marvelHeroes, marvelComics, marvelEvents } = useGlobal();

    return (
        <>
            <div className='btn-wrapper margin-16 padding-rl-20'>
                <Link to="/heroes" className='heroes-link nav--link'>Heroes</Link>
            </div>
            <div className='heroes-content'>
                <l1>Most famous</l1>
                <ul>
                    <li>
                        {/* Here and in the next code blocks, I would choose to make something more clear, 
                        dynamic and readable, but to make the challenge faster, this solution using 
                        hardcoded numbers is functional and easier to implement. */}
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelHeroes[14]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                                </div>
                                <div className="card-back">
                                    <l3>{marvelHeroes[14]?.name}</l3>
                                </div>
                            </div>
                        </div>
                        <l3>{marvelHeroes[14]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelHeroes[10]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelHeroes[10]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelHeroes[6]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelHeroes[6]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelHeroes[7]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelHeroes[7]?.name}</l3>
                    </li>
                </ul>
            </div>


            <div className='btn-wrapper--comics margin-16 padding-rl-20'>
                <Link to="/comics" className='nav--link'>Comics</Link>
            </div>
            <div className='comics-content'>
                <l1>Trending</l1>
                <ul>
                    <li>
                        <img src={marvelComics[14]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelComics[14]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelComics[10]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelComics[10]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelComics[6]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelComics[6]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelComics[7]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelComics[7]?.name}</l3>
                    </li>
                </ul>
            </div>

            <div className='btn-wrapper--events margin-16 padding-rl-20'>
                <Link to="/events" className='nav--link'>Events</Link>
            </div>
            <div className='events-content'>
                <l1>Soon</l1>
                <ul>
                    <li>
                        <img src={marvelEvents[1]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelEvents[1]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelEvents[16]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelEvents[10]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelEvents[6]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelEvents[6]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelEvents[7]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelEvents[7]?.name}</l3>
                    </li>
                </ul>
            </div>
            <Link to="/members" className='members-btn nav--link'>Members</Link>

        </>
    );

}