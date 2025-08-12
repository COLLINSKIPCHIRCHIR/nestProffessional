import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FilePlus, FileText, BarChart2, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {

 const images = [
  "/images/accountingimg3.jpg",
  "/images/thumbnail1.jpg",
  "/images/thumbnail2.jpg",
  "/images/thumbnail3.jpeg",
  "/images/thumbnail4.jpeg",
  "/images/thumbnail5.jpeg",
  "/images/thumbnail6.jpeg",
  "/images/thumbnail7.jpeg",
  "/images/thumbnail8.jpeg",
 ];

 const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Trigger animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

 const services = [
  {
    icon: Briefcase,
    title: "Tax Consultancy",
    description:
      "Professional tax advisory services to optimize your tax obligations and ensure compliance with KRA regulations.",
  },
  {
    icon: FilePlus,
    title: "Company Registration",
    description:
      "Fast and efficient company registration services to help you legally establish and grow your business in Kenya.",
  },
  {
    icon: FileText,
    title: "Audited Accounts",
    description:
      "Independent audit services to provide transparency and confidence in your financial statements.",
  },
  {
    icon: BarChart2,
    title: "Management Accounts",
    description:
      "Detailed management accounts designed to support informed decision-making and business performance monitoring.",
  },
];
  const testimonials = [
  {
    name: 'Grace Wanjiru',
    company: 'SafariLink Tours & Travel',
    rating: 5,
    text: 'Accountants Nest has kept our books in perfect order, allowing us to focus on growing our tour packages. Their professionalism is top-notch.'
  },
  {
    name: 'Peter Otieno',
    company: 'Kisumu Fresh Produce Ltd.',
    rating: 5,
    text: 'They helped us streamline our accounts and save money on taxes. I can now run my business with full confidence in our finances.'
  },
  {
    name: 'Faith Mwikali',
    company: 'Urban Bites Café Nairobi',
    rating: 5,
    text: 'Their friendly team makes accounting simple to understand, and they are always available whenever we need advice.'
  }
];


  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '6+', label: 'Years Experience' },
    { number: 'Ksh50M+', label: 'Tax Savings' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
         <section
      className="relative overflow-hidden bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url('${images[currentIndex]}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div
            className={`text-white space-y-8 transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Financial Success
              <span className="block text-gold">Starts Here</span>
            </h1>
            <p className="text-xl text-primary/90 leading-relaxed font-bold">
              Professional accounting services tailored to your business needs. From tax preparation to strategic financial planning, we're your trusted partner for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-gold">
                <a href="https://wa.me/254714992094" target="_blank">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="tel:555-123-4567">
                  <Phone className="mr-2 w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right features */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-semibold mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  "Certified Public Accountants",
                  "6+ Years of Experience",
                  "Personalized Service",
                  "Competitive Pricing",
                  "24/7 Client Support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive accounting solutions designed to meet your unique business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group card-hover border-border/50 fade-in-up">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="service-icon" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/services">
                <span>View All Services</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses across the region
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover fade-in-up">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
       <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trust us with their accounting needs. 
              Schedule your free consultation today and discover how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gold">
                <Link to="/contact">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/services">
                  <span>Explore Services</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home