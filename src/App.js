import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact"
import { Route } from "react-router-dom"

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

        <Route exact path="/" render={() => (
          <ListContacts
            contacts={contacts}
            remove={this.removeContact}
          />)
        } />

        <Route path="/create" component={CreateContact}
        />


      </div>
    )
  }
};

export default App;