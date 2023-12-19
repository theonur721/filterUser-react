import { useEffect, useRef, useState } from "react";
import ListElement from "./ListElement";

const FilterUser = ()=> {
// clonlanan dizi bu sabit kalan budur
    const [cloneUsers,setCloneUsers] = useState(null);
// verileri state e aktarmaya yarar- filtrelenen dizi budur
    const [users,setUser] = useState(null);
// inputun referansını alma
    const inputRef = useRef();

// bileşen ekrana geldiğinde çalışır
    useEffect (()=>{
        // istek atma işleme
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> {setUser(data); setCloneUsers(data);})
        .catch((err)=> alert("hata yapildi"));
    },[]);

// ara butonuna basınca çalışır -tolowercase= küçük harf duyarını kaldır
    const handleSearch= ()=> {
        // inputun değerini alma
        const query= inputRef.current.value.toLowerCase()
        // aratılan isimdeki kullanıcıları filtrele
        const filtredUser = cloneUsers.filter((user)=> user.name.toLowerCase().includes(query));
        // ekrana basılan diziye aktar
        setUser(filtredUser);
    };

    // map ile kullanicilari listele
    return(
        <div>
            <h3>KULLANICILAR:</h3>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSearch}>Ara</button>
            <ul>
                {users === null && <p>Loading...</p>}
                {users && users.map((user)=> <ListElement user={user} />)}
            </ul>
        </div>
    );
};

export default FilterUser;