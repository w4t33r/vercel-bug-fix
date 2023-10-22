// pages/stripe.tsx
"use client"
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { stripe } from '@/types';

const StripePage: NextPage = () => {
  const [data, setData] = useState<stripe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api'); // Replace with the actual route to your API endpoint
        console.log(response)
        if (response.ok) {
          const result = await response.json();
          console.log('result', result)
          setData(result);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
        <h1>Stripe Data</h1>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
              {data.map((item, index) => (
                  <li key={index}>{/* Render your data here */}</li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default StripePage;
