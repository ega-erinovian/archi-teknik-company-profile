import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <Card className="w-full bg-blue-600 md:px-8 md:py-4">
      <CardHeader>
        <CardTitle className="font-semibold text-6xl text-white">
          Send Us A Message!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-4">
              <div>
                <Label htmlFor="name" className="text-xl text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name of your project"
                  className="py-4 text-lg bg-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xl text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Your Email"
                  className="py-4 text-lg bg-white"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-xl text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="h-[320px] bg-white"
                  placeholder="Say what you need to say."
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex gap-4 justify-end">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
