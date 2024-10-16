import { Button } from "@/components/ui/button";
import * as React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { works } from "./codepen";


export default function Project() {
  return (
    <div className="project grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="main">
        <div className="card1">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Metamorpheus</CardTitle>
                  <CardDescription>
                    A web based AI gpt chatbot. Talk all you want, and ask away
                    without any restrictions.
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
                  <div>
                    <a
                      href="https://github.com/Aryankpoor/metamorpheus"
                      target="_blank"
                    >
                      <Button>View on Github</Button>
                    </a>
                  </div>
                  <div className="btn">
                    <a href="https://metamorpheus.vercel.app" target="_blank">
                      <Button>Live Demo</Button>
                    </a>
                  </div>
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
                    A blog generator which uses GPT to generate blog posts based
                    on a given topic.
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
                  <a
                    href="https://github.com/Aryankpoor/gpt-blogger"
                    target="_blank"
                  >
                    <Button>View on Github</Button>
                  </a>
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
                    An ecommerce shipping company website boilerplate made as
                    part of Hacktoberfest
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
                  <div>
                    <a
                      href="https://github.com/Aryankpoor/Ordel"
                      target="_blank"
                    >
                      <Button>View on Github</Button>
                    </a>
                  </div>
                  <div className="btn">
                    <a
                      href="https://order-trackerr.netlify.app/"
                      target="_blank"
                    >
                      <Button>Live Demo</Button>
                    </a>
                  </div>
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
                    In case you were wondering, I am talking about this website
                    you are on which I built from scratch
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
                  <a
                    href="https://github.com/Aryankpoor/Aryankpoor.github.io"
                    target="_blank"
                  >
                    <Button>View on Github</Button>
                  </a>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="main-pro">
      <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo of ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo of{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
      </div>
      <div className="right">
        <Collapsible>
          <CollapsibleTrigger>
            You might find my socials by clicking on me-:
          </CollapsibleTrigger>
          <CollapsibleContent>
            Whooops not here. Maybe you will find them somewhere else.
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
