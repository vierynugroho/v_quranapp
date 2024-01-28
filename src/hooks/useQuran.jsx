import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const useQuran = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('https://equran.id/api/v2/surat')
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, [data]);

	// loading;
	useEffect(() => {
		setLoading(true);
		axios
			.get('https://equran.id/api/v2/surat')
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return { data, loading, error };
};

useQuran.propTypes = {
	requestUrl: PropTypes.string,
};

export default useQuran;
