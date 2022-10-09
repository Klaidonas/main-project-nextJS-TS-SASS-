import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/";
import { faMagnifyingGlass } from "../../node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faTimes } from "../../node_modules/@fortawesome/free-solid-svg-icons/faTimes";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import { Target, User } from "../../interfaces";
import { fetchUsersFromFirestore } from "../../utils/firebaseFetch";

const SearchBar = () => {

  
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [users, setUsers] = useState<User[]>();   //sukuriamas useState masyvas, kuriame bus talpinami darbai

  const handleFilter = (event:Target) => {
    const currentInput = event.target.value;
    setSearchTerm(currentInput);

  };

  const clearInput = () => {
    setSearchTerm("");
    console.log("clearinput");

  };


  
    
    useEffect(() => {
      initialFetch()
    }, [])

    const initialFetch = async() => {
      var firebaseUsers:User[] = await fetchUsersFromFirestore();
      setUsers(firebaseUsers)
    }
    

  return (
    <div>
      <div className="SearchBar-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange= {handleFilter}
        />
        <FontAwesomeIcon icon={faTimes} onClick={clearInput}/>
      </div>
       {users  && users.filter(((val:User) => {
        console.log("users: ", users);
        
        if(searchTerm=="") {
          return ""
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      })).map((val:User) => {
        return (
          <div className='user' key={val.id}>
            <Link href={'/' + val.first_name}>{val.first_name}</Link>
          </div>
        );
      })} 
    </div>
  )
}
  export default SearchBar;