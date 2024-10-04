import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
      <Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>A bit about me.....</AlertTitle>
  <AlertDescription>
    Hi there! I am Aryan, an 18 year old software developer from India with a passion for electronics.
    You know, arduino, raspbbery pi, esp32. That kind of stuff. I am currently studying in college, majoring 
    in Computer Science. A self-taught developer and have been coding for the past 5 years.
  </AlertDescription>
</Alert>
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
  );
}
