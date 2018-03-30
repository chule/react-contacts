import React, { Component } from "react";
import ListContacts from "./ListContacts";


class App extends Component {

  state = {
    contacts: [
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      },
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      }

    ]
  }

  removeContact = (contact) => {
    this.setState((previousState) => {

      const contacts = previousState.contacts.filter(c => c.id !== contact.id)

      return {
        contacts
      }
    });

    //console.log(contact.id)
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