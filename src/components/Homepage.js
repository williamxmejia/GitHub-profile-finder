import "../bootstrap.css";
import "../style.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getGitHub = async () => {
    try {
      const url = `https://api.github.com/users`;

      const response = await axios(url);
      const results = response.data;
      console.log(results);
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingle = async () => {
    try {
      const url = `https://api.github.com/users/${search}`;

      const response = await axios(url);
      const results = response.data;
      console.log(results);
      setData(results);
    } catch (error) {
      // console.log(error);
      alert("No User Found, try williamxmejia");
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    getGitHub();
  }, []);

  return (
    <>
      <nav className="container mt-5 border-bottom p-4 bg-light">
        <div className="d-flex justify-content-between">
          <h5 className="mt-2">GitHub Profile Finder</h5>
          <div className="">
            <form
              onSubmit={(e) => {
                getSingle();
                if (search === "") {
                  getGitHub();
                }

                e.preventDefault();
              }}
            >
              <input
                className="form-control-sm mx-2"
                type="text"
                id="name"
                name="name"
                value={search}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
          <div className="mt-2">
            <a className="mx-5" href="https://github.com/williamxmejia">
              Checkout out my GitHub
            </a>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        {/* {error && (
          <div>No user Found</div>
        )} */}
        {!Array.isArray(data) && (
          <div className="d-flex">
            <div key={data.id} className="card col-3 mx-5 mb-5 mt-2">
              <div>
                <img
                  className="card-img-top"
                  src={data.avatar_url}
                  alt="Card image cap"
                />
                <div className="card-body fw-bold text-center">
                  <p className="text-uppercase">{data.login}</p>
                  <p>
                    <a href={`https://github.com/${data.login}`}>GitHub</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white">
              <h2>Name: {data.name}</h2>
              <h2>Bio: {data.bio}</h2>
              <h2>
                Blog: <a href={data.blog}>{data.blog}</a>
              </h2>
              <h2>Followers: {data.followers}</h2>
              <h2>Following: {data.following}</h2>
              <h2>Repos: {data.public_repos}</h2>
              <h2>ID: {data.id}</h2>
            </div>
          </div>
        )}

        {data.length > 20 && (
          <div>
            <h1 className="text-center mb-5">
              Welcome to the GitHub Profile Finder
            </h1>
            <div className="d-flex flex-wrap justify-content-center">
              {data.map((user) => (
                <div key={user.id} className="card col-2 mx-3 mb-5">
                  <img
                    className="card-img-top"
                    src={user.avatar_url}
                    alt="Card image cap"
                  />
                  <div className="card-body fw-bold text-uppercase text-center">
                    <p>{user.login}</p>
                    <p>ID: {user.id}</p>
                    <p>
                      <a href={`https://github.com/${data.login}`}>GitHub</a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
