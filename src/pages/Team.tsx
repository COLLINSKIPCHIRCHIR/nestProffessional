import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'Daniel Gisore Nyachieo',
      title: 'CEO',
      experience: '7+ years',
      specialties: ['Accounting', 'Audit', 'Tax Consultancy'],
      bio: 'A motivated accountant and a graduate from Technical University of Kenya with a Bsc in Accounting.Has great mastery of enterprise development through accounting best practices.',
      email: 'danielnyachieo@gmail.com'
    }
  ];
  return (
    <div className="min-h-screen pt-20">
      {/*Hero Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/src/assets/images/teamimage.jpg')", // <-- Replace this with your image path
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl leading-relaxed">
              Our experienced professionals are dedicated to providing you with the highest level 
              of service and expertise. Get to know the people behind your financial success.
            </p>
          </div>
        </div>
      </section>


      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src=""  // <-- Your image path here
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-1 group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium mb-2">{member.title}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Experience: {member.experience}
                      </p>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-primary mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, specIndex) => (
                            <span 
                              key={specIndex} 
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {member.bio}
                      </p>
                      <div className="flex items-center space-x-4">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-2 text-accent hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Contact</span>
                        </a>
                        <a 
                          href="#"
                          className="flex items-center space-x-2 text-accent hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
       <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Professional Credentials</h2>
            <p className="text-xl text-muted-foreground">
              Our team maintains the highest professional standards
            </p>
          </div>
          <div className="flex justify-center">
            {[
              { cert: 'CPA', description: 'Certified Public Accountants' },
            ].map((credential, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{credential.cert}</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">{credential.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our team every day
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Continuous Learning',
                description: 'We stay current with the latest accounting standards, tax laws, and industry best practices through ongoing education and professional development.'
              },
              {
                title: 'Client Success',
                description: 'Your success is our success. We measure our achievements by the financial growth and peace of mind we bring to our clients.'
              },
              {
                title: 'Integrity',
                description: 'We conduct business with the highest ethical standards, ensuring transparency and honesty in all our professional relationships.'
              }
            ].map((value, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our experienced professionals are here to help you achieve your financial goals. 
              Contact us today to get started.
            </p>
            <button className="btn-gold px-8 py-3 rounded-lg font-semibold">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team