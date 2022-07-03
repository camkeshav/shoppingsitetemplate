import ListItem from "./ListItems/ListItem"

const items = [
    {
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    },
    {
        id: 1,
        title: "Title of this Item 2",
        price: 100,
        discountedPrice: 80,
        thumbnail: "placeholder.png"
    }
]

const Products = () => {
    return (
        <div className={"product-list"}>
                <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
        </div>
    )
}

export default Products