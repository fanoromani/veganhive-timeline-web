import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Label } from "./ui/label";

export function CommentCard() {
  return (
    <Card className="w-full rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
                alt="Vegan Bee"
              />
              <AvatarFallback>VB</AvatarFallback>
            </Avatar>
            Random Bee
          </div>
          <CardDescription>08 Aug</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Vivamus dapibus pulvinar turpis vitae molestie. Quisque at blandit
          magna, posuere venenatis ligula. Sed ac turpis vel est aliquet
          aliquet. Nullam pretium nulla nunc, nec mattis nunc porttitor et. Ut
          in libero convallis augue luctus dignissim vitae sodales quam.
          Suspendisse potenti.
        </p>
      </CardContent>
      <CardFooter className="space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                className="hover:bg-red-500 hover:text-white p-0 rounded-full aspect-square"
              >
                <Heart />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Like</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Label>5 Likes</Label>
      </CardFooter>
    </Card>
  );
}