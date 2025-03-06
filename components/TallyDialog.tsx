import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface TallyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TallyDialog({ open, onOpenChange }: TallyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] p-0">
        <DialogHeader className="p-4 absolute top-0 left-0 right-0 bg-white z-10 flex flex-row items-center justify-between">
          <DialogTitle>Sign up for Early Access</DialogTitle>
          <DialogClose className="w-6 h-6 transition hover:opacity-75">
            <X className="w-4 h-4" />
          </DialogClose>
        </DialogHeader>
        <div className="mt-12 h-full w-full">
          <iframe
            src="https://tally.so/r/3ENgeN"
            width="100%"
            height="100%"
            title="Tally Form"
            className="border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
