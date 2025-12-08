import React from 'react';

export default function CategorySidebar({ categories, selected, onSelect }) {
  return (
    <div style={{ width: 260, paddingRight: 20 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
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
