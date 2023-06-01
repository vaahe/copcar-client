import React, { useState } from "react";
import "../styles/Search.module.css";

export const Search = () => {
    const [id, setId] = useState('');
    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setId(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://copcar-server.onrender.com/lot/${id}`);

        const content = await response.json();
        setImages(content.FULL_IMAGE);
        console.log(content);
    }

    return (
        <div className="container">
            <div className="searchInput">
                <label>
                    Id:
                    <input type="number" value={id} onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>

            <div className="imageContainer">
                {images.length && images.map((image, index) =>
                    <img src={image.url} key={image.sequenceNumber} alt={index} />
                )}
            </div>
        </div>
    )
}
