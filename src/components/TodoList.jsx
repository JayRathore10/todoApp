import './TodoList.css';

export function TodoList({listItem , deleteItem , index}){
  return (
    <>
      <li className="list-items">
      {listItem}
      <button className="delete-btn"
        onClick={()=>{
          deleteItem(index);
        }}
      >Delete</button>
      </li>
    </>
  );
}