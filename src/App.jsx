import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Tafsir } from './components/pages/Tafsir';

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Layout />}
					/>
					<Route
						path='tafsir/:nomorSurat'
						element={<Tafsir />}
					/>
					<Route
						path='surah/:nomorSurat'
						element={<Tafsir />}
					/>
					<Route
						path='murottal/:nomorSurat'
						element={<Tafsir />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};
