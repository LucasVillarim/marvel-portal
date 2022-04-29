import { useGlobal } from "../../context/context";
import './style.css';

const SearchbarContent = (props) => {
    const { searchInput, imageUrlComplementSmall } = useGlobal();
    const { recipient } = props;

    const filterContent = searchInput !== "" && recipient.map(obj => {
        return (
            <li key={obj.id}>
                <img src={obj.thumbnail.path + imageUrlComplementSmall} alt="thumbnail" width={50} />
                <a href={obj.urls[0].url} target="_blank" rel="noreferrer">
                    {obj.title || obj.name}
                </a>
            </li>
        )
    })

    return filterContent;

}

export default SearchbarContent;