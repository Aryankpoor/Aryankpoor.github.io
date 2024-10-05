import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import * as React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
    
  export default function Project() {
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <div className="main">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Metamorpheus</CardTitle>
            <CardDescription>
              A web based AI gpt chatbot. Talk all you want, and ask away without any restrictions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Technologies Used:</Label>
             
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Gemini API</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">React</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Express</Label>
            </div>
          </CardContent>
          <CardFooter>
            <a href="" target="_blank"><Button>View on Github</Button></a>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
     </div>
      
      <div className="footer">
<div className="left">
<a href="mailto:aryan@hackclub.com"><Button>
    <Mail className="mr-2 h-4 w-4" />Send me an email
  </Button></a>
</div>

 <div className="right">
 <Collapsible>
  <CollapsibleTrigger>You might find my socials here -:</CollapsibleTrigger>
  <CollapsibleContent>
    Whooops not here. Maybe you will find them somewhere else.
  </CollapsibleContent>
</Collapsible>
 </div>
  
</div>  
      </div>
    );
  }