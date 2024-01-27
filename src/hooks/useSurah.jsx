import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useSurah = () => {
	const { nomorSurah } = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				setLoading(true);

				const response = await axios.get('https://equran.id/api/v2/surat/' + nomorSurah);
				setData(response.data.data);

				setLoading(false);
			} catch (error) {
				setError(error);
			}
		};
		fetchNotes();
	}, [nomorSurah]);

	return { data, loading, error };
};
