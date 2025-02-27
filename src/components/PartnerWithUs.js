import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PartnerWithUs = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Submitted Data:", data);
      toast.success("Registration successful!");
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
<div className="flex justify-center items-center min-h-screen w-full bg-white px-4 ">
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 border border-gray-200"
  >


        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Partner With Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Restaurant Name */}
          <div>
            <label className="block text-gray-700 font-medium">Restaurant Name</label>
            <input 
              type="text" 
              {...register("name", { required: "Restaurant Name is required" })} 
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea 
              {...register("address", { required: "Address is required" })} 
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block text-gray-700 font-medium">Cuisine Type</label>
            <input 
              type="text" 
              {...register("cuisine", { required: "Cuisine Type is required" })} 
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.cuisine && <p className="text-red-500 text-sm">{errors.cuisine.message}</p>}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input 
                type="tel" 
                {...register("phone", { required: "Phone is required" })} 
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                {...register("email", { required: "Email is required" })} 
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* FSSAI License Number */}
          <div>
            <label className="block text-gray-700 font-medium">FSSAI License Number</label>
            <input 
              type="text" 
              {...register("license", { required: "License Number is required" })} 
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {errors.license && <p className="text-red-500 text-sm">{errors.license.message}</p>}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 font-medium">Upload Documents</label>
            <input 
              type="file" 
              {...register("documents", { required: "Upload required" })} 
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
            />
            {errors.documents && <p className="text-red-500 text-sm">{errors.documents.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md text-lg transition hover:bg-orange-600 disabled:bg-gray-400"
          
          >
            {loading ? "Submitting..." : "Register Now"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PartnerWithUs;
