// import { useState, useEffect } from 'react';
// import React, { Component }  from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function BacaSurah() {
    const [surah, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getSurah();
    }, []);

    const getSurah = async () => {
        const response = await axios.get(`https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`);
        setProduct(response.data);
    };
    
    return (
        
        <div>
            <center className="mt-4"><h3>Baca Surah Al Ikhlas</h3></center><hr></hr>
            { surah.map((val, index) => (
                <p style={{color: "black", textAlign : "right"}}>
                    <b>{ val.ar }</b><br></br>
                    { val.id }<br></br>                
                </p>
            ))}

        </div>
    );
}

export default BacaSurah