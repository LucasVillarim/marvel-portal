import './style.css';

const FooterComponent = () => {
    return (
        <footer className='footer-container'>
            <p>Data provided by Marvel. © 2014 Marvel</p>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png' width={200} alt="logo" />
        </footer>
    )
}

export default FooterComponent;