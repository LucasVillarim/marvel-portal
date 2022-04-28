import { useGlobal } from '../../context/context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './style.css';

export default function HomeComponent() {
    const { marvelComics, marvelSpiderVerse } = useGlobal();

    return (
        <div className="container">

            <section className="section-carousel">
                <Carousel autoPlay={true} dynamicHeight={false} showIndicators={false} showStatus={false}>
                    <div className='carousel-div'>
                        <img src="https://scifibr.files.wordpress.com/2011/12/banner-avengers-1.jpg" />
                    </div>
                    <div className='carousel-div'>
                        <img src="https://www.belloflostsouls.net/wp-content/uploads/2021/11/MoonKnightHeader.jpg" />
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/b9/4e/9d/b94e9db53640fcf31f3da4063827272d.jpg" />
                    </div>
                </Carousel>

            </section>
            <section className='section-banner'>
                <div className='banner-container'>
                    <img src='https://pbs.twimg.com/media/FBBxF1iVQAcBQcD?format=jpg&name=4096x4096'></img>
                </div>
            </section>

            <section className="section-images--info">
                <l1>Spider Verse</l1>
                <div className='row-1'>
                    <div className='row-1--wrapper'>
                        <l2>{marvelSpiderVerse[6]?.name}</l2>
                        <img className='' src={marvelSpiderVerse[6]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
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
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelComics[2]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                                </div>
                                <div className="card-back">
                                    <span>{marvelComics[2]?.title}</span>
                                    <a href={marvelComics[2]?.urls[0].url} target="_blank">See Details</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelComics[3]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                                </div>
                                <div className="card-back">
                                    <span>{marvelComics[3]?.title}</span>
                                    <a href={marvelComics[3]?.urls[0].url} target="_blank">See Details</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelComics[4]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                                </div>
                                <div className="card-back">
                                    <span>{marvelComics[4]?.title}</span>
                                    <a href={marvelComics[4]?.urls[0].url} target="_blank">See Details</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelComics[8]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                                </div>
                                <div className="card-back">
                                    <span>{marvelComics[8]?.title}</span>
                                    <a href={marvelComics[11]?.urls[0].url} target="_blank">See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelComics[12]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                                </div>
                                <div className="card-back">
                                    <span>{marvelComics[12]?.title}</span>
                                    <a href={marvelComics[12]?.urls[0].url} target="_blank">See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card-body">
                            <div className="card-inner">
                                <div className="card-front">
                                    <img src={marvelComics[11]?.thumbnail?.path + '/portrait_xlarge.jpg'}></img>
                                </div>
                                <div className="card-back">
                                    <span>{marvelComics[11]?.title}</span>
                                    <a href={marvelComics[11]?.urls[0].url} target="_blank">See Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <footer className='footer-container'>
                <p>Data provided by Marvel. © 2014 Marvel</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png' width={200} />
            </footer>
        </div>
    )
}


{/* <div className="card-body">
<div className="card-inner">
    <div className="card-front">
        <h5 className="card-title">Black</h5>

    </div>
    <div className="card-back">
        <l1>Olá</l1>
    </div>
</div>
</div> */}