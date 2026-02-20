'use client';
import { cn } from "@/lib/uitls";

export default function ColorSelector() {

    return (
        <div className={cn("flex justify-start items-center flex-wrap gap-4")}>
            <label key={1} className="relative">
                    <input
                        type="radio"
                        name="color"
                        className="hidden peer"
                    />
                    <span
                        className={cn(
                            "block w-8 h-8 rounded-full border border-[#dee2e6] cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-2",
                        )}
                        style={{
                            backgroundColor: '#232321',
                            boxShadow: `0 0 0 2px #232321`,
                        }}
                        aria-label={'#232321'}
                    ></span>
                </label>
        </div>
    );
}
