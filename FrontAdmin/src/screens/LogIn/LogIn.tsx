import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

export const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message || "Unknown error"}`);
        return;
      }

      const data = await response.json();
      
      localStorage.setItem("token", data.data.tokens.accessToken);

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="bg-white flex justify-center w-screen h-screen overflow-hidden">
      <div className="relative w-full max-w-[1366px] h-full">
        <Link to="/home">
          <img
            className="absolute w-[200px] h-auto top-10 left-[100px] object-contain cursor-pointer"
            alt="Logo"
            src="/logo1bg-2.png"
          />
        </Link>

        <div className="absolute w-[400px] top-[180px] left-[100px]">
          <div className="flex flex-col h-full gap-5">
            <div>
              <h1 className="font-medium text-[32px] text-black mb-1 font-['Poppins',Helvetica]">
                Welcome back!
              </h1>
              <p className="font-medium text-base text-black font-['Poppins',Helvetica]">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5 mt-5">
              <label htmlFor="email" className="font-medium text-sm font-['Poppins',Helvetica]">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 rounded-[10px] border-[#d9d9d9] pl-3 text-sm font-['Poppins',Helvetica]"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="font-medium text-sm font-['Poppins',Helvetica]">
                  Password
                </Label>
                <span className="text-[10px] text-blue-600 cursor-pointer font-['Poppins',Helvetica]">
                  Forgot password?
                </span>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-9 rounded-[10px] border-[#d9d9d9] pl-3 text-sm font-['Poppins',Helvetica]"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 mt-2">
              <Checkbox id="remember" className="w-4 h-4 rounded-sm border-black" />
              <label htmlFor="remember" className="text-xs text-black font-medium font-['Poppins',Helvetica]">
                Remember for 30 days
              </label>
            </div>

            {/* Login Button */}
            <Button
              onClick={onLogin}
              className="w-full h-9 bg-red-600 hover:bg-red-700 text-white rounded-[10px] mt-2"
            >
              <span className="font-bold text-sm font-['Poppins',Helvetica]">Login</span>
            </Button>

            {/* Divider */}
            <div className="my-6 relative flex items-center justify-center">
              <Separator className="w-full" />
              <div className="absolute bg-white px-2">
                <span className="text-[10px] text-black font-medium font-['Poppins',Helvetica]">Or</span>
              </div>
            </div>

            {/* Google Sign In */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="w-[280px] h-9 py-1 px-5 rounded-[10px] border-[#d9d9d9] flex items-center justify-center"
              >
                <img src="/icons8-google-1.svg" alt="Google" className="w-5 h-5 mr-2" />
                <span className="font-medium text-sm text-black font-['Poppins',Helvetica]">
                  Sign in with Google
                </span>
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-4">
              <p className="font-medium text-sm font-['Poppins',Helvetica]">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-[#0f3cde] cursor-pointer">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Side Image */}
        <img
          className="absolute w-[700px] h-full top-0 right-0 object-cover"
          alt="Chris lee"
          src="/chris-lee-70l1tdai6rm-unsplash-2.png"
        />
      </div>
    </div>
  );
};
