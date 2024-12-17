import  {Link} from "react-router-dom";
const Navbar = () =>{
    return (
        <div className = "navbar">
            <h2>The React Demos</h2>
            <div className="liks">
                <Link to="/hello">Hello</Link>
                <Link to="/sdc">State Demo</Link>
                <Link to="/getposts">Posts</Link>
                <Link to="/todolist">To Do's List</Link>
            </div>
        </div>
    );
}
export default Navbar;