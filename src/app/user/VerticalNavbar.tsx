"use client";

import { cn } from "@/lib";
import { Button } from "@/ui";
import {
  faDownload,
  faGear,
  faHammer,
  faHome,
  faSearch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const VerticalNavbar = ({ className, ...props }: Props) => {
  return (
    <div className={cn("box-border h-full p-2", className)} {...props}>
      <div className="box-border flex h-full flex-col items-center gap-2 rounded-md bg-bgSecondary p-2">
        <Link href="/user" className="shrink-0" title="dashboard">
          <Button className="p-2" variant="basic" targetPath="/user">
            <FontAwesomeIcon icon={faHome} className="h-8 w-8" />
          </Button>
        </Link>

        <div className="h-1 w-11/12 shrink-0 rounded-full bg-bgPrimary" />

        <Link href="/editor" className="shrink-0" title="build">
          <Button variant="basic" className="p-2" targetPath="/editor">
            <FontAwesomeIcon icon={faHammer} className="h-8 w-8" />
          </Button>
        </Link>

        <Link href="/user/saved" className="shrink-0" title="saved schedules">
          <Button variant="basic" className="p-2" targetPath="/user/saved">
            <FontAwesomeIcon icon={faDownload} className="h-8 w-8" />
          </Button>
        </Link>

        <Link href="/user/search" className="shrink-0" title="friends">
          <Button variant="basic" className="p-2" targetPath="/user/search">
            <FontAwesomeIcon icon={faSearch} className="h-8 w-8" />
          </Button>
        </Link>

        <Link href="/user/followings" className="shrink-0" title="friends">
          <Button variant="basic" className="p-2" targetPath="/user/followings">
            <FontAwesomeIcon icon={faUsers} className="h-8 w-8" />
          </Button>
        </Link>

        <div className="w-full basis-full" />

        <Link href="/user/settings" className="shrink-0" title="settings">
          <Button variant="basic" className="p-2" targetPath="/user/settings">
            <FontAwesomeIcon icon={faGear} className="h-8 w-8" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VerticalNavbar;
