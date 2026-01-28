import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ArrowLeft, Save } from "lucide-react";

export default function Questionnaire() {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    filingStatus: "",
    hasDependents: false,
    numDependents: 0,
    incomeTypes: [] as string[],
    deductionTypes: [] as string[],
    creditTypes: [] as string[],
  });

  const totalSections = 6;
  const progress = (section / totalSections) * 100;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? prev[field as keyof typeof prev].filter((v: string) => v !== value)
        : [...prev[field as keyof typeof prev], value]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd]">
      <Navbar />
      <div className="flex-1 pt-2 pb-20 px-2 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-3 sm:p-6 mb-4 sm:mb-8 bg-white border-slate-200">
            <Progress value={progress} className="mb-3" />
            <p className="text-xs sm:text-sm text-slate-600 font-semibold">Section {section} of {totalSections}</p>
          </Card>

          {section === 1 && (
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#3FB9CB] text-white flex items-center justify-center text-2xl font-black">1</div>
                <h2 className="text-3xl font-black text-slate-900">Personal Information</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>First Name *</Label><Input className="mt-2" /></div>
                  <div><Label>Last Name *</Label><Input className="mt-2" /></div>
                </div>
                <div><Label>SSN *</Label><Input placeholder="XXX-XX-XXXX" className="mt-2" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Date of Birth *</Label><Input type="date" className="mt-2" /></div>
                  <div><Label>Email *</Label><Input type="email" className="mt-2" /></div>
                </div>
                <div><Label>Phone</Label><Input type="tel" className="mt-2" /></div>
                <div><Label>Address *</Label><Input className="mt-2" /><div className="grid grid-cols-3 gap-4 mt-2"><Input placeholder="City" /><Input placeholder="State" /><Input placeholder="ZIP" /></div></div>
                <div>
                  <Label>Filing Status *</Label>
                  <RadioGroup className="mt-3 space-y-3" onValueChange={(v) => updateField("filingStatus", v)}>
                    {["Single", "Married Filing Jointly", "Married Filing Separately", "Head of Household"].map(s => (
                      <div key={s} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]">
                        <RadioGroupItem value={s.toLowerCase().replace(/ /g, "-")} />
                        <Label className="cursor-pointer">{s}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                {(formData.filingStatus === "married-filing-jointly" || formData.filingStatus === "married-filing-separately") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Spouse Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div><Label>Spouse First Name</Label><Input className="mt-2" /></div>
                        <div><Label>Spouse Last Name</Label><Input className="mt-2" /></div>
                      </div>
                      <div><Label>Spouse SSN</Label><Input placeholder="XXX-XX-XXXX" className="mt-2" /></div>
                      <div><Label>Spouse DOB</Label><Input type="date" className="mt-2" /></div>
                    </div>
                  </div>
                )}
                <div>
                  <Label>Do you have dependents?</Label>
                  <RadioGroup className="mt-3 space-y-3" onValueChange={(v) => {
                    updateField("hasDependents", v === "yes");
                    if (v === "no") updateField("numDependents", 0);
                  }}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]">
                      <RadioGroupItem value="yes" />
                      <Label className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]">
                      <RadioGroupItem value="no" />
                      <Label className="cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                {formData.hasDependents && (
                  <div>
                    <Label>Number of Dependents</Label>
                    <Input type="number" min="1" className="mt-2" onChange={(e) => updateField("numDependents", parseInt(e.target.value) || 0)} />
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-8 gap-4">
                <Button variant="outline" onClick={() => alert("Progress saved!")}><Save className="w-4 h-4 mr-2" />Save</Button>
                <Button onClick={() => setSection(2)} className="bg-[#3FB9CB] hover:bg-[#34a0b0]">Continue<ArrowRight className="w-4 h-4 ml-2" /></Button>
              </div>
            </Card>
          )}

          {section === 2 && (
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#3FB9CB] text-white flex items-center justify-center text-2xl font-black">2</div>
                <h2 className="text-3xl font-black text-slate-900">Income Information</h2>
              </div>
              <div className="space-y-6">
                <Label className="text-lg font-bold">Select Income Types *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "w2", title: "W-2 Wages", desc: "Employment income" },
                    { value: "investment", title: "Investment Income", desc: "Interest, dividends, capital gains" },
                    { value: "business", title: "Self-Employment", desc: "1099-NEC, freelancing" },
                    { value: "retirement", title: "Retirement Income", desc: "IRA, pension, Social Security" },
                    { value: "rental", title: "Rental Property", desc: "Rental income" },
                    { value: "crypto", title: "Cryptocurrency", desc: "Crypto transactions" },
                    { value: "k1", title: "K-1 Income", desc: "Partnership, S-Corp" },
                    { value: "other", title: "Other Income", desc: "Unemployment, alimony, etc." }
                  ].map(item => (
                    <div key={item.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]">
                      <Checkbox checked={formData.incomeTypes.includes(item.value)} onCheckedChange={() => toggleArrayItem("incomeTypes", item.value)} />
                      <div><Label className="font-bold cursor-pointer">{item.title}</Label><p className="text-sm text-slate-500">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
                {formData.incomeTypes.includes("w2") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">W-2 Details</h3>
                    <Label>Number of W-2 jobs</Label>
                    <Input type="number" min="1" className="mt-2" />
                  </div>
                )}
                {formData.incomeTypes.includes("business") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Self-Employment Details</h3>
                    <Label>Business Name</Label>
                    <Input className="mt-2" />
                    <Label className="mt-4">Business Type</Label>
                    <RadioGroup className="mt-3 space-y-2">
                      {["1099-NEC Contractor", "Sole Proprietorship", "Gig Economy", "Online Sales"].map(t => (
                        <div key={t} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={t.toLowerCase()} />
                          <Label className="cursor-pointer">{t}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
                {formData.incomeTypes.includes("rental") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Rental Property Details</h3>
                    <Label>Number of rental properties</Label>
                    <Input type="number" min="1" className="mt-2" />
                  </div>
                )}
                {formData.incomeTypes.includes("crypto") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Cryptocurrency Details</h3>
                    <Label>Transaction Volume</Label>
                    <RadioGroup className="mt-3 space-y-2">
                      {["1-10 transactions", "11-50 transactions", "51-100 transactions", "100+ transactions"].map(t => (
                        <div key={t} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={t} />
                          <Label className="cursor-pointer">{t}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-8 gap-4">
                <Button variant="outline" onClick={() => setSection(1)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => alert("Progress saved!")}><Save className="w-4 h-4 mr-2" />Save</Button>
                  <Button onClick={() => setSection(3)} className="bg-[#3FB9CB] hover:bg-[#34a0b0]">Continue<ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>
          )}

          {section === 3 && (
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#3FB9CB] text-white flex items-center justify-center text-2xl font-black">3</div>
                <h2 className="text-3xl font-black text-slate-900">Deductions & Expenses</h2>
              </div>
              <div className="space-y-6">
                <Label className="text-lg font-bold">Select Deduction Types</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "mortgage", title: "Homeownership", desc: "Mortgage interest, property tax" },
                    { value: "charitable", title: "Charitable Contributions", desc: "Donations" },
                    { value: "medical", title: "Medical & Dental", desc: "Out-of-pocket expenses" },
                    { value: "state-tax", title: "State & Local Taxes", desc: "Estimated payments" },
                    { value: "education", title: "Education Expenses", desc: "Student loan interest" },
                    { value: "business-exp", title: "Business Expenses", desc: "If self-employed" }
                  ].map(item => (
                    <div key={item.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]">
                      <Checkbox checked={formData.deductionTypes.includes(item.value)} onCheckedChange={() => toggleArrayItem("deductionTypes", item.value)} />
                      <div><Label className="font-bold cursor-pointer">{item.title}</Label><p className="text-sm text-slate-500">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
                {formData.deductionTypes.includes("mortgage") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Homeownership Details</h3>
                    <Label>Is this your primary residence?</Label>
                    <RadioGroup className="mt-3 space-y-2">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg"><RadioGroupItem value="yes" /><Label className="cursor-pointer">Yes</Label></div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg"><RadioGroupItem value="no" /><Label className="cursor-pointer">No</Label></div>
                    </RadioGroup>
                  </div>
                )}
                {formData.deductionTypes.includes("charitable") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Charitable Contributions</h3>
                    <Label>Total approximate donations</Label>
                    <RadioGroup className="mt-3 space-y-2">
                      {["Under $250", "$250-$500", "$501-$1,000", "$1,001-$5,000", "Over $5,000"].map(a => (
                        <div key={a} className="flex items-center space-x-3 p-3 border rounded-lg"><RadioGroupItem value={a} /><Label className="cursor-pointer">{a}</Label></div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
                {formData.deductionTypes.includes("business-exp") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Business Expenses</h3>
                    <Label>Home office square footage</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Input placeholder="Office sq ft" type="number" />
                      <Input placeholder="Total home sq ft" type="number" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-8 gap-4">
                <Button variant="outline" onClick={() => setSection(2)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => alert("Progress saved!")}><Save className="w-4 h-4 mr-2" />Save</Button>
                  <Button onClick={() => setSection(4)} className="bg-[#3FB9CB] hover:bg-[#34a0b0]">Continue<ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>
          )}

          {section === 4 && (
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#3FB9CB] text-white flex items-center justify-center text-2xl font-black">4</div>
                <h2 className="text-3xl font-black text-slate-900">Tax Credits</h2>
              </div>
              <div className="space-y-6">
                <Label className="text-lg font-bold">Select Credit Types</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "child-tax", title: "Child Tax Credit", desc: "Auto-calculated from dependents" },
                    { value: "childcare", title: "Child & Dependent Care", desc: "Daycare expenses" },
                    { value: "education-credit", title: "Education Credits", desc: "AOTC, Lifetime Learning" },
                    { value: "energy", title: "Energy Efficiency", desc: "Solar, heat pump, windows" },
                    { value: "ev", title: "Electric Vehicle", desc: "EV purchase credit" }
                  ].map(item => (
                    <div key={item.value} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]">
                      <Checkbox checked={formData.creditTypes.includes(item.value)} onCheckedChange={() => toggleArrayItem("creditTypes", item.value)} />
                      <div><Label className="font-bold cursor-pointer">{item.title}</Label><p className="text-sm text-slate-500">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
                {formData.creditTypes.includes("childcare") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Childcare Details</h3>
                    <Label>Provider Name *</Label>
                    <Input className="mt-2" />
                    <Label className="mt-4">Provider Tax ID *</Label>
                    <Input placeholder="XX-XXXXXXX" className="mt-2" />
                  </div>
                )}
                {formData.creditTypes.includes("education-credit") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Education Credit Details</h3>
                    <Label>Student Name</Label>
                    <Input className="mt-2" />
                    <Label className="mt-4">Educational Institution</Label>
                    <Input className="mt-2" />
                  </div>
                )}
                {formData.creditTypes.includes("energy") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Energy Efficiency Details</h3>
                    <Label>What did you install?</Label>
                    <div className="grid grid-cols-1 gap-3 mt-3">
                      {["Solar panels", "Heat pump", "Energy-efficient windows/doors", "Insulation"].map(i => (
                        <div key={i} className="flex items-center space-x-3 p-3 border rounded-lg"><Checkbox /><Label className="cursor-pointer">{i}</Label></div>
                      ))}
                    </div>
                  </div>
                )}
                {formData.creditTypes.includes("ev") && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">Electric Vehicle Details</h3>
                    <Label>Vehicle Make and Model</Label>
                    <Input placeholder="e.g., Tesla Model 3" className="mt-2" />
                    <Label className="mt-4">Purchase Date</Label>
                    <Input type="date" className="mt-2" />
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-8 gap-4">
                <Button variant="outline" onClick={() => setSection(3)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => alert("Progress saved!")}><Save className="w-4 h-4 mr-2" />Save</Button>
                  <Button onClick={() => setSection(5)} className="bg-[#3FB9CB] hover:bg-[#34a0b0]">Continue<ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>
          )}

          {section === 5 && (
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#3FB9CB] text-white flex items-center justify-center text-2xl font-black">5</div>
                <h2 className="text-3xl font-black text-slate-900">Foreign Compliance</h2>
              </div>
              <div className="space-y-6">
                <Label>Do you have foreign bank accounts or assets?</Label>
                <RadioGroup className="mt-3 space-y-3">
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]"><RadioGroupItem value="yes" /><Label className="cursor-pointer">Yes</Label></div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-[#3FB9CB]"><RadioGroupItem value="no" /><Label className="cursor-pointer">No</Label></div>
                </RadioGroup>
                <div className="mt-6">
                  <Label>Additional Notes</Label>
                  <Textarea placeholder="Any additional information..." rows={6} className="mt-2" />
                </div>
              </div>
              <div className="flex justify-between mt-8 gap-4">
                <Button variant="outline" onClick={() => setSection(4)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => alert("Progress saved!")}><Save className="w-4 h-4 mr-2" />Save</Button>
                  <Button onClick={() => setSection(6)} className="bg-[#3FB9CB] hover:bg-[#34a0b0]">Continue<ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </Card>
          )}

          {section === 6 && (
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="w-12 h-12 rounded-xl bg-[#3FB9CB] text-white flex items-center justify-center text-2xl font-black">6</div>
                <h2 className="text-3xl font-black text-slate-900">Review & Submit</h2>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-700">🎉 <strong>Excellent work!</strong> Review your information before submitting.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-black text-slate-900 mb-4">📊 Your Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b"><strong>Personal Information:</strong><span className="text-[#3FB9CB] flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />Complete</span></div>
                  <div className="flex justify-between py-3 border-b"><strong>Income Types:</strong><span>{formData.incomeTypes.length} selected</span></div>
                  <div className="flex justify-between py-3 border-b"><strong>Deductions:</strong><span>{formData.deductionTypes.length} selected</span></div>
                  <div className="flex justify-between py-3 border-b"><strong>Tax Credits:</strong><span>{formData.creditTypes.length} selected</span></div>
                </div>
              </div>
              <div className="flex justify-between mt-8 gap-4">
                <Button variant="outline" onClick={() => setSection(5)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
                <Button onClick={() => {
                  if (confirm("Ready to submit?\n\nYour CPA will contact you within 2 business days.")) {
                    alert("🎉 SUCCESS!\n\nYour questionnaire has been submitted.");
                  }
                }} className="bg-[#00a86b] hover:bg-[#008f5d] text-lg px-8">🚀 Submit to CPA</Button>
              </div>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
