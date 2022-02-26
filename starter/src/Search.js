// Vi behöver input för att söka emoji

//Vi ska skicka med sök parameter,{search}
//Vi har ändrat search componetet då måste
//själv klart måste ända App.js
// dvs måste skicka in search property 
   //Vi vill bara sök componentet utanför sök komponentet
    //vi kan skicka alla typer props,
    //React fördel: kan skick javascript array,objekt även functioner, strängar, siffror
    
import './Search.css'

const Search =({search})=>{



    return(
    
        <input className="Search" placeholder="Search here..." onChange={search}/>
        
    )
}

export default Search;

