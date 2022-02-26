// const emojiSearch =(searchText) =>{
     //Vi ska retunera sök resultat ,våran emojilist och filtera list 
    //inbyggd function filter() array som varje objekt 
    // i listan inskicar till sig
    // så att här får vi .
    // kan döpar till emojObject
  //   return emojiList.filter((emojObject)=>{
//vad har vi i sökfältet, söka på både title och keywords,
// filtera list. varje objeckt i listan inskicar till sig.
//varje objekt trillar in en gång varje functioen körs, destructry som hämtar alla data på en gång
//* Om det functione fungerar det, om det retunerar true då vi vill behålla, om det inte true , inte retunera...
  //   }
  // }
  //väldingt flexibel
  // bara skillnad logar
// ändrat till props, object
// const emojiSearch = (searchText)=>{
//   return emojiList.filter(({title,keywords})=>{

    //kommer retunera
    //inbyggd function includes
    //skicar in ex i searchTexten
    // if-sats
    // if(title.includes(searchText)) {
    //   return true
    // }
    // // behöver inte else
    // om ingen stämmer inte då retuneras false
//     if(keywords.includes(searchText)) {
//     return false
//   })
// }

// retunera   om det true ...eller ... title.includes(searchText) || keywords.includes(searchText)
   //visas i consolen max 10st
    // varje gång ändras i search input.
     //börjar med 0 , alltså första element i listan,hämta ut maxCount. slice function  tar antal av array. kan direkt 
    //0 upp till maxCount, bestämmer hur många lista , visa 10 eller 20st osv..
//behöver function för filtera  emojilist

import './App.css';
import Header from './Header';
import Search from './Search';
import SearchResult from './SearchResult';
import emojiList from './emojiList.json';
import {useState} from 'react';


function App() {
// useState med default värde,med tom array,
// variabel, set funtion och impotera useState
  const [emojis, setEmojis] = useState([])
  console.log(emojis);
  //const [list, setList] = useState([])

  const emojiSearch =(searchText, maxCount) =>{
    return emojiList.filter(({title,keywords}) =>{
      return title.includes(searchText) || keywords.includes(searchText)
    })
  
    .slice(0, maxCount)
  }
  const search = (event)=>{
//Vi ändrar state emojis
// Skapa function med variabe emojis, intern function
// 
const searchResult= emojiSearch(event.target.value, 10)
setEmojis(searchResult)
//console.log(searchResult)
//console.log(emojiSearch(event.target.value, 10))
}
  return (
      <>
      <div className='navbar'>
      <Header />
      <Search search={search}/>
      {/* <ul>
        {emojs.map((emoji)=>{
          return (
            <li>
              {emoji.title}
            </li>
          )
        })}
      </ul> */}
      {/* //för att föra SearchResult ,vi behöver
      // searchResult parameter
      //som skickar in emojis */}
      <SearchResult searchResult= {emojis}/>
      </div>
      </>
  );
}

export default App;
