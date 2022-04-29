import { useGlobal } from "../../context/context";

const Cards = (props) => {
    const { marvelHeroes, marvelComics, marvelEvents } = useGlobal();
    const numbers = props.selectList;

    const handleContent = () => {
      switch (props.content) {
          case 'comics':
              return buildCards(marvelComics);
          case 'events':
              return buildCards(marvelEvents);
          case 'heroes':
              return buildCards(marvelHeroes);
          default:
              break;
      }
    }

    const buildCards = (marvelContent) => {
        const cards = numbers.map(number => {
            return (
                <div key={number} className="card-body">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={marvelContent[number]?.thumbnail?.path + '/portrait_xlarge.jpg'} alt="thumbnail" />
                        </div>
                        <div className="card-back">
                            <span>{marvelContent[number]?.title}</span>
                            <a href={marvelContent[number]?.urls[0].url} target="_blank" rel="noreferrer">See Details</a>

                        </div>
                    </div>
                </div>
            )
        })

        return cards;
    }

    return handleContent();
}

export default Cards;