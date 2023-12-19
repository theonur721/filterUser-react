const ListElement = ({user})=> {
    const {name,phone,email,address} = user;
    return (
        <li className="userli">
            {name}
            <br />
            {phone}
            <br />
            {address?.zipcode}
            <br />
            {email}
            <br />
        </li>
    );
};

export default ListElement;