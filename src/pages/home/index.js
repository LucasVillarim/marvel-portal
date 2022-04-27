import style from './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useGlobal } from '../../context/context';
import DropdownMenu from '../../components/home-components/dropdown-menu';
import { useEffect, useState } from 'react';

export default function HomeComponent() {
    const {marvelHeroes, marvelComics, marvelSpiderVerse} = useGlobal();
    const [sortedHeroes, setSortedHeroes] = useState({});

    useEffect(() => {

        marvelHeroes.forEach((hero, index) => {
            // setSortedHeroes({...sortedHeroes, ['hero'+index]: sortedNumber})
            console.log(sortedHeroes);
        })

    }, [])

    return (
        <div className="container">
            <header className="home-header">
                <img className='marvel-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png' width='150'></img>
                <DropdownMenu />
                <a>
                    Members
                </a>
            </header>

            <section className="section-carousel">
                {/* <div className='carousel-detail'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
                        <path fill="#fff" fill-opacity="1" d="M0,96L1440,64L1440,320L0,320Z"></path>
                    </svg>
                </div> */}
                <Carousel autoPlay={true} dynamicHeight={false} showIndicators={false} showStatus={false}>
                    <div className='carousel-div'>
                        <img src="https://scifibr.files.wordpress.com/2011/12/banner-avengers-1.jpg" />
                        {/* <p className="legend">COMICS</p> */}
                    </div>
                    <div className='carousel-div'>
                        <img src="https://www.belloflostsouls.net/wp-content/uploads/2021/11/MoonKnightHeader.jpg" />
                        {/* <p className="legend">EVENTS</p> */}
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/b9/4e/9d/b94e9db53640fcf31f3da4063827272d.jpg" />
                        {/* <p className="legend">NEWS</p> */}
                    </div>
                </Carousel>
            </section>

            <section className='section-banner'>
                <div className='banner-container'>
                    <img src='https://pbs.twimg.com/media/FBBxF1iVQAcBQcD?format=jpg&name=4096x4096'></img>
                </div>
                {/* <div className='banner-comics-container'>
                    <div className='comics-card'>
                    </div>
                </div> */}
            </section>

            <section className="section-images--info">
                <l1>Spider Verse</l1>
                <div className='row-1'>
                    <div className='row-1--wrapper'>
                        <l2>{marvelSpiderVerse[6]?.name}</l2>
                        <img src={marvelSpiderVerse[6]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                    </div>
                    <div className='row-align--center'>
                        <a href={marvelSpiderVerse[6]?.urls[0]?.url} target="_blank">Details</a>
                        <a href={marvelSpiderVerse[6]?.urls[1]?.url} target="_blank">Wiki</a>
                        <a href={marvelSpiderVerse[6]?.urls[2]?.url} target="_blank">Comic Link</a>
                    </div>
                </div>

                <div className='row-2'>
                    <div className='row-align--center'>
                        <a href={marvelSpiderVerse[8]?.urls[0]?.url}>Details</a>
                        <a href={marvelSpiderVerse[8]?.urls[1]?.url}>Wiki</a>
                        <a href={marvelSpiderVerse[8]?.urls[2]?.url}>Comic Link</a>
                    </div>
                    <div className='row-2--wrapper'>
                        <l2>{marvelSpiderVerse[8]?.name}</l2>
                        <img src={marvelSpiderVerse[8]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                    </div>
                </div>

                <div className='row-3'>
                    <div className='row-3--wrapper'>
                        <l2>{marvelSpiderVerse[2]?.name}</l2>
                        <img src={marvelSpiderVerse[2]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                    </div>
                    <div className='row-align--center'>
                        <a href={marvelSpiderVerse[2]?.urls[0]?.url}>Details</a>
                        <a href={marvelSpiderVerse[2]?.urls[1]?.url}>Wiki</a>
                        <a href={marvelSpiderVerse[2]?.urls[2]?.url}>Comic Link</a>
                    </div>
                </div>
            </section>

            <section className='section-cards'>
                <l1>Comics</l1>
                <div className='cards-comics'>
                    <div className=''>
                        <img src={marvelComics[2]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                    </div>
                    <div className=''>
                        <img src={marvelComics[3]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                    </div>
                    <div className=''>
                        <img src={marvelComics[4]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                    </div>
                    <div className=''>
                        <img src={marvelComics[8]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                    </div>
                    <div className=''>
                        <img src={marvelComics[12]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                    </div>
                    <div className=''>
                        <img src={marvelComics[11]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                    </div>
                </div>

            </section>

            <footer className='footer-container'>
                <p>Copyright</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png' width={200} />
            </footer>
        </div>
    )
}