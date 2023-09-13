

function List({list}) {
  return (
    <ul className="list-disc">
          {list.length > 0 && list.map(item => (<li key={item.name}>{item.name}</li> ))}
        </ul>
  )
}

export default List