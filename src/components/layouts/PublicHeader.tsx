import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const PublicHeader = () => {
  return (
    <div>
      <header className="border-b bg-blue-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink className="font-bold text-xl">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Input placeholder="記事を検索" className="w-[200px] lg:w-[300px]"/>
            <Button variant='outline' asChild>
              <Link href='/login'>ログイン</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='/register'>登録</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PublicHeader;
