import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Listing = () => {
    const provinces = [
        'Phnom Penh',
        'Thbong Khmom',
        'Kompong Cham',
        'Kompong Som',
        'Kompong Chnang',
        'Kratie',
        'Kondal',
        'Kompot',
        'Kep',
        'Preah Sihanouk',
        'Pursat',
        'Battambong',
        'Pailin',
        'Bonteay Meanchey',
        'Siem Reap',
        'Kompong Thom',
        'Prey Veng',
        'Svay Reang',
        'Takae',
        'Kompong Speu',
        'Steng Traeng',
        'Mondoulkiri',
        'Ratanakiri',
        'Koh Kong',
        'Oddor Meanchey',
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProvinces = provinces.filter(province =>
        province.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchClick = () => {
        // You can add logic here to handle the search button click if needed
        console.log('Search button clicked with:', searchTerm);
    };
    
    return (
        <div>
            <Header />
            <div
                className="container-fluid"
                style={{
                    backgroundImage: 'url("/Sunset-at-Angkor-Wat-Siem-Reap-Cambodia.jpg")',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh',
                }}
            >
            <div className="header d-flex flex-column align-items-center position-relative mt-2">
                <div className="menu d-flex justify-content-center align-items-start mt-5">
                    <div className="box box1 me-5">
                        <a href="#" className="text-dark text-decoration-none">
                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center p-3">
                                <p className="m-0">Schedule</p>
                            </div>
                        </a>
                    </div>
                    <div className="box box2 me-5">
                        <a href="#" className="text-dark text-decoration-none">
                            <div className="bg-success rounded-circle d-flex align-items-center justify-content-center p-3">
                                <p className="m-0">Province</p>
                            </div>
                        </a>
                    </div>
                    <div className="box box3">
                        <a href="#" className="text-dark text-decoration-none">
                            <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center p-3">
                                <p className="m-0">Place to go</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="list-down d-flex flex-column align-items-center mt-2" style={{ marginTop: '-30px', position: 'relative' }}>
                <div className="drop-down" style={{ width: '30%', height: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control province"
                        placeholder="Search Provinces"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="button">
                            Search
                        </button>
                    </div>
                </div>

                </div>
                <div className="content_dynamic mt-3" id="content">
                    {filteredProvinces.map((province, index) => (
                        <div key={index} className="result-item">
                            {province}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </div>  
    );
};

export default Listing;
