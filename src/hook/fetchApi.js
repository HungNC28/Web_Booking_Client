import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await fetch(url);
                const response = await doc.json();
                if (response && response.length > 0) {
                    setData(response);
                } else setData([]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [url]);

    return data;
};

export default useFetch;
