import { Forward, Heart } from "lucide-react";
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
import { Buzz } from "@/lib/types";
import { useUserStore } from "@/lib/userStore";
import { useMutation } from "react-query";
import { likeBuzz } from "./buzz-card";
import { toast } from "react-toastify";
import { queryClient } from "@/lib/queryClient";
import { formatDate } from "@/lib/formatter";

export function BuzzPageCard({
  id,
  body,
  author,
  createdAt,
  likes,
  shares,
  comments,
  whoLiked,
}: Buzz) {
  const user = useUserStore((state) => state.user);

  const hasLiked = whoLiked?.find(
    (usersWhoLiked) => usersWhoLiked.userId === user?.id
  );

  const mutation = useMutation(likeBuzz, {
    onSuccess: () => {
      toast.success("Buzz liked! 🐝");
      queryClient.invalidateQueries(`buzz-${id}`);
    },
  });

  return (
    <Card className="w-full mb-4 border-none rounded-none md:rounded-xl drop-shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar className="h-16 w-16 border-4 border-white drop-shadow-2xl">
            <AvatarImage
              src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
              alt="Vegan Bee"
            />
            <AvatarFallback>
              {author?.username.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            {author.username}
            <CardDescription>{formatDate(createdAt)}</CardDescription>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2 items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="hover:bg-red-500 hover:text-white p-0 rounded-full aspect-square"
                  onClick={() => mutation.mutate(id as string)}
                >
                  <Heart fill={hasLiked ? "red" : "white"} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="hover:bg-primary hover:text-white p-0 rounded-full aspect-square"
                >
                  <Forward />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="space-x-2">
          <Label>{comments.length} Comments</Label>
          <Label>{likes} Likes</Label>
          <Label>{shares} Shares</Label>
        </div>
      </CardFooter>
    </Card>
  );
}
