const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        {/* <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div> */}
  
  <div className="flex gap-3">
  <div className="social-icon">
    <a href="https://github.com/exz-laos" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github.svg" alt="github" className="w-10 h-10 rounded-full object-cover" />
    </a>
  </div>

  <div className="social-icon">
    <a href="https://www.facebook.com/thanongphone.anothay.289" target="_blank" rel="noopener noreferrer">
      <img src="/assets/Facebook.png" alt="facebook" className="w-10 h-10 rounded-full object-cover" />
    </a>
  </div>

  <div className="social-icon">
    <a href="https://www.instagram.com/exz_x14?igsh=MXYzdjk5bDF4NXA1aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
      <img src="/assets/instagram.svg" alt="instagram" className="w-10 h-10 rounded-full object-cover" />
    </a>
  </div>
</div>
  
        <p className="text-white-500">© 2024 The EXZ. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;