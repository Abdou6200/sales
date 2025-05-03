import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

export const LogIn = (): JSX.Element => {
  return (
    <div className="bg-white flex justify-center w-screen h-screen overflow-hidden">
      <div className="relative w-full max-w-[1366px] h-full">
        {/* Logo with link to /home */}
        <Link to="/home">
          <img
            className="absolute w-[200px] h-auto top-10 left-[100px] object-contain cursor-pointer"
            alt="Logo"
            src="/logo1bg-2.png"
          />
        </Link>

        {/* Login Form Section */}
        <div className="absolute w-[400px] top-[180px] left-[100px]">
          <div className="flex flex-col h-full gap-5">
            {/* Welcome Text */}
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
                placeholder="Enter your email"
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

            {/* Login Button - Now Red */}
            <Button className="w-full h-9 bg-red-600 hover:bg-red-700 text-white rounded-[10px] mt-2">
              <span className="font-bold text-sm font-['Poppins',Helvetica]">Login</span>
            </Button>

            {/* Divider */}
            <div className="my-6 relative flex items-center justify-center">
              <Separator className="w-full" />
              <div className="absolute bg-white px-2">
                <span className="text-[10px] text-black font-medium font-['Poppins',Helvetica]">Or</span>
              </div>
            </div>

            {/* Google Login - Centered */}
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

            {/* Sign Up Text with link to /signup */}
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

        {/* Right Side Image */}
        <img
          className="absolute w-[700px] h-full top-0 right-0 object-cover"
          alt="Chris lee"
          src="/chris-lee-70l1tdai6rm-unsplash-2.png"
        />
      </div>
    </div>
  );
};
