import React from "react";

/* La idea de este hook es que nos devuelva cualquier item que guardemos en localStorage,
independientemente de si es un TODO o es otra cosa 
itemName será el nombre de la propiedad de localStorage donde se almacenará el estado, y
initialState es el estado inicial que va a recibir dicha propiedad
*/
export default function useLocalStorage(itemName, initialState) {
  const [item, setItem] = React.useState(initialState);
  const [loadAndErr, setLoadAndErr] = React.useState({loading: true, error: false});
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let storagedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialState));
          storagedItem = initialState;
        } else {
          storagedItem = JSON.parse(localStorageItem);
        }
  
        setItem(storagedItem);
        setLoadAndErr({...loadAndErr, loading: false});
      } catch {
        setLoadAndErr({...loadAndErr, error: true});
        console.error('Hubo un error en ', 'useEffect');
      }
    }, 1000);
  }, []);
  
  const saveItem = newItemArray => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItemArray));
      setItem(newItemArray);
    } catch {
      setLoadAndErr({...loadAndErr, error: true});
      console.error('Hubo un error en' , 'saveItem');
    }
  }
  
  return {
    item, 
    saveItem, 
    loading: loadAndErr.loading,
    error: loadAndErr.error
  };
}