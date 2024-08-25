import {ReactElement, ReactNode} from 'react'

interface ListProps<T> {
    items: T[];
}

interface ListPropsUnion {
    items: (number|string)[];
}

const List = <T,>({items}:ListProps<T>):ReactElement=> {
  return (
    <>
        <h2>My List</h2>
        {
            items.map((item, index) => <div key={index}>{item as ReactNode}</div>)

        }
    </>
  )
}
export default List