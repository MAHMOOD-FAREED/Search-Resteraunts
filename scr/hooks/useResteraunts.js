 // hooks/useResteraunts.js
import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (initialSearchTerm = 'pasta') => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const searchapi = async (searchTerm = initialSearchTerm) => {
        try {
            setError('');
            setLoading(true);
            
            console.log('Making request to:', yelp.defaults.baseURL + '/search');
            console.log('Search term:', searchTerm);
            
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm || 'restaurant',
                    location: 'fresno'
                }
            });
            
            console.log('Response received:', response.data);
            setProducts(response.data.businesses || []);
            
        } catch (err) {
            console.error('Full API Error:', err);
            console.error('Error response:', err.response?.data);
            console.error('Error status:', err.response?.status);
            
            setError(`API Error: ${err.response?.status} - ${err.response?.data?.error?.description || err.message}`);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (searchTerm) => {
        searchapi(searchTerm || 'restaurant');
    }

    useEffect(() => {
        searchapi(initialSearchTerm); 
    }, []);

    // Return in the order your component expects
    return [searchapi, handleSearch, products, error, loading]
}