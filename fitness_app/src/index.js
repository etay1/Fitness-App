import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddSubSession from "./components/popups/AddSubSession/AddSubSession";
import AddExercise from "./components/popups/AddExercise/AddExercise";
import AddUserWeight from "./components/popups/AddUserWeight/AddUserWeight";
import AccountSettings from "./components/forms/AccountSettings";
import ExerciseRegistry from "./pages/Registry/ExerciseRegistry";
import "./index.css";
import PrivateRoute from "./utils/PrivateRoute";
import UserWeightRegistry from "./pages/Registry/UserWeightRegistry";
import { SessionProvider } from "./supabase/sessionContext";
import SessionRegistry from "./pages/Registry/SessionRegistry";
import AddSession from "./components/popups/AddSession/AddSession";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<SessionProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route element={<PrivateRoute />}>
						<Route path='/add-exercise' element={<AddExercise />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/add-sub-session' element={<AddSubSession />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/add-user-weight' element={<AddUserWeight />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/exercise-registry' element={<ExerciseRegistry />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route
							path='/user-weight-registry'
							element={<UserWeightRegistry />}
						/>
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/add-session' element={<AddSession />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/session-registry' element={<SessionRegistry />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/account-settings' element={<AccountSettings />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</SessionProvider>
	</React.StrictMode>
);
reportWebVitals();
