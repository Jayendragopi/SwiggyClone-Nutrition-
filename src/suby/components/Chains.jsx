import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MagnifyingGlass } from 'react-loader-spinner'
const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading,setLoading]=useState(true)
  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newdata = await response.json();

      setVendorData(newdata);
      setLoading(false)
    } catch (error) {
      alert("failed to fetch data");
      console.error("failed to fetch");
      setLoading(true)
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;
    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollPosition = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div className='mediaChainSection'>
    <div className="loaderSection">
    {loading && <>
    <div className="loader">
      your 🥗is Loading...
    </div>
    <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
    
    </>
}
    </div>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}><FaRegArrowAltCircleLeft  className='btnIcon'/></button>
        <button onClick={() => handleScroll("right")}><FaRegArrowAltCircleRight className='btnIcon' /></button>
      </div>
      <h3>Top Restaurants in Hyderabad</h3>
      <section
        className="chainSection"
        id="chainGallery"
        onScroll={handleScrollPosition}
      >
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <div className="vendorBox" key={vendor.id}>
                {vendor.firm.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="firmImage">
                        <img src={`${API_URL}/uploads/${item.image}`} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Chains;
