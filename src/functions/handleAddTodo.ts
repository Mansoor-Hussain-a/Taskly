
import type { Dispatch, SetStateAction } from "react";

type ShowModalType ={
  showAddModal : boolean;
  setShowAddModal :  Dispatch<SetStateAction<boolean>>
}
type Arguments = {
  showModal : ShowModalType
  
}
function handleAddTodo( {showModal} : Arguments){
  showModal.setShowAddModal(prev => !prev)
  
  
}
export default handleAddTodo