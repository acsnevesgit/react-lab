import React, { useMemo, useState } from 'react';

// Sorting function
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  // Sorting function
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const TableSorter = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.movies);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead className='table-header'>
        <tr>
          <th style={{width:'35em'}} >
            <button onClick={() => requestSort('title')} className={getClassNamesFor('title')}>Title</button>
          </th>
          <th style={{width:'10em'}} >
            <button onClick={() => requestSort('genre')} className={getClassNamesFor('genre')}>Genre</button>
          </th>
          <th style={{width:'8em'}}>
            <button onClick={() => requestSort('country')} className={getClassNamesFor('country')}>Country</button>
          </th>
          <th style={{width:'6em'}}>
            <button onClick={() => requestSort('year')} className={getClassNamesFor('year')}>Year</button>
          </th>
        </tr>
      </thead>
      <tbody className='table-body'>
        {items.map((item) => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.country}</td>
            <td>{item.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TableSorter;