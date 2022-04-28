import { useGlobal } from '../../context/context';
import Cards from '../../components/home/cards-component';
import style from './style.css';

export default function HomeComponent() {
    const { marvelSpiderVerse } = useGlobal();

    return (
        <div className="container">
            {/* Entrance banner */}
            <section className="section-banner--parallax">
                <div className="banner-title--wrapper">
                    <h1 className="banner-title">PORTAL</h1>
                </div>
            </section>

            {/* Second banner */}
            <section className='section-banner'>
                <h1 className='section-title'>Marvel Universe</h1>
                <div className='banner-container'>
                    <img src='https://c4.wallpaperflare.com/wallpaper/794/5/251/dual-monitors-multiple-display-marvel-comics-comics-wallpaper-thumb.jpg'></img>
                </div>
            </section>

            {/* Spider-man section */}
            <section className="section-images--info">
                <h1>Spider Verse</h1>
                <div className='row-1'>
                    <div className='row-1--wrapper'>
                        <h4>{marvelSpiderVerse[6]?.name}</h4>
                        <img className='' src={marvelSpiderVerse[6]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                    </div>
                    <div className='row-align--center'>
                        <a className='nav--link' href={marvelSpiderVerse[6]?.urls[0]?.url} target="_blank">Details</a>
                        <a className='nav--link' href={marvelSpiderVerse[6]?.urls[1]?.url} target="_blank">Wiki</a>
                        <a className='nav--link' href={marvelSpiderVerse[6]?.urls[2]?.url} target="_blank">Comic Link</a>
                    </div>
                </div>

                <div className='row-2'>
                    <div className='row-align--center'>
                        <a className='nav--link' href={marvelSpiderVerse[8]?.urls[0]?.url}>Details</a>
                        <a className='nav--link' href={marvelSpiderVerse[8]?.urls[1]?.url}>Wiki</a>
                        <a className='nav--link' href={marvelSpiderVerse[8]?.urls[2]?.url}>Comic Link</a>
                    </div>
                    <div className='row-2--wrapper'>
                        <h4>{marvelSpiderVerse[8]?.name}</h4>
                        <img src={marvelSpiderVerse[8]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                    </div>
                </div>

                <div className='row-3'>
                    <div className='row-3--wrapper'>
                        <h4>{marvelSpiderVerse[2]?.name}</h4>
                        <img src={marvelSpiderVerse[2]?.thumbnail?.path + '/portrait_xlarge.jpg'} />
                    </div>
                    <div className='row-align--center'>
                        <a className='nav--link' href={marvelSpiderVerse[2]?.urls[0]?.url}>Details</a>
                        <a className='nav--link' href={marvelSpiderVerse[2]?.urls[1]?.url}>Wiki</a>
                        <a className='nav--link' href={marvelSpiderVerse[2]?.urls[2]?.url}>Comic Link</a>
                    </div>
                </div>
            </section>

            {/* Comics section */}
            <section className='section-cards'>
                <h1>Comics</h1>
                <div className='cards-comics'>
                    <Cards content="comics" selectList={[2, 3, 4, 8, 12, 11]} />
                </div>

            </section>
        </div>
    )
}


{/* <div className="card-body">
<div className="card-inner">
    <div className="card-front">
        <h5 className="card-title">Black</h5>

    </div>
    <div className="card-back">
        <h1>Olá</h1>
    </div>
</div>
</div> */}