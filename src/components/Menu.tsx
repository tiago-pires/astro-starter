import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="p-8">(Menu...)</div>
      </SheetContent>
    </Sheet>
  );
}
