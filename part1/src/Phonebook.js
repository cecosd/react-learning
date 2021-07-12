import React, {useState, useEffect} from 'react'

const Header = ({title}) => <h1>{title}</h1>
const Footer = ({copyright}) => <p>{copyright}</p>
const ListItem = ({item}) => <li>{item.number}</li>
const FormInput = ({value, handler, placeholder}) => <input value={value} placeholder={placeholder} onChange={handler}/>
const FormButton = ({type}) => <input type={type} />

const Phonebook = () => {
    
    const [phonebookItems, setPhonebookItems] = useState([])
    const [newPhonebookItem, setNewPhonebookItem] = useState('')

    const handleNewPhoneBookItemChange = (event) => {
        setNewPhonebookItem(event.target.value)
    }

    const addPhonebookItem = (event) => {
        event.preventDefault()
        const newPhoneBookObject = {
            id: new Date().toTimeString(),
            number: newPhonebookItem
        }

        setPhonebookItems(phonebookItems.concat(newPhoneBookObject))
        setNewPhonebookItem('')
    }

    return (
        <div>
        <Header 
            title='Phonebook'
        />

        {phonebookItems.map(phonebookItem => <ListItem key={phonebookItem.id} item={phonebookItem}/>)}

        <form onSubmit={addPhonebookItem}>
            <FormInput 
                value={newPhonebookItem} 
                handler={handleNewPhoneBookItemChange} 
                placeholder='+359'
            />

            <FormButton type='submit'/>
        </form>

        <Footer 
            copyright='All Rights reserved'
        />
        </div>
    );
}

export default Phonebook