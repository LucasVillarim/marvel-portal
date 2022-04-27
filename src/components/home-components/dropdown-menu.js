import { useGlobal } from '../../context/context';
import style from './style.css';

export default function DropdownMenu(randomNumber) {
    const { marvelHeroes, marvelComics } = useGlobal();

    return (
        <>
            <div className='btn-wrapper margin-16'>
                <a>Heroes</a>
            </div>
            <div className='heroes-content'>
                <l1>Most famous</l1>
                <ul>
                    <li>
                        <img src={marvelHeroes[14]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
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


            <div className='btn-wrapper--comics margin-16'>
                <a>Comics</a>
            </div>
            <div className='comics-content'>
                <l1>Trending</l1>
                <ul>
                    <li>
                        <img src={marvelHeroes[14]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
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

            <div className='btn-wrapper--events margin-16'>
                <a>Events</a>
            </div>
            <div className='events-content'>
                <l1>Soon</l1>
                <ul>
                    <li>
                        <img src={marvelHeroes[15]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                        <l3>{marvelHeroes[14]?.name}</l3>
                    </li>
                    <li>
                        <img src={marvelHeroes[16]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
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

        </>
    );

}