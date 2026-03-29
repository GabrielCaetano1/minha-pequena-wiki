import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import LetterGlitch from "@/components/ui/letterglitch";
import { MainModal } from "@/components/ui/mainmodal";

export default function Home() {
  return (
    <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={true}
                smooth={true}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
            />
        </div>
        <Navbar/>
        <div className="flex flex-col items-center justify-center mt-30 gap-4">
            <MainModal/>
        </div>
    </div>
  );
}