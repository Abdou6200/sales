import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    age: "",
    phoneNumber: "",
    password: "",
    });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.userName.trim()) newErrors.userName = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.age || parseInt(formData.age) < 13) newErrors.age = "Age must be 13+";
    if (!/^(2|9|4|5|7)[0-9]{7}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Invalid Tunisian phone number";
    if (formData.password.length < 6) newErrors.password = "Password too short";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="w-screen h-screen flex bg-white overflow-hidden">
      {/* Left section with form */}
      <div className="w-1/2 h-full px-[175px] py-[30px] flex flex-col">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/home">
            <img
              src="/logo1bg-1.png"
              alt="Logo"
              className="w-[200px] h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black font-['Poppins',Helvetica]">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                value={formData.userName}
                onChange={(e) => handleChange("userName", e.target.value)}
                placeholder="Enter your name"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
              {errors.userName && <p className="text-red-500 text-xs">{errors.userName}</p>}
            </div>

            <div>
              <label className="text-sm font-medium">Email address</label>
              <Input
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium">Age</label>
              <Input
                type="number"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
                placeholder="Enter your age"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
              {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                placeholder="Enter your phone number"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Enter your password"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            
          </div>

          <Button
            type="submit"
            className="w-full h-8 bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] rounded-[10px] mt-2"
          >
            Sign Up
          </Button>

          <div className="relative h-3 mt-4 mb-2">
            <Separator className="absolute w-full h-0.5" />
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-2">
              <span className="text-[10px]">Or</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-8 border-[#d9d9d9] text-[13px] rounded-[10px] flex items-center justify-center"
          >
            <img src="/icons8-google-1.svg" alt="Google" className="w-4 h-4 mr-2" />
            Sign in with Google
          </Button>

          <div className="text-center mt-3 text-sm">
            <span className="text-black text-[13px]">Have an account? </span>
            <Link to="/login" className="text-[#0f3cde] font-medium text-[13px]">
              Sign In
            </Link>
          </div>
        </form>
      </div>

      {/* Right side image */}
      <div className="w-1/2 h-full">
        <img
          src="/chris-lee-70l1tdai6rm-unsplash-1.png"
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
