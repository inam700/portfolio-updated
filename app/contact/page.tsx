"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { send } from "@emailjs/browser";
import { toast } from "sonner";

const contactSchema = z.object({
  email: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required")
    .email("Enter a valid email address"),
  name: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required"),
  phone: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required")
    .min(11, "Phone number must be at least 11 digits")
    .max(15, "Phone number too long"),
  message: z
    .string({
      required_error: "Required",
    })
    .min(1, "Required")
    .min(10, "Message must be at least 10 characters"),
});

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5">
        <div
          className="mb-5 md:mb-0 pt-5 pb-10 px-5 text-porcelain col-span-2 border border-darkGray rounded-2xl transition-all duration-300 ease-in-out 
              bg-gradient-to-tl from-[#1e1d1d] via-[#2b2b2b] to-[#3a3a3a] 
              hover:bg-gradient-to-tr hover:from-[#242424] hover:via-[#333333] hover:to-[#444444]"
        >
          <p className="text-lg mb-7 text-orange">
            Want to take your project to the next level?
          </p>

          <p className="text-xl">
            <i>
              &ldquo;I believe great conversations spark real innovation. Let’s
              turn your vision into reality.&rdquo;
            </i>
          </p>

          <div className="mt-28">
            <div className="flex items-center gap-3 mb-3 text-sm font-semibold">
              <Phone size={16} className="text-orange" />
              <p>+ 92 308 4966078</p>
            </div>
            <div className="flex items-center gap-3 mb-3 text-sm font-semibold">
              <Mail size={16} className="text-orange" />
              <a
                href="mailto:inaam040@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                inaam040@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center gap-3 mb-3 text-sm font-semibold">
              <MapPin size={16} className="text-orange" />
              <p>Lahore, Pakistan</p>
            </div> */}
          </div>
        </div>

        <div className="col-span-3">
          <div className="pt-5 pb-10 px-5 rounded-2xl border border-darkGray bg-gradient-to-br from-[#f6f6f6] via-[#e6eaea] to-[#ffffff] transition-all duration-300 ease-in-out hover:from-[#eaeaea] hover:via-[#fefefe] hover:to-[#ffffff]">
            <p className="text-lg text-orange">
              Let’s turn your next idea into impact.{" "}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                <div>
                  <Label className="text-darkGray">Full Name</Label>
                  <Input
                    type="text"
                    {...register("name")}
                    className="outline-none rounded-none mt-2 border-orange text-darkGray"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-darkGray">Phone Number</Label>
                  <Input
                    type="text"
                    {...register("phone")}
                    className="outline-none rounded-none mt-2 border-orange text-darkGray"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <Label className="text-darkGray">Email Address</Label>
                <Input
                  type="email"
                  {...register("email")}
                  className="outline-none rounded-none mt-2 border-orange text-darkGray"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <Label className="text-darkGray">Message</Label>
                <Textarea
                  {...register("message")}
                  className="outline-none rounded-none mt-2 border-orange text-darkGray"
                  placeholder="Type your message here..."
                  rows={5}
                />
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="relative z-20 flex justify-end w-full mt-5">
                <Button
                  type="submit"
                  className="rounded-none flex items-center justify-center gap-1 text-sm font-semibold py-2 min-w-36 bg-orange text-darkGray hover:bg-orangeHover transition-colors duration-300"
                >
                  <ArrowRight size={16} />
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
