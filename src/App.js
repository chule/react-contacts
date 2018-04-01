import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact"
class App extends Component {

  state = {
    contacts: [],
    screen: 'list'
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
        {this.state.screen === "list"
          &&
          (<ListContacts
            contacts={contacts}
            remove={this.removeContact}
            onNavigate={
              () => this.setState(() => (
                {
                  screen: "create"
                }
              ))

            }
          />)

        }

        {
          this.state.screen === "create"
          &&
          (<CreateContact />)
        }

      </div>
    )
  }
};

export default App;