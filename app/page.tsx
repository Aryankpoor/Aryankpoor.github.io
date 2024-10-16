import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import React from 'react';
import { Separator } from "@/components/ui/separator"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Home() {
  
return (
  <div className="page">
    <div className="space-y-1">
      <div className="hleft">
        <div className="top"><Avatar>
      <AvatarImage src="https://i.ibb.co/8gnWnx7/1728242090408.jpg" alt="Aryan" />
      <AvatarFallback>Aryan</AvatarFallback>
    </Avatar></div><div><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Aryan Kapoor</h1></div>
      
        
      </div><p className="text-m text-muted-foreground">
          Studying at Vellore Institute of Technology, majoring in Computer Science
        </p>
        
        <div>
  
      <Separator className="my-4" />
      
    </div>
      </div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
    
    <div className="alert">
    <Alert>
<Terminal className="h-4 w-4" />
<AlertTitle>A bit about me.....</AlertTitle>
<AlertDescription>
  Hi there! I am Aryan, an 18 year old software developer from India with a passion for electronics.
  You know, arduino, raspbbery pi, esp32. That kind of stuff. I am currently studying in college, majoring 
  in Computer Science. A self-taught developer and have been coding for the past 5 years. Born with a special love
  love for dogs and a proud sibling of two Chihuahuas.
</AlertDescription>
</Alert>
    </div>
    

<div className="footer">
<div className="right">
    <Accordion type="single" collapsible>
<AccordionItem value="item-1">
  <AccordionTrigger>What are you currently learning?</AccordionTrigger>
  <AccordionContent>
    I am currently learning how to integrate payment handling in web applications and stripe CLI , mainly stripe intents. 
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-2">
  <AccordionTrigger>Where are you currently working at? </AccordionTrigger>
  <AccordionContent>
    I am currently working at <a href="https://hackclub.com" target="_blank">Hack Club Bank</a> as a Junior Onboarder,<br />
    helping out teen organisations to become part of the 501(c)(3) nonprofit status of HackClub and utilise the perks <br />
     that come along with it to organize cool Hackathons and Events.
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-3">
  <AccordionTrigger>What project are you currently working on? </AccordionTrigger>
  <AccordionContent>
    I am currently working on a desktop screen recording application called screen-wrec in electron.
  </AccordionContent>
</AccordionItem>
</Accordion>
    </div>

<div className="left">
<a href="mailto:aryan@hackclub.com"><Button>
    <Mail className="mr-2 h-4 w-4" />Send me an email
  </Button></a>
  <div className="flex h-5 items-center space-x-4 text-sm">
        <div><a href="https://github.com/Aryankpoor" target="_blank">Github</a></div>
        <Separator orientation="vertical" />
        <div><a href="https://codepen.io/codewitharyann" target="_blank">Codepen</a></div>
        <Separator orientation="vertical" />
        <div><a href="https://www.linkedin.com/in/aryan-kapoor-4b0894207/" target="_blank">LinkedIn</a></div>
      </div>
</div>

 
</div>
  </div>
  </div>
  
);
}