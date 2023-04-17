import './Cards.css'
function Cards(props)
{
    const classes='cards ' + props.className;
    return <div className={classes}>{props.children}</div>
    // we added a classname as classes because this helps us to add the classname that are being passed by the props element in the parent tag . 
    // Eg: like as the classnames that are passing from the expenses.js file
    // props.children is the reserved keyword in react it is used to apply current login to all the elements that are in between our custom tag
}
export default Cards