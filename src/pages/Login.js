/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import axios from 'axios';
import { setGlobal } from 'reactn';
import { AbilityBuilder } from '@casl/ability';
import { useEffect } from 'reactn';
import { fetch_all_hmos_data } from '../actions/hmo';

import waiting from '../assets/images/waiting.gif';
import { request, redirectToPage, defaultHeaders } from '../services/utilities';
import {
	hmoAPI,
	API_URI,
	departmentAPI,
	inventoryCatAPI,
	inventorySubCatAPI,
	rolesAPI,
} from '../services/constants';
import { notifySuccess } from '../services/notify';
import { loginUser } from '../actions/user';
import SSRStorage from '../services/storage';
import {
	FULLSCREEN_COOKIE,
	MODE_COOKIE,
	TOKEN_COOKIE,
	utilityAPI,
} from '../services/constants';
import { loadRoles } from '../actions/role';
import { loadDepartments } from '../actions/department';
import { loadSpecializations } from '../actions/settings';
import { loadInvCategories, loadInvSubCategories } from '../actions/inventory';
import { loadBanks, loadCountries } from '../actions/utility';

import ability from '../services/ability';

const storage = new SSRStorage();

const axiosFetch = (url, jwt) =>
	axios.get(url, {
		headers: !jwt ? defaultHeaders : { ...defaultHeaders, Authorization: jwt },
	});

const validate = values => {
	const errors = {};
	if (!values.username) {
		errors.username = 'enter username';
	}
	if (!values.password) {
		errors.password = 'enter password';
	}
	return errors;
};

// prettier-ignore
const renderTextInput = ({input, label, type, id, placeholder, icon, meta: { touched, error }}) => (
	<div
		className={`form-group ${touched &&
			(error ? 'has-error has-danger' : '')}`}>
		<label htmlFor={id}>{label}</label>
		<div className="input-group">
			<input
				{...input}
				type={type}
				className="form-control"
				placeholder={placeholder}
			/>
			<div className="input-group-prepend">
				<div className="input-group-text">
					<i className={`pre-icon os-icon ${icon}`} />
				</div>
			</div>
		</div>
	</div>
);

const Login = ({ location, history, error, handleSubmit }) => {
	const [state, setState] = useState({
		submitting: false,
		loaded: false,
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (!state.loaded) {
			window.document.body.className = 'auth-wrapper loginPage';
			setState({ ...state, loaded: true });
			setGlobal({
				room: '',
			});

			return async () => {
				const fullscreen = await storage.getItem(FULLSCREEN_COOKIE);
				const theme_mode = await storage.getItem(MODE_COOKIE);
				const isLogin = location.pathname === '/';
				window.document.body.className = `menu-position-side menu-side-left${
					fullscreen || isLogin ? ' full-screen' : ''
				} with-content-panel${theme_mode ? ' color-scheme-dark' : ''}`;
			};
		}
	}, [location, state]);

	const doLogin = async data => {
		setState({ ...state, submitting: true });
		try {
			const rs = await request('auth/login', 'POST', true, data);
			try {
				const jwt = `Bearer ${rs.token}`;
				let [
					rs_hmos,
					rs_depts,
					rs_invcategories,
					rs_invsubcategories,
					rs_roles,
					rs_specializations,
					rs_banks,
					rs_countries,
				] = await Promise.all([
					axiosFetch(`${API_URI}/${hmoAPI}`, jwt),
					axiosFetch(`${API_URI}/${departmentAPI}`, jwt),
					axiosFetch(`${API_URI}/${inventoryCatAPI}`, jwt),
					axiosFetch(`${API_URI}/${inventorySubCatAPI}`, jwt),
					axiosFetch(`${API_URI}/${rolesAPI}`, jwt),
					axiosFetch(`${API_URI}/specializations`, jwt),
					axiosFetch(`${API_URI}/${utilityAPI}/banks`),
					axiosFetch(`${API_URI}/${utilityAPI}/countries`),
				]);

				if (rs_hmos && rs_hmos.data) {
					dispatch(fetch_all_hmos_data(rs_hmos.data));
				}
				if (rs_depts && rs_depts.data) {
					dispatch(loadDepartments(rs_depts.data));
				}
				if (rs_invcategories && rs_invcategories.data) {
					dispatch(loadInvCategories(rs_invcategories.data));
				}
				if (rs_invsubcategories && rs_invsubcategories.data) {
					dispatch(loadInvSubCategories(rs_invsubcategories.data));
				}
				if (rs_roles && rs_roles.data) {
					dispatch(loadRoles(rs_roles.data));
				}
				if (rs_specializations && rs_specializations.data) {
					dispatch(loadSpecializations(rs_specializations.data));
				}
				if (rs_banks && rs_banks.data) {
					dispatch(loadBanks(rs_banks.data));
				}
				if (rs_countries && rs_countries.data) {
					dispatch(loadCountries(rs_countries.data));
				}
				// console.log(rs);
				dispatch(loginUser(rs));
				storage.setItem(TOKEN_COOKIE, rs);
				storage.setItem('permissions', JSON.stringify(rs.permissions));

				const { can, rules } = new AbilityBuilder();

				can(rs.permissions, 'all');

				ability.update(rules);

				notifySuccess('login successful!');

				const fullscreen = await storage.getItem(FULLSCREEN_COOKIE);
				const theme_mode = await storage.getItem(MODE_COOKIE);

				window.document.body.className = `menu-position-side menu-side-left${
					fullscreen ? ' full-screen' : ''
				} with-content-panel${theme_mode ? ' color-scheme-dark' : ''}`;

				redirectToPage(rs.role, history);
			} catch (e) {
				console.log(e);
				setState({ ...state, submitting: false });
				throw new SubmissionError({
					_error: 'could not login user',
				});
			}
		} catch (e) {
			console.log(e);
			setState({ ...state, submitting: false });
			throw new SubmissionError({
				_error: e.message || 'could not login user',
			});
		}
	};

	const { submitting } = state;

	return (
		<section className="fxt-animation template">
			<div className="bg-overlay">
				<div className="fxt-content">
					<div className="logo-header">
						<a className="fxt-logo">
							<img src={require('../assets/images/logo.png')} alt="logo" />
						</a>
					</div>
					<div className="fxt-form">
						<form onSubmit={handleSubmit(doLogin)} autoComplete="off">
							{error && (
								<div
									className="alert alert-danger"
									dangerouslySetInnerHTML={{
										__html: `<strong>Error!</strong> ${error}`,
									}}
								/>
							)}
							<Field
								id="username"
								name="username"
								component={renderTextInput}
								type="text"
								placeholder="Enter your username"
								className="form-control"
								icon="os-icon-user-male-circle"
								label="Username"
							/>
							<Field
								name="password"
								component={renderTextInput}
								type="password"
								placeholder="Enter your password"
								className="form-control"
								icon="os-icon-fingerprint"
								label="Password"
							/>
							<div className="form-group mt-2">
								<div className="fxt-transformY-50 fxt-transition-delay-9">
									<button
										className="fxt-btn-fill"
										disabled={submitting}
										type="submit">
										{submitting ? (
											<img src={waiting} alt="submitting" />
										) : (
											'Log me in'
										)}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default reduxForm({ form: 'login_user', validate })(Login);
