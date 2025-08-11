import { FileText, Briefcase, BarChart2, DollarSign, CheckCircle, ClipboardList, Settings,FilePlus, Building } from "lucide-react"; // import icons you’ll use
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
      {
        icon: FileText,
        title: "Audited Accounts",
        description:
          "Independent audit services to ensure accuracy, transparency, and compliance with financial reporting standards.",
        features: [
          "Financial Statement Audits",
          "Internal Controls Review",
          "Regulatory Compliance",
          "Management Reports",
          "Risk Assessment",
        ],
      },
      {
        icon: BarChart2,
        title: "Management Accounts",
        description:
          "Timely and detailed management accounts to support decision-making and improve business performance.",
        features: [
          "Monthly & Quarterly Reports",
          "Budget vs Actual Analysis",
          "Cash Flow Statements",
          "Key Performance Indicators (KPIs)",
          "Custom Financial Insights",
        ],
      },
      {
        icon: DollarSign,
        title: "KRA Returns & Tax Filing",
        description:
          "Expert assistance with filing all types of KRA tax returns to ensure compliance and avoid penalties.",
        features: [
          "VAT Filing",
          "PAYE Processing",
          "Income Tax Returns",
          "Withholding Tax Submissions",
          "Turnover Tax (TOT)",
          "Dispute Resolutions & Appeals"
        ],
      },

      {
        icon: Briefcase,
        title: "Tax Consultancy",
        description:
          "Professional tax advisory services to optimize your tax obligations and ensure regulatory compliance.",
        features: [
          "Tax Planning Strategies",
          "Tax Compliance Reviews",
          "Dispute Resolution with KRA",
          "Advisory on Tax Incentives",
          "Custom Tax Optimization Plans",
        ],
      },
      {
        icon: ClipboardList,
        title: "EPRA Licence Application",
        description:
          "Complete guidance and support in obtaining EPRA licences for energy-related businesses and compliance.",
        features: [
          "Requirements Advisory",
          "Document Preparation",
          "Application Submission",
          "Follow-ups with EPRA",
          "Licence Renewal Assistance",
        ],
      },
      {
        icon: FilePlus,
        title: "Company Registration",
        description:
          "Efficient company registration services to get your business legally established and operational.",
        features: [
          "Business Name Search & Reservation",
          "Certificate of Incorporation",
          "KRA PIN Registration",
          "NSSF/NHIF Setup",
          "Post-Incorporation Compliance",
          "SHA Filling & Registration",
          "Registration of societies & Associations,CBO",
          "Business Registration",
          "CR-12 updates"
        ],
      },
      {
        icon: Settings,
        title: "Computerized Accounts",
        description:
          "Setup and management of computerized accounting systems to streamline your financial operations.",
        features: [
          "System Setup (e.g., QuickBooks, Sage)",
          "Training & Support",
          "Data Migration",
          "Automation of Accounting Processes",
          "Ongoing System Maintenance",
        ],
      },
      {
        icon: CheckCircle,
        title: "NCA Licence",
        description:
          "Assistance in applying for and renewing NCA licences for contractors to ensure compliance with industry regulations.",
        features: [
          "Registration Guidance",
          "Requirements Compilation",
          "Application Filing",
          "Follow-ups with NCA",
          "Licence Renewals",
          "NTSA Services",
          "Passport APPlication"
        ],
      },
      {
        icon: Building, 
        title: "Agency & Property Management",
        description:
          "Professional management and agency services to help you maximize property value and maintain tenant satisfaction.",
        features: [
          "Tenant Sourcing & Screening",
          "Lease Preparation & Management",
          "Rent Collection & Accounting",
          "Property Maintenance Coordination",
          "Market Analysis & Rent Reviews",
          "Legal & Compliance Support",
          "Monthly rental income filing"
        ],
      },

      {
        icon: FileText, // consider changing to a more fitting icon like BookOpen, Ledger, or Notebook if available
        title: "Bookkeeping Services",
        description:
          "Accurate and organized financial record-keeping to keep your business running smoothly and compliant.",
        features: [
          "Recording Income & Expenses",
          "Bank Reconciliation",
          "Accounts Payable & Receivable Tracking",
          "Monthly Financial Statements",
          "Cash Flow Monitoring",
          "Tax-Ready Reports & Compliance"
        ],
      },


];
  return (
    <div className="min-h-screen pt-20">
      {/*Hero Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/servicesimage.jpg')", // <-- Replace this with your image path
        }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive accounting solutions tailored to meet your unique business needs. 
              From basic bookkeeping to complex financial consulting, we have you covered.
            </p>
          </div>
        </div>
      </section>


      {/*Services Grid */}
       <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Logos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Partners</h2>
            <p className="text-muted-foreground">
              Trusted by leading organizations and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {[
              "/images/itax.png",
              "/images/ecitizen.png",
              "/images/quickbooks.png",
              "/images/kra.png",
              "/images/ntsa.png",
              "/images/nssf.png",
              "/images/BRS.png",
              "/images/AGPO.png",
            ].map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
       <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              How we ensure exceptional service delivery
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We start with understanding your unique needs and goals' },
              { step: '02', title: 'Planning', description: 'Develop a customized strategy tailored to your situation' },
              { step: '03', title: 'Implementation', description: 'Execute the plan with precision and attention to detail' },
              { step: '04', title: 'Monitoring', description: 'Ongoing support and regular reviews to ensure success' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees, no surprises – just honest, competitive pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                plan: 'Company Registration',
                price: 'KSh 18,000',
                description: 'Get your business legally registered quickly and efficiently.',
                features: ['Name Search & Reservation', 'Certificate of Incorporation', 'KRA PIN Registration']
              },
              {
                plan: 'Audit',
                price: 'KSh 10,000 - 50,000',
                description: 'Comprehensive audits tailored to your business size and needs.',
                features: ['Financial Statement Audit', 'Compliance Checks', 'Management Reports']
              },
              {
                plan: 'Monthly Returns',
                price: 'KSh 5,000',
                description: 'Accurate and timely monthly returns filing.',
                features: ['PAYE Filing', 'NHIF/NSSF Submissions', 'Compliance Advisory']
              },
              {
                plan: 'VAT Returns',
                price: 'KSh 4,000',
                description: 'Seamless VAT returns preparation and submission.',
                features: ['VAT Filing', 'Tax Record Management', 'Deadline Reminders']
              }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`card-hover text-center ${index === 1 ? 'border-accent shadow-lg scale-105' : ''}`}
              >
                <CardContent className="p-8 flex flex-col items-center">
                  <h3 className="text-2xl font-semibold mb-2">{plan.plan}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/254714992094" target="_blank"><Button className={index === 1 ? 'btn-hero w-full' : 'w-full'}>
                    Chat on Whatsapp
                  </Button></a>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and discover how our services 
              can help your business thrive.
            </p>
            <Button size="lg" className="btn-gold">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services