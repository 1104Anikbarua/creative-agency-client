import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <HashLoader className='my-80 mx-auto'
            color={'#009444'}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default LoadingSpinner;