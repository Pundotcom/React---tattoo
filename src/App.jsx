import { useState ,useEffect,useRef } from 'react'
import './App.css'
import Header from './components/header'
import Tattoitem from './components/Tattoitem'
import TattoPost from './components/TattoPost'
import tattoOBJ from './components/data/tattos'
import AppSearch from './components/AppSearch'


function App() {
  const [selecttatto,setSelecttatto] = useState(null)
  const [searchText,setSearchText] = useState('');

  function ontattoOpenClick(someTatto){
    setSelecttatto(someTatto);
  }
  function ontattoCloseClick(){
    setSelecttatto(null);
  }
  const filterTattos = tattoOBJ.filter((tattoo) => {
    return tattoo.Name.includes(searchText);
  })

  const tattoElement = filterTattos.map((tattomap,index) => {
    return <Tattoitem key={index} tatto={tattomap} ontattoClick={ontattoOpenClick}/>
  })

  let tattopost = null;
  if(!!selecttatto){
    tattopost = <TattoPost tatto={selecttatto} ontattoClose={ontattoCloseClick}/>
  }
  
  return (
    <div className='document'>
      <Header/>
      <AppSearch searchText={searchText} setSearchText={setSearchText}/>
      <div className="grid">
        {tattoElement}
      </div>
      {tattopost}
    </div>
  )
}





export default App
