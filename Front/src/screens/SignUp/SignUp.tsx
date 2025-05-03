import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const SignUp = (): JSX.Element => {
  return (
    <div className="w-screen h-screen flex bg-white overflow-hidden">
      {/* Left section with form */}
      <div className="w-1/2 h-full px-[175px] py-[30px] flex flex-col">
        {/* Logo with link to /home */}
        <div className="mb-6">
          <Link to="/home">
            <img
              src="/logo1bg-1.png"
              alt="Logo"
              className="w-[200px] h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-4 text-black font-['Poppins',Helvetica]">
          

          {/* Form Fields */}
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                placeholder="Enter your name"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email address</label>
              <Input
                placeholder="Enter your email"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Age</label>
              <Input
                type="number"
                placeholder="Enter your age"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="h-8 rounded-[10px] pl-2.5 text-[10px] font-medium"
              />
            </div>

            <div className="flex items-center gap-2 mt-1">
              <Checkbox id="terms" className="w-4 h-4 border-black rounded-[3px]" />
              <label htmlFor="terms" className="text-[10px]">
                I agree to the <span className="underline">terms & policy</span>
              </label>
            </div>
          </div>

          {/* Signup Button */}
          <Button className="w-full h-8 bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] rounded-[10px] mt-2">
            Sign Up
          </Button>

          {/* Separator (reduced margin) */}
          <div className="relative h-3 mt-4 mb-2">
            <Separator className="absolute w-full h-0.5" />
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-2">
              <span className="text-[10px]">Or</span>
            </div>
          </div>

          {/* Google Sign In Button */}
          <Button
            variant="outline"
            className="w-full h-8 border-[#d9d9d9] text-[13px] rounded-[10px] flex items-center justify-center"
          >
            <img
              src="/icons8-google-1.svg"
              alt="Google"
              className="w-4 h-4 mr-2"
            />
            Sign in with Google
          </Button>

          {/* Sign In Redirect */}
          <div className="text-center mt-3 text-sm">
            <span className="text-black text-[13px]">Have an account? </span>
            <Link to="/login" className="text-[#0f3cde] font-medium text-[13px]">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
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
