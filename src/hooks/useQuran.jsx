import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const useQuran = (requestUrl, from) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchQuran = async () => {
			try {
				setLoading(true);

				const response = await axios.get('https://equran.id/api/v2/' + requestUrl);
				setData(response.data.data);

				setLoading(false);
			} catch (error) {
				setError(error);
			}
		};
		fetchQuran();
	}, [requestUrl, from]);

	return { data, loading, error };
};

useQuran.propTypes = {
	requestUrl: PropTypes.string,
};

export default useQuran;
