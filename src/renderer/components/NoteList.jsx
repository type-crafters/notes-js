import { useRef } from "react";
import { Mathf } from "../utils/Mathf";

export default function NoteList() {

    /** @type { React.RefObject<HTMLElement> } */
    const ref = useRef(null);

    /** @argument { MouseMoveEvent } event */
    const handleMouseDown = (event) => {
    
        /** @argument { MouseMoveEvent } event */
        const handleMouseMove = (event) => {
            ref.current.style.width = Mathf.clamp(event.clientX, 100, 400) + "px";
        };

        /** @argument { MouseMoveEvent } event */
        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <aside
            ref={ref}
            className="h-full flex min-w-40 border-r border-neutral-400"
        >
            <nav className="h-full flex-1">
            </nav>
            <button
                className="h-full w-1 cursor-ew-resize"
                onMouseDown={handleMouseDown}
                aria-label="Resize sidebar"
            ></button>
        </aside>
    );
}