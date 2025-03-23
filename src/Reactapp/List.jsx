import React from 'react';

function List({ items }) {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '2px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      margin: '0 auto',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      backgroundColor: '#fff',
      margin: '10px 0',
      padding: '10px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.list}>
        {items.map((item, index) => (
          <div key={index} style={styles.listItem}>
            <h3>{item.title}</h3>
            <p>By: {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;