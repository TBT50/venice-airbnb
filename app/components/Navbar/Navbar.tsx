"use client";

import { Container } from "../Container";
import { Logo } from "./Logo";
import { SearchFilters } from "./SearchFilters";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <SearchFilters />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
