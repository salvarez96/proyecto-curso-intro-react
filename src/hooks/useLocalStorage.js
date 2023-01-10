import React from "react";

/* La idea de este hook es que nos devuelva cualquier item que guardemos en localStorage,
independientemente de si es un TODO o es otra cosa 
itemName será el nombre de la propiedad de localStorage donde se almacenará el estado, y
initialState es el estado inicial que va a recibir dicha propiedad
*/
export default function useLocalStorage(itemName, initialState) {
  const localStorageItem = localStorage.getItem(itemName);
  
  let storagedItem;
  
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialState));
    storagedItem = initialState;
  } else {
    storagedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(storagedItem);
  
  const saveItem = newItemArray => {
    localStorage.setItem(itemName, JSON.stringify(newItemArray));
    setItem(newItemArray);
  }
  
  return [item, saveItem];
}