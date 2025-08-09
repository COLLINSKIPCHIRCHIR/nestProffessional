import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/*logo */}
              <div className="flex-shrink-0">
                <img src="/src/assets/images/ANPlogo.png" alt="Nest Proffessionals Logo" className="w-[50px] h-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]" />
              </div>
              {/*text hidden on mobile*/}

              <div className="flex-col hidden sm:flex">
                <span className="font-bold text-lg text-gold">Nest</span>
                <span className="text-sm text-primary-foreground/80">Professionals</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for comprehensive accounting solutions. We help businesses grow with expert financial guidance and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link to="/team" className="text-primary-foreground/80 hover:text-gold transition-colors">Meet Our Team</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-gold transition-colors">Blog & Resources</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">Contact Us</Link></li>
              {/*<li><Link to="/dashboard" className="text-primary-foreground/80 hover:text-gold transition-colors">Client Portal</Link></li>*/}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Audited Accounts</li>
              <li className="text-primary-foreground/80">Management Accounts</li>
              <li className="text-primary-foreground/80">KRA Returns-VAT,PAYE,income tax,Withholding Tax, TOT.</li>
              <li className="text-primary-foreground/80">Tax Consultancy</li>
              <li className="text-primary-foreground/80">EPRA Licence Application</li>
              <li className="text-primary-foreground/80">Company Registration</li>
              <li className="text-primary-foreground/80">Computerized Accounts</li>
              <li className="text-primary-foreground/80">NCA Licence</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                 Koko Savannah Building<br />
                 Along Club Road<br/>
                  Rm. 103<br />
                  Nakuru-Kenya
                  
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">+254 714 992 094</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">nestprofessionals@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Accountants Nest Professionals. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;