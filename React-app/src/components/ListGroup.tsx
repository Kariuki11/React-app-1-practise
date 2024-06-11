import { Fragment } from "react";

function ListGroup() {
    const items = ['New York', 'Los Angeles','Chicago', 'Houston', 'Philadelphia',];
    items = [];

    if (items.length === 0)
        return <p>No item found</p>;

  return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
        {
  items.map(item => (
    <li key={item}>{item}</li>
  ))
}

        </ul>
    </Fragment>
  );
}

export default ListGroup;
