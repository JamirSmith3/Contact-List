import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await res.json();
        setContact(data);
      } catch (error) {
        console.error('Failed to fetch contact:', error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) return <p>Loading…</p>;

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>
        ← Back to list
      </button>
      <h2>{contact.name}</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Username:</strong></td><td>{contact.username}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td><td>{contact.email}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td><td>{contact.phone}</td>
          </tr>
          <tr>
            <td><strong>Website:</strong></td><td>{contact.website}</td>
          </tr>
          <tr>
            <td><strong>Company:</strong></td><td>{contact.company?.name}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>
              {contact.address?.suite}, {contact.address?.street}<br/>
              {contact.address?.city}, {contact.address?.zipcode}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
