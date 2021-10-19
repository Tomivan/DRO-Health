import React, { useEffect, useState, ChangeEvent } from 'react';
import CharacterService from '../services/characterservice';
import CharacterData from '../types/characters';
import useInfiniteLoading from 'react-use-infinite-loading'
import '../App.css';

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<Array<CharacterData>>([]);
    const [query, setQuery] = useState<string>("");
    useEffect(() => {
        retrieveCharacters();
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setQuery(query);
    }

    const retrieveCharacters = () => {
        CharacterService.getCharacters()
        .then(response => {
            setCharacters(response.data as CharacterData[])
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }
    // interface Props {
    //     callback: (page: number) => void
    //     hasMore: boolean
    //     direction?: 'bottom' | 'top'
    //     offset: number
    //   }
    // const [ref, containerRef, isLoading] = useInfiniteLoading({
    //     hasMore: true, // if server-side has more items for us
    //     offset: 100, // send request 100px before the end of scrolling container
    //     direction: 'bottom', // scroll direction
    //     callback: retrieveCharacters, // api request
    //   });

    return(
        <div>
            <form className="form">
            <input type="text" className="query" placeholder="Search by author, name, isbn etc" 
            value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className="button"> Search</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Character Name</th>
                        <th>Culture</th>
                        <th>Aliases</th>
                    </tr>
                </thead>
                <tbody>
                    {characters && characters.map( data => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.culture}</td>
                            <td>{data.aliases[0]}</td>
                        </tr>
                    ))}
                </tbody>
                {/* <Loader ref={ref}>{ isLoading && <Spinner color="goldenrod" size="64px" thickness={2} />}</Loader> */}
            </table>
        </div>
    )
}

export default Characters;