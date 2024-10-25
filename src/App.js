import Header from './Header';
import Content from './Content';
import Additem from './additem';
import Footer from './Footer';
import SearchItem from './searchItem';
import { useState,useEffect } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'https://github.com/garry-01/json-server/blob/main/db.json';

  const [items, setItems] = useState([]);
  const [newItem, setnewItem] = useState('');
  const [search,newsearch] = useState('');
  const [fetchError,setfetchError] = useState(null);
  const [isloading,setisloading] = useState(true);

  useEffect(()=>{
      const fetchItems = async () => {
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error('Did not received expected data');
          const listItem = await response.json();
          setItems(listItem);
          setfetchError(null);
        }catch(err){
          setfetchError(err.message);
        }finally{
          setisloading(false);
        }
      }
      setTimeout(()=>fetchItems(),2000);
    }
    ,[])

  const addItem = async (item) => {
    const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const myNewItem = {id,checked:false,item}
    const newAddedList = [...items,myNewItem];
    setItems(newAddedList);
    const postOption = {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL,postOption);
    if(result) setfetchError(result);
  }
  

  const handleCheck = async (id)=>{
    const changedlist = items.map((item) => item.id===id?{...item,checked: !item.checked}:item);
    setItems(changedlist);

    const myItem = changedlist.filter((item)=>item.id===id);
    const updateOption = {
      method: 'PATCH',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked : myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,updateOption);
    if(result) setfetchError(result);
  }

  const handleDelete = async (id) => { 
    const deletelist = items.filter((item) => item.id!==id);
    setItems(deletelist);
    const deleteOption = { method : 'DELETE'}
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,deleteOption);
    if(result) setfetchError(result);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    //adding it to list
    setnewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <Additem 
        newItem = {newItem}
        setnewItem = {setnewItem}
        handlesubmit = {handlesubmit}
      />
      <SearchItem
        search = {search}
        newsearch = {newsearch}
      />
      <main>
        {isloading && <p> Loading Items... </p>}
        {fetchError && <p style={{color:'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isloading && <Content 
        items = {items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />}
      
      </main>
      <Footer 
        lenght = {items.length}
      />
    </div>
  );
}

export default App;
