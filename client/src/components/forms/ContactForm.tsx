import { cn } from "../../lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  ContactFormData,
  contactFormSchema,
} from "../../schemas/contactFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import qs from "qs";
import { toast } from "sonner";

export const ContactForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      organization: "",
      email: "",
      mobile: "",
      details: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    try {
      const salesforceData = {
        oid: "00Dd5000000SzDR",
        retURL: "https://www.dosink.com",
        // debug: "1",
        // debugEmail: "shilash@dosink.com",
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        company: values.organization,
        mobile: values.mobile,
        description: values.details,
      };

      await axios.post("/api/web-to-lead", qs.stringify(salesforceData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      form.reset();
      console.log(salesforceData);
      toast.success("Your form has been submitted! ");
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.log("Error: ", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="border-none shadow-none rounded-lg md:px-8 bg-white dark:bg-gray-900">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              id="firstname"
                              type="text"
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              id="lastname"
                              type="text"
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="example@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Your Organization</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your org name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <PhoneInput
                            id="mobile"
                            placeholder="Enter a valid phone number"
                            defaultCountry="TH"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enquiry Details</FormLabel>
                        <FormControl>
                          <Textarea
                            id="details"
                            placeholder="Let us know what you’re looking for"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-balance text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                    By submitting, you agree to our{" "}
                    <a href="/terms-and-conditions">Terms and Conditions.</a>
                  </div>

                  <Button type="submit" className="w-full cursor-pointer">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
