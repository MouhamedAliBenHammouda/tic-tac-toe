import { useState } from "react";
export default function Player({name,symbol,isActive,onChangeName}){

    const [newName,setNewName]=useState(name);
    const [isEditing,setIsEditing]=useState(false);

    function handelEditing(){
      setIsEditing(edit=>!edit);
      if(isEditing){
        onChangeName(symbol,newName)
      }

    }

    function HandelChangeName(e){
      console.log(e)
      setNewName(e.target.value);

    }

    return (
        <li className={isActive?"active":undefined}>
          <span className="player">
            <span className="player-name" >{isEditing?<input type="text" required value={newName} onChange={HandelChangeName}/>:newName}</span>
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handelEditing}>{isEditing?"Save":"Edit"}</button>
        </li>
    );

}