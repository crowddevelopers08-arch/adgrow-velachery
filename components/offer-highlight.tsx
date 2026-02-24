"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format phone number
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: phoneValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validate pincode
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      setMessage({ type: 'error', text: 'Please enter a valid 6-digit pincode' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          treatment: formData.treatment,
          concern: formData.treatment,
          city: formData.pincode,
          source: "appointment-form",
          formName: "Appointment Form",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store form data for thank you page if needed
        const formDetails = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          treatment: formData.treatment,
          timestamp: new Date().toISOString(),
        };
        
        // Store in sessionStorage for the thank you page
        sessionStorage.setItem('appointmentDetails', JSON.stringify(formDetails));
        
        // Redirect to thank you page
        router.push("/thank-you");
        
        // Reset form (optional, since we're redirecting)
        setFormData({
          name: "",
          phone: "",
          email: "",
          treatment: "",
          pincode: "",
        });
      } else {
        setMessage({ 
          type: 'error', 
          text: data.error || 'Failed to book appointment. Please try again.' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <section 
        className="w-full bg-white px-4 py-10 max-[470px]:pb-0 flex justify-center"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* WHITE CARD */}
        <div className="w-full max-w-3xl bg-white rounded-2xl px-5 sm:px-8 md:px-12 py-8 sm:py-10 shadow-xl border border-[#ea2424]">
          
          {/* HEADING */}
          <h2 className="text-center text-[#ea2424] font-serif text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-wide">
            Ready to Redefine Your Hair? 
          </h2>

          <p className="text-center text-[#ea2424] text-sm sm:text-base mt-2 mb-8">
            Innovative solutions for lasting hair confidence.
          </p>

          {/* Message Display */}
          {message && (
            <div className={`mb-4 p-3 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {message.text}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="name"
              placeholder="Please Provide Your Full Name"
              className="w-full border border-[#ea2424] rounded-md px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#ea2424]"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Please Fill Your 10 Digit Phone No."
              className="w-full border border-[#ea2424] rounded-md px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#ea2424]"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[6-9]{1}[0-9]{9}"
              title="Please enter a valid 10-digit Indian phone number"
            />

            <input
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              className="w-full border border-[#ea2424] rounded-md px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#ea2424]"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="treatment"
              className="w-full border border-[#ea2424] rounded-md px-4 py-3 text-sm sm:text-base text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#ea2424]"
              value={formData.treatment}
              onChange={handleChange}
              required
            >
              <option value="">Choose Your Treatment</option>
              <option value="Hair Transplant">Hair Transplant</option>
              <option value="Baldness Treatment">Baldness Treatment</option>
              <option value="Hair Thinning Treatment">Hair Thinning Treatment</option>
              <option value="Alopecia & Patchy Hair Loss">Alopecia & Patchy Hair Loss</option>
              <option value="Receding Hairline Solutions">Receding Hairline Solutions</option>
              <option value="Genetic Hair Loss Treatment">Genetic Hair Loss Treatment</option>
            </select>

            <input
              type="text"
              name="pincode"
              placeholder="Type 6 Digit Your Pincode Here"
              className="w-full border border-[#ea2424] rounded-md px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#ea2424]"
              value={formData.pincode}
              onChange={handleChange}
              pattern="\d{6}"
              title="Please enter a 6-digit pincode"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ea2424] text-white font-semibold text-base sm:text-lg py-3 rounded-md mt-6 hover:bg-[#d61f1f] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Book An Appointment"
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our terms and consent to being contacted by our team.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}