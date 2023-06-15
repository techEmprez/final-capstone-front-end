import React, { useEffect, useState } from 'react';

function Reservations() {
    const [reserveList, setReserveList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(window.localStorage.getItem('user_id'));

    const fetchReservations = async () => {
        try {
        const response = await fetch(`${baseUrl}users/${userId}/appointments/`, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        });
        
export default Reservations;