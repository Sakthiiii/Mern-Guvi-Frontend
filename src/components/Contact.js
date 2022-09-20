import axios from "axios";

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import '../../src/App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    age: "",
    dob:"",
    email: "",
    company: "",
    phone: "",
  });

  const { firstname, age,dob, email, company, phone } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      firstname: firstname,
      age: age,
      dob:dob,
      email: email,
      company: company,
      phone: phone,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newContact);
      await axios.post("/contact", body, config);

      setFormData({
        firstname: "",
        age: "",
        dob:"",
        email: "",
        company: "",
        phone: "",
      });
      window.location.reload();
   
    } catch (err) {
      console.error("error", err.res.data);
    }
  };

  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json", 
      },
    };
    try {
      const res = await axios.get(
        "https://mern-auth-back-123.herokuapp.com/contact/",
        config
      );
      setContacts(res.data);
    } catch (err) {
      console.error("erroe", err);
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);
  //get Edit


  const [currentContact, setCurrentContact] = useState({});
  const [id, setId] = useState("");



  const getContactById = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        `https://mern-auth-back-123.herokuapp.com/contact/${id}`,
        config
      );
      setCurrentContact(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getContactById(id);
  }, [id]);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickClose = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    setCurrentContact({
      ...currentContact,
      [e.target.name]: e.target.value,
    });
  };
  const handleEdit = async (id,) => {
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.put(
        `https://mern-auth-back-123.herokuapp.com/contact/${id}`,
        currentContact,
        config
      );
     
     
      setCurrentContact({
        firstname: currentContact.firstname,
        age: currentContact.age,
        dob: currentContact.dob,
        email: currentContact.email,
        company: currentContact.company,
        phone: currentContact.phone,
      });
      setOpen(false);
      window.location.reload();
    } catch (err) {
      console.error("error", err);
    }
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://mern-auth-back-123.herokuapp.com/contact/${id}`)
      .then((res) => {
        const del = contacts.filter((contact) => id !== contact.id);
        setContacts(del);
        setOpen(false);
        window.location.reload();
      });
  };
  return (
    <div>
      <form className="contact-form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="firstname"
          value={firstname}
          placeholder="Enter your firstname..."
          onChange={(e) => onChange(e)}
          required
        ></input>
        <br />
        <input
          type="number"
          name="age"
          value={age}
          placeholder="Enter your age..."
          onChange={(e) => onChange(e)}
          required
        ></input><input
        type="date"
        name="dob"
        value={dob}
        placeholder="Enter your date of birth..."
        onChange={(e) => onChange(e)}
        required
      ></input>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email..."
          onChange={(e) => onChange(e)}
          required
        ></input>
        <br />
        <input
          type="text"
          name="company"
          value={company}
          placeholder="Enter your company..."
          onChange={(e) => onChange(e)}
          required
        ></input>
        <br />
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Enter your Number..."
          onChange={(e) => onChange(e)}
          required
        ></input>
        <br />
        <button type="submit">Add Contact</button>
      </form>
      <div className="contacts-container">
        <h1 style={{ textAlign: "center" }}>User List</h1>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DialogContentText
              component={"div"}
              style={{ textAlign: "center" }}
            >
              <form className="contact-form">
                <input
                  type="text"
                  name="firstname"
                  value={currentContact.firstname}
                  placeholder="Enter your firstname..."
                  onChange={handleInputChange}
                  required
                ></input>
                <br />
                <input
                  type="number"
                  name="age"
                  value={currentContact.age}
                  placeholder="Enter your age..."
                  onChange={handleInputChange}
                  required
                ></input>
                 <input
                  type="date"
                  name="dob"
                  value={currentContact.dob}
                  placeholder="Enter your date of birth..."
                  onChange={handleInputChange}
                  required
                ></input>
                <br />
                <input
                  type="email"
                  name="email"
                  value={currentContact.email}
                  placeholder="Enter your email..."
                  onChange={handleInputChange}
                  required
                ></input>
                <br />
                <input
                  type="text"
                  name="company"
                  value={currentContact.company}
                  placeholder="Enter your company..."
                  onChange={handleInputChange}
                  required
                ></input>
                <br />
                <input
                  type="tel"
                  name="phone"
                  value={currentContact.phone}
                  placeholder="Enter your Number..."
                  onChange={handleInputChange}
                  required
                ></input>

                <Button className="btn" onClick={() => handleEdit(id)}>
                  <Typography className="text-primary"> Save</Typography>
                </Button>

                <Button className="btn" onClick={() => handleDelete(id)}>
                  <Typography className="text-primary"> Delete</Typography>
                </Button>

                <Button className="btn" onClick={() => handleClose()}>
                  <Typography className="text-primary"> Cancel</Typography>
                </Button>
              </form>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <ul className="contact-list">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <li key={contact._id} onClick={() => handleClickClose()}>
                <div className="center" onClick={() => setId(contact._id)}>
                  <p>
                    {contact.firstname} 
                  </p>
                  {/* <p>&nbsp;{contact.lastname}</p> */}
                  <p>Age : {contact.age}</p>
                  <p> D-O-B :- {contact.dob}</p>

                  <p> {contact.email}</p>
                  <p> Work at {contact.company}</p>
                  <p> {contact.phone}</p>
                </div>
              </li>
            ))
          ) : (
            <h1 style={{ textAlign: "center", width: "90%", margin: "auto" }}>
              No User Data Found
            </h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Contact;