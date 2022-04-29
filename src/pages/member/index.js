import Cards from '../../components/home/cards-component.jsx';
import './style.css';
import Countdown from 'react-countdown';

const MemberComponent = () => {
    return (
        <div className="member-container">

            <section className='buy-comics'>
                <h2>Limited Collection for Members</h2>
                <div className='comics-pack'>
                    <Cards content="comics" selectList={[14, 4, 31, 17, 19]} />
                </div>

                <Countdown className='countdown' date={Date.now() + 1000000} />
                <h3>left</h3>
                <button className='buy-btn'>PRE-ORDER</button>
            </section>

        </div>
    )

}

export default MemberComponent;
