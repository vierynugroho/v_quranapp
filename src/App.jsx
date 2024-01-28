import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Tafsir } from './components/pages/Tafsir';
import { Surah } from './components/pages/Surah';
import { Murottal } from './components/pages/Murottal';

import './styles/font.css';
import Tabs_Quran from './components/Tabs_Quran';
import { Layout } from './components/layout/Layout';

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
						path='tafsir/:nomorSurah'
						element={<Tafsir />}
					/>
					<Route
						path='surat/:nomorSurah'
						element={<Surah />}
					/>
					<Route
						path='murottal/:nomorSurah'
						element={<Murottal />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};
