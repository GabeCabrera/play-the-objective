import React from 'react';

const Suggestions = (props) => {
  const options = props.results.map(result => (
    <li key={result.id}>
      {result.localized_name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions