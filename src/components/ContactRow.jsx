import React from 'react';

export default function ContactRow({ contact, onSelect }) {
  return (
    <tr onClick={onSelect} style={{ cursor: 'pointer' }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
