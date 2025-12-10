import React from 'react';

export default function CategorySidebar({ categories, selected, onSelect }) {
  return (
    <div style={{ width: 440, paddingRight: 10 }}>
      <ul style={{ listStyle: 'none', paddingRight: 120 }}>
        {categories.map(cat => (
          <li key={cat} style={{ marginBottom: 24 }}>
            <div
              onClick={() => onSelect(cat)}
              style={{
                cursor: 'pointer',
                padding: '12px 6px',
                borderBottom: '1px solid #e6e6e6',
                fontWeight: selected === cat ? 700 : 400,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{cat}</span>
              {selected === cat ? <span>→</span> : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
