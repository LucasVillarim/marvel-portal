import { useGlobal } from "../../context/context";

const SearchbarContent = (props) => {
    const { searchInput } = useGlobal();
    const {recipient} = props;

    const filterContent = searchInput !== "" && recipient.map(obj => {
        return (
            <li key={obj.id}>
                <a href={obj.urls[0].url} target="_blank">
                    {obj.title || obj.name}
                </a>
            </li>
        )
    })

    return filterContent;

}

export default SearchbarContent;