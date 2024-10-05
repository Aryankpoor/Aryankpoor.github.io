import { Button } from "@/components/ui/button"
import * as React from "react"
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
    <div>

    </div>
     <div className="main">
      <div className="card1">
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
            <div><a href="https://github.com/Aryankpoor/metamorpheus" target="_blank"><Button>View on Github</Button></a></div>
            <div className="btn"><a href="https://metamorpheus.vercel.app" target="_blank"><Button>Live Demo</Button></a></div>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
      </div>
     
     <div className="card2">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Blogger</CardTitle>
            <CardDescription>
              A blog generator which uses GPT to generate blog posts based on a given topic.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Technologies Used:</Label>
             
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">OpenAI API</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Python</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Dotenv</Label>
            </div>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/Aryankpoor/gpt-blogger" target="_blank"><Button>View on Github</Button></a>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
     </div>
  
     </div>
      <br />
     <div className="main">
      <div className="card1">
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Ordel</CardTitle>
            <CardDescription>
              An ecommerce shipping company website boilerplate made as part of Hacktoberfest
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Technologies Used:</Label>
             
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">HTML/CSS/JS</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Netlify</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Swiper</Label>
            </div>
          </CardContent>
          <CardFooter>
          <div><a href="https://github.com/Aryankpoor/Ordel" target="_blank"><Button>View on Github</Button></a></div>
          <div className="btn"><a href="https://order-trackerr.netlify.app/" target="_blank"><Button>Live Demo</Button></a></div>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
      </div>
     
     <div className="card2">
     <Tabs defaultValue="account" className="w-[400px]">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Website</CardTitle>
            <CardDescription>
              In case you were wondering, I am talking about this website you are on which I built from scratch
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Technologies Used:</Label>
             
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Next.js</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">ShadCN</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">ESlint</Label>
            </div>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/Aryankpoor/Aryankpoor.github.io" target="_blank"><Button>View on Github</Button></a>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
     </div>
  
     </div>
 
      </div>
    );
  }