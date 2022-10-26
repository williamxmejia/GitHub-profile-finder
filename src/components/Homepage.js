import '../bootstrap.css';
import '../style.css';


const Navbar = (props) => {
    return (
        <nav className='container mt-5 border-bottom p-4 bg-light'>
            <div className='d-flex justify-content-between'>
                <h5 className='mt-2'>GitHub Profile Finder</h5>
                <div className=''>
                    <input className='form-control-sm mx-2' type="text" id="name" name="name"
                    /><button className='btn btn-primary'>Search</button>
                </div>
                <div className='mt-2'><a className='mx-5' href="https://github.com/williamxmejia">Checkout out my GitHub</a></div>
            </div>
            
        </nav>
    )
}

export default Navbar;