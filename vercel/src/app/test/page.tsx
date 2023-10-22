"use client"
import { useEffect, useState } from 'react';
import {stripe} from '../../types'
import prisma from '../db'

function PaymentList() {
    const [payments, setPayments] = useState<stripe[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/stripe',{ cache: 'no-store' });
            if (response.ok) {
                console.log(response)
                const data = await response.json();
                console.log(data)
                setPayments(data);
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            <h1>Payment List</h1>
            <ul>
                {payments.map((payment, index) => (
                    <li key={index}>
                        <p>Payment Amount: {payment.orderNummer}</p>
                        <p>pay: {payment.amount_total}</p>
                        {/* Render additional data here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaymentList;
