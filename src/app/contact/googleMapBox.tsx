const GoogleMapsBox = () => {
  return (
    <div className="w-full border-solid border-l-slate-300" style={{ height: "400px" }}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.4616470769197!2d31.049206834946588!3d-17.830455422072497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e5cfb97893%3A0xf04ca6bd84269cd5!2sJason%20Moyo%20Ave%20%26%20First%20St%2C%20Harare!5e0!3m2!1sen!2szw!4v1742917780757!5m2!1sen!2szw"
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.4616470769197!2d31.049206834946588!3d-17.830455422072497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e5cfb97893%3A0xf04ca6bd84269cd5!2sJason%20Moyo%20Ave%20%26%20First%20St%2C%20Harare!5e0!3m2!1sen!2szw!4v1742917780757!5m2!1sen!2szw" width="600" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
};

export default GoogleMapsBox;
