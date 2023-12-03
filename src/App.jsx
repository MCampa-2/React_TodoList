import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid'
import Items from "./Items";




const App = () => {

 const getLocalStorage = () =>{
  let list = localStorage.getItem("list");
  if(list){
    list = JSON.parse(localStorage.getItem("list"));
  }else{
    list = [];
  }
  return list;
 }

  const setLocalStorage = (items) =>{
    localStorage.setItem("list", JSON.stringify(items));
  }


  const uniqueID = nanoid();
  

  const [items, setItems] = useState(getLocalStorage());

  const addItem = (item) =>{
    const newItem = {
      name: item,
      completed: false,
      id: uniqueID
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    
    setLocalStorage(newItems);
  };


  const editItem = (itemId) =>{
    const newItems = items.map((item) =>{
      if(item.id == itemId){
        const newItem = {...item, completed: !item.completed};
        return newItem;
      }else{
        return item;
      }
    });
    setItems(newItems);
    
    setLocalStorage(newItems);
  }

  const removeItem = (itemId) =>{
   const filterItem = items.filter((item) => item.id !== itemId);
   setItems(filterItem);
   
   setLocalStorage(filterItem);
  }

  

  return(
    <section>
    <Form  addItem={addItem}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
    
  )
};

export default App;
