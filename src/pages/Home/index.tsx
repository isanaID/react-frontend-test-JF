import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../features/User/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { debounce } from "lodash";
import TableContainer from '../../components/TableContainer';
import NavBar from '../../components/Nav';

const Home = () => {
    const [search, setSearch] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);
    const [userData, setUserData] :any = React.useState({
        users: []
    });
    const [page, setPage] = React.useState(1);

    let dispatch: any = useDispatch();
    let user: any = useSelector((state: any)=> state.user);

    const changeSearchData = (text: any) => {
        setSearchData(
            user.users.filter((user: any) => {
                return user.name.first.toLowerCase().indexOf(text.toLowerCase()) > -1 || user.name.last.toLowerCase().indexOf(text.toLowerCase()) > -1;
            })
        );
        setUserData({
            users: searchData
        });
            

    };

    const debounceSearch = debounce(changeSearchData, 500);

    const handleSearch = (text: any) => {
        setSearch(text);
        debounceSearch(text);

    }

    React.useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <div className='d-flex justify-content-center'>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Jagoan FC</h1>
                        <p className="lead text-muted">Welcome to Member Management agoan FC</p>
                        
                    </div>
                    </div>
                </section>
            </div>
            <div className="container">
                <div className="input-group d-flex justify-content-center mt-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={search}
                        placeholder="Search"
                        onChange={(e: any) => handleSearch(e.target.value)}
                    />
                </div>
                <TableContainer user={search? userData : user } />
            </div>
        </div>
    );
}
export default Home;