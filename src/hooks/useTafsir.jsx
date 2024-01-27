import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useTafsir = () => {
	const { nomorSurah } = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://equran.id/api/v2/tafsir/' + nomorSurah);
				setData(response.data.data);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, [nomorSurah]);

	return { data, loading, error };
};
