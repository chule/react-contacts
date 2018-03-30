import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => {
        return {
          contacts
        }
      })
    })
  }

  removeContact = (contact) => {
    this.setState((previousState) => {

      const contacts = previousState.contacts.filter(c => c.id !== contact.id)

      return {
        contacts
      }
    });

    ContactsAPI.remove(contact)
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <ListContacts
          contacts={contacts}
          remove={this.removeContact}
        />
      </div>
    )
  }
};

export default App;