import Cards from '../../components/home/cards-component';
import style from './style.css';
import Countdown from 'react-countdown';
import { useGlobal } from '../../context/context';

const MemberComponent = () => {
    const { marvelComics } = useGlobal();


    return (
        <div className="member-container">

            <section className='buy-comics'>
                <h2>Limited Collection for Members</h2>
                <div className='comics-pack'>
                    <Cards content="comics" selectList={[14, 4, 13, 17, 19]} />
                </div>

                <Countdown className='countdown' date={Date.now() + 1000000} />
                    <h3>left</h3>
                    <button className='buy-btn'>PRE-ORDER</button>
            </section>

        </div>
    )

}

export default MemberComponent;
