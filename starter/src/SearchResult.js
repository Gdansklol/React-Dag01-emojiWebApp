// if-satsen förste sen retunera resultat.

//Vi tar in {searchResult} variabel
//Om serchRsult är tom eller false då
// leverera nåt annat , inget sökresultat,
// då vi vill visa upp på nåt sätt
const SearchResult = ({searchResult})=>{
    
    if(!searchResult ||!searchResult.length){
    return(
        <div>
            <p>
            No search results :(
            </p>
        </div>
    )
}
 //retunera vanlig resultat som när
 // vi har faktiskta resultat
    return (
    <div>
        <ul>
        {searchResult.map((emoji)=>{
        return (
            <li>
            {emoji.title}-{emoji.symbol}

            </li>
        )
        })}
    </ul>
    </div>

    )
}

export default SearchResult;