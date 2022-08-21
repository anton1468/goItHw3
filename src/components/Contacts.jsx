import React, {Component} from 'react';
import {AddButton, Container, Heading1, PersonPhone, Text} from '../Styles'

const localStorageKey = 'phoneBook'

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      filter: '',
      contacts: []
    }
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleChangeNumber(event) {
    this.setState({number: event.target.value})
  }

  handleAddPerson() {
    const findExistingName =
      this.state.contacts.find((person) => person.name.toLowerCase() === this.state.name.toLowerCase())
    if (findExistingName) {
      return alert("Existing person")
    }
    this.setState((state) => {
      return {contacts: [...state.contacts, {name: state.name, number: state.number}]}
    })

    localStorage.setItem(localStorageKey, JSON.stringify([...this.state.contacts,{name: this.state.name, number: this.state.number}]))
    this.setState({name: '', number: ''})
  }

  handleFindPerson(event) {
    this.setState({filter: event.target.value})
  }

  handleDeletePerson(name) {
    const contacts = this.state.contacts.filter((person) => person.name !== name)
    localStorage.setItem(localStorageKey, JSON.stringify(contacts))
    this.setState({contacts})
  }

  componentDidMount() {
    const phoneBookLS = localStorage.getItem(localStorageKey)
    this.setState({contacts: JSON.parse(phoneBookLS)})
  }

  render() {
    const contacts = this.state.contacts
    const filteredArray = contacts.filter((item) => {
      return item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    const isButtonVisible = this.state.name && this.state.number

    return (
      <Container>
        <Heading1>Phonebook</Heading1>
        <div>
          <Text>Name</Text>
          <input
            type="text"
            name="name"
            pattern="[a-zA-Z'-'\s]*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(event) => this.handleChangeName(event)}
            value={this.state.name}
          />
          <Text>Number</Text>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(event) => this.handleChangeNumber(event)}
            value={this.state.number}
          />
          <AddButton onClick={() => this.handleAddPerson()} disabled={!isButtonVisible}>Add contact</AddButton>
        </div>
        <Text>Find by name</Text>
        <input onChange={(event) => this.handleFindPerson(event)}/>
        <ul>
          {filteredArray.length > 0 && filteredArray.map((person, key) =>
            <PersonPhone key={key}>
              <Text>{person.name}: {person.number}</Text>
              <AddButton onClick={() => this.handleDeletePerson(person.name)}>Delete</AddButton>
            </PersonPhone>
          )}
        </ul>
      </Container>
    );
  }
}

export default Contacts;
