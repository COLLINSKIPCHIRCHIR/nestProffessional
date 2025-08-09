import { useState } from 'react'
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Download, 
  Eye, 
  Upload,
  Settings,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const documents = [
    { id: 1, name: '2023 Tax Return', type: 'Tax Return', date: '2024-03-15', status: 'Completed' },
    { id: 2, name: 'Q4 2023 Financial Report', type: 'Financial Report', date: '2024-01-31', status: 'Completed' },
    { id: 3, name: 'Payroll Summary Dec 2023', type: 'Payroll', date: '2024-01-05', status: 'Completed' },
    { id: 4, name: '2024 Tax Planning', type: 'Tax Planning', date: '2024-02-20', status: 'In Progress' }
  ];

  const appointments = [
    { id: 1, title: 'Quarterly Review', date: '2024-04-15', time: '10:00 AM', type: 'Virtual' },
    { id: 2, title: 'Tax Planning Session', date: '2024-04-20', time: '2:00 PM', type: 'In-person' },
    { id: 3, title: 'Year-end Preparation', date: '2024-05-01', time: '11:00 AM', type: 'Virtual' }
  ];

  const recentActivity = [
    { id: 1, action: 'Document uploaded: Bank Statement March 2024', date: '2024-03-28' },
    { id: 2, action: 'Appointment scheduled for April 15', date: '2024-03-25' },
    { id: 3, action: 'Tax return filed successfully', date: '2024-03-20' },
    { id: 4, action: 'Payment processed: $350', date: '2024-03-18' }
  ];
  
  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold gradient-text">Client Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Collins Kipchirchir</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-background rounded-lg p-1 border border-border">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'documents', label: 'Documents' },
              { id: 'appointments', label: 'Appointments' },
              { id: 'payments', label: 'Payments' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
      </div> 

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Documents</p>
                      <p className="text-3xl font-bold text-primary">24</p>
                    </div>
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
            </Card>

            <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Upcoming Appointments</p>
                      <p className="text-3xl font-bold text-primary">3</p>
                    </div>
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
            </Card>

            <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Outstanding Balance</p>
                      <p className="text-3xl font-bold text-primary">$0</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-gold" />
                  </div>
                </CardContent>
            </Card>

            <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Tax Savings YTD</p>
                      <p className="text-3xl font-bold text-primary">$2,450</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-gold" />
                  </div>
                </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-primary">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
          </Card>
        </div>
      )}

      {/* Documents Tab */}
      {activeTab === 'documents' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-primary">Your Documents</h2>
              <Button className="btn-hero">
                <Upload className="w-4 h-4 mr-2" />
                <span>Upload Document</span>
              </Button>
          </div>

        <Card className="card-hover">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-medium">Document Name</th>
                        <th className="text-left p-4 font-medium">Type</th>
                        <th className="text-left p-4 font-medium">Date</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents.map((doc) => (
                        <tr key={doc.id} className="border-b border-border hover:bg-muted/30">
                          <td className="p-4 font-medium">{doc.name}</td>
                          <td className="p-4 text-muted-foreground">{doc.type}</td>
                          <td className="p-4 text-muted-foreground">{doc.date}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              doc.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {doc.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
        </Card>
        </div>
      )}

      {/* Appointments Tab */}
      {activeTab === 'appointments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary">Your Appointments</h2>
            <Button className="btn-hero">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Schedule Appointment</span>
            </Button>
          </div>

          <div className="grid gap-6">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{appointment.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span>{appointment.date}</span>
                          <span>{appointment.time}</span>
                          <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                            {appointment.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Payment Tab */}
      {activeTab === 'payment' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary">Payment History</h2>
            <button className="btn-hero">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>Make Payment</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-primary">Account Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Balance:</span>
                    <span className="font-semibold text-2xl text-primary">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Payment:</span>
                    <span className="font-medium">$350.00 - March 18, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span className="font-medium">**** 1234</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-primary">Quick Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Amount</label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Input placeholder="Payment description" />
                  </div>
                  <Button className="w-full btn-hero">
                    <span>Process Payment</span>
                  </Button>
                </CardContent>
              </Card>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Dashboard