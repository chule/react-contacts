import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom' 


class ListContacts extends Component {

    state = {
        query: ''
    }

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        remove: PropTypes.func.isRequired
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery("");
    }

    render() {
        const { query } = this.state;
        const { contacts, remove } = this.props;

        const showingContacts = query === ''
            ? contacts
            : contacts.filter(d => {
                return d.name.toLowerCase().includes(query)
            })

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input
                        type="text"
                        className="search-contacts"
                        placeholder="Search Contacts"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                        to="/create"
                        className="add-contact"
                    >
                        Add Contact
                    </Link>

                </div>
                {


                    (showingContacts.length !== contacts.length) &&
                    <div className="showing-contacts">
                        <span>Now showing {showingContacts.length} of {contacts.length} contacts</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                }
                <ol className="contact-list">
                    {showingContacts.map(contact => (
                        <li key={contact.id} className="contact-list-item">
                            <div
                                className="contact-avatar"
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            >
                            </div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className="contact-remove" onClick={() => remove(contact)}>
                                Remove
                        </button>
                        </li>
                    ))}

                </ol>
            </div>

        );
    }
}

export default ListContacts;