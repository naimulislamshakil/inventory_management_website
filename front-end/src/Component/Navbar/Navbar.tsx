import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { errorHandeler } from '../../Utilites/ErrorHandeler';
import { signOut } from '@firebase/auth';

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return <Loading />;
	}
	if (error) {
		errorHandeler(error);
	}

	const logout = () => {
		signOut(auth);
	};

	const dropdown = (
		<>
			<li>
				<Link className="dropdown-item" to="/">
					Rice
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Dal
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Oil
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Salt & Sugar
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Tea & Coffee
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Local Breakfast
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Honey
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Energy Booster
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Jams & Jellies
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Chocolates
				</Link>
			</li>
			<li>
				<Link className="dropdown-item" to="/">
					Handwash & Handrub
				</Link>
			</li>
		</>
	);
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<div>
					<Link className="navbar-brand fw-bold fs-3" to="/">
						<span className="text-danger">Kana</span>
						<span className="text-warning">Kata</span>
					</Link>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								to="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Category
							</Link>
							<ul className="dropdown-menu">{dropdown}</ul>
						</li>
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/all_product">
								All Product
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								Contact Us
							</Link>
						</li>
						{user ? (
							<>
								<li className="nav-item">
									<Link
										className="nav-link"
										aria-current="page"
										to="/dashboard"
									>
										Dashboard
									</Link>
								</li>
								<li className="nav-item">
									<button
										onClick={logout}
										className="nav-link link btn"
										aria-current="page"
									>
										LogOut
									</button>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/login">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/register">
										Register
									</Link>
								</li>
							</>
						)}
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
