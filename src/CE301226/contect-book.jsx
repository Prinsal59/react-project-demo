import React, { Component } from "react";

class Contactbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: "",
    };
  }

  handlefnamechange = (e) => {
    this.setState({ fname: e.target.value });
  };

  handlelnamechange = (e) => {
    this.setState({ lname: e.target.value });
  };

  handlephonechange = (e) => {
    this.setState({ phone: e.target.value });
  };

  addtoContacts = () => {
    const { fname, lname, phone } = this.state;

    if (fname.trim() === "" || lname.trim() === "" || phone.trim() === "") {
      return;
    }

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      fname: "",
      lname: "",
      phone: "",
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => c.id !== id),
    }));
  };

   toggleView = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      ),
    }));
  };

  render() {
    const { contacts, fname, lname, phone } = this.state;

    return (
      <>
        <input
          type="text"
          value={fname}
          placeholder="First Name"
          onChange={this.handlefnamechange}
        />
        <br />

        <input
          type="text"
          value={lname}
          placeholder="Last Name"
          onChange={this.handlelnamechange}
        />
        <br />

        <input
          type="text"
          value={phone}
          placeholder="Mobile Number"
          onChange={this.handlephonechange}
        />
        <br />

        <button onClick={this.addtoContacts}>Add Contact</button>

        <ul>
          {contacts.map((y) => (
            <li key={y.id}>
              {y.fname}<button onClick={() => this.toggleView(y.id)}>{y.lname}</button>
              <button onClick={() => this.toggleView(y.id)}>View</button>
              <button onClick={() => this.deleteContact(y.id)}>Delete</button>

              <div style={{ display: y.visible ? "block" : "none" }}>
                {y.fname} - {y.phone}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Contactbook;

// id = 4
// a-1 visible = false                   a-1 visible = true
// a-2 visible = false            a-2 visible = true
// a-3 visible = false           a-3 visible = true
// a-4 visible = true