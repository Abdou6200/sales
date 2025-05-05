import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information data for mapping
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Physical address",
      content: "Av. de Yasser Arafat, Sousse 4051",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone number",
      content: "(+216) 58 084 275",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email address",
      content: "Sales.tn@email.com",
    },
  ];

  // Form fields data
  const formFields = [
    { id: "name", label: "Name", placeholder: "Your name..." },
    { id: "phone", label: "Phone", placeholder: "Your phone number..." },
  ];

  return (
    <section className="flex flex-col items-center relative">
      {/* Background image */}
      <div className="relative w-full h-[486px] bg-[url(/contactus.png)] bg-cover bg-center" />

      {/* Contact form container */}
      <Card className="flex w-full max-w-[1296px] items-start justify-between p-[60px] relative mt-[-200px] bg-[#f6f4f2] rounded-none shadow-none">
        <CardContent className="p-0 flex justify-between w-full gap-10">
          {/* Left side - Contact information */}
          <div className="flex flex-col w-full max-w-[596px] items-start gap-20 py-10">
            {/* Heading section */}
            <div className="flex flex-col items-start gap-7">
              <h1 className="font-['DM_Sans',Helvetica] font-bold text-black text-[50px] leading-normal">
                Contact Us
              </h1>
              <p className="w-full max-w-[585px] font-['DM_Sans',Helvetica] font-normal text-black text-base leading-7">
                Feel free to let us know of your opinion or on any complaint.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col w-full max-w-[506px] items-start gap-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-7 w-full"
                >
                  <div className="flex items-center gap-5 w-full opacity-50">
                    {item.icon}
                    <h3 className="font-['DM_Sans',Helvetica] font-bold text-black text-2xl leading-normal whitespace-nowrap">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-start px-11 w-full">
                    <p className="font-['DM_Sans',Helvetica] font-bold text-black text-[28px] leading-normal whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="flex flex-col items-start gap-10 p-10 flex-1 bg-white rounded-none shadow-none">
            <CardContent className="p-0 w-full space-y-10">
              <h2 className="font-['DM_Sans',Helvetica] font-bold text-black text-[28px] leading-normal">
                Get in touch
              </h2>

              <div className="flex flex-col items-start gap-7 w-full">
                {/* Name and PhoneIcon fields */}
                <div className="flex items-start gap-6 w-full">
                  {formFields.map((field, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-1.5 flex-1"
                    >
                      <label
                        htmlFor={field.id}
                        className="font-['DM_Sans',Helvetica] font-medium text-black text-base leading-5"
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.id}
                        className="px-4 py-3.5 h-auto font-['DM_Sans',Helvetica] text-base rounded-none border-[#dee2e6]"
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                </div>

                {/* Email field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label
                    htmlFor="email"
                    className="font-['DM_Sans',Helvetica] font-medium text-black text-base leading-5"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    className="px-4 py-3.5 h-auto font-['DM_Sans',Helvetica] text-base rounded-none border-[#dee2e6]"
                    placeholder="Your email address..."
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col items-start gap-1.5 w-full h-40">
                  <label
                    htmlFor="message"
                    className="font-['DM_Sans',Helvetica] font-medium text-black text-base leading-5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="px-4 py-3.5 h-full font-['DM_Sans',Helvetica] text-base rounded-none border-[#dee2e6] resize-none"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Submit button */}
              <Button className="w-[200px] h-[50px] bg-red-600 hover:bg-red-500 rounded-none font-['DM_Sans',Helvetica] font-medium text-xl text-white" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
};
