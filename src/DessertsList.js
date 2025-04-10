function DessertsList(props){
    const lowcalories = props.data.filter((dessert) => {
        return dessert.calories < 500
    })
    .sort((a,b) => {
        return a.calories - b.calories
    })
    .map((dessert) => {
        return (
            <li>
                {dessert.name} - {dessert.calories} cal
            </li>
        )
    })
    return <ul>{lowcalories}</ul>
}
export default DessertsList;