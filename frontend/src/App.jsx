import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL || 'http://54.81.65.200:5000';

export default function App() {
  const [items, setItems] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [nunezName, setNunezName] = useState('');

  useEffect(() => {
    fetchItems();
    fetchNunez();
  }, []);

  async function fetchItems() {
    try {
      const res = await axios.get(`${apiBase}/items`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
      setItems([]);
    }
  }

  async function fetchNunez() {
    try {
      const res = await axios.get(`${apiBase}/nunez`);
      setNunezName(res.data.fullName || '—');
    } catch (err) {
      console.error(err);
      setNunezName('error');
    }
  }

  async function addItem(e) {
    e.preventDefault();
    try {
      await axios.post(`${apiBase}/items`, { name: nameInput, description: descInput });
      setNameInput(''); setDescInput('');
      fetchItems();
    } catch (err) {
      console.error(err);
      alert('Error creando item');
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>Proyecto Microservicios — Nunez</h1>
      <p>Bienvenido. Nombre desde endpoint <strong>/nunez</strong>: {nunezName}</p>

      <section style={{ marginTop: 20 }}>
        <h2>Items</h2>
        <form onSubmit={addItem}>
          <input placeholder="Nombre" value={nameInput} onChange={e => setNameInput(e.target.value)} required />
          <input placeholder="Descripción" value={descInput} onChange={e => setDescInput(e.target.value)} />
          <button type="submit">Agregar</button>
        </form>
        <ul>
          {items.map(it => (
            <li key={it.id}><strong>{it.name}</strong> — {it.description || 'sin descripción'}</li>
          ))}
        </ul>
      </section>

      <footer style={{ marginTop: 40, borderTop: '1px solid #ddd', paddingTop: 10 }}>
        <small>Desplegado con Docker Compose — contenedores contienen la palabra <em>nunez</em></small>
      </footer>
    </div>
  );
}
