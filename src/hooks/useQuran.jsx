import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const useQuran = (requestUrl) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://equran.id/api/v2/' + requestUrl);
				setData(response.data.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [requestUrl]);

	return { data, loading, error };
};

useQuran.propTypes = {
	requestUrl: PropTypes.string,
};

export default useQuran;
